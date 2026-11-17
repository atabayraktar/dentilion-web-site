import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { about } from "@/content/about";
import { faq } from "@/content/faq";
import { home } from "@/content/home";
import { isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import PageHead from "@/components/PageHead";
import { TeamPreview } from "@/components/home/AboutTeam";
import Reveal from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const photos = [
  { src: "/images/about/klinik-giris.webp", w: 470, h: 290, alt: { tr: "Dentilion kliniği giriş cephesi", en: "Dentilion clinic entrance", de: "Eingang der Dentilion-Klinik" } },
  { src: "/images/about/klinik-ic.webp", w: 463, h: 290, alt: { tr: "Klinik resepsiyon ve bekleme alanı", en: "Clinic reception and waiting area", de: "Empfang und Wartebereich der Klinik" } },
  { src: "/images/about/hasta-tedavi.webp", w: 612, h: 589, alt: { tr: "Tedavi koltuğunda gülümseyen hasta", en: "Smiling patient in the treatment chair", de: "Lächelnder Patient im Behandlungsstuhl" } },
];

export async function generateMetadata({ params }: PageProps<"/[locale]/hakkimizda">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/hakkimizda", about[locale].title, about[locale].text);
}

export default async function Page({ params }: PageProps<"/[locale]/hakkimizda">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const a = about[locale];
  const story = home[locale].about;
  const item = faq[faq.length - 1];
  return (
    <>
      <PageHead label={a.label} title={a.heading} image={{ src: "/images/stock/clinic-team.webp", alt: a.title }}>{a.text}</PageHead>
      <Section>
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <h2 className="text-[clamp(1.75rem,3.4vw,3rem)]">{story.title}</h2>
            <p className="mt-6 max-w-xl text-muted">{story.text}</p>
          </Reveal>
          <ul className="grid grid-cols-2 gap-4 md:col-span-7">
            {photos.map((p, i) => (
              <li key={p.src} className={i === 0 ? "col-span-2" : ""}>
                <Image src={p.src} alt={p.alt[locale]} width={p.w} height={p.h} sizes="(min-width:768px) 28vw, 50vw" className={`w-full rounded-3xl object-cover ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`} />
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <TeamPreview locale={locale} />
      <Section className="bg-surface">
        <p className="label text-muted">{a.faqTitle}</p>
        <h2 className="mt-4 max-w-3xl text-2xl md:text-4xl">{item.q[locale]}</h2>
        <p className="mt-4 max-w-2xl text-muted">{item.a[locale]}</p>
      </Section>
    </>
  );
}
