import { useEffect } from "react";
import { useLocation } from "react-router";

export function HashScroll() {
  let location = useLocation();

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!location.hash) return;

    let id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;

    let element = document.getElementById(id);
    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash, location.pathname]);

  return null;
}

