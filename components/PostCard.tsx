import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { form } from "@/content/form";
import { localePath, type Locale } from "@/lib/i18n";
import ArrowCircle from "@/components/ui/ArrowCircle";

export default function PostCard({ post, locale, h = "h3", priority }: { post: BlogPost; locale: Locale; h?: "h2" | "h3"; priority?: boolean }) {
  const H = h;
  const c = post.content[locale];
  return (
    <Link href={localePath(locale, `/${post.slug}`)} className="group flex h-full flex-col overflow-hidden rounded-ui border border-line bg-surface transition-shadow hover:shadow-xl">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={post.images[0]}
          alt={c.alt[0]}
          fill
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
          quality={85}
          sizes="(min-width: 768px) 80vw, 150vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <span className="label text-muted">{new Date(post.date).toLocaleDateString(form[locale].blogDateLocale, { timeZone: "UTC" })}</span>
        <H className="mt-3 text-xl md:text-2xl">{c.title}</H>
        <p className="mt-3 flex-1 text-muted">{c.excerpt}</p>
        <ArrowCircle className="mt-5" />
      </div>
    </Link>
  );
}
