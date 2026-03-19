import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { Readable } from "node:stream";

let port = Number.parseInt(process.env.PORT ?? "", 10) || 3000;
const host = process.env.HOST || "127.0.0.1";

const clientDir = join(process.cwd(), "build", "client");
const publicDir = join(process.cwd(), "public");

const serverBuildPath = join(process.cwd(), "build", "server", "server.js");
if (!existsSync(serverBuildPath)) {
  console.error("Missing `build/server/server.js`. Run `npm run build` first.");
  process.exit(1);
}

console.log(`[start] loading ${serverBuildPath}`);
const handler = (await import(serverBuildPath)).default;

const contentTypeByExt = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
};

function safePathFromUrlPath(urlPathname) {
  const pathname = decodeURIComponent(urlPathname.split("?")[0] ?? "/");
  const normalized = normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, "");
  return normalized.startsWith("/") ? normalized.slice(1) : normalized;
}

async function tryStatic(rootDir, urlPathname) {
  const rel = safePathFromUrlPath(urlPathname);
  if (!rel) return null;
  const filePath = join(rootDir, rel);
  try {
    const s = await stat(filePath);
    if (!s.isFile()) return null;
    const data = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    const type = contentTypeByExt[ext] ?? "application/octet-stream";
    return { status: 200, headers: { "content-type": type }, body: data };
  } catch {
    return null;
  }
}

const server = createServer(async (req, res) => {
  try {
    const baseHost = req.headers.host || `${host}:${port}`;
    const url = new URL(req.url ?? "/", `http://${baseHost}`);

    // Prefer static assets from build/client + public.
    const fromClient = await tryStatic(clientDir, url.pathname);
    if (fromClient) {
      res.statusCode = fromClient.status;
      for (const [k, v] of Object.entries(fromClient.headers)) res.setHeader(k, v);
      res.end(fromClient.body);
      return;
    }

    const fromPublic = await tryStatic(publicDir, url.pathname);
    if (fromPublic) {
      res.statusCode = fromPublic.status;
      for (const [k, v] of Object.entries(fromPublic.headers)) res.setHeader(k, v);
      res.end(fromPublic.body);
      return;
    }

    const requestInit = {
      method: req.method,
      headers: req.headers,
      body:
        req.method && !["GET", "HEAD"].includes(req.method.toUpperCase())
          ? Readable.toWeb(req)
          : undefined,
      duplex: "half",
    };

    const response = await handler(new Request(url, requestInit), { waitUntil() {} });

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    if (!response.body) {
      res.end();
      return;
    }

    Readable.fromWeb(response.body).pipe(res);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end(`Server error: ${String(error)}`);
    console.error(error);
  }
});

const maxPortAttempts = 10;
let attempts = 0;

server.on("error", (error) => {
  const code = error?.code;
  if (code === "EADDRINUSE" && attempts < maxPortAttempts) {
    attempts += 1;
    port += 1;
    console.error(`[start] port in use, retrying on ${host}:${port}`);
    server.listen(port, host);
    return;
  }

  if (code === "EPERM") {
    console.error(`[start] permission denied binding to ${host}:${port}`);
    console.error(`[start] try: PORT=4000 HOST=127.0.0.1 npm start`);
  } else {
    console.error(`[start] server error: ${String(error)}`);
  }
  process.exit(1);
});

console.log(`[start] listening on ${host}:${port}`);
server.listen(port, host, () => {
  console.log(`[start] http://${host}:${port}`);
});
