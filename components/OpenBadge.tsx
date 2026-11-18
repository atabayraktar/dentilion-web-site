"use client";

import { useEffect, useState } from "react";
import { isOpen } from "@/lib/hours";

/** Live open/closed pill. Renders after mount (clinic time zone), refreshed every minute, so server HTML never goes stale. */
export default function OpenBadge({ openLabel, closedLabel }: { openLabel: string; closedLabel: string }) {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const tick = () => setOpen(isOpen(new Date()));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      role="status"
      data-open={open ?? undefined}
      className="ml-auto inline-flex min-h-8 items-center gap-2 rounded-ui bg-text/8 px-3 text-sm font-semibold transition-opacity duration-300 data-[open=true]:text-[#0f7a4a] data-[open=false]:text-[#b3402a] dark:data-[open=true]:text-[#5be0a0] dark:data-[open=false]:text-[#ff9e7d] [&:not([data-open])]:opacity-0"
    >
      <span aria-hidden className="size-2 rounded-full bg-current" />
      {open === null ? " " : open ? openLabel : closedLabel}
    </span>
  );
}
