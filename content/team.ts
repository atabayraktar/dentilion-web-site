// [musteriye sor] EN/DE translations are ours; current team list is unknown, add or remove entries here.
import type { Localized } from "./types";

export type Member = {
  id: string;
  name: string;
  /** Optional portrait under public/ (4:5). Leave unset to show the brand placeholder. */
  photo?: string;
  role: Localized<string>;
  /** Omit when no biography was provided. */
  bio?: Localized<string>;
};

const dentist: Localized<string> = { tr: "Diş Hekimi", en: "Dentist", de: "Zahnarzt" };

export const team: Member[] = [
  {
    id: "caglar-gurbuz",
    name: "Dt. Çağlar GÜRBÜZ",
    role: dentist,
    bio: {
      tr: "1969 yılında Merzifon’da doğdu. Ortaokul ve Lise öğretimini Saint-Joseph Fransız Erkek Lisesi’nde tamamladı. 1996 yılında İstanbul Üniversitesi Çapa Diş Hekimliği Fakültesi'ni bitirdi.",
      en: "Born in Merzifon in 1969. He completed middle and high school at Saint-Joseph French Boys' High School. He graduated from Istanbul University Çapa Faculty of Dentistry in 1996.",
      de: "1969 in Merzifon geboren. Mittel- und Oberschule besuchte er am Französischen Knabengymnasium Saint-Joseph. 1996 schloss er die Zahnmedizinische Fakultät Çapa der Universität Istanbul ab.",
    },
  },
  { id: "mustafa-akgul", name: "Dt. Mustafa AKGÜL", role: dentist },
  { id: "selin-kurt", name: "Dt. Selin KURT", role: dentist },
];
