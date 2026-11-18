import type { Localized } from "./types";

// PLACEHOLDER images (face-free stock) until the clinic's own photos arrive: [musteriye sor].
export const clinicPhotos: { src: string; alt: Localized<string> }[] = [
  { src: "/images/stock/clinic-room.webp", alt: { tr: "Muayenehane odası", en: "Clinic treatment room", de: "Behandlungsraum der Praxis" } },
  { src: "/images/stock/dental-chair.webp", alt: { tr: "Diş hekimi koltuğu", en: "Dental chair", de: "Zahnarztstuhl" } },
  { src: "/images/stock/clinic-room-blue.webp", alt: { tr: "Mavi tonlu tedavi odası", en: "Blue-toned treatment room", de: "Behandlungsraum in Blautönen" } },
  { src: "/images/stock/hero-chair.webp", alt: { tr: "Tedavi koltuğu ve ünit", en: "Treatment chair and unit", de: "Behandlungsstuhl mit Einheit" } },
  { src: "/images/stock/tools-blue.webp", alt: { tr: "Steril diş hekimliği aletleri", en: "Sterile dental instruments", de: "Sterile zahnärztliche Instrumente" } },
  { src: "/images/stock/surgery-tools.webp", alt: { tr: "Cerrahi alet seti", en: "Surgical instrument set", de: "Chirurgisches Instrumentenset" } },
];

export const clinicGalleryUi: Localized<{ title: string; prev: string; next: string; close: string; open: string }> = {
  tr: { title: "Muayenehanemiz", prev: "Önceki fotoğraf", next: "Sonraki fotoğraf", close: "Kapat", open: "Fotoğrafı büyüt" },
  en: { title: "Our clinic", prev: "Previous photo", next: "Next photo", close: "Close", open: "Enlarge photo" },
  de: { title: "Unsere Praxis", prev: "Vorheriges Foto", next: "Nächstes Foto", close: "Schließen", open: "Foto vergrößern" },
};
