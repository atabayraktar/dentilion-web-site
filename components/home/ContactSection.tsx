import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { getDict } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";
import MapFacade from "@/components/MapFacade";
import { ClockIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";

const row =
  "flex min-h-14 items-center gap-3 rounded-2xl border border-white/15 px-4 py-3 transition-colors duration-200 hover:border-aqua hover:bg-white/5";
const chip = "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/8 text-aqua";

export default function ContactSection({ locale }: { locale: Locale }) {
  const t = contact[locale];
  const u = getDict(locale);
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  return (
    <section id="iletisim" className="stage scroll-mt-20 py-20 md:py-28">
      <div className="wrap">
        <h2 className="text-[clamp(2rem,5vw,4rem)]">{t.title}</h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-[clamp(3rem,6vw,8rem)]">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/15 p-5">
              <h3 className="flex items-center gap-3 text-lg"><span className={chip}><ClockIcon /></span>{u.hours}</h3>
              <ul className="mt-3">
                {site.hours.map((h) => (
                  <li key={h.open + h.close} className="flex justify-between gap-4 border-b border-white/10 py-2 last:border-0">
                    <span>{h.label[locale]}</span>
                    <span>{h.open} - {h.close}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={`https://wa.me/${site.whatsapp}`} {...ext} className={row}><span className={chip}><WhatsAppIcon /></span>{site.whatsappDisplay}</a>
              <a href={`tel:${site.phone.tel}`} className={row}><span className={chip}><PhoneIcon /></span>{site.phone.display}</a>
              <a href={`mailto:${site.email}`} className={`${row} break-all`}><span className={chip}><MailIcon /></span>{site.email}</a>
              <a href={site.instagram} {...ext} className={row}><span className={chip}><InstagramIcon width={18} height={18} /></span>@dentilioncanakkale</a>
            </div>
            <address className={`${row} justify-center text-center not-italic`}>
              <span className={chip}><PinIcon /></span>
              {site.address.short}
            </address>
            <MapFacade title={t.mapTitle} className="min-h-72 flex-1" />
          </div>
          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
