"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clinicGalleryUi, clinicPhotos } from "@/content/clinic-gallery";
import type { Locale } from "@/lib/i18n";
import { ArrowIcon } from "@/components/icons";

const nav = "icon-btn icon-hover bg-bg text-text";

export default function ClinicGallery({ locale }: { locale: Locale }) {
  const u = clinicGalleryUi[locale];
  const track = useRef<HTMLUListElement>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  const [cur, setCur] = useState(0);
  const [shown, setShown] = useState(false);
  const n = clinicPhotos.length;

  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: "smooth" });
  const open = (i: number) => { setCur(i); dlg.current?.showModal(); requestAnimationFrame(() => setShown(true)); };
  const close = () => { setShown(false); setTimeout(() => { dlg.current?.close(); }, 300); };
  const step = (d: number) => setCur((c) => (c + d + n) % n);
  const photo = clinicPhotos[cur];
  useEffect(() => {
    if (!shown) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    return () => { root.style.overflow = prev; };
  }, [shown]);

  return (
    <div className="mt-16 md:mt-24">
      <div className="flex items-end justify-between gap-6">
        <h3 className="text-[clamp(1.5rem,2.8vw,2.5rem)]">{u.title}</h3>
        <div className="flex gap-2">
          <button type="button" onClick={() => scroll(-1)} aria-label={u.prev} className={nav}><ArrowIcon className="rotate-180" /></button>
          <button type="button" onClick={() => scroll(1)} aria-label={u.next} className={nav}><ArrowIcon /></button>
        </div>
      </div>
      <ul ref={track} className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {clinicPhotos.map((p, i) => (
          <li key={p.src} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">
            <button type="button" onClick={() => open(i)} aria-label={`${u.open}: ${p.alt[locale]}`} className="group relative block aspect-[4/3] w-full overflow-hidden rounded-ui">
              <Image src={p.src} alt={p.alt[locale]} fill quality={80} sizes="(min-width:1024px) 40vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
            </button>
          </li>
        ))}
      </ul>
      <dialog
        ref={dlg}
        aria-label={photo.alt[locale]}
        onCancel={(e) => { e.preventDefault(); close(); }}
        onClick={(e) => e.target === dlg.current && close()}
        onKeyDown={(e) => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); }}
        className={`fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden border-0 bg-transparent p-0 text-white backdrop:bg-black/80 backdrop:backdrop-blur-[6px] backdrop:transition-opacity backdrop:duration-300 ${shown ? "backdrop:opacity-100" : "backdrop:opacity-0"} transition-opacity duration-300 motion-reduce:transition-none ${shown ? "opacity-100" : "opacity-0"}`}
      >
        <div className="relative h-full w-full px-4 py-16 md:px-28" onClick={(e) => e.target === e.currentTarget && close()}>
          <div className="relative h-full w-full" onClick={(e) => e.target === e.currentTarget && close()}>
            <Image src={photo.src} alt={photo.alt[locale]} fill quality={85} sizes="100vw" className="rounded-ui object-contain" />
          </div>
          <button type="button" onClick={close} aria-label={u.close} className="icon-btn icon-hover absolute right-4 top-4 bg-black/40 text-white md:right-6 md:top-6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg></button>
          <button type="button" onClick={() => step(-1)} aria-label={u.prev} className="icon-btn icon-hover absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white md:left-6"><ArrowIcon className="rotate-180" /></button>
          <button type="button" onClick={() => step(1)} aria-label={u.next} className="icon-btn icon-hover absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white md:right-6"><ArrowIcon /></button>
        </div>
      </dialog>
    </div>
  );
}
