"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const norm = (p: string) => p.replace(/\/$/, "") || "/";
const GAP = 24;
let logoNav = false; // header logo clicked from another page: land at the very top of the new page
const CONTENT = "h1, h2, h3, p, li, form, img, details, summary";

/** Same-page #anchors: the highest visible content of the section lands GAP below the header. Any user input (wheel, touch,
 * key, pointer) cancels our pending corrections for good, and once the user scrolls the target away the hash is dropped
 * (replaceState, no history entry), so nothing can pull the page back. Repeat clicks still scroll. */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (logoNav) {
      logoNav = false;
      const top0 = () => scrollTo({ top: 0, behavior: "instant" });
      top0();
      requestAnimationFrame(top0);
      setTimeout(top0, 150);
    }
    const target = (id: string) => document.getElementById(decodeURIComponent(id));
    const headerBottom = () => document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
    const top = (el: HTMLElement) => {
      const tops = [...el.querySelectorAll(CONTENT)]
        .map((e) => e.getBoundingClientRect())
        .filter((r) => r.width > 0 && r.height > 0)
        .map((r) => r.top);
      return (tops.length ? Math.min(...tops) : el.getBoundingClientRect().top) + scrollY - headerBottom() - GAP;
    };

    let id = "";
    let auto = false; // our own scroll is in flight
    let timer: ReturnType<typeof setTimeout> | undefined;
    const cancel = () => {
      auto = false;
      clearTimeout(timer);
    };
    const go = (smooth: boolean) => {
      const el = target(id);
      if (!el) return false;
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      auto = true;
      scrollTo({ top: top(el), behavior: smooth && !reduce ? "smooth" : "instant" });
      clearTimeout(timer);
      // One correction for late layout shifts (images, fonts), then we are done for good.
      timer = setTimeout(() => {
        const t = target(id);
        if (auto && t && Math.abs(top(t) - scrollY) > 2) scrollTo({ top: top(t), behavior: "instant" });
        timer = setTimeout(() => (auto = false), 200);
      }, smooth ? 1200 : 600);
      return true;
    };
    const dropHash = () => {
      if (auto || !location.hash) return;
      const el = target(location.hash.slice(1));
      const hb = headerBottom();
      const r = el?.getBoundingClientRect();
      if (!r || r.bottom < hb || r.top > hb + GAP * 3) history.replaceState(history.state, "", location.pathname + location.search);
    };
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.("a[href]") as HTMLAnchorElement | null;
      const isLogo = !!a && !a.hash && !!a.closest("header") && !!a.querySelector(".hdr-logo") && a.origin === location.origin;
      if (isLogo && norm(a!.pathname) !== norm(location.pathname)) logoNav = true;
      if (isLogo && norm(a!.pathname) === norm(location.pathname)) {
        // Logo on the page it points to: scroll to top and drop any hash instead of doing nothing.
        e.preventDefault();
        cancel();
        if (location.hash) history.replaceState(history.state, "", location.pathname + location.search);
        scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        return;
      }
      if (!a || a.hasAttribute("data-book") || a.target === "_blank" || !a.hash || a.origin !== location.origin || norm(a.pathname) !== norm(location.pathname)) return;
      id = a.hash.slice(1);
      if (!go(true)) return;
      e.preventDefault();
      if (location.hash !== a.hash) history.pushState(history.state, "", a.hash);
    };
    const input = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
    document.addEventListener("click", onClick, true);
    input.forEach((t) => addEventListener(t, cancel, { passive: true, capture: true }));
    addEventListener("scroll", dropHash, { passive: true });
    if (location.hash) {
      id = location.hash.slice(1);
      timer = setTimeout(() => go(false), 300);
    }
    return () => {
      document.removeEventListener("click", onClick, true);
      input.forEach((t) => removeEventListener(t, cancel, { capture: true }));
      removeEventListener("scroll", dropHash);
      clearTimeout(timer);
    };
  }, [pathname]);
  return null;
}
