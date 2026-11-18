// [musteriye sor] EN/DE translations are ours; the clinic should review them.
import type { Localized } from "./types";

export const contact: Localized<{
  title: string;
  formTitle: string;
  name: string;
  phone: string;
  service: string;
  anyService: string;
  message: string;
  optional: string;
  consent: string;
  submit: string;
  errName: string;
  errPhone: string;
  errConsent: string;
  done: string;
  mapTitle: string;
  address: string;
  waGeneral: string;
  waService: string;
  waName: string;
  waPhone: string;
  waNote: string;
}> = {
  tr: {
    title: "İletişim",
    formTitle: "İletişim formu",
    name: "Ad soyad",
    phone: "Telefon",
    service: "Hizmet",
    anyService: "Hizmet seçin",
    message: "Kısa mesaj",
    optional: "isteğe bağlı",
    consent: "Bilgilerimin bu talep kapsamında iletişim için kullanılmasını kabul ediyorum.",
    submit: "WhatsApp ile yaz",
    errName: "Lütfen adınızı yazın.",
    errPhone: "Lütfen geçerli bir telefon numarası yazın.",
    errConsent: "Devam etmek için onay gerekli.",
    done: "WhatsApp açıldı. Açılmadıysa bizi arayabilirsiniz:",
    mapTitle: "Klinik konumu, haritada aç",
    address: "Adres",
    waGeneral: "Merhaba, bilgi almak istiyorum.",
    waService: "Merhaba, {s} hakkında bilgi almak / bu hizmeti almak istiyorum.",
    waName: "Ad",
    waPhone: "Telefon",
    waNote: "Not",
  },
  en: {
    title: "Contact",
    formTitle: "Contact form",
    name: "Full name",
    phone: "Phone",
    service: "Service",
    anyService: "Choose a service",
    message: "Short message",
    optional: "optional",
    consent: "I agree that my details are used to contact me about this request.",
    submit: "Message us",
    errName: "Please enter your name.",
    errPhone: "Please enter a valid phone number.",
    errConsent: "Consent is required to continue.",
    done: "WhatsApp opened. If it did not, you can call us:",
    mapTitle: "Clinic location, open in maps",
    address: "Address",
    waGeneral: "Hello, I would like some information.",
    waService: "Hello, I would like information about / to get this service: {s}.",
    waName: "Name",
    waPhone: "Phone",
    waNote: "Note",
  },
  de: {
    title: "Kontakt",
    formTitle: "Kontaktformular",
    name: "Vor- und Nachname",
    phone: "Telefon",
    service: "Leistung",
    anyService: "Leistung wählen",
    message: "Kurze Nachricht",
    optional: "optional",
    consent: "Ich bin einverstanden, dass meine Angaben im Rahmen dieser Anfrage zur Kontaktaufnahme verwendet werden.",
    submit: "Schreiben",
    errName: "Bitte geben Sie Ihren Namen ein.",
    errPhone: "Bitte geben Sie eine gültige Telefonnummer ein.",
    errConsent: "Zum Fortfahren ist Ihre Zustimmung nötig.",
    done: "WhatsApp wurde geöffnet. Falls nicht, rufen Sie uns an:",
    mapTitle: "Standort der Klinik, in Karten öffnen",
    address: "Adresse",
    waGeneral: "Guten Tag, ich hätte gern Informationen.",
    waService: "Guten Tag, ich möchte Informationen zu dieser Leistung bzw. sie in Anspruch nehmen: {s}.",
    waName: "Name",
    waPhone: "Telefon",
    waNote: "Notiz",
  },
};
