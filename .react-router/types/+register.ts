import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/blog": {};
  "/blog/:slug": {
    "slug": string;
  };
};