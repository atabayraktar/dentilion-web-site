import { site } from "@/content/site";
import { getDict } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import Logo from "./Logo";

const btn =
  "grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:-translate-y-0.5 hover:border-aqua hover:text-aqua";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <footer id="footer" className="stage">
      <div className="flex flex-col px-[clamp(1.25rem,2vw,3rem)] items-center gap-6 pb-24 pt-8 md:grid md:py-8 md:grid-cols-[1fr_auto_1fr] md:gap-8">
        <Logo still onStage className="h-12 w-auto md:justify-self-start" />
        <p className="text-center text-sm text-stage-muted">
          © 2026 {site.name}. {t.rights}
        </p>
        <ul className="flex items-center gap-3 md:justify-self-end">
          <li>
            <a href={`tel:${site.phone.tel}`} aria-label={site.phone.display} className={btn}>
              <PhoneIcon />
            </a>
          </li>
          <li>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label={t.whatsapp} className={btn}>
              <WhatsAppIcon width={22} height={22} fill="currentColor" />
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} aria-label={site.email} className={btn}>
              <MailIcon />
            </a>
          </li>
          <li>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={btn}>
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
