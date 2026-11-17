"use client";

import { useRef, useEffect, type ReactNode } from "react";

/** One-shot scroll reveal (24px, 700ms). Stagger with `delay`. Reduced motion handled in CSS. */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Visible by default (SSR, no JS, screenshots); only hidden when below the fold and motion is allowed.
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || el.getBoundingClientRect().top < innerHeight) return;
    el.dataset.in = "false";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.in = "true";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-in="true"
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}
