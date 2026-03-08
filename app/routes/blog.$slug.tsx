import type { Route } from "./+types/blog.$slug";
import { getPostBySlug } from "~/lib/posts";
import BlogPost from "~/pages/BlogPost";

export const meta: Route.MetaFunction = ({ params }) => {
  let slug = params.slug;
  if (!slug) return [{ title: "Post not found" }];

  let post = getPostBySlug(slug);
  if (!post) return [{ title: "Post not found" }];

  return post.meta.description
    ? [
        { title: post.meta.title },
        { name: "description", content: post.meta.description },
      ]
    : [{ title: post.meta.title }];
};

export default BlogPost;
