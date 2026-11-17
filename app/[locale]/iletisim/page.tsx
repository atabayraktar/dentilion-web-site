import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contact } from "@/content/contact";
import { isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import PageHead from "@/components/PageHead";
import { ContactSection } from "@/components/home/Sections";

export async function generateMetadata({ params }: PageProps<"/[locale]/iletisim">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/iletisim", contact[locale].title, contact[locale].intro);
}

export default async function Page({ params }: PageProps<"/[locale]/iletisim">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = contact[locale];
  return (
    <>
      <PageHead label={c.title} title={c.title} image={{ src: "/images/about/klinik-giris.webp", alt: "Dentilion" }}>{c.intro}</PageHead>
      <ContactSection locale={locale} full />
    </>
  );
}
