"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { services } from "@/content/services";
import { getDict } from "@/content/ui";
import { localePath, type Locale } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ArrowIcon } from "@/components/icons";

export default function ServicesList({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const c = home[locale].services;
  const [active, setActive] = useState(0);
  return (
    <Section id="hizmetlerimiz">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-[clamp(2rem,4vw,6rem)]">
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-28 h-[min(80vh,56rem)] overflow-hidden rounded-[2.5rem] bg-stage">
            {services.map((s, i) => (
              <Image
                key={s.id}
                src={s.image}
                alt={s.imageAlt[locale]}
                fill
                sizes="(min-width:1024px) 1600px, 100vw"
                quality={85}
                className={`object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
                  i === active ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stage/85 to-transparent p-8 pt-24 text-stage-fg">
              <p className="font-display text-3xl font-semibold">{services[active].title[locale]}</p>
              <p className="mt-2 max-w-md text-stage-muted">{services[active].summary[locale]}</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="max-w-[22ch] text-[clamp(1.75rem,3.4vw,3rem)]">{c.title}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-1">
            {services.map((s, i) => (
              <li key={s.id}>
                <Link
                  href={localePath(locale, `/${s.slug ?? s.id}`)}
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  data-active={i === active}
                  className="group flex items-center gap-4 rounded-3xl p-2 transition-colors duration-300 hover:bg-accent/10 focus-visible:bg-accent/10 lg:gap-6 lg:px-6 lg:py-4 lg:data-[active=true]:bg-accent/10"
                >
                  <span className="relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-2xl sm:w-32 lg:hidden">
                    <Image src={s.image} alt={s.imageAlt[locale]} fill quality={85} sizes="(min-width:640px) 400px, 300px" className="object-cover" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-display block text-lg font-semibold leading-tight transition-transform duration-500 sm:text-xl lg:text-[clamp(1.5rem,2.2vw,2.4rem)] lg:group-hover:translate-x-2 lg:group-data-[active=true]:translate-x-2">
                      {s.title[locale]}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-sm text-muted lg:hidden">{s.summary[locale]}</span>
                  </span>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-transparent bg-[linear-gradient(135deg,var(--aqua),var(--accent))] text-[var(--on-accent)] transition-transform duration-300 group-hover:-rotate-45">
                    <ArrowIcon width={18} height={18} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={localePath(locale, "/hizmetler")}
            className="group mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 font-semibold text-bg transition-transform duration-300 hover:-translate-y-0.5"
          >
            {t.allServices}
            <ArrowIcon width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
