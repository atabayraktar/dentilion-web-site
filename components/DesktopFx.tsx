"use client";

import { useEffect, useRef } from "react";

const QUERY = "(hover: hover) and (pointer: fine) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)";

/** Desktop-only extras: cursor shine in the hero, magnetic CTA, scroll-linked smile curve. Absent otherwise. */
export default function DesktopFx() {
  const curve = useRef<SVGSVGElement>(null);

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
      const path = curve.current?.querySelector("path");
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
      let raf = 0;
      const scroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const p = scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight);
          path?.style.setProperty("stroke-dashoffset", String(1 - Math.min(1, p)));
        });
      };
      addEventListener("pointermove", move, { passive: true });
      addEventListener("scroll", scroll, { passive: true });
      scroll();
      off = () => {
        root.classList.remove("fx");
        removeEventListener("pointermove", move);
        removeEventListener("scroll", scroll);
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

  return (
    <svg
      ref={curve}
      aria-hidden
      viewBox="0 0 60 1000"
      preserveAspectRatio="none"
      className="pointer-events-none fixed right-8 top-0 z-30 hidden h-screen w-10 fx:block"
      fill="none"
    >
      <path
        d="M30 0 C60 150 0 250 30 400 C60 550 0 650 30 800 C45 880 30 940 30 1000"
        pathLength={1}
        stroke="var(--aqua)"
        strokeWidth="2"
        strokeDasharray="1"
        strokeDashoffset="1"
        vectorEffect="non-scaling-stroke"
        opacity="0.8"
      />
    </svg>
  );
}
