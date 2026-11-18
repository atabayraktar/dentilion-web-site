"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { getDict } from "@/content/ui";
import { type Locale } from "@/lib/i18n";
import { WhatsAppIcon } from "./icons";

const btn = "icon-btn pointer-events-auto shadow-[0_6px_18px_rgb(0_0_0/0.2)]";

/** Fixed WhatsApp (right) and back-to-top (left) buttons; both lift to rest above the footer. */
export default function StickyBar({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const box = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);

  useEffect(() => {
    const update = () => {
      const footer = document.getElementById("footer");
      const visible = footer ? innerHeight - footer.getBoundingClientRect().top : 0;
      const lift = visible > 0 ? visible : 0;
      box.current?.style.setProperty("--lift", `${lift}px`);
      setShown(scrollY > 600);
      setNearEnd(scrollY > innerHeight * 0.75 && document.documentElement.scrollHeight - scrollY - innerHeight <= innerHeight);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={box}
      className="sticky-bar pointer-events-none fixed inset-x-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex items-end justify-between md:inset-x-8 md:bottom-8"
      style={{ transform: "translateY(calc(var(--lift, 0px) * -1))" }}
    >
      <button
        type="button"
        aria-label={t.toTop}
        tabIndex={nearEnd ? 0 : -1}
        onClick={() => scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
        className={`${btn} icon-hover bg-bg text-text ${nearEnd ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
        aria-hidden={!nearEnd}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp}
        tabIndex={shown ? 0 : -1} className={`${btn} group relative border-transparent bg-[#25D366] hover:bg-[#1fb957] ${shown ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
        aria-hidden={!nearEnd}
      >
        <span aria-hidden className="absolute inset-0 rounded-ui motion-safe:animate-[wa-pulse_2.2s_ease-out_infinite]" />
        <WhatsAppIcon fill="#fff" className="relative" />
      </a>
    </div>
  );
}
