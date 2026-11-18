import type { Localized } from "./types";

export const site = {
  name: "Dentilion",
  fullName: {
    tr: "Dentilion Ağız ve Diş Sağlığı Polikliniği",
    en: "Dentilion Oral and Dental Health Clinic",
    de: "Dentilion Zentrum für Mund- und Zahngesundheit",
  } satisfies Localized<string>,
  doctor: "Dt. Çağlar Gürbüz",
  phone: { display: "0286 512 17 17", tel: "+902865121717" },
  whatsapp: "905330520017",
  whatsappDisplay: "0 533 052 00 17",
  email: "dentilion.klinik@gmail.com",
  instagram: "https://www.instagram.com/dentilioncanakkale/",
  address: {
    short: "Esenler Mah. Ahmet Piriştina Cad. No:22/1, Çanakkale",
    full: "Esenler Mahallesi Ahmet Piriştina Caddesi Kutluay Store A Blok No:22/1, Çanakkale",
  },
  mapUrl: "https://maps.app.goo.gl/w3nRJn4DbU6Gs3C8A",
  mapEmbed: "https://www.google.com/maps?q=40.1641367,26.4265705&z=17&hl=tr&output=embed",
  timezone: "Europe/Istanbul",
  /** days: 0 = Sunday ... 6 = Saturday */
  hours: [
    {
      days: [1, 2, 3, 4, 5],
      open: "09:00",
      close: "19:00",
      label: { tr: "Pzt - Cuma", en: "Mon - Fri", de: "Mo - Fr" } satisfies Localized<string>,
    },
    {
      days: [6],
      open: "09:00",
      close: "17:00",
      label: { tr: "Cumartesi", en: "Saturday", de: "Samstag" } satisfies Localized<string>,
    },
  ],
  nav: [
    { href: "/hizmetler", label: { tr: "Hizmetlerimiz", en: "Services", de: "Leistungen" } },
    { href: "/blog", label: { tr: "Blog", en: "Blog", de: "Blog" } },
    { href: "/#hakkimizda", label: { tr: "Hakkımızda", en: "About", de: "Über uns" } },
    { href: "/#sss", label: { tr: "S.S.S", en: "FAQ", de: "FAQ" } },
    { href: "/#iletisim", label: { tr: "İletişim", en: "Contact", de: "Kontakt" } },
  ] satisfies { href: string; label: Localized<string> }[],
} as const;
