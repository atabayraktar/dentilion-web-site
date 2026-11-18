"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { languageNames } from "@/content/ui";
import { localePath, locales, stripLocale, type Locale } from "@/lib/i18n";
import { ChevronIcon, FlagIcon } from "./icons";

type Props = { locale: Locale; label: string; variant?: "popover" | "segment"; onStage?: boolean };

export default function LanguageSwitcher({ locale, label, variant = "popover", onStage = false }: Props) {
  const path = stripLocale(usePathname());
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (open) items.current[locales.indexOf(locale)]?.focus();
  }, [open, locale]);

  if (variant === "segment") {
    return (
      <div role="group" aria-label={label} className="flex gap-2">
        {locales.map((l) => (
          <Link
            key={l}
            href={localePath(l, path)}
            lang={l}
            hrefLang={l}
            aria-current={l === locale ? "true" : undefined}
            aria-label={languageNames[l]}
            title={languageNames[l]}
            className={`label flex h-11 flex-1 items-center justify-center rounded-ui border ${
              l === locale
                ? onStage ? "border-aqua bg-aqua text-stage" : "border-accent bg-accent text-on-accent"
                : onStage ? "border-white/40 text-stage-fg" : "border-line text-muted"
            }`}
          >
            <FlagIcon l={l} width={24} height={24} />
          </Link>
        ))}
      </div>
    );
  }

  const move = (e: KeyboardEvent) => {
    const i = items.current.findIndex((el) => el === document.activeElement);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const n = (i + (e.key === "ArrowDown" ? 1 : -1) + locales.length) % locales.length;
      items.current[n]?.focus();
    } else if (e.key === "Escape") {
      setOpen(false);
      button.current?.focus();
    }
  };

  return (
    <div
      className="relative"
      onKeyDown={move}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${languageNames[locale]}`}
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 items-center gap-1.5 rounded-ui border border-line pl-2.5 pr-2 ctl-btn"
      >
        <FlagIcon l={locale} />
        <ChevronIcon width={12} height={12} className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <ul
        role="listbox"
        aria-label={label}
        data-open={open}
        className="invisible absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 -translate-y-2 scale-95 rounded-ui border border-line bg-bg p-1 text-text opacity-0 shadow-lg transition-[opacity,translate,scale,visibility] duration-200 data-[open=true]:visible data-[open=true]:translate-y-0 data-[open=true]:scale-100 data-[open=true]:opacity-100"
      >
        {locales.map((l, i) => (
          <li key={l} role="presentation">
            <Link
              ref={(el) => {
                items.current[i] = el;
              }}
              href={localePath(l, path)}
              lang={l}
              hrefLang={l}
              role="option"
              aria-selected={l === locale}
              aria-label={languageNames[l]}
              title={languageNames[l]}
              onClick={() => setOpen(false)}
              className={`grid h-10 w-10 place-items-center rounded-ui transition-colors hover:bg-surface ${l === locale ? "bg-surface" : ""}`}
            >
              <FlagIcon l={l} width={24} height={24} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
