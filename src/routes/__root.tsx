import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteFooter, SiteHeader } from "@/components/portfolio/SiteChrome";

function NotFoundComponent() { return <main className="page-shell"><div className="page-intro"><p className="eyebrow">404 / Not found</p><h1>This route leads nowhere.</h1><p className="page-lede">The system could not resolve that page.</p><Link to="/" className="button-primary">Return home</Link></div></main>; }
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) { const router = useRouter(); useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]); return <main className="page-shell"><div className="page-intro"><p className="eyebrow">System error</p><h1>This page didn’t load.</h1><button className="button-primary" onClick={() => { router.invalidate(); reset(); }}>Try again</button></div></main>; }

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "author", content: "Stephen Jarso" }, { property: "og:type", content: "website" }, { property: "og:site_name", content: "Stephen Jarso" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "stylesheet", href: appCss }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600;700&display=swap" }, { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
  }), shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><SiteHeader /><Outlet /><SiteFooter /></QueryClientProvider>; }
