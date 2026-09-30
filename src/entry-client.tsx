import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

// GitHub Pages has no SPA fallback: unknown paths serve 404.html, which saves
// the intended URL and redirects here. Restore it before the router mounts.
const target = sessionStorage.getItem("gh-pages-redirect");
if (target) {
  sessionStorage.removeItem("gh-pages-redirect");
  history.replaceState(null, "", target);
}

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={getRouter()} />,
);
