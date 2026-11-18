"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

/** Tracks the active snap slide of a scroll-snap list and advances it every `ms` (0 = off). */
export function useAutoplay(ref: RefObject<HTMLElement | null>, count: number, ms: number) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const idx = useRef(0);

  const go = useCallback(
    (i: number, instant = false) => {
      const el = ref.current;
      const slide = el?.children[i] as HTMLElement | undefined;
      if (!el || !slide) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollTo({ left: slide.offsetLeft - el.offsetLeft, behavior: instant || reduce ? "auto" : "smooth" });
    },
    [ref],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      let best = 0;
      let dist = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const d = Math.abs((c as HTMLElement).offsetLeft - el.offsetLeft - el.scrollLeft);
        if (d < dist) { dist = d; best = i; }
      });
      idx.current = best;
      setIndex(best);
    };
    const pause = () => { paused.current = true; };
    const resume = () => { paused.current = false; };
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    el.addEventListener("touchcancel", resume, { passive: true });
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", resume);
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      el.removeEventListener("touchcancel", resume);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", resume);
    };
  }, [ref]);

  useEffect(() => {
    if (!ms || count < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const t = setInterval(() => {
      const el = ref.current;
      if (reduce.matches || paused.current || document.hidden || !el || el.scrollWidth <= el.clientWidth + 1) return;
      go((idx.current + 1) % count);
    }, ms);
    return () => clearInterval(t);
  }, [ms, count, go, ref]);

  return { index, go };
}
