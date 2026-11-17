import Image from "next/image";
import PostCard from "@/components/PostCard";
import { posts } from "@/content/blog";
import { faq, faqIntro } from "@/content/faq";
import { form } from "@/content/form";
import { beforeAfterLabels, pairs } from "@/content/gallery";
import { site } from "@/content/site";
import { type Locale } from "@/lib/i18n";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export { default as ContactSection } from "./ContactSection";

export function Gallery({ locale }: { locale: Locale }) {
  const t = form[locale];
  return (
    <Section className="bg-surface">
      <Reveal>
        <h2 className="text-[clamp(2rem,4.5vw,3.5rem)]">{t.galleryTitle}</h2>
        <p className="sr-only">{t.galleryNote}</p>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {pairs.map((p, i) => (
          <Reveal key={p.id} delay={i * 80} className="">
            <BeforeAfterSlider before={p.before} after={p.after} alt={p.title[locale]} labels={beforeAfterLabels[locale]} />
            <h3 className="mt-4 text-center text-xl">{p.title[locale]}</h3>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FaqSection({ locale }: { locale: Locale }) {
  const intro = faqIntro[locale];
  return (
    <Section id="sss">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">{intro.title}</h2>
            <p className="mt-5 max-w-md text-lg text-muted">{intro.text}</p>
            <div className="relative mt-8 hidden aspect-[4/3] max-w-md overflow-hidden rounded-[2rem_2rem_2rem_0.75rem] lg:block">
              <Image src="/images/stock/hygienist.webp" alt="" fill quality={85} sizes="900px" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(160deg,transparent_55%,color-mix(in_srgb,var(--stage)_55%,transparent))]" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Accordion items={faq.map((f) => ({ q: f.q[locale], a: f.a[locale] }))} />
        </div>
      </div>
    </Section>
  );
}

export function BlogPreview({ locale }: { locale: Locale }) {
  const t = form[locale];
  return (
    <Section id="blog">
      <h2 className="text-[clamp(2rem,4.5vw,3.5rem)]">{t.blogTitle}</h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug}><PostCard post={p} locale={locale} /></li>
        ))}
      </ul>
    </Section>
  );
}
