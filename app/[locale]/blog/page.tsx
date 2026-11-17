import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/content/blog";
import { form } from "@/content/form";
import { isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import PostCard from "@/components/PostCard";

export async function generateMetadata({ params }: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/blog", "Blog", form[locale].blogTitle);
}

export default async function Page({ params }: PageProps<"/[locale]/blog">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <div className="wrap pb-12 pt-[calc(6.5rem+3rem)] md:pb-20 md:pt-[calc(6.5rem+4.5rem)]">
        <h1 className="mb-10 text-[clamp(2.25rem,5vw,4rem)] md:mb-14">{form[locale].blogTitle}</h1>
        <ul className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}><PostCard post={p} locale={locale} /></li>
          ))}
        </ul>
      </div>
    </>
  );
}
