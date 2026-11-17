import Image from "next/image";
import Link from "next/link";
import { form } from "@/content/form";
import { detail, serviceImages } from "@/content/service-detail";
import { detailServices, type Service } from "@/content/services";
import { site } from "@/content/site";
import { getDict } from "@/content/ui";
import { localePath, type Locale } from "@/lib/i18n";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon, PhoneIcon } from "@/components/icons";

export default function ServiceDetail({ service, locale }: { service: Service; locale: Locale }) {
  const t = form[locale];
  const u = getDict(locale);
  const d = detail[locale];
  const img = serviceImages[service.id];
  const title = service.title[locale];
  const others = detailServices.filter((s) => s !== service);
  const frame = "relative overflow-hidden rounded-[2rem] bg-surface";

  return (
    <>
      <section className="stage relative isolate overflow-hidden">
        <Image src={img.hero} alt={title} fill priority sizes="100vw" className="-z-10 object-cover object-[center_40%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stage via-stage/60 to-stage/30" />
        <div className="wrap flex min-h-[min(34rem,80svh)] flex-col justify-end pb-12 pt-32 md:min-h-[min(40rem,70svh)] md:pb-20">
          <p className="label text-aqua">{t.servicesTitle}</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.25rem,6vw,5rem)]">{title}</h1>
          <p className="mt-5 max-w-2xl text-stage-muted md:text-lg">{service.summary[locale]}</p>
        </div>
      </section>

      <section className="wrap grid items-start gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-[clamp(2rem,5vw,7rem)]">
        <Reveal className="space-y-5 text-lg lg:col-span-7">
          {service.body![locale].map((p) => <p key={p} className="max-w-prose">{p}</p>)}
        </Reveal>
        <Reveal className={`${frame} aspect-[4/3] lg:col-span-5 lg:aspect-[4/5]`}>
          <Image src={img.body[0]} alt={title} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
        </Reveal>
      </section>

      <section className="wrap grid items-center gap-10 pb-16 md:pb-24 lg:grid-cols-12 lg:gap-[clamp(2rem,5vw,7rem)]">
        <Reveal className={`${frame} aspect-[4/3] lg:col-span-5`}>
          <Image src={img.body[1]} alt={title} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal><h2 className="text-[clamp(1.75rem,3.4vw,3rem)]">{d.benefitsTitle}</h2></Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {d.benefits.map((b) => (
              <li key={b.t} className="rounded-3xl border border-line bg-surface p-6">
                <p className="font-display text-xl font-semibold">{b.t}</p>
                <p className="mt-2 text-muted">{b.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap grid gap-10 pb-16 md:pb-24 lg:grid-cols-12 lg:gap-[clamp(2rem,5vw,7rem)]">
        <h2 className="text-[clamp(1.75rem,3.4vw,3rem)] lg:col-span-5">{d.faqTitle}</h2>
        <div className="lg:col-span-7"><Accordion items={d.faq} /></div>
      </section>

      <section className="stage">
        <div className="wrap flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,3.4vw,3rem)]">{d.ctaTitle}</h2>
            <p className="mt-3 text-stage-muted md:text-lg">{d.ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={localePath(locale, "/#randevu")}>{u.book}</Button>
            <Button href={`tel:${site.phone.tel}`} variant="ghost"><PhoneIcon />{site.phone.display}</Button>
          </div>
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-[clamp(1.5rem,2.6vw,2.25rem)]">{t.related}</h2>
          <Link href={localePath(locale, "/hizmetler")} className="inline-flex min-h-11 items-center gap-2 font-semibold text-accent">
            {t.backTo}<ArrowIcon width={18} height={18} />
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {others.slice(0, 5).map((s) => (
            <li key={s.id}>
              <Link href={localePath(locale, `/${s.slug}`)} className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-stage">
                <Image src={s.image} alt={s.imageAlt[locale]} fill sizes="(min-width:1024px) 20vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stage/90 to-transparent p-4 pt-12 font-display font-semibold text-stage-fg">{s.title[locale]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
