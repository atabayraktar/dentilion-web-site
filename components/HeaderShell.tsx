"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Detached floating layer. data-scrolled densifies the glass; data-stage switches it to dark frosted glass while a .stage section sits beneath. */
export default function HeaderShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const set = () => {
      const h = ref.current;
      if (!h) return;
      h.setAttribute("data-scrolled", String(scrollY > 8));
      const under = document.elementsFromPoint(innerWidth / 2, h.offsetHeight / 2).find((el) => !h.contains(el));
      h.setAttribute("data-stage", String(!!under?.closest(".stage")));
    };
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
