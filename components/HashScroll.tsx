"use client";

import { useEffect } from "react";

const norm = (p: string) => p.replace(/\/$/, "") || "/";

/** Same-page #anchors (header, mobile menu, footer, CTAs): scroll below the real header height and work on repeat clicks with the hash already set. */
export default function HashScroll() {
  useEffect(() => {
    const go = (id: string, smooth: boolean) => {
      const el = document.getElementById(decodeURIComponent(id));
      if (!el) return false;
      const header = document.querySelector("header");
      const offset = header ? header.getBoundingClientRect().bottom : 0;
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      scrollTo({ top: el.getBoundingClientRect().top + scrollY - offset, behavior: smooth && !reduce ? "smooth" : "auto" });
      return true;
    };
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank" || !a.hash || a.origin !== location.origin || norm(a.pathname) !== norm(location.pathname)) return;
      if (!go(a.hash.slice(1), true)) return;
      e.preventDefault();
      if (location.hash !== a.hash) history.pushState(null, "", a.hash);
      setTimeout(() => go(a.hash.slice(1), false), 900); // re-correct after lazy images/iframes shift the layout
    };
    document.addEventListener("click", onClick, true);
    const initial = location.hash.slice(1);
    const t = initial ? setTimeout(() => go(initial, false), 400) : undefined;
    return () => {
      document.removeEventListener("click", onClick, true);
      clearTimeout(t);
    };
  }, []);
  return null;
}
