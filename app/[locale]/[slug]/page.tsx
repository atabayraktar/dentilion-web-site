import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/content/blog";
import { form } from "@/content/form";
import { detailServices } from "@/content/services";
import { site } from "@/content/site";
import { isLocale, localePath, locales, type Locale } from "@/lib/i18n";
import { baseUrl, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import BlogArticle from "@/components/BlogArticle";
import ServiceDetail from "@/components/ServiceDetail";

const slugs = [...detailServices.map((s) => s.slug!), ...posts.map((p) => p.slug)];

export const generateStaticParams = () => locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));

const find = (slug: string) => ({
  service: detailServices.find((s) => s.slug === slug),
  post: posts.find((p) => p.slug === slug),
});

export async function generateMetadata({ params }: PageProps<"/[locale]/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const { service, post } = find(slug);
  if (service) return pageMeta(locale, `/${slug}`, service.title[locale], service.body![locale][0]);
  if (post) return pageMeta(locale, `/${slug}`, post.content[locale].title, post.content[locale].intro);
  return {};
}

export default async function Page({ params }: PageProps<"/[locale]/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const { service, post } = find(slug);
  if (!service && !post) notFound();
  const t = form[locale];
  const crumbs = (name: string, parent: string, parentPath: string) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: t.home, path: "/" },
      { name: parent, path: parentPath },
      { name, path: `/${slug}` },
    ].map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: baseUrl + localePath(locale, c.path) })),
  });

  if (service) {
    return (
      <>
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": ["MedicalProcedure", "Service"],
              name: service.title[locale],
              description: service.body![locale][0],
              url: baseUrl + localePath(locale, `/${slug}`),
              image: baseUrl + service.image,
              inLanguage: locale,
              provider: { "@id": `${baseUrl}/#clinic` },
              areaServed: "Çanakkale",
            },
            crumbs(service.title[locale], t.servicesTitle, "/hizmetler"),
          ]}
        />
        <ServiceDetail service={service} locale={locale} />
      </>
    );
  }

  const c = post!.content[locale as Locale];
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            description: c.intro,
            image: baseUrl + post!.images[0],
            mainEntityOfPage: baseUrl + localePath(locale, `/${slug}`),
            headline: c.title,
            datePublished: post!.date,
            inLanguage: locale,
            author: { "@type": "Person", name: site.doctor },
            publisher: { "@id": `${baseUrl}/#clinic` },
          },
          crumbs(c.title, t.blogLabel, "/blog"),
        ]}
      />
      <BlogArticle post={post!} locale={locale} />
    </>
  );
}
