import { useParams } from "react-router";
import { getPostBySlug } from "~/lib/posts";
import { BlogTags } from "~/components/blog/BlogTags";

export default function BlogPost() {
  let { slug } = useParams();
  let post = slug ? getPostBySlug(slug) : undefined;

  if (!slug || !post) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 pt-24 pb-16">
        <h1 className="text-2xl font-serif">Post not found</h1>
        <p className="mt-2 text-sm">
          No blog post exists for “{slug ?? ""}”.
        </p>
      </main>
    );
  }

  let { Component, meta } = post;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 pt-24 pb-16">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <header className="mb-10">
          <h1 className="font-serif">{meta.title}</h1>
          <div className="mt-2 text-sm text-off-white">{meta.date}</div>
          <BlogTags tags={meta.tags} className="mt-4 flex flex-wrap gap-2" />
          {meta.description ? (
            <p className="mt-4 text-base">{meta.description}</p>
          ) : null}
        </header>
        <Component />
      </article>
    </main>
  );
}
