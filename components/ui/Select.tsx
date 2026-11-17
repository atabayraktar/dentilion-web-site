"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronIcon } from "@/components/icons";

type Props = { label: string; placeholder: string; options: string[]; value: string; onChange: (v: string) => void };

export default function Select({ label, placeholder, options, value, onChange }: Props) {
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const all = ["", ...options];

  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open]);

  const show = () => {
    setActive(Math.max(0, all.indexOf(value)));
    setOpen(true);
  };
  const pick = (i: number) => {
    onChange(all[i]);
    setOpen(false);
  };
  const onKey = (e: React.KeyboardEvent) => {
    const k = e.key;
    if (k === "Escape") return setOpen(false);
    if (!["ArrowDown", "ArrowUp", "Home", "End", "Enter", " "].includes(k)) return;
    e.preventDefault();
    if (!open) return k === "Enter" || k === " " || k.startsWith("Arrow") ? show() : undefined;
    if (k === "Enter" || k === " ") return pick(active);
    setActive(k === "Home" ? 0 : k === "End" ? all.length - 1 : Math.min(all.length - 1, Math.max(0, active + (k === "ArrowDown" ? 1 : -1))));
  };

  return (
    <div ref={root} className="relative">
      <span id={`${id}-l`} className="block">{label}</span>
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-p`}
        aria-labelledby={`${id}-l ${id}-b`}
        aria-activedescendant={open ? `${id}-o${active}` : undefined}
        id={`${id}-b`}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={onKey}
        className={`mt-2 flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left transition-colors duration-200 hover:border-aqua/70 ${open ? "border-aqua" : "border-white/25"} ${value ? "text-stage-fg" : "text-stage-muted"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronIcon className={`text-aqua transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        id={`${id}-p`}
        inert={!open}
        className={`absolute inset-x-0 top-full z-20 grid pt-2 transition-[grid-template-rows,opacity,transform] duration-300 ease-out motion-reduce:transition-none ${open ? "translate-y-0 grid-rows-[1fr] opacity-100" : "pointer-events-none -translate-y-1 grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0 overflow-hidden rounded-xl border border-white/20 bg-stage shadow-[0_18px_40px_-12px_rgb(0_0_0/0.6)]">
          <ul role="listbox" aria-labelledby={`${id}-l`} className="max-h-64 overflow-y-auto p-1.5">
            {all.map((o, i) => (
              <li
                key={o || "none"}
                id={`${id}-o${i}`}
                role="option"
                aria-selected={o === value}
                onPointerEnter={() => setActive(i)}
                onClick={() => pick(i)}
                className={`flex min-h-11 cursor-pointer items-center rounded-lg px-3 transition-colors ${i === active ? "bg-aqua/15" : ""} ${o === value ? "text-aqua" : i === 0 ? "text-stage-muted" : ""}`}
              >
                {o || placeholder}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
