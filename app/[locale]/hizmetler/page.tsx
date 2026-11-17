import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { form } from "@/content/form";
import { services } from "@/content/services";
import { isLocale, localePath } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/icons";

export async function generateMetadata({ params }: PageProps<"/[locale]/hizmetler">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/hizmetler", form[locale].servicesTitle, services[0].summary[locale]);
}

export default async function Page({ params }: PageProps<"/[locale]/hizmetler">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = form[locale];
  return (
    <>
      <div className="wrap pb-12 pt-[calc(6.5rem+3rem)] md:pb-20 md:pt-[calc(6.5rem+4.5rem)]">
        <h1 className="mb-10 text-[clamp(2.25rem,5vw,4rem)] md:mb-14">{t.servicesTitle}</h1>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={(i % 3) * 60}>
                <Link href={localePath(locale, `/${s.slug}`)} className="group block">
                  <span className="relative block aspect-[4/3] overflow-hidden rounded-3xl bg-stage">
                    <Image src={s.image} alt={s.imageAlt[locale]} fill quality={85} sizes="(min-width:1536px) 40vw, (min-width:1024px) 50vw, (min-width:640px) 80vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
                  </span>
                  <span className="mt-4 flex items-start justify-between gap-4">
                    <span>
                      <span className="font-display block text-xl font-semibold md:text-2xl">{s.title[locale]}</span>
                      <span className="mt-2 line-clamp-3 block text-muted">{s.summary[locale]}</span>
                    </span>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-transparent bg-[linear-gradient(135deg,var(--aqua),var(--accent))] text-[var(--on-accent)] transition-transform duration-300 group-hover:-rotate-45">
                      <ArrowIcon width={18} height={18} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
