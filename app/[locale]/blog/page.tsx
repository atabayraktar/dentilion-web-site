import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/content/blog";
import { form } from "@/content/form";
import { isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import PageHead from "@/components/PageHead";
import PostCard from "@/components/PostCard";

export async function generateMetadata({ params }: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/blog", "Blog", form[locale].blogTitle);
}

export default async function Page({ params }: PageProps<"/[locale]/blog">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const lead = posts[0];
  return (
    <>
      <PageHead label="Blog" title={form[locale].blogTitle} image={{ src: lead.images[2], alt: lead.content[locale].alt[2] }} />
      <div className="wrap py-12 md:py-20">
        <ul className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}><PostCard post={p} locale={locale} /></li>
          ))}
        </ul>
      </div>
    </>
  );
}
