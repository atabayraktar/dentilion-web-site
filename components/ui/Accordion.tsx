"use client";

import { useState } from "react";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="border-t border-line">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <div key={f.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                aria-expanded={on}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(on ? null : i)}
                className="font-display flex min-h-11 w-full items-center justify-between gap-4 py-5 text-left text-xl font-semibold"
              >
                {f.q}
                <span aria-hidden className={`text-aqua transition-transform duration-300 ${on ? "rotate-45" : ""}`}>+</span>
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-5 text-muted">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
