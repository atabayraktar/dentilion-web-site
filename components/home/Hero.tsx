import Image from "next/image";
import Quiz from "@/components/Quiz";
import { home } from "@/content/home";
import type { Locale } from "@/lib/i18n";

/* One path drives both the photo mask and the outline (0-100 box). */
const TOOTH =
  "M50 8C62 0 82 0 92 12C100 24 98 42 90 56C84 68 82 82 78 94C75 100 68 100 66 92L60 72C57 64 43 64 40 72L34 92C32 100 25 100 22 94C18 82 16 68 10 56C2 42 0 24 8 12C18 0 38 0 50 8Z";

const alt = {
  tr: "Beyaz dişleriyle gülümseyen bir kadının yakın çekimi",
  en: "Close-up of a woman smiling with white teeth",
  de: "Nahaufnahme einer lächelnden Frau mit weißen Zähnen",
};

export default function Hero({ locale }: { locale: Locale }) {
  const c = home[locale].hero;
  return (
    <section data-hero className="stage hero relative isolate overflow-hidden">
      <svg aria-hidden width="0" height="0" className="absolute">
        <clipPath id="hero-tooth" clipPathUnits="objectBoundingBox">
          <path d={TOOTH} transform="scale(0.01)" />
        </clipPath>
      </svg>
      <div className="wrap grid min-h-[100svh] items-center gap-10 pb-16 pt-28 lg:grid-cols-12 lg:gap-8 lg:pt-32">
        <div className="hero-copy lg:col-span-6">
          <h1 className="hero-title">
            {c.title.split(" ").map((w, i) => (
              <span key={i}><span className="hero-word" style={{ "--i": i } as React.CSSProperties}>{w}</span> </span>
            ))}
          </h1>
          <p className="mt-6 max-w-[44ch] text-stage-fg/85 md:text-lg">{c.text}</p>
        </div>
        <div className="hero-art relative mx-auto w-full max-w-[min(30rem,84vw)] lg:col-span-6 lg:col-start-7 lg:max-w-[min(100%,70svh)]">
          <div className="relative aspect-square">
            <div className="hero-layer hero-tooth absolute inset-[5%]">
              <Image src="/images/stock/smile-close.webp" alt={alt[locale]} fill priority sizes="(min-width: 1024px) 40vw, 84vw" className="object-cover object-[55%_50%]" />
            </div>
            <svg aria-hidden viewBox="0 0 100 100" fill="none" className="hero-lines absolute inset-[5%] h-[90%] w-[90%] overflow-visible">
              <mask id="hero-out" maskUnits="userSpaceOnUse" x="-10" y="-10" width="120" height="120">
                <rect x="-10" y="-10" width="120" height="120" fill="#fff" />
                <path d={TOOTH} fill="#000" stroke="#000" strokeWidth="3.2" />
              </mask>
              <path d={TOOTH} pathLength={1} className="hero-outline" mask="url(#hero-out)" />
            </svg>
          </div>
          <div className="hero-quiz">
            <Quiz locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
