// [musteriye sor] implant, cerrahi and botoks page copy is generic and written by us; the clinic should review it. EN/DE translations are ours too.
import type { Localized } from "./types";

const s = (f: string) => `/images/stock/${f}.webp`;

/** hero banner + two body images per service id. */
export const serviceImages: Record<string, { hero: string; body: [string, string] }> = {
  implant: { hero: s("implant-model"), body: [s("tooth-model"), s("hero-chair")] },
  cerrahi: { hero: s("surgery"), body: [s("clinic-team"), s("treat-doc")] },
  beyazlatma: { hero: s("whitening-shade"), body: [s("smile-joy"), s("smile-close")] },
  periodontoloji: { hero: s("toothbrushes"), body: [s("brush-glass"), s("tooth-pain")] },
  pedodonti: { hero: s("kids-dentist"), body: [s("smile-joy"), s("brush-glass")] },
  protez: { hero: s("implant-crown"), body: [s("tooth-model"), s("smile-close")] },
  endodonti: { hero: s("treat-doc"), body: [s("tooth-pain"), s("clinic-team")] },
  restoratif: { hero: s("tooth-model"), body: [s("smile-close"), s("hero-chair")] },
  ortodonti: { hero: s("braces-model"), body: [s("smile-joy"), s("hero-clinic")] },
  "seffaf-plak": { hero: s("whitening-tray"), body: [s("braces-model"), s("smile-joy")] },
  botoks: { hero: s("smile-close"), body: [s("smile-joy"), s("clinic-team")] },
};

type Detail = {
  benefitsTitle: string;
  benefits: { t: string; d: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const detail: Localized<Detail> = {
  tr: {
    benefitsTitle: "Süreç nasıl ilerler?",
    benefits: [
      { t: "Muayene", d: "Şikâyetiniz dinlenir, ağız içi muayene ve gerekirse görüntüleme yapılır." },
      { t: "Kişiye özel plan", d: "Seçenekler, süre ve sonraki adımlar işlem öncesinde sizinle birlikte netleştirilir." },
      { t: "Konforlu uygulama", d: "Gerektiğinde anestezi ile, her adım anlatılarak ve acele edilmeden ilerlenir." },
      { t: "Kontrol ve takip", d: "İşlem sonrası bakım önerileri verilir, kontroller planlanır." },
    ],
    faqTitle: "Sık sorulanlar",
    faq: [
      { q: "İlk görüşmede ne olur?", a: "Önce sizi dinler, ağzınızı muayene eder ve uygun seçenekleri anlatırız. Karar sizindir; hiçbir işlem sizi bilgilendirmeden başlamaz." },
      { q: "İşlem sırasında acı hisseder miyim?", a: "Gerektiğinde lokal anestezi uygulanır ve işlem boyunca konforunuz gözetilir. Endişeniz varsa randevuda hekimimize söylemeniz yeterli." },
      { q: "Tedavi ne kadar sürer?", a: "Süre, kişinin durumuna göre değişir. Muayeneden sonra sizin için tahmini bir takvim paylaşırız." },
      { q: "Randevuyu nasıl alırım?", a: "Telefon, WhatsApp veya sitedeki randevu formu ile bize ulaşabilirsiniz; en kısa sürede dönüş yaparız." },
    ],
    ctaTitle: "Sorularınız için bizimle görüşün",
    ctaText: "Size uygun seçenekleri muayene sonrasında birlikte değerlendirelim.",
  },
  en: {
    benefitsTitle: "How does the process work?",
    benefits: [
      { t: "Examination", d: "We listen to your concerns, examine your mouth and take imaging if needed." },
      { t: "A personal plan", d: "Options, duration and next steps are clarified with you before any procedure." },
      { t: "Comfortable treatment", d: "With anesthesia when needed, each step explained, and no rushing." },
      { t: "Check-ups and follow-up", d: "Aftercare advice is given and follow-up visits are planned." },
    ],
    faqTitle: "Frequently asked",
    faq: [
      { q: "What happens at the first visit?", a: "We listen to you first, examine your mouth and explain the suitable options. The decision is yours; nothing starts without informing you." },
      { q: "Will I feel pain during the procedure?", a: "Local anesthesia is applied when needed and your comfort is looked after throughout. If you are worried, just tell your dentist at the appointment." },
      { q: "How long does treatment take?", a: "It varies with the individual case. After the examination we share an estimated timeline with you." },
      { q: "How do I book an appointment?", a: "Reach us by phone, WhatsApp or the appointment form on this site; we reply as soon as possible." },
    ],
    ctaTitle: "Talk to us about your questions",
    ctaText: "Let us review the options that suit you together after an examination.",
  },
  de: {
    benefitsTitle: "Wie läuft die Behandlung ab?",
    benefits: [
      { t: "Untersuchung", d: "Wir hören Ihnen zu, untersuchen Ihren Mund und fertigen bei Bedarf Aufnahmen an." },
      { t: "Individueller Plan", d: "Möglichkeiten, Dauer und nächste Schritte klären wir vor jedem Eingriff mit Ihnen." },
      { t: "Angenehme Behandlung", d: "Bei Bedarf mit Betäubung, jeder Schritt wird erklärt, ohne Eile." },
      { t: "Kontrolle und Nachsorge", d: "Sie erhalten Hinweise zur Nachsorge, Kontrolltermine werden geplant." },
    ],
    faqTitle: "Häufige Fragen",
    faq: [
      { q: "Was passiert beim ersten Termin?", a: "Zuerst hören wir Ihnen zu, untersuchen Ihren Mund und erklären die passenden Möglichkeiten. Die Entscheidung liegt bei Ihnen; nichts beginnt ohne Aufklärung." },
      { q: "Spüre ich während der Behandlung Schmerzen?", a: "Bei Bedarf wird eine örtliche Betäubung gesetzt und auf Ihren Komfort geachtet. Haben Sie Bedenken, sagen Sie es dem Zahnarzt einfach beim Termin." },
      { q: "Wie lange dauert die Behandlung?", a: "Das hängt vom Einzelfall ab. Nach der Untersuchung teilen wir Ihnen einen voraussichtlichen Zeitplan mit." },
      { q: "Wie vereinbare ich einen Termin?", a: "Erreichen Sie uns per Telefon, WhatsApp oder über das Terminformular dieser Seite; wir melden uns schnellstmöglich." },
    ],
    ctaTitle: "Sprechen Sie uns bei Fragen an",
    ctaText: "Lassen Sie uns nach einer Untersuchung gemeinsam die passenden Möglichkeiten besprechen.",
  },
};
