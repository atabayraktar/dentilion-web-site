"use client";

import { useRef, type ReactNode } from "react";
import { useAutoplay } from "./useAutoplay";

/** Below md: one slide per view, scroll-snap swipe, autoplay, dots. From md: plain list styled by `className`. */
export default function Swiper({
  items,
  className = "",
  autoplayMs = 5000,
  label,
}: {
  items: ReactNode[];
  className?: string;
  autoplayMs?: number;
  label: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const { index, go } = useAutoplay(ref, items.length, autoplayMs);
  return (
    <div>
      <ul ref={ref} className={`swiper gap-4 ${className}`} aria-label={label}>
        {items.map((it, i) => (
          <li key={i} aria-roledescription="slide" aria-label={`${i + 1} / ${items.length}`}>
            {it}
          </li>
        ))}
      </ul>
      {items.length > 1 && (
        <div className="swiper-dots mt-4 flex justify-center md:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${i + 1} / ${items.length}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className="swiper-dot"
            />
          ))}
        </div>
      )}
    </div>
  );
}
