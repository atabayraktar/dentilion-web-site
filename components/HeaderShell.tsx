"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Detached floating layer; the bar inside gets a denser look once the page scrolls. */
export default function HeaderShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const set = () => ref.current?.setAttribute("data-scrolled", String(scrollY > 8));
    set();
    addEventListener("scroll", set, { passive: true });
    return () => removeEventListener("scroll", set);
  }, []);
  return (
    <header
      ref={ref}
      data-scrolled="false"
      className="group/h pointer-events-none fixed inset-x-0 top-0 z-40 px-[clamp(0.5rem,2vw,3rem)] pt-[clamp(0.5rem,1vw,1rem)] text-text"
    >
      {children}
    </header>
  );
}
