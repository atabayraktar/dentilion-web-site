// [musteriye sor] EN/DE translations are ours; the clinic should review them.
// [musteriye sor] KVKK / privacy text for the appointment form is not provided yet.
import type { Localized } from "./types";

export const contact: Localized<{ title: string; intro: string; formTitle: string }> = {
  tr: {
    title: "İletişim",
    intro: "Sorularınız veya iletmek istediğiniz görüşleriniz mi var? Size yardım etmek için buradayız. Alttaki formu kullanarak bize yazabilirsiniz.",
    formTitle: "Bize Yazın",
  },
  en: {
    title: "Contact",
    intro: "Do you have questions or comments you would like to share? We are here to help. You can write to us using the form below.",
    formTitle: "Write to Us",
  },
  de: {
    title: "Kontakt",
    intro: "Haben Sie Fragen oder Anliegen, die Sie uns mitteilen möchten? Wir helfen Ihnen gern. Über das untenstehende Formular können Sie uns schreiben.",
    formTitle: "Schreiben Sie uns",
  },
};
