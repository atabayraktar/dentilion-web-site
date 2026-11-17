import Image from "next/image";
import type { BlogPost } from "@/content/blog";
import { posts } from "@/content/blog";
import { form } from "@/content/form";
import type { Locale } from "@/lib/i18n";
import PostCard from "@/components/PostCard";

export default function BlogArticle({ post, locale }: { post: BlogPost; locale: Locale }) {
  const c = post.content[locale];
  const more = posts.filter((p) => p !== post);
  const fig = (i: 1 | 2) => (
    <figure className="relative my-10 aspect-[3/2] overflow-hidden rounded-2xl">
      <Image src={post.images[i]} alt={c.alt[i]} fill sizes="(min-width: 768px) 42rem, 100vw" className="object-cover" />
    </figure>
  );
  return (
    <>
      <div className="wrap mt-8 md:mt-12">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl md:aspect-[21/9]">
          <Image src={post.images[0]} alt={c.alt[0]} fill priority sizes="100vw" className="object-cover" />
        </div>
      </div>
      <article className="mx-auto max-w-2xl px-5 py-12 text-lg md:py-20">
        <p className="text-xl">{c.intro}</p>
        {c.sections.map((s, i) => (
          <section key={s.h} className="mt-10">
            <h2 className="text-2xl md:text-3xl">{i + 1}. {s.h}</h2>
            {s.p.map((p) => <p key={p} className="mt-3">{p}</p>)}
            {s.list && <ul className="mt-3 list-disc space-y-1 pl-6">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
            {s.after && <p className="mt-3">{s.after}</p>}
            {i === 1 && fig(1)}
            {i === c.sections.length - 2 && i !== 1 && fig(2)}
          </section>
        ))}
      </article>
      <section className="wrap pb-16 md:pb-24">
        <h2 className="text-2xl md:text-3xl">{form[locale].blogTitle}</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {more.map((p) => <li key={p.slug}><PostCard post={p} locale={locale} /></li>)}
        </ul>
      </section>
    </>
  );
}
