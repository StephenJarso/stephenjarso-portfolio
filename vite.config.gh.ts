import { defineConfig } from "vite";
import { readFileSync, writeFileSync } from "node:fs";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Client-only SPA build for GitHub Pages. Pages serves static files only, so
// this config skips the SSR/nitro server build entirely and emits dist/ with
// an index.html shell plus hashed client assets.
export default defineConfig({
  root: "src",
  base: "/stephenjarso-portfolio/",
  publicDir: "../public",
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    react(),
    ghPages404Fallback(),
  ],
  build: { outDir: "../dist", emptyOutDir: true },
});

// GitHub Pages serves 404.html for unknown paths, so clone index.html with a
// redirect script that hands the deep link back to the SPA (see entry-client).
function ghPages404Fallback() {
  return {
    name: "gh-pages-404-fallback",
    apply: "build" as const,
    closeBundle() {
      const html = readFileSync("dist/index.html", "utf8");
      const script = `<script>(function(){try{sessionStorage.setItem("gh-pages-redirect",location.pathname+location.search+location.hash);location.replace("/stephenjarso-portfolio/");}catch(e){}})();</script>`;
      writeFileSync("dist/404.html", html.replace("<head>", `<head>${script}`));
    },
  };
}
