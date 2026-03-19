import type { ComponentType } from "react";

export type PostMeta = {
  title: string;
  date: string;
  updated?: string;
  description?: string;
  tags?: string[];
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

function normalizeTag(tag: string) {
  return tag.trim().toLowerCase();
}

export function tagToSlug(tag: string) {
  return normalizeTag(tag)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function isDraftPost(meta: PostMeta) {
  return (meta.tags ?? []).some((tag) => normalizeTag(tag) === "draft");
}

export const publishedPosts: Post[] = posts.filter((post) => !isDraftPost(post.meta));

export type TagInfo = { slug: string; label: string };

export function getAllTags(): TagInfo[] {
  const map = new Map<string, string>();
  for (const post of publishedPosts) {
    for (const tag of post.meta.tags ?? []) {
      if (normalizeTag(tag) === "draft") continue;
      const slug = tagToSlug(tag);
      if (!slug) continue;
      if (!map.has(slug)) map.set(slug, tag.trim());
    }
  }

  return Array.from(map, ([slug, label]) => ({ slug, label })).sort((a, b) =>
    a.slug.localeCompare(b.slug)
  );
}

export function getPublishedPostsByTag(tagSlug: string) {
  const normalizedSlug = tagToSlug(tagSlug);
  if (!normalizedSlug) return [];

  return publishedPosts.filter((post) =>
    (post.meta.tags ?? [])
      .filter((tag) => normalizeTag(tag) !== "draft")
      .some((tag) => tagToSlug(tag) === normalizedSlug)
  );
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
