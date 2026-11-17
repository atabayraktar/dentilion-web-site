// [musteriye sor] EN/DE translations are ours; the clinic should review them.
import type { Localized } from "./types";

type Home = {
  hero: { title: string; text: string };
  services: { label: string; title: string };
  about: { label: string; title: string; text: string; imageAlt: string };
  team: { label: string; title: string };
};

export const home: Localized<Home> = {
  tr: {
    hero: {
      title: "Sağlıklı Gülüşler İçin Buradayız",
      text: "Dt. Çağlar Gürbüz yönetimindeki kliniğimizde, ihtiyacınız olan tüm tedavileri, etik kurallar çerçevesinde, karşılıklı güven ilişkisi içinde, sağlığınızı önceleyerek yapmaya çalışıyoruz.",
    },
    services: { label: "Hizmetlerimiz", title: "İhtiyacınız olan tüm tedavileri etik kurallar çerçevesinde yapmaya çalışıyoruz." },
    about: {
      label: "Biz Kimiz",
      title: "Etik değerleri tecrübe ve bilgi ile harmanlıyoruz.",
      text: "Dentilion Ağız ve Diş Sağlığı Polikliniği 2023 yılında diş hekimi Çağlar Gürbüz tarafından açıldı. Artan hasta talebine yetişebilmek, daha büyük, ferah ve konforlu bir ortamda hizmet verebilmek ve kurumsal bir anlayışa sahip bir işletme olabilmek amacıyla açılan poliklinigimiz, etik değerleri tecrübe ve bilgi ile harmanlayarak yoluna devam etme amacındadır.",
      imageAlt: "Ayna ve sonda çizimi",
    },
    team: { label: "Ekibimiz", title: "Gülüşünüzü yenilemeye adanmış uzman ekip" },
  },
  en: {
    hero: {
      title: "We Are Here for Healthy Smiles",
      text: "At our clinic led by Dr. Çağlar Gürbüz, we strive to provide all the treatments you need within ethical rules, in a relationship of mutual trust, putting your health first.",
    },
    services: { label: "Our Services", title: "We strive to provide all the treatments you need within ethical rules." },
    about: {
      label: "Who We Are",
      title: "We blend ethical values with experience and knowledge.",
      text: "Dentilion Oral and Dental Health Clinic was opened in 2023 by dentist Çağlar Gürbüz. Opened to keep up with growing patient demand, to serve in a larger, more spacious and comfortable environment and to be a business with a corporate approach, our clinic aims to continue on its way by blending ethical values with experience and knowledge.",
      imageAlt: "Line drawing of a dental mirror and probe",
    },
    team: { label: "Our Team", title: "An expert team dedicated to renewing your smile" },
  },
  de: {
    hero: {
      title: "Wir sind für gesunde Lächeln da",
      text: "In unserer Klinik unter der Leitung von Zahnarzt Çağlar Gürbüz bemühen wir uns, alle Behandlungen, die Sie benötigen, im Rahmen ethischer Regeln, in einem Verhältnis gegenseitigen Vertrauens und mit Vorrang für Ihre Gesundheit durchzuführen.",
    },
    services: { label: "Unsere Leistungen", title: "Wir bemühen uns, alle Behandlungen, die Sie benötigen, im Rahmen ethischer Regeln durchzuführen." },
    about: {
      label: "Wer wir sind",
      title: "Wir verbinden ethische Werte mit Erfahrung und Wissen.",
      text: "Das Dentilion Zentrum für Mund- und Zahngesundheit wurde 2023 vom Zahnarzt Çağlar Gürbüz eröffnet. Eröffnet, um der wachsenden Nachfrage der Patienten gerecht zu werden, in größeren, geräumigeren und angenehmeren Räumen zu arbeiten und ein Unternehmen mit professionellem Selbstverständnis zu sein, möchte unsere Klinik ihren Weg fortsetzen und dabei ethische Werte mit Erfahrung und Wissen verbinden.",
      imageAlt: "Linienzeichnung von Mundspiegel und Sonde",
    },
    team: { label: "Unser Team", title: "Ein Expertenteam, das sich der Erneuerung Ihres Lächelns widmet" },
  },
};
