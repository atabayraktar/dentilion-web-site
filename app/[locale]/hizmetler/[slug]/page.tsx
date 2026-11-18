import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDict } from "@/content/ui";
import { detailServices } from "@/content/services";
import { isLocale, localePath, locales, servicePath } from "@/lib/i18n";
import { baseUrl, breadcrumbLd, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import ServiceDetail from "@/components/ServiceDetail";

export const generateStaticParams = () =>
  locales.flatMap((locale) => detailServices.map((s) => ({ locale, slug: s.slug! })));

const find = (slug: string) => detailServices.find((s) => s.slug === slug);

export async function generateMetadata({ params }: PageProps<"/[locale]/hizmetler/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = find(slug);
  if (!isLocale(locale) || !service) return {};
  return pageMeta(locale, servicePath(slug), service.title[locale], service.body![locale][0]);
}

export default async function Page({ params }: PageProps<"/[locale]/hizmetler/[slug]">) {
  const { locale, slug } = await params;
  const service = find(slug);
  if (!isLocale(locale) || !service) notFound();
  const path = servicePath(slug);
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": ["MedicalProcedure", "Service"],
            name: service.title[locale],
            description: service.body![locale][0],
            url: baseUrl + localePath(locale, path),
            image: baseUrl + service.image,
            inLanguage: locale,
            provider: { "@id": `${baseUrl}/#clinic` },
            areaServed: "Çanakkale",
          },
          breadcrumbLd(locale, [
            { name: "Dentilion", path: "/" },
            { name: getDict(locale).crumbServices, path: "/hizmetler" },
            { name: service.title[locale], path },
          ]),
        ]}
      />
      <ServiceDetail service={service} locale={locale} />
    </>
  );
}
