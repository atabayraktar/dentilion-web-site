import PostCard from "@/components/PostCard";
import { posts } from "@/content/blog";
import { contact } from "@/content/contact";
import { faq, faqIntro } from "@/content/faq";
import { form } from "@/content/form";
import { beforeAfterLabels, pairs } from "@/content/gallery";
import { site } from "@/content/site";
import { getDict } from "@/content/ui";
import { type Locale } from "@/lib/i18n";
import AppointmentForm from "@/components/AppointmentForm";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MapFacade from "@/components/MapFacade";
import Accordion from "@/components/ui/Accordion";
import Quiz from "@/components/Quiz";
import Reveal from "@/components/ui/Reveal";
import { Section, SectionLabel } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { quiz } from "@/content/quiz";

export function Gallery({ locale }: { locale: Locale }) {
  const t = form[locale];
  return (
    <Section className="bg-surface">
      <SectionLabel>{t.galleryLabel}</SectionLabel>
      <Reveal>
        <h2 className="text-[clamp(2rem,4.5vw,3.5rem)]">{t.galleryTitle}</h2>
        <p className="mt-3 text-muted">{t.galleryNote}</p>
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

export function QuizSection({ locale }: { locale: Locale }) {
  return (
    <Section>
      <Quiz locale={locale} />
    </Section>
  );
}

export function FaqSection({ locale }: { locale: Locale }) {
  const t = form[locale];
  const intro = faqIntro[locale];
  return (
    <Section id="sss" className="bg-surface">
      <SectionLabel>{t.faqLabel}</SectionLabel>
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)]">{intro.title}</h2>
            <p className="mt-4 text-muted">{intro.text}</p>
          </div>
        </div>
        <div className="md:col-span-7">
          <Accordion items={faq.map((f) => ({ q: f.q[locale], a: f.a[locale] }))} />
        </div>
      </div>
    </Section>
  );
}

export function BlogPreview({ locale }: { locale: Locale }) {
  const t = form[locale];
  return (
    <Section>
      <SectionLabel>{t.blogLabel}</SectionLabel>
      <h2 className="text-[clamp(2rem,4.5vw,3.5rem)]">{t.blogTitle}</h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug}><PostCard post={p} locale={locale} /></li>
        ))}
      </ul>
    </Section>
  );
}


export function ContactSection({ locale, full = false }: { locale: Locale; full?: boolean }) {
  const t = form[locale];
  const u = getDict(locale);
  const c = contact[locale];
  const tool = "flex min-h-14 items-center gap-4 rounded-2xl border border-white/15 px-5 py-3 transition hover:border-aqua hover:bg-white/5";
  return (
    <section id="randevu" className={`stage ${full ? "py-12 md:py-16" : "py-20 md:py-28"}`}>
      <div className="wrap">
        {!full && (
          <>
            <p className="label mb-4 text-aqua">{t.label}</p>
            <h2 className="max-w-3xl text-[clamp(2rem,5vw,4rem)]">{t.title}</h2>
            <p className="mt-4 max-w-xl text-stage-muted">{t.intro}</p>
          </>
        )}
        <div className={`${full ? "" : "mt-12 "}grid gap-12 lg:grid-cols-2 lg:gap-[clamp(3rem,6vw,8rem)]`}>
          <div>
            <h3 className="text-3xl">{t.contactTitle}</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className={tool}><WhatsAppIcon width={28} height={28} />WhatsApp</a>
              <a href={`tel:${site.phone.tel}`} className={tool}><PhoneIcon />{site.phone.display}</a>
              <a href={`mailto:${site.email}`} className={`${tool} sm:col-span-2 break-all`}><MailIcon />{site.email}</a>
            </div>
            <address className="mt-6 not-italic text-stage-muted"><a href={site.mapUrl} target="_blank" rel="noopener noreferrer">{site.address.full}</a></address>
            <h4 className="label mt-6 text-stage-muted">{u.hours}</h4>
            <ul className="mt-2 max-w-sm">
              {site.hours.map((h) => (
                <li key={h.open + h.close} className="flex justify-between border-b border-white/15 py-2">
                  <span>{h.label[locale]}</span>
                  <span>{h.open} - {h.close}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <MapFacade title={t.mapTitle} directions={t.directions} />
            </div>
          </div>
          <AppointmentForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
