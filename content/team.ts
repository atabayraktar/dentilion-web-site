// [musteriye sor] EN/DE translations are ours; current team list is unknown, add or remove entries here.
import type { Localized } from "./types";

export type Member = {
  id: string;
  name: string;
  /** path under public/, 4:5 portrait */
  photo: string;
  role: Localized<string>;
  bio: Localized<string>;
};

const dentist: Localized<string> = { tr: "Diş Hekimi", en: "Dentist", de: "Zahnarzt" };

export const TEAM_SLOTS = 6;
export const comingSoon: Localized<string> = { tr: "Yakında", en: "Coming soon", de: "Demnächst" };

export const team: Member[] = [
  {
    id: "caglar-gurbuz",
    name: "Çağlar Gürbüz",
    photo: "/images/team/cagla.webp",
    role: dentist,
    bio: {
      tr: "1969 yılında Merzifon’da doğdu. Ortaokul ve Lise öğretimini Saint-Joseph Fransız Erkek Lisesi’nde tamamladı. 1996 yılında İstanbul Üniversitesi Çapa Diş Hekimliği Fakültesi'ni bitirdi.",
      en: "Born in Merzifon in 1969. He completed middle and high school at Saint-Joseph French Boys' High School. He graduated from Istanbul University Çapa Faculty of Dentistry in 1996.",
      de: "1969 in Merzifon geboren. Mittel- und Oberschule besuchte er am Französischen Knabengymnasium Saint-Joseph. 1996 schloss er die Zahnmedizinische Fakultät Çapa der Universität Istanbul ab.",
    },
  },
  {
    id: "mustafa-akgul",
    name: "Mustafa Akgül",
    photo: "/images/team/mustafa.webp",
    role: dentist,
    bio: {
      tr: "1999 yılında Samsun'da doğdu. İlkokul ve liseyi Samsun'da bitirdikten sonra 2022 yılında İstanbul Üniversitesi Diş Hekimliği Fakültesi'nden mezun oldu. 2025 yılından itibaren kliniğimizde görev yapmaktadır. İngilizce biliyor.",
      en: "Born in Samsun in 1999. After finishing primary and high school in Samsun, he graduated from Istanbul University Faculty of Dentistry in 2022. He has worked at our clinic since 2025. He speaks English.",
      de: "1999 in Samsun geboren. Nach Grundschule und Gymnasium in Samsun schloss er 2022 die Zahnmedizinische Fakultät der Universität Istanbul ab. Seit 2025 arbeitet er in unserer Klinik. Er spricht Englisch.",
    },
  },
];
