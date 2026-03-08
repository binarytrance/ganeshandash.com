import type { ComponentType } from "react";

export type PostMeta = {
  title: string;
  date: string;
  description?: string;
};

export type Post = {
  slug: string;
  meta: PostMeta;
  Component: ComponentType;
};

type MdxModule = {
  meta: PostMeta;
  default: ComponentType;
};

function slugFromPath(path: string) {
  let match = path.match(/\/([^/]+)\.mdx$/);
  if (!match) throw new Error(`Unable to derive slug from path: ${path}`);
  return match[1];
}

let modules = import.meta.glob<MdxModule>("../content/blog/*.mdx", {
  eager: true,
});

export const posts: Post[] = Object.entries(modules)
  .map(([path, module]) => ({
    slug: slugFromPath(path),
    meta: module.meta,
    Component: module.default,
  }))
  .sort((a, b) => b.meta.date.localeCompare(a.meta.date));

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
