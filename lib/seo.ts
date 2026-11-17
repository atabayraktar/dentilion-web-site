import type { Metadata } from "next";
import { site } from "@/content/site";
import { localePath, locales, type Locale } from "@/lib/i18n";

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://canakkaledis.net";

export const homeTitle: Record<Locale, string> = {
  tr: `${site.name} Diş Kliniği`,
  en: `${site.name} Dental Clinic`,
  de: `${site.name} Zahnklinik`,
};

export function pageMeta(locale: Locale, path: string, title: string, description: string): Metadata {
  const url = (l: Locale) => localePath(l, path);
  return {
    title: path === "/" ? { absolute: homeTitle[locale] } : title,
    description,
    alternates: {
      canonical: url(locale),
      languages: { ...Object.fromEntries(locales.map((l) => [l, url(l)])), "x-default": url("tr") },
    },
    openGraph: { title, description, url: url(locale), siteName: site.name, locale, type: "website" },
  };
}
