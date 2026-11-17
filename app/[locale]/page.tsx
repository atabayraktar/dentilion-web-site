import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { faq } from "@/content/faq";
import { home } from "@/content/home";
import { businessLd, pageMeta, websiteLd } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";
import Hero from "@/components/home/Hero";
import ServicesList from "@/components/home/ServicesList";
import { AboutTeam } from "@/components/home/AboutTeam";
import { BlogPreview, ContactSection, FaqSection, Gallery } from "@/components/home/Sections";
import JsonLd from "@/components/JsonLd";
import DesktopFx from "@/components/DesktopFx";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/", home[locale].hero.title, home[locale].hero.text);
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <JsonLd
        data={[
          businessLd(locale),
          websiteLd(locale),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q[locale], acceptedAnswer: { "@type": "Answer", text: f.a[locale] } })),
          },
        ]}
      />
      <DesktopFx />
      <Hero locale={locale} />
      <ServicesList locale={locale} />
      <Gallery locale={locale} />
      <BlogPreview locale={locale} />
      <AboutTeam locale={locale} />
      <FaqSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
