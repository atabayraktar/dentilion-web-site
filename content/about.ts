// [musteriye sor] EN/DE translations are ours; the clinic should review them.
import type { Localized } from "./types";

type About = {
  title: string;
  label: string;
  heading: string;
  text: string;
  teamLabel: string;
  teamTitle: string;
  faqTitle: string;
};

export const about: Localized<About> = {
  tr: {
    title: "Hakkımızda",
    label: "Hakkımızda",
    heading: "Deneyim ve Şefkatle Yanınızdayız",
    text: "Kliniğimiz, alanında uzman diş hekimleri ve son teknoloji ekipmanlarla; ağrısız, konforlu ve estetik odaklı tedaviler sunarak, her yaştan hastamıza sağlıklı gülüşler kazandırmayı amaçlamaktadır.",
    teamLabel: "Ekibimiz",
    teamTitle: "Gülüşünüzü yenilemeye adanmış uzman ekip",
    faqTitle: "Merak Ettikleriniz",
  },
  en: {
    title: "About Us",
    label: "About Us",
    heading: "With You, with Experience and Compassion",
    text: "With expert dentists and state-of-the-art equipment, our clinic offers painless, comfortable and aesthetics-focused treatments, aiming to give patients of every age healthy smiles.",
    teamLabel: "Our Team",
    teamTitle: "An expert team dedicated to renewing your smile",
    faqTitle: "What You Wonder About",
  },
  de: {
    title: "Über uns",
    label: "Über uns",
    heading: "Mit Erfahrung und Fürsorge an Ihrer Seite",
    text: "Mit fachkundigen Zahnärzten und modernster Ausstattung bietet unsere Klinik schmerzfreie, komfortable und ästhetisch ausgerichtete Behandlungen und möchte Patienten jeden Alters zu gesunden Lächeln verhelfen.",
    teamLabel: "Unser Team",
    teamTitle: "Ein Expertenteam, das sich der Erneuerung Ihres Lächelns widmet",
    faqTitle: "Was Sie wissen möchten",
  },
};
