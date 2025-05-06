import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ganeshan's World!" },
    {
      name: "description",
      content: "Frontend developer and creative software engineer!",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
