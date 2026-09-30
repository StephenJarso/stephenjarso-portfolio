import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // import.meta.env.BASE_URL is "/" normally and "/stephenjarso-portfolio/"
    // in the GitHub Pages build (see vite.config.gh.ts).
    basepath: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
