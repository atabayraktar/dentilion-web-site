import { form } from "@/content/form";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export type WaFields = { name: string; phone: string; service?: string; when?: string; message?: string };

export function buildWhatsAppText(locale: Locale, f: WaFields): string {
  const t = form[locale];
  return [
    t.waHello,
    `${t.name}: ${f.name}`,
    `${t.phone}: ${f.phone}`,
    f.service && `${t.service}: ${f.service}`,
    f.when && `${t.waWhen}: ${f.when}`,
    f.message && `${t.waNote}: ${f.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export const buildWhatsAppUrl = (locale: Locale, f: WaFields) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(buildWhatsAppText(locale, f))}`;
