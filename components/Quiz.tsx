"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { quiz } from "@/content/quiz";
import { services } from "@/content/services";
import { localePath, servicePath, type Locale } from "@/lib/i18n";
import ArrowCircle from "@/components/ui/ArrowCircle";

/** Compact hero banner + modal built on native <dialog> (focus trap, Esc) with animated open/close. */
export default function Quiz({ locale }: { locale: Locale }) {
  const q = quiz[locale];
  const dlg = useRef<HTMLDialogElement>(null);
  const [shown, setShown] = useState(false);
  const [picks, setPicks] = useState<string[]>([]);
  const step = picks.length;

  const open = () => {
    setPicks([]);
    dlg.current?.showModal();
    requestAnimationFrame(() => setShown(true));
  };
  const close = () => {
    setShown(false);
    setTimeout(() => dlg.current?.close(), 300);
  };
  /* Navigating away must drop the modal at once: an open dialog leaves the rest of the app inert,
     and Next can keep the previous route mounted but hidden. */
  const leave = () => {
    setShown(false);
    dlg.current?.close();
  };
  useEffect(() => {
    const d = dlg.current;
    return () => d?.close();
  }, []);

  let body;
  if (step >= q.questions.length) {
    const count = new Map<string, number>();
    picks.forEach((p) => count.set(p, (count.get(p) ?? 0) + 1));
    const slug = [...count.entries()].sort((a, b) => b[1] - a[1] || picks.indexOf(a[0]) - picks.indexOf(b[0]))[0][0];
    const s = services.find((x) => x.slug === slug);
    body = (
      <div role="status">
        <p className="label text-aqua">{q.fit}</p>
        <p className="font-display mt-3 text-3xl font-semibold md:text-4xl">{s?.title[locale]}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href={localePath(locale, "/#iletisim")} onClick={leave} className="btn bg-aqua text-stage">{q.cta}</Link>
          <Link href={localePath(locale, servicePath(slug))} onClick={leave} className="btn btn-ghost">{q.open}</Link>
          <button type="button" onClick={() => setPicks([])} className="min-h-11 px-3 text-stage-muted hover:text-stage-fg" aria-label={q.title}>↺</button>
        </div>
      </div>
    );
  } else {
    const cur = q.questions[step];
    body = (
      <div>
        <ul className="mt-6 grid gap-3">
          {cur.options.map((o) => (
            <li key={o.label}>
              <button type="button" onClick={() => setPicks([...picks, o.service])} className="flex min-h-14 w-full items-center rounded-ui border border-white/20 px-5 py-3 text-left transition hover:border-aqua hover:bg-white/5">
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <button type="button" onClick={open} className="quiz-banner group">
        <span className="min-w-0 text-left">
          <span className="font-display block text-lg font-semibold leading-tight md:text-xl">{q.title} <span className="text-accent">{q.start}</span></span>
        </span>
        <ArrowCircle />
      </button>
      <dialog
        ref={dlg}
        aria-label={q.title}
        onCancel={(e) => { e.preventDefault(); close(); }}
        onClick={(e) => e.target === dlg.current && close()}
        className={`stage m-auto w-[min(92vw,40rem)] rounded-ui p-0 backdrop:bg-black/60 backdrop:backdrop-blur-[6px] backdrop:transition-opacity backdrop:duration-300 ${shown ? "backdrop:opacity-100" : "backdrop:opacity-0"} transition-[opacity,transform] duration-300 motion-reduce:transition-none ${shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"}`}
      >
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <p className="font-display min-w-0 pt-1.5 text-xl font-semibold leading-snug md:text-2xl">{q.questions[step]?.q ?? q.title}</p>
            <button type="button" onClick={close} aria-label={q.close} className="grid h-11 w-11 shrink-0 place-items-center rounded-ui border border-white/20 text-xl leading-none transition hover:border-aqua">×</button>
          </div>
          <div className="mt-4 flex gap-2" role="img" aria-label={`${Math.min(step + 1, q.questions.length)}/${q.questions.length}`}>
            {q.questions.map((_, i) => (
              <span key={i} aria-hidden className={`h-1 flex-1 rounded-ui ${i <= step ? "bg-aqua" : "bg-white/20"}`} />
            ))}
          </div>
          <div className="mt-6">{body}</div>
        </div>
      </dialog>
    </>
  );
}
