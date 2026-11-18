"use client";

import { useSyncExternalStore } from "react";
import { SunMoonIcon } from "./icons";

const subscribe = (cb: () => void) => {
  const o = new MutationObserver(cb);
  o.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => o.disconnect();
};
const isDark = () => document.documentElement.dataset.theme === "dark";

export default function ThemeToggle({ label }: { label: string }) {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      aria-pressed={dark}
      aria-label={label}
      onClick={toggle}
      className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-ui border border-line ctl-btn"
    >
      <SunMoonIcon width={20} height={20} className="theme-icon" />
    </button>
  );
}
