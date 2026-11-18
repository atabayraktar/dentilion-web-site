import type { Metadata } from "next";
import { site } from "@/content/site";
import { localePath, locales, type Locale } from "@/lib/i18n";

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://canakkaledis.net";

export const homeTitle: Record<Locale, string> = {
  tr: `${site.name} Diş Kliniği`,
  en: `${site.name} Dental Clinic`,
  de: `${site.name} Zahnklinik`,
};

const clamp = (s: string, n = 160) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…");

export function pageMeta(locale: Locale, path: string, title: string, rawDescription: string): Metadata {
  const description = clamp(rawDescription);
  const images = [localePath(locale, "/opengraph-image")];
  const url = (l: Locale) => localePath(l, path);
  return {
    title: path === "/" ? { absolute: homeTitle[locale] } : title,
    description,
    alternates: {
      canonical: url(locale),
      languages: { ...Object.fromEntries(locales.map((l) => [l, url(l)])), "x-default": url("tr") },
    },
    openGraph: { title, description, url: url(locale), siteName: site.name, locale, type: "website", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const businessLd = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness"],
  "@id": `${baseUrl}/#clinic`,
  name: site.fullName[locale],
  alternateName: site.name,
  url: baseUrl + localePath(locale),
  telephone: [site.phone.tel, `+${site.whatsapp}`],
  email: site.email,
  image: `${baseUrl}/opengraph-image`,
  address: { "@type": "PostalAddress", streetAddress: site.address.full, addressLocality: "Çanakkale", addressCountry: "TR" },
  geo: { "@type": "GeoCoordinates", latitude: 40.1641367, longitude: 26.4265705 },
  hasMap: site.mapUrl,
  sameAs: [site.instagram],
  openingHoursSpecification: site.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days.map((d) => days[d]),
    opens: h.open,
    closes: h.close,
  })),
});

export const websiteLd = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: baseUrl + localePath(locale),
  inLanguage: locale,
  publisher: { "@id": `${baseUrl}/#clinic` },
});

export const breadcrumbLd = (locale: Locale, items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: baseUrl + localePath(locale, c.path) })),
});
