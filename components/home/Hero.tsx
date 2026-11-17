import Image from "next/image";
import { home } from "@/content/home";
import type { Locale } from "@/lib/i18n";

const TOOTH =
  "M50 8C62 0 82 0 92 12C100 24 98 42 90 56C84 68 82 82 78 94C75 100 68 100 66 92L60 72C57 64 43 64 40 72L34 92C32 100 25 100 22 94C18 82 16 68 10 56C2 42 0 24 8 12C18 0 38 0 50 8Z";

const alt = {
  tr: { implant: "Diş implantı ve kuron gösteren kesitli çene modeli", smile: "Beyaz dişleriyle gülümseyen bir kadının yakın çekimi", shade: "Diş beyazlatma için renk skalası tutulan gülüş" },
  en: { implant: "Cut-away jaw model showing a dental implant and crown", smile: "Close-up of a woman smiling with white teeth", shade: "Shade guide held against a smile for whitening" },
  de: { implant: "Schnittmodell eines Kiefers mit Zahnimplantat und Krone", smile: "Nahaufnahme einer lächelnden Frau mit weißen Zähnen", shade: "Farbskala für die Zahnaufhellung vor einem Lächeln" },
};

export default function Hero({ locale }: { locale: Locale }) {
  const c = home[locale].hero;
  const a = alt[locale];
  return (
    <section data-hero className="stage hero relative isolate overflow-hidden">
      <svg aria-hidden width="0" height="0" className="absolute">
        <clipPath id="hero-tooth" clipPathUnits="objectBoundingBox">
          <path d={TOOTH} transform="scale(0.01)" />
        </clipPath>
      </svg>
      <div className="wrap grid min-h-[100svh] items-center gap-10 pb-16 pt-28 lg:grid-cols-12 lg:gap-8 lg:pt-32">
        <div className="hero-copy lg:col-span-6 xl:col-span-5">
          <h1 className="hero-title">
            {c.title.split(" ").map((w, i) => (
              <span key={i}><span className="hero-word" style={{ "--i": i } as React.CSSProperties}>{w}</span> </span>
            ))}
          </h1>
          <p className="mt-6 max-w-[44ch] text-stage-fg/85 md:text-lg">{c.text}</p>
        </div>
        <div className="hero-art relative mx-auto aspect-square w-full max-w-[min(34rem,88vw)] lg:col-span-6 lg:col-start-7 lg:max-w-none xl:col-span-6 xl:col-start-7">
          <svg aria-hidden viewBox="-6 -6 112 112" fill="none" className="hero-lines absolute inset-0 h-full w-full overflow-visible">
            <path d={TOOTH} pathLength={1} className="hero-outline" transform="translate(5 -3)" />
            <path d="M-4 70C14 98 50 106 72 96s30-30 34-44" pathLength={1} className="hero-smile" />
          </svg>
          <div className="hero-layer hero-tooth absolute inset-[6%]">
            <Image src="/images/stock/implant-model.webp" alt={a.implant} fill priority sizes="(min-width: 1024px) 45vw, 88vw" className="object-cover object-[52%_45%] scale-[1.35]" />
          </div>
          <div className="hero-layer hero-chip-a absolute bottom-[2%] left-[-2%] w-[34%] overflow-hidden rounded-full border-4 border-stage">
            <Image src="/images/stock/smile-close.webp" alt={a.smile} width={400} height={400} sizes="(min-width: 1024px) 15vw, 30vw" className="aspect-square object-cover object-[55%_55%]" />
          </div>
          <div className="hero-layer hero-chip-b absolute right-[-1%] top-[4%] w-[24%] overflow-hidden rounded-[999px_999px_999px_0] border-4 border-stage">
            <Image src="/images/stock/whitening-shade.webp" alt={a.shade} width={300} height={300} sizes="(min-width: 1024px) 11vw, 22vw" className="aspect-square object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
