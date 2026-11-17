// Pairs copied 1:1 from the old site's homepage portfolio ("Profesyonel Dokunuşla Mükemmel Sonuçlar"). EN/DE titles are ours.
import type { Localized } from "./types";

export const beforeAfterLabels: Localized<{ before: string; after: string; slider: string }> = {
  tr: { before: "Önce", after: "Sonra", slider: "Önce ve sonra karşılaştırma" },
  en: { before: "Before", after: "After", slider: "Before and after comparison" },
  de: { before: "Vorher", after: "Nachher", slider: "Vorher-Nachher-Vergleich" },
};

export type Pair = { id: string; before: string; after: string; title: Localized<string> };

const dir = "/images/before-after";
export const pairs: Pair[] = [
  { id: "braces", before: `${dir}/without_braces@2x.webp`, after: `${dir}/with_braces@2x.webp`, title: { tr: "Diş Teli Tedavisi", en: "Braces treatment", de: "Zahnspangenbehandlung" } },
  { id: "implant", before: `${dir}/implant_oncesi@2x.webp`, after: `${dir}/implant_sonrasi@2x.webp`, title: { tr: "İmplant Tedavisi", en: "Implant treatment", de: "Implantatbehandlung" } },
  { id: "caries", before: `${dir}/curuk_oncesi@2x.webp`, after: `${dir}/implant_sonrasi@2x.webp`, title: { tr: "Çürük Tedavisi", en: "Cavity treatment", de: "Kariesbehandlung" } },
];
