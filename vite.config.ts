import mdx from '@mdx-js/rollup';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import netlifyPlugin from '@netlify/vite-plugin-react-router';
import rehypeMermaid from 'rehype-mermaid';
import { mermaidThemeVariables } from './app/styles/theme';
import { palette } from './app/styles/palette';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

function generateThemeCss() {
    const kebab = (value: string) =>
        value
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/([a-zA-Z])([0-9]+)/g, '$1-$2')
            .toLowerCase();

    const lines: string[] = ['@theme {'];

    for (const [key, value] of Object.entries(palette)) {
        if (value == null) continue;

        if (key === 'fontSans') {
            lines.push(`  --font-sans: ${value};`);
            continue;
        }

        if (key.startsWith('zIndex')) {
            const suffix = key.slice('zIndex'.length); // e.g. "3", "Minus1"
            const z =
                suffix === 'Minus1'
                    ? '-1'
                    : suffix.replace(/^([0-9]+)$/, '$1'); // keep digits as-is
            lines.push(`  --z-index-${z}: ${value};`);
            continue;
        }

        if (key.startsWith('letterSpacing')) {
            const suffix = key.slice('letterSpacing'.length); // e.g. "08"
            lines.push(`  --letter-spacing-${suffix}: ${value};`);
            continue;
        }

        // Default: treat as a color token.
        lines.push(`  --color-${kebab(key)}: ${value};`);
    }

    lines.push('}');
    lines.push('');
    return lines.join('\n');
}

const paletteFilePath = join(process.cwd(), 'app', 'styles', 'palette.ts');
const generatedThemeCssPath = join(process.cwd(), 'app', 'styles', 'generated-theme.css');

async function writeGeneratedThemeCss() {
    await writeFile(generatedThemeCssPath, generateThemeCss(), 'utf8');
}

export default defineConfig({
    plugins: [
        {
            name: 'generate-theme-css',
            async buildStart() {
                await writeGeneratedThemeCss();
            },
            configureServer(server) {
                // `palette.ts` is only imported by Vite config, so Vite won't watch it by default.
                // Explicitly watch it so edits regenerate CSS vars during `npm run dev`.
                server.watcher.add(paletteFilePath);
                const regenerate = async () => {
                    try {
                        await writeGeneratedThemeCss();
                    } catch (error) {
                        console.error('[generate-theme-css] failed:', error);
                    }
                };
                server.watcher.on('change', (file) => {
                    if (file === paletteFilePath) void regenerate();
                });
            },
            async handleHotUpdate({ file }) {
                if (file === paletteFilePath) await writeGeneratedThemeCss();
            }
        },
        tailwindcss(),
        mdx({
            providerImportSource: "@mdx-js/react",
            rehypePlugins: [[rehypeMermaid, {
                strategy: "inline-svg",
                launchOptions: { headless: true, timeout: 15000, args: ["--no-sandbox"] },
                mermaidConfig: {
                    theme: "base",
                    themeVariables: mermaidThemeVariables,
                    // Use SVG labels so Mermaid's built-in wrapping works reliably.
                    htmlLabels: false,
                    flowchart: {
                        // Wrap node labels to avoid clipping with long text.
                        wrappingWidth: 160
                    }
                },
                errorFallback: (element: unknown, _diagram: string, error: unknown) => {
                    console.error("[rehype-mermaid] render failed:", error);
                    return element as any;
                }
            }]]
        }),
        reactRouter(),
        tsconfigPaths({ projects: ['./tsconfig.json'] }),
        netlifyPlugin()
    ],
    resolve: {
        dedupe: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'react/jsx-dev-runtime']
    }
});
