"use client";

import { useId, useState } from "react";

const grad = "grad-brand";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  return (
    <div className="border-t border-line">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <div key={f.q} className="group/row relative border-b border-line">
            <span
              aria-hidden
              className={`absolute inset-y-0 left-0 w-[3px] origin-top rounded-ui ${grad} transition-transform duration-500 ease-out motion-reduce:transition-none ${on ? "scale-y-100" : "scale-y-0"}`}
            />
            <h3>
              <button
                type="button"
                aria-expanded={on}
                aria-controls={`${uid}-${i}`}
                id={`${uid}-h-${i}`}
                onClick={() => setOpen(on ? null : i)}
                className="relative flex min-h-16 w-full items-center justify-between gap-5 rounded-ui py-6 pl-4 pr-1 text-left outline-none transition-[padding] duration-300 focus-visible:ring-2 focus-visible:ring-[var(--ring)] sm:pl-6 sm:pr-3"
              >
                <span className={`font-display text-[clamp(1.125rem,1.6vw,1.5rem)] font-semibold leading-snug transition-colors duration-300 ${on ? "text-accent" : "text-text group-hover/row:text-accent"}`}>
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className={`relative grid size-11 shrink-0 place-items-center rounded-ui border transition-all duration-500 motion-reduce:transition-none ${on ? `border-transparent ${grad} rotate-180` : "border-line group-hover/row:border-aqua"}`}
                >
                  <span className={`absolute h-0.5 w-4 rounded-ui transition-colors duration-300 ${on ? "bg-[var(--on-accent)]" : "bg-text"}`} />
                  <span className={`absolute h-4 w-0.5 rounded-ui transition-all duration-500 ${on ? "scale-y-0 bg-[var(--on-accent)] opacity-0" : "bg-text"}`} />
                </span>
              </button>
            </h3>
            <div
              id={`${uid}-${i}`}
              role="region"
              aria-labelledby={`${uid}-h-${i}`}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 pl-4 pr-14 text-[1.0625rem] leading-relaxed text-muted sm:pl-6">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
