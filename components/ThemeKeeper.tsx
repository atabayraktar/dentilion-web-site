"use client";
import { useLayoutEffect } from "react";

/* A locale change remounts <html>, dropping data-theme; re-apply the stored theme before paint. */
export default function ThemeKeeper() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (root.dataset.theme) return;
    let t: string | null = null;
    try { t = localStorage.getItem("theme"); } catch {}
    root.dataset.theme = t === "light" || t === "dark" ? t : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, []);
  return null;
}
