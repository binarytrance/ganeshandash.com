declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const meta: {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
    [key: string]: unknown;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
