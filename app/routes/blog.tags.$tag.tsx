import type { Route } from "./+types/blog.tags.$tag";
import { getAllTags } from "~/lib/posts";
import Blog from "~/pages/Blog";

export const meta: Route.MetaFunction = ({ params }) => {
  const tagSlug = params.tag ?? "";
  const tag = getAllTags().find((t) => t.slug === tagSlug);
  return [{ title: tag ? `Blog · ${tag.label}` : "Blog · Tag" }];
};

export default Blog;

