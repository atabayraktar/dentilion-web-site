import Image from "next/image";
import Link from "next/link";
import { form } from "@/content/form";
import { detail, faqImage, serviceImages } from "@/content/service-detail";
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
      <header className="wrap pt-[calc(6.5rem+2.5rem)] md:pt-[calc(6.5rem+4rem)]">
        <nav aria-label="breadcrumb" className="flex flex-wrap gap-2 text-sm text-muted">
          <Link href={localePath(locale, "/")} className="hover:text-accent">Dentilion</Link>/
          <Link href={localePath(locale, "/hizmetler")} className="hover:text-accent">{t.servicesTitle}</Link>/
          <span aria-current="page" className="text-text">{title}</span>
        </nav>
        <h1 className="mt-5 text-[clamp(2.25rem,5vw,4rem)]">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{service.summary[locale]}</p>
      </header>

      <section className="wrap grid gap-8 pb-12 pt-10 md:pb-20 md:pt-16 lg:grid-cols-12 lg:items-center lg:gap-[clamp(2rem,5vw,6rem)]">
        <Reveal className="space-y-5 text-lg lg:col-span-7 lg:self-center">
          {service.body![locale].filter((p) => p !== service.summary[locale]).map((p) => <p key={p} className="max-w-prose">{p}</p>)}
        </Reveal>
        <Reveal className={`${frame} aspect-[16/10] lg:col-span-5 lg:aspect-[4/3]`}>
          <Image src={img.body[0]} alt={title} fill quality={85} sizes="(min-width:1024px) 900px, 100vw" className="object-cover" />
        </Reveal>
      </section>

      <section className="wrap grid gap-8 pb-12 md:pb-20 lg:grid-cols-12 lg:items-stretch lg:gap-[clamp(2rem,5vw,6rem)]">
        <Reveal className={`${frame} aspect-[16/10] lg:col-span-5 lg:aspect-auto lg:min-h-[22rem]`}>
          <Image src={img.body[1]} alt={title} fill quality={85} sizes="(min-width:1024px) 1200px, 100vw" className="object-cover" />
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal><h2 className="text-[clamp(1.75rem,3.4vw,3rem)]">{d.benefitsTitle}</h2></Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {d.benefits.map((b) => (
              <li key={b.t} className="rounded-3xl border border-line bg-surface p-6">
                <p className="font-display text-xl font-semibold">{b.t}</p>
                <p className="mt-2 text-muted">{b.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap grid gap-8 pb-12 md:pb-20 lg:grid-cols-12 lg:gap-[clamp(2rem,5vw,6rem)]">
        <div className="lg:col-span-5">
          <h2 className="text-[clamp(1.75rem,3.4vw,3rem)]">{d.faqTitle}</h2>
          <Reveal className="relative mt-8 hidden aspect-[4/3] max-w-md overflow-hidden rounded-[2rem_2rem_2rem_0.75rem] lg:block">
            <Image src={faqImage} alt="" fill quality={85} sizes="(min-width:1024px) 900px, 1px" className="object-cover" />
          </Reveal>
        </div>
        <div className="lg:col-span-7"><Accordion items={d.faq} /></div>
      </section>

      <section className="stage">
        <div className="wrap flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,3.4vw,3rem)]">{d.ctaTitle}</h2>
            <p className="mt-3 text-stage-muted md:text-lg">{d.ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={localePath(locale, "/#iletisim")}>{u.book}</Button>
            <Button href={`tel:${site.phone.tel}`} variant="ghost"><PhoneIcon />{site.phone.display}</Button>
          </div>
        </div>
      </section>

      <section className="wrap py-12 md:py-20">
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
                <Image src={s.image} alt={s.imageAlt[locale]} fill quality={85} sizes="(min-width:1024px) 40vw, (min-width:640px) 95vw, 190vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stage/90 to-transparent p-4 pt-12 font-display font-semibold text-stage-fg">{s.title[locale]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
