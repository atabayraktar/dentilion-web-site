// [musteriye sor] EN/DE translations are ours; the clinic should review them.
// Note: keep-map string "Gece yatmadan önce Fırçalarken..." spans a list item and a paragraph here.
import type { Localized } from "./types";

type Section = { h: string; p: string[]; list?: string[]; after?: string };
type Post = { title: string; intro: string; sections: Section[]; excerpt: string; alt: [string, string, string] };

export const posts = [
  {
    slug: "dis-curuklerini-onlemenin-7-etkili-yolu",
    date: "2025-08-11",
    images: ["/images/stock/toothbrushes.webp", "/images/stock/brush-glass.webp", "/images/stock/smile-close.webp"],
    content: {
      tr: {
        alt: ["Renkli diş fırçaları", "Bardakta duran diş fırçası", "Sağlıklı dişlerle gülümseme"],
        title: "Diş Çürüklerini Önlemenin 7 Etkili Yolu",
        excerpt: "Diş çürükleri, hem estetik hem de sağlık açısından ciddi...",
        intro:
          "Diş çürükleri, hem estetik hem de sağlık açısından ciddi sorunlara yol açabilen yaygın bir problemdir. Doğru ağız bakımı ve beslenme alışkanlıklarıyla çürüklerin büyük ölçüde önüne geçmek mümkündür. İşte diş çürüklerini önlemenin 7 etkili yolu.",
        sections: [
          {
            h: "Düzenli ve Doğru Diş Fırçalama",
            p: ["Dişlerinizi günde en az iki kez, florürlü diş macunu ile fırçalamak çürük riskini büyük ölçüde azaltır."],
            list: ["Sabah kahvaltıdan sonra", "Gece yatmadan önce"],
            after: "Fırçalarken diş yüzeylerine, diş etine ve dilinize de dikkat edin.",
          },
          {
            h: "Diş İpi Kullanmayı İhmal Etmeyin",
            p: ["Fırça kıllarının ulaşamadığı diş araları, bakteri plağı ve yemek artıkları için idealdir. Günlük diş ipi kullanımı, çürüklerin diş aralarında oluşmasını önler."],
          },
          {
            h: "Şekerli ve Asitli Gıdalardan Kaçının",
            p: ["Şeker, ağızdaki bakteriler tarafından asite dönüştürülür ve bu asit mine tabakasına zarar verir."],
            list: ["Gazlı içecekler", "Şekerlemeler", "Fazla tüketilen meyve suları"],
            after: "Bunları sınırlamak diş sağlığınız için önemlidir.",
          },
          {
            h: "Düzenli Diş Hekimi Kontrolleri",
            p: ["Yılda en az iki kez diş hekimine gitmek, erken dönemde oluşabilecek çürükleri fark edip tedavi etmeyi sağlar. Profesyonel temizlik de diş minesini güçlendirir."],
          },
          {
            h: "Yeterli Su İçmek",
            p: ["Su, ağızda asit oranını dengeler ve yemek artıklarını uzaklaştırır. Florürlü içme suları, diş minesini korumaya yardımcı olur."],
          },
          {
            h: "Sağlıklı Beslenme Alışkanlıkları",
            p: ["Kalsiyum, fosfor ve D vitamini açısından zengin gıdalar diş yapısını güçlendirir."],
            list: ["Süt ve süt ürünleri", "Yeşil yapraklı sebzeler", "Fındık ve badem"],
          },
          {
            h: "Florür Takviyesinden Yararlanın",
            p: ["Florür, diş minesini onarır ve çürük oluşumunu engeller. Florürlü diş macunları, gargaralar ve diş hekimi tarafından uygulanan florür tedavileri oldukça etkilidir."],
          },
        ],
      },
      en: {
        alt: ["Colourful toothbrushes", "Toothbrush standing in a glass", "A smile with healthy teeth"],
        title: "7 Effective Ways to Prevent Tooth Decay",
        excerpt: "Tooth decay is a common problem that can cause serious issues, both aesthetic and for your health...",
        intro:
          "Tooth decay is a common problem that can cause serious issues, both aesthetic and for your health. With proper oral care and eating habits, it is largely possible to prevent cavities. Here are 7 effective ways to prevent tooth decay.",
        sections: [
          {
            h: "Brush Regularly and Correctly",
            p: ["Brushing your teeth at least twice a day with fluoride toothpaste greatly reduces the risk of decay."],
            list: ["After breakfast in the morning", "Before going to bed at night"],
            after: "While brushing, also pay attention to the tooth surfaces, the gums and your tongue.",
          },
          {
            h: "Do Not Neglect Dental Floss",
            p: ["The spaces between teeth, which the bristles cannot reach, are ideal for bacterial plaque and food debris. Daily flossing prevents cavities from forming between the teeth."],
          },
          {
            h: "Avoid Sugary and Acidic Foods",
            p: ["Sugar is converted into acid by bacteria in the mouth, and this acid damages the enamel layer."],
            list: ["Fizzy drinks", "Sweets", "Excessive fruit juice"],
            after: "Limiting these is important for your dental health.",
          },
          {
            h: "Regular Dental Check-ups",
            p: ["Going to the dentist at least twice a year makes it possible to notice and treat cavities that may form early. Professional cleaning also strengthens the tooth enamel."],
          },
          {
            h: "Drink Enough Water",
            p: ["Water balances the acid level in the mouth and washes away food debris. Fluoridated drinking water helps protect the tooth enamel."],
          },
          {
            h: "Healthy Eating Habits",
            p: ["Foods rich in calcium, phosphorus and vitamin D strengthen the tooth structure."],
            list: ["Milk and dairy products", "Leafy green vegetables", "Hazelnuts and almonds"],
          },
          {
            h: "Make Use of Fluoride Supplements",
            p: ["Fluoride repairs tooth enamel and prevents cavity formation. Fluoride toothpastes, mouth rinses and fluoride treatments applied by the dentist are very effective."],
          },
        ],
      },
      de: {
        alt: ["Bunte Zahnbürsten", "Zahnbürste im Glas", "Lächeln mit gesunden Zähnen"],
        title: "7 wirksame Wege, Karies vorzubeugen",
        excerpt: "Karies ist ein weit verbreitetes Problem, das sowohl ästhetisch als auch gesundheitlich ernste Folgen haben kann...",
        intro:
          "Karies ist ein weit verbreitetes Problem, das sowohl ästhetisch als auch gesundheitlich ernste Folgen haben kann. Mit richtiger Mundpflege und gesunden Ernährungsgewohnheiten lässt sich Karies weitgehend verhindern. Hier sind 7 wirksame Wege, Karies vorzubeugen.",
        sections: [
          {
            h: "Regelmäßig und richtig Zähne putzen",
            p: ["Wer die Zähne mindestens zweimal täglich mit fluoridhaltiger Zahnpasta putzt, senkt das Kariesrisiko erheblich."],
            list: ["Morgens nach dem Frühstück", "Abends vor dem Schlafengehen"],
            after: "Achten Sie beim Putzen auch auf die Zahnoberflächen, das Zahnfleisch und die Zunge.",
          },
          {
            h: "Zahnseide nicht vernachlässigen",
            p: ["Die Zahnzwischenräume, die die Borsten nicht erreichen, sind ideal für Zahnbelag und Speisereste. Tägliche Zahnseide verhindert, dass Karies in den Zahnzwischenräumen entsteht."],
          },
          {
            h: "Zuckerhaltige und saure Lebensmittel meiden",
            p: ["Zucker wird von den Bakterien im Mund in Säure umgewandelt, und diese Säure schädigt den Zahnschmelz."],
            list: ["Kohlensäurehaltige Getränke", "Süßigkeiten", "Übermäßig viel Fruchtsaft"],
            after: "Diese einzuschränken ist wichtig für Ihre Zahngesundheit.",
          },
          {
            h: "Regelmäßige Kontrollen beim Zahnarzt",
            p: ["Mindestens zweimal im Jahr zum Zahnarzt zu gehen ermöglicht es, früh entstehende Karies zu erkennen und zu behandeln. Auch die professionelle Reinigung stärkt den Zahnschmelz."],
          },
          {
            h: "Ausreichend Wasser trinken",
            p: ["Wasser gleicht den Säuregehalt im Mund aus und spült Speisereste weg. Fluoridhaltiges Trinkwasser trägt zum Schutz des Zahnschmelzes bei."],
          },
          {
            h: "Gesunde Ernährungsgewohnheiten",
            p: ["Lebensmittel, die reich an Kalzium, Phosphor und Vitamin D sind, stärken die Zahnsubstanz."],
            list: ["Milch und Milchprodukte", "Grünes Blattgemüse", "Haselnüsse und Mandeln"],
          },
          {
            h: "Fluorid nutzen",
            p: ["Fluorid repariert den Zahnschmelz und verhindert die Entstehung von Karies. Fluoridhaltige Zahnpasta, Mundspülungen und vom Zahnarzt durchgeführte Fluoridbehandlungen sind sehr wirksam."],
          },
        ],
      },
    } satisfies Localized<Post>,
  },
  {
    slug: "dis-agrisi-ne-zaman-doktora-gidilmeli",
    date: "2025-09-15",
    images: ["/images/stock/tooth-model.webp", "/images/stock/magnifier-blue.webp", "/images/stock/smile-teeth-close.webp"],
    content: {
      tr: {
        alt: ["Diş anatomisi modeli", "Mavi zeminde büyüteç", "Sağlıklı beyaz dişler"],
        title: "Diş Ağrısı: Ne Zaman Diş Hekimine Gitmeli?",
        excerpt: "Her diş ağrısı aynı değildir. Hangi belirtilerin beklemeye gelmediğini anlatıyoruz...",
        intro: "Diş ağrısı çoğu zaman bir şeylerin ters gittiğini gösteren ilk işarettir. Bazı ağrılar kendiliğinden geçer, bazıları ise tedavi edilmezse büyür. Bu yazıda hangi durumlarda beklememeniz gerektiğini özetliyoruz.",
        sections: [
          {
            h: "Hemen Randevu Almanız Gereken Belirtiler",
            p: ["Aşağıdaki belirtilerden biri varsa ağrının kendiliğinden geçmesini beklemeyin."],
            list: ["İki günden uzun süren ağrı", "Yüzde veya çenede şişlik", "Ateşle birlikte gelen diş ağrısı", "Sıcak ve soğuğa uzun süre devam eden hassasiyet"],
          },
          {
            h: "Ağrı Kesici Kalıcı Çözüm Değildir",
            p: ["Ağrı kesiciler yalnızca belirtiyi geçici olarak bastırır. Asıl neden olan çürük, kırık veya enfeksiyon tedavi edilmedikçe ağrı geri döner."],
          },
          {
            h: "Muayenede Neler Yapılır?",
            p: ["Hekiminiz önce şikâyetinizi dinler, ağzınızı muayene eder ve gerekirse röntgen çeker. Nedene göre dolgu, kanal tedavisi veya başka bir uygulama planlanır."],
          },
        ],
      },
      en: {
        alt: ["Tooth anatomy model", "Magnifying glass on a blue background", "Healthy white teeth"],
        title: "Toothache: When Should You See a Dentist?",
        excerpt: "Not every toothache is the same. We explain which symptoms should not be left waiting...",
        intro: "A toothache is often the first sign that something is wrong. Some pain passes on its own, while other pain grows if left untreated. This article summarises when you should not wait.",
        sections: [
          {
            h: "Symptoms That Need an Appointment Right Away",
            p: ["If you have any of the following, do not wait for the pain to pass on its own."],
            list: ["Pain lasting more than two days", "Swelling in the face or jaw", "Toothache together with fever", "Sensitivity to hot and cold that lingers"],
          },
          {
            h: "Painkillers Are Not a Permanent Solution",
            p: ["Painkillers only suppress the symptom for a while. Unless the underlying cavity, crack or infection is treated, the pain comes back."],
          },
          {
            h: "What Happens at the Examination?",
            p: ["Your dentist first listens to your complaint, examines your mouth and, if needed, takes an X-ray. Depending on the cause, a filling, root canal treatment or another procedure is planned."],
          },
        ],
      },
      de: {
        alt: ["Zahnmodell", "Lupe auf blauem Hintergrund", "Gesunde weiße Zähne"],
        title: "Zahnschmerzen: Wann sollten Sie zum Zahnarzt?",
        excerpt: "Nicht jeder Zahnschmerz ist gleich. Wir erklären, bei welchen Anzeichen Sie nicht warten sollten...",
        intro: "Zahnschmerzen sind oft das erste Zeichen, dass etwas nicht stimmt. Manche Schmerzen vergehen von selbst, andere werden ohne Behandlung schlimmer. Dieser Beitrag fasst zusammen, wann Sie nicht warten sollten.",
        sections: [
          {
            h: "Anzeichen, bei denen Sie sofort einen Termin brauchen",
            p: ["Bei einem der folgenden Anzeichen sollten Sie nicht abwarten, bis der Schmerz von selbst vergeht."],
            list: ["Schmerzen, die länger als zwei Tage anhalten", "Schwellung im Gesicht oder Kiefer", "Zahnschmerzen mit Fieber", "Lang anhaltende Empfindlichkeit auf Heiß und Kalt"],
          },
          {
            h: "Schmerzmittel sind keine Dauerlösung",
            p: ["Schmerzmittel unterdrücken das Symptom nur vorübergehend. Solange die Ursache, etwa Karies, ein Riss oder eine Entzündung, nicht behandelt wird, kehrt der Schmerz zurück."],
          },
          {
            h: "Was passiert bei der Untersuchung?",
            p: ["Ihr Zahnarzt hört zuerst Ihre Beschwerden an, untersucht den Mund und macht bei Bedarf eine Röntgenaufnahme. Je nach Ursache wird eine Füllung, eine Wurzelbehandlung oder ein anderer Eingriff geplant."],
          },
        ],
      },
    } satisfies Localized<Post>,
  },
  {
    slug: "cocuklarda-dis-sagligi-icin-5-ipucu",
    date: "2025-10-06",
    images: ["/images/stock/brush-glass.webp", "/images/stock/smile-teeth-close.webp", "/images/stock/healthy-food.webp"],
    content: {
      tr: {
        alt: ["Bardakta diş fırçaları", "Sağlıklı beyaz dişlerle gülümseme", "Sağlıklı sebze ve meyve sepeti"],
        title: "Çocuklarda Diş Sağlığı İçin 5 İpucu",
        excerpt: "Sağlıklı bir gülümseme için alışkanlıklar küçük yaşta başlar...",
        intro: "Çocukluk döneminde kazanılan ağız bakımı alışkanlıkları ömür boyu sürer. Süt dişleri de kalıcı dişler kadar önemlidir. İşte ailelerin uygulayabileceği pratik ipuçları.",
        sections: [
          {
            h: "Fırçalamayı Oyuna Çevirin",
            p: ["Çocuğunuzla birlikte fırçalayın ve süreyi iki dakikaya tamamlamaya çalışın. Yaşına uygun, küçük başlıklı bir fırça seçin."],
          },
          {
            h: "Şekerli Atıştırmalıkları Sınırlayın",
            p: ["Gün içine yayılan şekerli atıştırmalıklar çürük riskini artırır."],
            list: ["Meyve suyu yerine su", "Şekerleme yerine meyve veya peynir", "Yatmadan önce şekerli içecek vermeyin"],
          },
          {
            h: "Erken Yaşta İlk Muayene",
            p: ["İlk dişin çıkmasından sonra, en geç bir yaşına kadar çocuğunuzu diş hekimine götürmenizi öneririz. Böylece çocuk ortamı tanır ve korku gelişmez."],
          },
        ],
      },
      en: {
        alt: ["Toothbrushes in a glass", "A smile with healthy white teeth", "Basket of healthy vegetables and fruit"],
        title: "5 Tips for Children's Dental Health",
        excerpt: "Healthy smiles start with habits formed at a young age...",
        intro: "Oral care habits learned in childhood last a lifetime. Baby teeth matter just as much as permanent ones. Here are practical tips families can apply.",
        sections: [
          {
            h: "Turn Brushing Into a Game",
            p: ["Brush together with your child and aim for two full minutes. Choose an age-appropriate brush with a small head."],
          },
          {
            h: "Limit Sugary Snacks",
            p: ["Sugary snacks spread through the day raise the risk of decay."],
            list: ["Water instead of fruit juice", "Fruit or cheese instead of sweets", "No sugary drinks before bed"],
          },
          {
            h: "A First Visit at an Early Age",
            p: ["We recommend taking your child to the dentist after the first tooth appears, and by the age of one at the latest. This way the child gets used to the surroundings and fear does not develop."],
          },
        ],
      },
      de: {
        alt: ["Zahnbürsten im Glas", "Lächeln mit gesunden weißen Zähnen", "Korb mit gesundem Gemüse und Obst"],
        title: "5 Tipps für gesunde Kinderzähne",
        excerpt: "Ein gesundes Lächeln beginnt mit Gewohnheiten im frühen Alter...",
        intro: "Mundpflege-Gewohnheiten aus der Kindheit begleiten ein Leben lang. Milchzähne sind genauso wichtig wie bleibende Zähne. Hier sind praktische Tipps für Familien.",
        sections: [
          {
            h: "Zähneputzen zum Spiel machen",
            p: ["Putzen Sie gemeinsam mit Ihrem Kind und achten Sie auf volle zwei Minuten. Wählen Sie eine altersgerechte Zahnbürste mit kleinem Kopf."],
          },
          {
            h: "Zuckerhaltige Snacks begrenzen",
            p: ["Über den Tag verteilte süße Snacks erhöhen das Kariesrisiko."],
            list: ["Wasser statt Fruchtsaft", "Obst oder Käse statt Süßigkeiten", "Keine gezuckerten Getränke vor dem Schlafen"],
          },
          {
            h: "Der erste Besuch im frühen Alter",
            p: ["Wir empfehlen, Ihr Kind nach dem Durchbruch des ersten Zahns, spätestens aber mit einem Jahr, zum Zahnarzt zu bringen. So gewöhnt es sich an die Umgebung und es entsteht keine Angst."],
          },
        ],
      },
    } satisfies Localized<Post>,
  },
];

export type BlogPost = (typeof posts)[number];
