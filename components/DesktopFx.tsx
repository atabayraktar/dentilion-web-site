"use client";

import { useEffect } from "react";

const QUERY = "(hover: hover) and (pointer: fine) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)";

/** Desktop-only extras: cursor shine in the hero, magnetic CTA. Absent otherwise. */
export default function DesktopFx() {
  useEffect(() => {
    const mq = matchMedia(QUERY);
    let off: (() => void) | undefined;
    const start = () => {
      off?.();
      off = undefined;
      if (!mq.matches) return;
      const root = document.documentElement;
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      const mags = [...document.querySelectorAll<HTMLElement>("[data-magnetic]")];
      root.classList.add("fx");
      const move = (e: PointerEvent) => {
        if (hero) {
          const r = hero.getBoundingClientRect();
          hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
          hero.style.setProperty("--my", `${e.clientY - r.top}px`);
        }
        for (const m of mags) {
          const r = m.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          const near = Math.hypot(dx, dy) < 120;
          m.style.transform = near ? `translate(${dx * 0.25}px, ${dy * 0.25}px)` : "";
        }
      };
      addEventListener("pointermove", move, { passive: true });
      off = () => {
        root.classList.remove("fx");
        removeEventListener("pointermove", move);
        for (const m of mags) m.style.transform = "";
      };
    };
    start();
    mq.addEventListener("change", start);
    return () => {
      mq.removeEventListener("change", start);
      off?.();
    };
  }, []);

  return null;
}
