import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/blog": {};
  "/blog/tags/:tag": {
    "tag": string;
  };
  "/blog/:slug": {
    "slug": string;
  };
};