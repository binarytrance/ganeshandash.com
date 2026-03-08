import { posts } from "~/lib/posts";
import { BlogCard } from "~/components/blog/BlogCard";

export default function Blog() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 pt-24 pb-16">
      <h1 className="text-3xl font-serif">Blog</h1>
      <p className="mt-2 text-sm">Thoughts, notes, and write-ups.</p>

      <ul className="mt-10 space-y-6">
        {posts.map(({ slug, meta }) => (
          <BlogCard key={slug} slug={slug} meta={meta} />
        ))}
      </ul>
    </main>
  );
}
