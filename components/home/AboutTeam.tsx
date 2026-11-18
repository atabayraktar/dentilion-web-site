import Image from "next/image";
import { home } from "@/content/home";
import { team } from "@/content/team";
import type { Locale } from "@/lib/i18n";
import ClinicGallery from "@/components/home/ClinicGallery";
import Logo from "@/components/Logo";
import Reveal from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

function Placeholder() {
  return (
    <div className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-ui bg-gradient-to-br from-accent/15 via-aqua/10 to-accent/5">
      <svg viewBox="0 0 48 56" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" className="h-1/3 text-accent/50" aria-hidden>
        <path d="M24 9c-4-4-14-4-16 6-1 8 4 12 5 20 .7 6 2 14 5 14 3 0 3-10 6-10s3 10 6 10c3 0 4.3-8 5-14 1-8 6-12 5-20-2-10-12-10-16-6Z" />
      </svg>
    </div>
  );
}

export function AboutTeam({ locale }: { locale: Locale }) {
  const c = home[locale];
  return (
    <Section id="hakkimizda" className="bg-surface">
      <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <h2 className="text-[clamp(1.75rem,3.4vw,3.5rem)]">{c.about.title}</h2>
          <p className="mt-8 max-w-2xl text-lg">{c.about.text}</p>
        </Reveal>
        <Reveal className="md:col-span-5" delay={80}>
          <div className="grid border border-line bg-bg aspect-[16/9] place-items-center rounded-ui p-[10%] md:aspect-[4/3]">
            <Logo className="h-full w-auto max-w-full" />
          </div>
        </Reveal>
      </div>
      <Reveal>
        <h3 className="mt-16 max-w-3xl text-[clamp(1.5rem,2.8vw,2.5rem)] md:mt-24">{c.team.title}</h3>
      </Reveal>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {team.map((m, i) => (
          <li key={m.id}>
            <Reveal delay={i * 60} className="h-full">
              <article className="h-full rounded-ui border border-line bg-bg p-3">
                {m.photo ? (
                  <Image src={m.photo} alt={m.name} width={800} height={1000} sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 140vw" className="aspect-[4/5] w-full rounded-ui object-cover object-top" />
                ) : (
                  <Placeholder />
                )}
                <div className="px-2 pb-3 pt-5">
                  <h4 className="text-xl leading-tight">{m.name}</h4>
                  <p className="mt-1 text-sm text-accent">{m.role[locale]}</p>
                  {m.bio && <p className="mt-4 text-muted">{m.bio[locale]}</p>}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
      <ClinicGallery locale={locale} />
    </Section>
  );
}
