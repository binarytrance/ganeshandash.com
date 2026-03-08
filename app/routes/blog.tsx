import type { Route } from "./+types/blog";
import Blog from "~/pages/Blog";

export const meta: Route.MetaFunction = () => [{ title: "Blog" }];

export default Blog;
