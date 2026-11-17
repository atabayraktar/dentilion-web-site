// [musteriye sor] EN/DE translations are ours; the clinic should review them.
import type { Locale } from "@/lib/i18n";
import type { Localized } from "./types";

const tr = {
  skip: "İçeriğe geç",
  menu: "Menü",
  closeMenu: "Menüyü kapat",
  mainNav: "Ana menü",
  language: "Dil",
  themeSwitch: "Koyu tema",
  book: "Randevu Al",
  call: "Ara",
  callPrompt: "Aklınıza Takılanlar için Arayın",
  whatsapp: "WhatsApp ile yaz",
  openNow: "Şu an açık",
  closedNow: "Şu an kapalı",
  today: "Bugün",
  tomorrow: "Yarın",
  hours: "Çalışma Saatleri",
  address: "Adres",
  pages: "Sayfalar",
  followUs: "Bizi takip edin",
  allServices: "Tüm hizmetler",
  more: "Detaylar",
  rights: "Tüm hakları saklıdır.",
  logoLabel: "Dentilion ana sayfa",
};
export type Ui = typeof tr;

export const ui: Localized<Ui> = {
  tr,
  en: {
    skip: "Skip to content",
    menu: "Menu",
    closeMenu: "Close menu",
    mainNav: "Main menu",
    language: "Language",
    themeSwitch: "Dark theme",
    book: "Book an appointment",
    call: "Call",
    callPrompt: "Call us with any questions",
    whatsapp: "Message on WhatsApp",
    openNow: "Open now",
    closedNow: "Closed now",
    today: "Today",
    tomorrow: "Tomorrow",
    hours: "Opening hours",
    address: "Address",
    pages: "Pages",
    followUs: "Follow us",
    allServices: "All services",
    more: "Details",
    rights: "All rights reserved.",
    logoLabel: "Dentilion home",
  },
  de: {
    skip: "Zum Inhalt springen",
    menu: "Menü",
    closeMenu: "Menü schließen",
    mainNav: "Hauptmenü",
    language: "Sprache",
    themeSwitch: "Dunkles Design",
    book: "Termin vereinbaren",
    call: "Anrufen",
    callPrompt: "Rufen Sie uns bei Fragen an",
    whatsapp: "Per WhatsApp schreiben",
    openNow: "Jetzt geöffnet",
    closedNow: "Jetzt geschlossen",
    today: "Heute",
    tomorrow: "Morgen",
    hours: "Öffnungszeiten",
    address: "Adresse",
    pages: "Seiten",
    followUs: "Folgen Sie uns",
    allServices: "Alle Leistungen",
    more: "Details",
    rights: "Alle Rechte vorbehalten.",
    logoLabel: "Dentilion Startseite",
  },
};

export const getDict = (locale: Locale): Ui => ui[locale];

export const languageNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
};
