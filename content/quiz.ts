// [musteriye sor] EN/DE translations are ours; the clinic should review them.
import type { Localized } from "./types";

type Option = { label: string; service: string };
type Question = { q: string; options: Option[] };

/** `service` is a services.ts slug. The most picked slug wins; ties go to the first answer. */
export const quiz: Localized<{ title: string; start: string; result: string; open: string; begin: string; cta: string; close: string; fit: string; questions: Question[] }> = {
  tr: {
    title: "Size hangi tedavi uygun?",
    start: "3 kısa soru",
    result: "Size önerimiz",
    open: "Tedaviyi incele",
    begin: "Teste başla", cta: "Bize ulaşın", close: "Kapat", fit: "Şu tedavi uygun",
    questions: [
      {
        q: "Sizi en çok ne rahatsız ediyor?",
        options: [
          { label: "Dişlerim çapraşık", service: "seffaf-plak-tedavisi" },
          { label: "Renk ve lekeler", service: "dis-beyazlatma" },
          { label: "Ağrı, çürük ya da kırık", service: "restoratif-dis-tedavisi" },
        ],
      },
      {
        q: "Tedaviden en çok ne bekliyorsunuz?",
        options: [
          { label: "Görünmez ve konforlu çözüm", service: "seffaf-plak-tedavisi" },
          { label: "Daha açık renk", service: "dis-beyazlatma" },
          { label: "Dişimi kurtarmak", service: "endodonti-kok-kanal-tedavisi" },
        ],
      },
      {
        q: "Tedavi kimin için?",
        options: [
          { label: "Çocuğum için", service: "cocuk-dis-hekimligi" },
          { label: "Kendim için, diş eti sorunum var", service: "periodontoloji-dis-eti-hastaliklari" },
          { label: "Kendim için, eksik dişim var", service: "protez-tedavileri" },
        ],
      },
    ],
  },
  en: {
    title: "Which treatment suits you?",
    start: "3 short questions",
    result: "Our suggestion",
    open: "See the treatment",
    begin: "Start the quiz", cta: "Contact us", close: "Close", fit: "This treatment suits you",
    questions: [
      {
        q: "What bothers you most?",
        options: [
          { label: "My teeth are crooked", service: "seffaf-plak-tedavisi" },
          { label: "Color and stains", service: "dis-beyazlatma" },
          { label: "Pain, cavities or a broken tooth", service: "restoratif-dis-tedavisi" },
        ],
      },
      {
        q: "What do you expect most from treatment?",
        options: [
          { label: "An invisible and comfortable solution", service: "seffaf-plak-tedavisi" },
          { label: "A lighter color", service: "dis-beyazlatma" },
          { label: "Saving my tooth", service: "endodonti-kok-kanal-tedavisi" },
        ],
      },
      {
        q: "Who is the treatment for?",
        options: [
          { label: "My child", service: "cocuk-dis-hekimligi" },
          { label: "Me, I have a gum problem", service: "periodontoloji-dis-eti-hastaliklari" },
          { label: "Me, I have missing teeth", service: "protez-tedavileri" },
        ],
      },
    ],
  },
  de: {
    title: "Welche Behandlung passt zu Ihnen?",
    start: "3 kurze Fragen",
    result: "Unsere Empfehlung",
    open: "Behandlung ansehen",
    begin: "Quiz starten", cta: "Kontakt aufnehmen", close: "Schließen", fit: "Diese Behandlung passt",
    questions: [
      {
        q: "Was stört Sie am meisten?",
        options: [
          { label: "Meine Zähne stehen schief", service: "seffaf-plak-tedavisi" },
          { label: "Farbe und Flecken", service: "dis-beyazlatma" },
          { label: "Schmerzen, Karies oder ein abgebrochener Zahn", service: "restoratif-dis-tedavisi" },
        ],
      },
      {
        q: "Was erwarten Sie am meisten von der Behandlung?",
        options: [
          { label: "Eine unsichtbare und angenehme Lösung", service: "seffaf-plak-tedavisi" },
          { label: "Eine hellere Farbe", service: "dis-beyazlatma" },
          { label: "Meinen Zahn zu retten", service: "endodonti-kok-kanal-tedavisi" },
        ],
      },
      {
        q: "Für wen ist die Behandlung?",
        options: [
          { label: "Für mein Kind", service: "cocuk-dis-hekimligi" },
          { label: "Für mich, ich habe ein Zahnfleischproblem", service: "periodontoloji-dis-eti-hastaliklari" },
          { label: "Für mich, mir fehlen Zähne", service: "protez-tedavileri" },
        ],
      },
    ],
  },
};
