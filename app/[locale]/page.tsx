import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { faq } from "@/content/faq";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { baseUrl, pageMeta } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";
import Hero from "@/components/home/Hero";
import ServicesList from "@/components/home/ServicesList";
import { AboutSection, TeamPreview } from "@/components/home/AboutTeam";
import { BlogPreview, ContactSection, FaqSection, Gallery, QuizSection } from "@/components/home/Sections";
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
          {
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: site.fullName[locale],
            telephone: site.phone.tel,
            email: site.email,
            url: baseUrl,
            address: { "@type": "PostalAddress", streetAddress: site.address.full, addressCountry: "TR" },
            openingHoursSpecification: site.hours.map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.days.map((d) => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d]),
              opens: h.open,
              closes: h.close,
            })),
          },
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
      <AboutSection locale={locale} />
      <TeamPreview locale={locale} />
      <Gallery locale={locale} />
      <QuizSection locale={locale} />
      <FaqSection locale={locale} />
      <BlogPreview locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
