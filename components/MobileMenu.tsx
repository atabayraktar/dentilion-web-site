"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { localePath, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  items: { href: string; label: string }[];
  t: { menu: string; closeMenu: string; mainNav: string; language: string; themeSwitch: string };
};

export default function MobileMenu({ locale, items, t }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? t.closeMenu : t.menu}
        onClick={() => setOpen((o) => !o)}
        className="grid h-11 w-11 place-items-center rounded-ui border border-line"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden>
          <path d="M4 8h16" style={{ transformOrigin: "12px 12px", transform: open ? "translateY(4px) rotate(45deg)" : "none", transition: "transform 300ms" }} />
          <path d="M4 16h16" style={{ transformOrigin: "12px 12px", transform: open ? "translateY(-4px) rotate(-45deg)" : "none", transition: "transform 300ms" }} />
        </svg>
      </button>
      <div
        data-open={open}
        inert={!open}
        className="absolute inset-x-0 top-full mt-2 grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-400 ease-out data-[open=true]:grid-rows-[1fr] data-[open=true]:opacity-100"
      >
        <nav
          id="mobile-menu"
          aria-label={t.mainNav}
          className="overflow-hidden rounded-ui border border-line bg-bg text-text shadow-xl"
        >
          <div className="px-5 pb-6 pt-3">
            <ul>
              {items.map((i) => (
                <li key={i.href} className="border-b border-line last:border-0">
                  <Link
                    href={localePath(locale, i.href)}
                    onClick={() => setOpen(false)}
                    className="font-display flex min-h-14 items-center text-2xl font-semibold"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-4">
              <div className="flex-1">
                <LanguageSwitcher locale={locale} label={t.language} variant="segment" />
              </div>
              <ThemeToggle label={t.themeSwitch} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
