"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const norm = (p: string) => p.replace(/\/$/, "") || "/";
const GAP = 24; // space between the sticky header and the section title

/** Same-page #anchors (header, mobile menu, footer, CTAs): the section title lands just below the real header height,
 * repeat clicks work with the hash already set, and layout shifts after the scroll (lazy images, fonts) are corrected. */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const top = (id: string) => {
      const el = document.getElementById(decodeURIComponent(id));
      if (!el) return null;
      const header = document.querySelector("header");
      const offset = header ? header.getBoundingClientRect().bottom : 0;
      const title = el.querySelector("h1, h2") ?? el;
      return title.getBoundingClientRect().top + scrollY - offset - GAP;
    };
    const go = (id: string, smooth: boolean) => {
      const y = top(id);
      if (y === null) return false;
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      scrollTo({ top: y, behavior: smooth && !reduce ? "smooth" : "instant" });
      return true;
    };
    /* After the smooth scroll ends, re-measure until the target stays put (instant jumps never fight the smooth animation). */
    const settle = (id: string) => {
      const timers = [1500, 2600, 4000].map((ms) =>
        setTimeout(() => {
          const y = top(id);
          if (y !== null && Math.abs(y - scrollY) > 2) scrollTo({ top: y, behavior: "instant" });
        }, ms),
      );
      return () => timers.forEach(clearTimeout);
    };
    let stop = () => {};
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank" || !a.hash || a.origin !== location.origin || norm(a.pathname) !== norm(location.pathname)) return;
      const id = a.hash.slice(1);
      if (!go(id, true)) return;
      e.preventDefault();
      if (location.hash !== a.hash) history.pushState(null, "", a.hash);
      stop();
      stop = settle(id);
    };
    document.addEventListener("click", onClick, true);
    const initial = location.hash.slice(1);
    let t: ReturnType<typeof setTimeout> | undefined;
    if (initial) {
      t = setTimeout(() => {
        go(initial, false);
        stop = settle(initial);
      }, 300);
    }
    return () => {
      document.removeEventListener("click", onClick, true);
      clearTimeout(t);
      stop();
    };
  }, [pathname]);
  return null;
}
