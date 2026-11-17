import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { form } from "@/content/form";
import { localePath, type Locale } from "@/lib/i18n";
import { ArrowIcon } from "@/components/icons";

export default function PostCard({ post, locale }: { post: BlogPost; locale: Locale }) {
  const c = post.content[locale];
  return (
    <Link href={localePath(locale, `/${post.slug}`)} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-shadow hover:shadow-xl">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={post.images[0]}
          alt={c.alt[0]}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <span className="label text-muted">{new Date(post.date).toLocaleDateString(form[locale].blogDateLocale, { timeZone: "UTC" })}</span>
        <h3 className="mt-3 text-xl md:text-2xl">{c.title}</h3>
        <p className="mt-3 flex-1 text-muted">{c.excerpt}</p>
        <ArrowIcon className="mt-5 transition-transform group-hover:translate-x-1.5" />
      </div>
    </Link>
  );
}
