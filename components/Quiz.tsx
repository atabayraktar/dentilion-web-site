"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { quiz } from "@/content/quiz";
import { services } from "@/content/services";
import { localePath, type Locale } from "@/lib/i18n";

const pill = "inline-flex min-h-11 items-center rounded-full px-6 font-semibold";

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
          <Link href={localePath(locale, "/#iletisim")} onClick={close} className={`${pill} bg-aqua text-stage`}>{q.cta}</Link>
          <Link href={localePath(locale, `/${slug}`)} className={`${pill} border border-white/30`}>{q.open}</Link>
          <button type="button" onClick={() => setPicks([])} className="min-h-11 px-3 text-stage-muted hover:text-stage-fg" aria-label={q.title}>↺</button>
        </div>
      </div>
    );
  } else {
    const cur = q.questions[step];
    body = (
      <div>
        <div className="flex gap-2" role="img" aria-label={`${step + 1}/${q.questions.length}`}>
          {q.questions.map((_, i) => (
            <span key={i} aria-hidden className={`h-1 flex-1 rounded-full ${i <= step ? "bg-aqua" : "bg-white/20"}`} />
          ))}
        </div>
        <p className="font-display mt-5 text-2xl font-semibold md:text-3xl">{cur.q}</p>
        <ul className="mt-6 grid gap-3">
          {cur.options.map((o) => (
            <li key={o.label}>
              <button type="button" onClick={() => setPicks([...picks, o.service])} className="flex min-h-14 w-full items-center rounded-2xl border border-white/20 px-5 py-3 text-left transition hover:border-aqua hover:bg-white/5">
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
          <span className="label block text-aqua">{q.start}</span>
          <span className="font-display mt-1 block text-lg font-semibold leading-tight md:text-xl">{q.title}</span>
        </span>
        <span aria-hidden className="quiz-banner-go">→</span>
      </button>
      <dialog
        ref={dlg}
        aria-label={q.title}
        onCancel={(e) => { e.preventDefault(); close(); }}
        onClick={(e) => e.target === dlg.current && close()}
        className={`stage m-auto w-[min(92vw,40rem)] rounded-3xl p-0 backdrop:bg-black/60 backdrop:transition-opacity backdrop:duration-300 ${shown ? "backdrop:opacity-100" : "backdrop:opacity-0"} transition-[opacity,transform] duration-300 motion-reduce:transition-none ${shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"}`}
      >
        <div className="p-6 md:p-10">
          <button type="button" onClick={close} aria-label={q.close} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-xl leading-none transition hover:border-aqua">×</button>
          {body}
        </div>
      </dialog>
    </>
  );
}
