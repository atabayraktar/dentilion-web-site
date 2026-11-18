import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/content/blog";
import { form } from "@/content/form";
import { isLocale, localePath, locales } from "@/lib/i18n";
import { site } from "@/content/site";
import { baseUrl, breadcrumbLd, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import BlogArticle from "@/components/BlogArticle";

export const generateStaticParams = () => locales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));

export async function generateMetadata({ params }: PageProps<"/[locale]/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!isLocale(locale) || !post) return {};
  return pageMeta(locale, `/${slug}`, post.content[locale].title, post.content[locale].intro);
}

export default async function Page({ params }: PageProps<"/[locale]/[slug]">) {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!isLocale(locale) || !post) notFound();
  const c = post.content[locale];
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            description: c.intro,
            image: baseUrl + post.images[0],
            mainEntityOfPage: baseUrl + localePath(locale, `/${slug}`),
            headline: c.title,
            datePublished: post.date,
            inLanguage: locale,
            author: { "@type": "Person", name: site.doctor },
            publisher: { "@id": `${baseUrl}/#clinic` },
          },
          breadcrumbLd(locale, [
            { name: "Dentilion", path: "/" },
            { name: form[locale].blogLabel, path: "/blog" },
            { name: c.title, path: `/${slug}` },
          ]),
        ]}
      />
      <BlogArticle post={post} locale={locale} />
    </>
  );
}
