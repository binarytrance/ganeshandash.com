import { Link } from "react-router";
import { tagToSlug } from "~/lib/posts";

export function BlogTags({
  tags,
  className,
}: {
  tags?: string[];
  className?: string;
}) {
  const normalized = (tags ?? [])
    .map((tag) => tag.trim())
    .filter(Boolean)
    .filter((tag) => tagToSlug(tag) !== "draft");

  if (!normalized.length) return null;

  return (
    <div className={className ?? "mt-3 flex flex-wrap gap-2"}>
      {normalized.map((tag) => {
        const slug = tagToSlug(tag);
        if (!slug) return null;
        return (
          <Link
            key={slug}
            to={`/blog/tags/${slug}`}
            className="rounded-full border border-border-subtle px-2 py-0.5 text-xs text-off-white hover:border-gold"
          >
            {tag}
          </Link>
        );
      })}
    </div>
  );
}

