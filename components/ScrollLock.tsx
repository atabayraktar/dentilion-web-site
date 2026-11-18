"use client";
import { useEffect } from "react";

/* Locks page scroll while a native <dialog> is open WITHOUT hiding the scrollbar (no layout shift / blink). */
export default function ScrollLock() {
  useEffect(() => {
    const root = document.documentElement;
    const scrollsInside = (t: EventTarget | null) => {
      let el = t instanceof Element ? t : null;
      while (el && el !== root) {
        if (el.closest("dialog[open]") === null) return false;
        const s = getComputedStyle(el);
        if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight) return true;
        el = el.parentElement;
      }
      return false;
    };
    const block = (e: Event) => { if (!scrollsInside(e.target)) e.preventDefault(); };
    const keys = (e: KeyboardEvent) => {
      if ([" ", "PageUp", "PageDown", "Home", "End", "ArrowUp", "ArrowDown"].includes(e.key)) {
        const a = document.activeElement;
        if (a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement || a instanceof HTMLSelectElement || a instanceof HTMLButtonElement) return;
        if (!scrollsInside(a)) e.preventDefault();
      }
    };
    let on = false;
    const sync = () => {
      const open = !!document.querySelector("dialog[open]");
      if (open === on) return;
      on = open;
      const f = open ? window.addEventListener : window.removeEventListener;
      f.call(window, "wheel", block, { passive: false } as AddEventListenerOptions);
      f.call(window, "touchmove", block, { passive: false } as AddEventListenerOptions);
      f.call(window, "keydown", keys as EventListener);
    };
    const mo = new MutationObserver(sync);
    mo.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["open"], childList: true });
    return () => { mo.disconnect(); if (on) { on = true; window.removeEventListener("wheel", block); window.removeEventListener("touchmove", block); window.removeEventListener("keydown", keys as EventListener); } };
  }, []);
  return null;
}
