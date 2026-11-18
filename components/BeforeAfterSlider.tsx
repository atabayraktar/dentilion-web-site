"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

type Props = { before: string; after: string; alt: string; labels: { before: string; after: string; slider: string } };

export default function BeforeAfterSlider({ before, after, alt, labels }: Props) {
  const [v, setV] = useState(50);
  const key = (e: KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    setV((x) => Math.min(100, Math.max(0, x + (e.key === "ArrowRight" ? 5 : -5))));
  };
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] select-none overflow-hidden rounded-ui bg-surface [clip-path:inset(0_round_var(--r))] has-[input:focus-visible]:outline has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-aqua">
      <Image src={before} alt={`${alt} (${labels.before})`} fill sizes="(min-width:768px) 33vw, 100vw" unoptimized className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}>
        <Image src={after} alt={`${alt} (${labels.after})`} fill sizes="(min-width:768px) 33vw, 100vw" unoptimized className="object-cover" />
      </div>
      <span className="label absolute bottom-3 left-3 text-stage-fg">{labels.after}</span>
      <span className="label absolute bottom-3 right-3 text-stage-fg">{labels.before}</span>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-aqua" style={{ left: `${v}%` }}>
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-aqua bg-stage text-aqua">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></svg>
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={v}
        onChange={(e) => setV(Number(e.target.value))}
        onKeyDown={key}
        aria-label={labels.slider}
        aria-valuenow={v}
        aria-valuetext={`${v}%`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
