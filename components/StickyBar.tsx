import { site } from "@/content/site";
import { getDict } from "@/content/ui";
import { type Locale } from "@/lib/i18n";
import { WhatsAppIcon } from "./icons";

export default function StickyBar({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp}
      className="group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 grid h-14 w-14 place-items-center rounded-full md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <span aria-hidden className="absolute inset-0 rounded-full motion-safe:animate-[wa-pulse_2.2s_ease-out_infinite]" />
      <WhatsAppIcon
        width={64}
        height={64}
        className="relative h-full w-full rounded-full shadow-[0_8px_24px_rgb(0_0_0/0.28)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
      />
    </a>
  );
}
