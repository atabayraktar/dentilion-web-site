import Image from "next/image";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import ArrowCircle from "@/components/ui/ArrowCircle";
import { home } from "@/content/home";
import { localePath, type Locale } from "@/lib/i18n";

const TILES = [
  {
    href: "/#hizmetlerimiz",
    src: "/images/stock/implant-model.webp",
    label: { tr: "Hizmetlerimiz", en: "Our services", de: "Leistungen" },
    alt: { tr: "Diş implantı modeli yakın çekim", en: "Close-up of a dental implant model", de: "Nahaufnahme eines Zahnimplantat-Modells" },
    sizes: "(min-width: 1024px) 40vw, 150vw",
  },
  {
    href: "/#blog",
    src: "/images/stock/toothbrushes.webp",
    label: { tr: "Blog", en: "Blog", de: "Blog" },
    alt: { tr: "Bardakta duran diş fırçaları", en: "Toothbrushes standing in a cup", de: "Zahnbürsten in einem Becher" },
    sizes: "(min-width: 1024px) 40vw, 150vw",
  },
  {
    href: "/#iletisim",
    src: "/images/stock/clinic-teal-chair.webp",
    label: { tr: "İletişim", en: "Contact", de: "Kontakt" },
    alt: { tr: "Modern diş kliniği tedavi odası", en: "Modern dental clinic treatment room", de: "Moderner Behandlungsraum einer Zahnklinik" },
    sizes: "(min-width: 1024px) 60vw, 150vw",
  },
] as const;

export default function Hero({ locale }: { locale: Locale }) {
  const c = home[locale].hero;
  return (
    <section data-hero className="hero relative isolate overflow-hidden">
      <div className="wrap grid min-h-[88svh] items-center gap-10 pb-16 pt-28 lg:grid-cols-12 lg:gap-12 lg:pt-32">
        <div className="hero-copy lg:col-span-6">
          <h1 className="hero-title"><span className="hero-title-grad">{c.title}</span></h1>
          <p className="mt-6 max-w-[44ch] text-muted md:text-lg">{c.text}</p>
          <div className="hero-quiz mt-8 max-w-xl">
            <Quiz locale={locale} />
          </div>
        </div>
        <ul className="hero-tiles lg:col-span-6">
          {TILES.map((t, i) => (
            <li key={t.href} className={i === 2 ? "col-span-2" : undefined} style={{ "--i": i } as React.CSSProperties}>
              <Link href={localePath(locale, t.href)} className="hero-tile group">
                <Image src={t.src} alt={t.alt[locale]} fill quality={85} priority={i === 0} sizes={t.sizes} className="object-cover" />
                <span className="hero-tile-cap">
                  {t.label[locale]}
                  <ArrowCircle />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
