import { NextResponse, type NextRequest } from "next/server";
import { posts } from "@/content/blog";
import { detailServices } from "@/content/services";

const known = new Set([
  "/",
  "/hizmetler",
  "/blog",
  ...detailServices.map((s) => `/${s.slug}`),
  ...posts.map((p) => `/${p.slug}`),
]);

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (/\.[a-z0-9]+$/i.test(pathname)) return NextResponse.next();
  const url = req.nextUrl.clone();
  if (pathname === "/tr" || pathname.startsWith("/tr/")) {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }
  const first = pathname.split("/")[1];
  const prefixed = first === "en" || first === "de";
  const rest = (prefixed ? pathname.slice(3) : pathname).replace(/\/$/, "") || "/";
  // Unknown paths are rewritten to an invalid locale so the layout returns a real 404 status.
  if (!known.has(rest) && !rest.startsWith("/opengraph-image")) {
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }
  if (prefixed) return NextResponse.next();
  url.pathname = `/tr${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = { matcher: ["/", "/((?!_next|api).*)"] };
