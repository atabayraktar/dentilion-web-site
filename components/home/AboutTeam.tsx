import Image from "next/image";
import { home } from "@/content/home";
import { TEAM_SLOTS, comingSoon, team } from "@/content/team";
import type { Locale } from "@/lib/i18n";
import Logo from "@/components/Logo";
import Reveal from "@/components/ui/Reveal";
import { Section, SectionLabel } from "@/components/ui/Section";

export function AboutSection({ locale }: { locale: Locale }) {
  const c = home[locale].about;
  return (
    <Section id="biz-kimiz" className="bg-surface">
      <SectionLabel>{c.label}</SectionLabel>
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <h2 className="text-[clamp(1.75rem,3.4vw,3.5rem)]">{c.title}</h2>
          <p className="mt-8 max-w-2xl text-lg">{c.text}</p>
        </Reveal>
        <Reveal className="md:col-span-5" delay={80}>
          <div className="stage grid aspect-[4/5] place-items-center rounded-3xl p-[12%]">
            <Logo onStage className="w-full" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function TeamPreview({ locale }: { locale: Locale }) {
  const c = home[locale].team;
  return (
    <Section id="ekip">
      <SectionLabel>{c.label}</SectionLabel>
      <Reveal>
        <h2 className="max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)]">{c.title}</h2>
      </Reveal>
      <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-6">
        {Array.from({ length: Math.max(TEAM_SLOTS, team.length) }, (_, i) => team[i]).map((m, i) => (
          <li key={m?.id ?? `slot-${i}`}>
            <Reveal delay={i * 60} className="h-full">
              {m ? (
                <div className="h-full rounded-3xl bg-surface p-3">
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role[locale]}`}
                    width={800}
                    height={1000}
                    sizes="(min-width:1280px) 16vw, (min-width:768px) 30vw, 46vw"
                    className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
                  />
                  <h3 className="mt-4 px-1 text-lg leading-tight">{m.name}</h3>
                  <p className="label mt-1 px-1 text-muted">{m.role[locale]}</p>
                </div>
              ) : (
                <div className="grid aspect-[4/5] h-full w-full place-items-center rounded-3xl border border-dashed border-line p-3 text-center xl:aspect-auto">
                  <div>
                    <svg viewBox="0 0 48 56" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="mx-auto h-14 w-12 text-muted/40" aria-hidden>
                      <path d="M24 9c-4-4-14-4-16 6-1 8 4 12 5 20 .7 6 2 14 5 14 3 0 3-10 6-10s3 10 6 10c3 0 4.3-8 5-14 1-8 6-12 5-20-2-10-12-10-16-6Z" />
                    </svg>
                    <p className="label mt-4 text-muted">{comingSoon[locale]}</p>
                  </div>
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
