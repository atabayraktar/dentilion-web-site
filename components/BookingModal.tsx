"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import ContactForm from "./ContactForm";

/** Every a[data-book] ("Randevu Al") opens the contact form in a native <dialog> (focus trap, Esc, scroll lock);
 * without JS the link still goes to the contact section. */
export default function BookingModal({ locale, title, close: closeLabel }: { locale: Locale; title: string; close: string }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const [shown, setShown] = useState(false);
  const [key, setKey] = useState(0);

  const close = () => {
    setShown(false);
    setTimeout(() => dlg.current?.close(), 300);
  };
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      if (!(e.target as Element).closest?.("a[data-book]")) return;
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll<HTMLDialogElement>("dialog[open]").forEach((d) => d.close());
      setKey((k) => k + 1);
      dlg.current?.showModal();
      requestAnimationFrame(() => setShown(true));
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <dialog
      ref={dlg}
      aria-label={title}
      onCancel={(e) => { e.preventDefault(); close(); }}
      onClick={(e) => e.target === dlg.current && close()}
      onClose={() => setShown(false)}
      className={`m-auto max-h-[92dvh] w-[min(92vw,40rem)] overflow-y-auto overscroll-contain rounded-ui bg-surface p-0 max-md:h-dvh max-md:max-h-none max-md:w-full max-md:max-w-none max-md:rounded-none text-text backdrop:bg-black/50 backdrop:backdrop-blur-[6px] backdrop:transition-opacity backdrop:duration-300 ${shown ? "backdrop:opacity-100" : "backdrop:opacity-0"} transition-[opacity,transform] duration-300 motion-reduce:transition-none ${shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"}`}
    >
      <div className="p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] md:p-10">
        <div className="flex items-center justify-end gap-4 md:justify-between">
          <p className="font-display hidden text-2xl font-semibold md:block">{title}</p>
          <button type="button" onClick={close} aria-label={closeLabel} className="grid h-11 w-11 shrink-0 place-items-center rounded-ui border border-text/20 text-xl leading-none transition hover:border-accent hover:text-accent">×</button>
        </div>
        <div className="mt-3 md:mt-6"><ContactForm key={key} locale={locale} /></div>
      </div>
    </dialog>
  );
}
