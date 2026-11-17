// [musteriye sor] EN/DE translations are ours; the clinic should review them (medical wording translated literally).
import type { Localized } from "./types";

export type Service = {
  id: string;
  /** Present only for services that have a detail page. */
  slug?: string;
  title: Localized<string>;
  summary: Localized<string>;
  body?: Localized<string[]>;
  image: string;
  imageAlt: Localized<string>;
};

export const services: Service[] = [
  {
    id: "implant",
    slug: "implant-tedavisi",
    title: { tr: "İmplant Tedavisi", en: "Implant Treatment", de: "Implantologie" },
    summary: {
      tr: "Eksik dişler, estetik kayıpların yanı sıra çiğneme fonksiyonunu da olumsuz etkiler.",
      en: "Missing teeth cause aesthetic loss and also impair chewing function.",
      de: "Fehlende Zähne beeinträchtigen nicht nur die Ästhetik, sondern auch die Kaufunktion.",
    },
    body: {
      tr: [
        "Eksik dişler, estetik kayıpların yanı sıra çiğneme fonksiyonunu da olumsuz etkiler.",
        "İmplant, eksik bir dişin yerine çene kemiğine yerleştirilen ve üzerine kron veya protez yapılmasına imkân tanıyan yapay bir diş köküdür.",
        "Tedavi, muayene ve gerekli görüntülemelerle başlar; kemik yapısı ve genel sağlık durumu değerlendirilerek kişiye özel bir plan hazırlanır.",
        "İmplantın başarısı hekimin planlaması kadar hastanın ağız hijyenine ve düzenli kontrollere de bağlıdır.",
      ],
      en: [
        "Missing teeth cause aesthetic loss and also impair chewing function.",
        "An implant is an artificial tooth root placed in the jawbone in place of a missing tooth, allowing a crown or prosthesis to be made on top of it.",
        "Treatment begins with an examination and the necessary imaging; bone structure and general health are assessed and a personal plan is prepared.",
        "The success of an implant depends on the dentist's planning as much as on the patient's oral hygiene and regular check-ups.",
      ],
      de: [
        "Fehlende Zähne beeinträchtigen nicht nur die Ästhetik, sondern auch die Kaufunktion.",
        "Ein Implantat ist eine künstliche Zahnwurzel, die anstelle eines fehlenden Zahns in den Kieferknochen eingesetzt wird und es ermöglicht, darauf eine Krone oder Prothese anzufertigen.",
        "Die Behandlung beginnt mit einer Untersuchung und der nötigen Bildgebung; Knochenstruktur und allgemeiner Gesundheitszustand werden beurteilt und ein individueller Plan erstellt.",
        "Der Erfolg eines Implantats hängt ebenso von der Planung des Zahnarztes wie von der Mundhygiene des Patienten und regelmäßigen Kontrollen ab.",
      ],
    },
    image: "/images/services/gulus.webp",
    imageAlt: { tr: "Beyaz dişlerle geniş gülüş", en: "Wide smile with white teeth", de: "Strahlendes Lächeln mit weißen Zähnen" },
  },
  {
    id: "cerrahi",
    slug: "agiz-dis-cene-cerrahisi",
    title: {
      tr: "Ağız, Diş ve Çene Cerrahisi",
      en: "Oral, Dental and Maxillofacial Surgery",
      de: "Mund-, Zahn- und Kieferchirurgie",
    },
    summary: {
      tr: "En sık rastlanan cerrahi işlemler implant uygulamaları ve 20 yaş diş çekimleridir.",
      en: "The most common surgical procedures are implant placements and wisdom tooth extractions.",
      de: "Zu den häufigsten chirurgischen Eingriffen zählen Implantationen und Weisheitszahnentfernungen.",
    },
    body: {
      tr: [
        "Ağız, diş ve çene cerrahisi; diş, çene kemiği ve ağız içi yumuşak dokulara yönelik cerrahi işlemleri kapsar.",
        "En sık rastlanan işlemler implant uygulamaları ve 20 yaş dişlerinin çekimidir. Bunun yanında gömülü diş çekimleri ve ağız içi küçük cerrahi girişimler de bu alanda yapılır.",
        "İşlemler genellikle lokal anestezi altında yapılır. Her adım öncesinde hastaya anlatılır, işlem sonrası bakım ve kontrol planı birlikte belirlenir.",
        "Cerrahi gereksinimi muayene ve görüntüleme ile değerlendirilir; her hasta için uygun yöntem hekim tarafından belirlenir.",
      ],
      en: [
        "Oral, dental and maxillofacial surgery covers surgical procedures on the teeth, the jawbone and the soft tissues inside the mouth.",
        "The most common procedures are implant placements and wisdom tooth extractions. Impacted tooth extractions and minor oral surgical procedures are also carried out in this field.",
        "Procedures are usually performed under local anesthesia. Each step is explained to the patient beforehand, and aftercare and follow-up are planned together.",
        "The need for surgery is assessed through examination and imaging; the dentist determines the suitable method for each patient.",
      ],
      de: [
        "Die Mund-, Zahn- und Kieferchirurgie umfasst chirurgische Eingriffe an Zähnen, Kieferknochen und den Weichteilen im Mundraum.",
        "Zu den häufigsten Eingriffen zählen Implantationen und Weisheitszahnentfernungen. Auch die Entfernung verlagerter Zähne und kleinere oralchirurgische Eingriffe gehören zu diesem Bereich.",
        "Die Eingriffe erfolgen in der Regel unter örtlicher Betäubung. Jeder Schritt wird dem Patienten vorher erklärt, Nachsorge und Kontrollen werden gemeinsam geplant.",
        "Die Notwendigkeit eines Eingriffs wird durch Untersuchung und Bildgebung beurteilt; die geeignete Methode legt der Zahnarzt für jeden Patienten fest.",
      ],
    },
    image: "/images/stock/surgery.webp",
    imageAlt: { tr: "Ağız içi cerrahi işlem", en: "Oral surgery procedure close-up", de: "Oralchirurgischer Eingriff in Nahaufnahme" },
  },
  {
    id: "beyazlatma",
    slug: "dis-beyazlatma",
    title: { tr: "Diş Beyazlatma", en: "Teeth Whitening", de: "Zahnaufhellung" },
    summary: {
      tr: "Zaman içinde çay, kahve, sigara, gibi alışkanlıklar veya çeşitli dış etkenler dişlerde renk değişimine yol açabilir.",
      en: "Over time, habits such as tea, coffee or smoking, and various external factors, can cause discoloration of the teeth.",
      de: "Mit der Zeit können Gewohnheiten wie Tee, Kaffee oder Rauchen sowie andere äußere Einflüsse zu Verfärbungen der Zähne führen.",
    },
    body: {
      tr: [
        "Zaman içinde çay, kahve, sigara, gibi alışkanlıklar veya çeşitli dış etkenler dişlerde renk değişimine yol açabilir.",
        "Bu lekelerin ve renklenmelerin bazıları detartraj denen diş taşı temizliği ile çıkabilir.",
        "Dişler doğal renklerini tekrar geri dönerler. Ancak bazı bireyler bu doğal rengin daha da açık hale gelmesini isteyebiliyor.",
        "Bu durumda kozmetik amaçlı beyazlatma yapılabilir. Bu beyazlatmalar hidrojen peroksit esaslı maddelerle yapılır.",
        "Kullanılan maddenin yoğunluğuna göre ofiste kısa süreli veya evde uzun süreli olarak uygulanabilir.",
        "Genel olarak ofiste yapılan hızlı beyazlatmalar daha kısa ömürlü, evde yapılan yavaş beyazlatmalar ise daha uzun ömürlü olur.",
        "Yine de bütün diş ağartma yöntemlerinin kalıcı olmadığını söyleyebiliriz. Periyodik olarak tekrarlanmaları gerekir.",
      ],
      en: [
        "Over time, habits such as tea, coffee or smoking, and various external factors, can cause discoloration of the teeth.",
        "Some of these stains and discolorations can be removed with scaling, the cleaning of tartar.",
        "The teeth then return to their natural color. However, some people want this natural color to become even lighter.",
        "In this case, cosmetic whitening can be performed. These whitening treatments are carried out with hydrogen peroxide based agents.",
        "Depending on the concentration of the agent used, it can be applied in the office for a short time or at home over a longer period.",
        "In general, fast whitening done in the office lasts for a shorter time, while slow whitening done at home lasts longer.",
        "Even so, none of the tooth whitening methods are permanent. They need to be repeated periodically.",
      ],
      de: [
        "Mit der Zeit können Gewohnheiten wie Tee, Kaffee oder Rauchen sowie andere äußere Einflüsse zu Verfärbungen der Zähne führen.",
        "Einige dieser Flecken und Verfärbungen lassen sich durch eine Zahnsteinentfernung (Detartrage) beseitigen.",
        "Die Zähne erhalten dann ihre natürliche Farbe zurück. Manche Menschen wünschen sich jedoch, dass diese natürliche Farbe noch heller wird.",
        "In diesem Fall kann eine kosmetische Zahnaufhellung durchgeführt werden. Diese erfolgt mit Wirkstoffen auf Wasserstoffperoxidbasis.",
        "Je nach Konzentration des verwendeten Wirkstoffs kann sie kurzzeitig in der Praxis oder über einen längeren Zeitraum zu Hause angewendet werden.",
        "Im Allgemeinen halten schnelle Aufhellungen in der Praxis kürzer, langsame Aufhellungen zu Hause dagegen länger.",
        "Dennoch ist keine Methode der Zahnaufhellung dauerhaft. Sie müssen regelmäßig wiederholt werden.",
      ],
    },
    image: "/images/services/estetik-beyazlatma.webp",
    imageAlt: { tr: "Diş rengi seçimi yapılan hasta", en: "Patient choosing a tooth shade", de: "Patient bei der Zahnfarbbestimmung" },
  },
  {
    id: "periodontoloji",
    slug: "periodontoloji-dis-eti-hastaliklari",
    title: {
      tr: "Periodontoloji (Diş Eti Hastalıkları)",
      en: "Periodontology (Gum Diseases)",
      de: "Parodontologie (Zahnfleischerkrankungen)",
    },
    summary: {
      tr: "Periodontoloji, diş eti ve çevresindeki dokuların korunması, hastalıkların teşhisi ve tedavisini kapsar.",
      en: "Periodontology covers the protection of the gums and surrounding tissues and the diagnosis and treatment of their diseases.",
      de: "Die Parodontologie umfasst den Schutz des Zahnfleisches und des umgebenden Gewebes sowie die Diagnose und Behandlung seiner Erkrankungen.",
    },
    body: {
      tr: [
        "Diş eti sağlığı, ağız ve diş sağlığının temelini oluşturur. Periodontoloji, diş eti ve çevresindeki dokuların korunması, hastalıkların teşhisi ve tedavisini kapsar.",
        "Diş eti hastalıkları diş çevresindeki yumuşak dokunun enfeksiyonu iltihaplanması ile başlar buradan kök çevresindeki kemiğin enfeksiyonuna neden olarak ilerler.",
        "Erken aşamada teşhis edilen diş eti hastalıkları diş temizliği gibi basit tedavilerle çözülebilirken, ileri aşamadaki diş eti hastalıkları çeşitli ameliyatlar kemik tozu ilaveleri gibi zor zahmetli ve masraflı cerrahi girişimler ile tedavi edilebilir.",
        "Düzenli ve doğru diş fırçalama diş eti hastalıklarını önlemenin en önemli aracıdır.",
        "Buna ilaveten yapılacak diş hekimi kontrolleri ve gerekirse yapılacak diş taşı temizlikleri diş eti hastalıklarının önüne geçmede en etkili ve basit yöntemlerden sayılabilir.",
      ],
      en: [
        "Gum health forms the foundation of oral and dental health. Periodontology covers the protection of the gums and surrounding tissues and the diagnosis and treatment of their diseases.",
        "Gum diseases begin with infection and inflammation of the soft tissue around the tooth and progress from there to infection of the bone around the root.",
        "Gum diseases diagnosed at an early stage can be resolved with simple treatments such as dental cleaning, while advanced gum diseases can be treated with laborious and costly surgical procedures such as various operations and bone graft additions.",
        "Regular and correct tooth brushing is the most important tool for preventing gum diseases.",
        "In addition, dental check-ups and, if necessary, tartar cleanings are among the most effective and simple ways to prevent gum diseases.",
      ],
      de: [
        "Die Gesundheit des Zahnfleisches bildet die Grundlage der Mund- und Zahngesundheit. Die Parodontologie umfasst den Schutz des Zahnfleisches und des umgebenden Gewebes sowie die Diagnose und Behandlung seiner Erkrankungen.",
        "Zahnfleischerkrankungen beginnen mit einer Infektion und Entzündung des Weichgewebes rund um den Zahn und breiten sich von dort auf eine Infektion des Knochens um die Zahnwurzel aus.",
        "Im Frühstadium erkannte Zahnfleischerkrankungen lassen sich mit einfachen Behandlungen wie einer Zahnreinigung beheben, während fortgeschrittene Erkrankungen nur mit aufwendigen und kostspieligen chirurgischen Eingriffen wie verschiedenen Operationen und Knochenaufbau behandelt werden können.",
        "Regelmäßiges und richtiges Zähneputzen ist das wichtigste Mittel zur Vorbeugung von Zahnfleischerkrankungen.",
        "Zusätzlich zählen zahnärztliche Kontrollen und, falls nötig, Zahnsteinentfernungen zu den wirksamsten und einfachsten Methoden, Zahnfleischerkrankungen vorzubeugen.",
      ],
    },
    image: "/images/services/periodontoloji.webp",
    imageAlt: { tr: "Diş eti muayenesi", en: "Gum examination", de: "Zahnfleischuntersuchung" },
  },
  {
    id: "pedodonti",
    slug: "cocuk-dis-hekimligi",
    title: { tr: "Çocuk Diş Hekimliği", en: "Pediatric Dentistry", de: "Kinderzahnheilkunde" },
    summary: {
      tr: "Tıbbın her alanında olduğu gibi çocuk dişlerinin korunmasında da koruyucu tedaviler erken teşhis erken müdahale çok önemlidir.",
      en: "As in every field of medicine, preventive treatments, early diagnosis and early intervention are very important in protecting children's teeth.",
      de: "Wie in allen Bereichen der Medizin sind auch beim Schutz der Kinderzähne vorbeugende Behandlungen, Früherkennung und frühzeitiges Eingreifen sehr wichtig.",
    },
    body: {
      tr: [
        "Çocuk diş hekimliği (Pedodonti), bebeklik döneminden ergenliğe kadar olan süreçte, çocukların diş gelişimini takip eder ve olası sorunların erken teşhis edilmesini sağlar.",
        "Bu kapsamda; süt dişlerinin sağlıklı gelişimini, çürüklerin önlenmesi ve tedavisi, koruyucu uygulamalar (fissür örtücü, flor uygulaması), travma sonrası müdahaleler ve ortodontik problemlerin erken tespiti özenle gerçekleştirilmektedir.",
        "Tıbbın her alanında olduğu gibi çocuk dişlerinin korunmasında da koruyucu tedaviler erken teşhis erken müdahale çok önemlidir.",
        "Bu nedenle bebeklik döneminden itibaren çocukların diş sağlığını korumak amacıyla diş hekimine danışılmalı, tedavi yapılabilecek yaşlardan itibaren koruyucu tedavilere başlanmalıdır.",
        "Çocukların erken yaşlarda diş hekimiyle tanışması ve ciddi müdahale gerektirmeyecek zamanlarda bu tanışmanın olması diş hekimi korkusunun önüne geçilmesine büyük katkı sağlamaktadır.",
      ],
      en: [
        "Pediatric dentistry (Pedodontics) follows the dental development of children from infancy to adolescence and ensures that possible problems are diagnosed early.",
        "Within this scope, the healthy development of primary teeth, the prevention and treatment of cavities, preventive applications (fissure sealants, fluoride application), interventions after trauma and the early detection of orthodontic problems are carried out with care.",
        "As in every field of medicine, preventive treatments, early diagnosis and early intervention are very important in protecting children's teeth.",
        "For this reason, a dentist should be consulted from infancy onward to protect children's dental health, and preventive treatments should be started from the age at which treatment is possible.",
        "Meeting the dentist at an early age, at a time when no serious intervention is needed, contributes greatly to preventing fear of the dentist.",
      ],
      de: [
        "Die Kinderzahnheilkunde (Pädodontie) begleitet die Zahnentwicklung der Kinder vom Säuglingsalter bis zur Jugend und sorgt dafür, dass mögliche Probleme frühzeitig erkannt werden.",
        "In diesem Rahmen werden die gesunde Entwicklung der Milchzähne, die Vorbeugung und Behandlung von Karies, vorbeugende Maßnahmen (Fissurenversiegelung, Fluoridierung), Eingriffe nach Verletzungen und die Früherkennung kieferorthopädischer Probleme sorgfältig durchgeführt.",
        "Wie in allen Bereichen der Medizin sind auch beim Schutz der Kinderzähne vorbeugende Behandlungen, Früherkennung und frühzeitiges Eingreifen sehr wichtig.",
        "Deshalb sollte bereits ab dem Säuglingsalter ein Zahnarzt konsultiert werden, um die Zahngesundheit der Kinder zu schützen, und ab dem behandlungsfähigen Alter sollten vorbeugende Behandlungen beginnen.",
        "Wenn Kinder den Zahnarzt früh kennenlernen, und zwar zu einem Zeitpunkt, an dem kein ernsthafter Eingriff nötig ist, trägt das wesentlich dazu bei, Angst vor dem Zahnarzt zu vermeiden.",
      ],
    },
    image: "/images/services/pediatrik.webp",
    imageAlt: { tr: "Muayenede gülümseyen çocuk hasta", en: "Smiling child at a dental check-up", de: "Lächelndes Kind bei der Untersuchung" },
  },
  {
    id: "protez",
    slug: "protez-tedavileri",
    title: { tr: "Protez Tedavileri", en: "Prosthetic Treatments", de: "Zahnersatz" },
    summary: {
      tr: "Protez vücuttaki eksik uzuvların yerine konulan aygıtlara verilen addır.",
      en: "A prosthesis is the name given to devices that replace missing body parts.",
      de: "Als Prothese bezeichnet man Vorrichtungen, die fehlende Körperteile ersetzen.",
    },
    body: {
      tr: [
        "Protez vücuttaki eksik uzuvların yerine konulan aygıtlara verilen addır.",
        "Ağız içinde de eksik dişleri tamamlamak için yapılan aygıtlara verilen genel isimlerdir.",
        "Protezler kabaca sabit ve hareketli olarak ikiye ayrılır. Sabit protezler dişler gibi hastanın kendi iradesiyle çıkaramayacağı, çene kemiğine veya diğer dişlere sabitlenen protezlerdir.",
        "İmplantlar, kaplamalar bu protezlerin en bilinenleridir. Total ve bölümlü protezler, halk arasında bilinen adıyla takma dişler ise hareketli protezlerin başlıcalarından sayılabilir.",
        "Sabit protezler hareketli protezlere göre daha konforlu daha kullanışlı alışması daha kolay protezlerdir.",
        "Mümkün olduğunca sabit protezler tercih edilmeli yapılamadığı durumlarda hareketli protezler kullanılmalıdır.",
      ],
      en: [
        "A prosthesis is the name given to devices that replace missing body parts.",
        "In the mouth, it is the general name for devices made to complete missing teeth.",
        "Prostheses are roughly divided into fixed and removable. Fixed prostheses are those that the patient cannot remove at will, like natural teeth, and that are anchored to the jawbone or to other teeth.",
        "Implants and crowns are the best known of these prostheses. Complete and partial dentures, commonly known as false teeth, are among the main removable prostheses.",
        "Fixed prostheses are more comfortable, more practical and easier to get used to than removable prostheses.",
        "Fixed prostheses should be preferred whenever possible, and removable prostheses should be used where this is not possible.",
      ],
      de: [
        "Als Prothese bezeichnet man Vorrichtungen, die fehlende Körperteile ersetzen.",
        "Im Mund ist dies die allgemeine Bezeichnung für Vorrichtungen, die fehlende Zähne ergänzen.",
        "Prothesen werden grob in festsitzende und herausnehmbare unterteilt. Festsitzende Prothesen sind solche, die der Patient wie natürliche Zähne nicht nach Belieben entfernen kann und die am Kieferknochen oder an anderen Zähnen befestigt sind.",
        "Implantate und Kronen sind die bekanntesten dieser Prothesen. Voll- und Teilprothesen, im Volksmund Zahnersatz zum Herausnehmen, zählen zu den wichtigsten herausnehmbaren Prothesen.",
        "Festsitzende Prothesen sind bequemer, praktischer und leichter zu gewöhnen als herausnehmbare Prothesen.",
        "Wenn möglich, sollten festsitzende Prothesen bevorzugt werden; wo dies nicht möglich ist, werden herausnehmbare Prothesen verwendet.",
      ],
    },
    image: "/images/services/protez.webp",
    imageAlt: { tr: "Diş protezi modeli", en: "Dental prosthesis model", de: "Zahnprothesenmodell" },
  },
  {
    id: "endodonti",
    slug: "endodonti-kok-kanal-tedavisi",
    title: {
      tr: "Endodonti (Kök Kanal Tedavisi)",
      en: "Endodontics (Root Canal Treatment)",
      de: "Endodontie (Wurzelkanalbehandlung)",
    },
    summary: {
      tr: "Kanal tedavisi çoğunlukla anestezi altında ağrısız bir şekilde yapılır.",
      en: "Root canal treatment is mostly performed painlessly under anesthesia.",
      de: "Die Wurzelkanalbehandlung wird meist schmerzfrei unter Betäubung durchgeführt.",
    },
    body: {
      tr: [
        "Dişin iç kısmındaki sinir ve damar dokusunun enfeksiyon veya hasar görmesi durumunda uygulanan kök kanal tedavisi, dişi çekmeden korumanın en etkili yöntemlerinden biridir.",
        "Kanal tedavisi çoğunlukla anestezi altında ağrısız bir şekilde yapılır.",
        "Kanal tedavisi sonucunda %100 başarı sağlanması mümkün olmasa da çoğunlukla dişin kurtarılması mümkündür.",
        "Eğer koşullar uygunsa diş çekimine başvurmadan önce uygulanması gereken bir tedavidir.",
      ],
      en: [
        "Root canal treatment, applied when the nerve and vascular tissue inside the tooth is infected or damaged, is one of the most effective ways of keeping a tooth without extracting it.",
        "Root canal treatment is mostly performed painlessly under anesthesia.",
        "Although 100% success cannot be guaranteed with root canal treatment, it is mostly possible to save the tooth.",
        "If conditions are suitable, it is a treatment that should be attempted before resorting to tooth extraction.",
      ],
      de: [
        "Die Wurzelkanalbehandlung, die bei Infektion oder Schädigung des Nerven- und Gefäßgewebes im Zahninneren angewendet wird, ist eine der wirksamsten Methoden, einen Zahn zu erhalten, ohne ihn zu ziehen.",
        "Die Wurzelkanalbehandlung wird meist schmerzfrei unter Betäubung durchgeführt.",
        "Auch wenn bei einer Wurzelkanalbehandlung kein Erfolg von 100 % garantiert werden kann, lässt sich der Zahn meist retten.",
        "Sind die Voraussetzungen günstig, ist sie eine Behandlung, die vor einer Zahnentfernung durchgeführt werden sollte.",
      ],
    },
    image: "/images/services/endodonti.webp",
    imageAlt: { tr: "Mikroskop altında kanal tedavisi", en: "Root canal treatment under a microscope", de: "Wurzelbehandlung unter dem Mikroskop" },
  },
  {
    id: "restoratif",
    slug: "restoratif-dis-tedavisi",
    title: { tr: "Restoratif Diş Tedavisi", en: "Restorative Dentistry", de: "Restaurative Zahnbehandlung" },
    summary: {
      tr: "Restoratif diş tedavisi, çürük, kırık, veya hasar görmüş dişlerin işlev ve estetiğini geri kazandırmayı amaçlar.",
      en: "Restorative dentistry aims to restore the function and aesthetics of decayed, broken or damaged teeth.",
      de: "Die restaurative Zahnbehandlung zielt darauf ab, Funktion und Ästhetik kariöser, gebrochener oder geschädigter Zähne wiederherzustellen.",
    },
    body: {
      tr: [
        "Restoratif diş tedavisi, çürük, kırık, veya hasar görmüş dişlerin işlev ve estetiğini geri kazandırmayı amaçlar.",
        "Restoratif diş tedavisi ya da bilinen adıyla dolgular anestezi altında ağrısız bir şekilde yapılan çoğunlukla tek seansta biten tedavilerdir.",
        "Çürük ne kadar erken fark edilir ve ne kadar erken dolgu yapılırsa başarı şansı ve dolgunun ömrü o kadar artar.",
        "Modern malzemeler sayesinde diş dolguları artık doğal diş renginde yapılabilmekte ve bazen gerçek bir dişten ayırt etmek mümkün olmamaktadır.",
      ],
      en: [
        "Restorative dentistry aims to restore the function and aesthetics of decayed, broken or damaged teeth.",
        "Restorative dentistry, better known as fillings, is performed painlessly under anesthesia and is mostly completed in a single session.",
        "The earlier a cavity is noticed and the earlier a filling is placed, the higher the chance of success and the longer the filling lasts.",
        "Thanks to modern materials, dental fillings can now be made in the natural tooth color and sometimes cannot be distinguished from a real tooth.",
      ],
      de: [
        "Die restaurative Zahnbehandlung zielt darauf ab, Funktion und Ästhetik kariöser, gebrochener oder geschädigter Zähne wiederherzustellen.",
        "Die restaurative Zahnbehandlung, besser bekannt als Füllungen, erfolgt schmerzfrei unter Betäubung und ist meist in einer einzigen Sitzung abgeschlossen.",
        "Je früher eine Karies bemerkt und je früher eine Füllung gelegt wird, desto größer sind die Erfolgsaussichten und desto länger hält die Füllung.",
        "Dank moderner Materialien können Zahnfüllungen heute in der natürlichen Zahnfarbe gefertigt werden und sind manchmal von einem echten Zahn nicht zu unterscheiden.",
      ],
    },
    image: "/images/services/restoratif.webp",
    imageAlt: { tr: "Dolgu yapan eldivenli eller", en: "Gloved hands placing a filling", de: "Behandschuhte Hände beim Füllen" },
  },
  {
    id: "ortodonti",
    slug: "ortodonti-tel-tedavisi",
    title: {
      tr: "Ortodonti (Tel Tedavisi)",
      en: "Orthodontics (Braces Treatment)",
      de: "Kieferorthopädie (Zahnspange)",
    },
    summary: {
      tr: "Ortodontik tedavi genellikle dişlerin çapraşıklıklarını düzeltmeye yarayan tedavi olarak bilinir.",
      en: "Orthodontic treatment is generally known as the treatment used to correct crooked teeth.",
      de: "Die kieferorthopädische Behandlung ist allgemein als die Behandlung zur Korrektur von Zahnfehlstellungen bekannt.",
    },
    body: {
      tr: [
        "Dişlerin ve çenenin doğru hizalanması, yalnızca estetik bir gülüş için değil, aynı zamanda ağız sağlığının korunması için önemlidir.",
        "Ortodontik tedavi genellikle dişlerin çapraşıklıklarını düzeltmeye yarayan tedavi olarak bilinir.",
        "Diş çapraşıklıkları ya da kapanış bozuklukları bazen genetik nedenlere dayanır bazen de erken süt dişi çekimleri erken diş kayıpları nedeniyle olur.",
        "Süt dişlerinin yerinde sağlıklı bir şekilde durması ve zamanından önce çekilmemesi ortodontik tedaviyi önlemek açısından çok önemlidir.",
        "Ortodontik tedavi uygun yaşlarda başladığı takdirde daha hızlı daha kolay ve daha ekonomik bir şekilde sonlandırılabilir.",
      ],
      en: [
        "Correct alignment of the teeth and jaw is important not only for an aesthetic smile but also for maintaining oral health.",
        "Orthodontic treatment is generally known as the treatment used to correct crooked teeth.",
        "Crooked teeth or bite problems are sometimes genetic and sometimes result from early extraction of primary teeth or early tooth loss.",
        "It is very important for preventing orthodontic treatment that primary teeth stay healthy in place and are not extracted before their time.",
        "If orthodontic treatment is started at a suitable age, it can be completed faster, more easily and more economically.",
      ],
      de: [
        "Die korrekte Ausrichtung von Zähnen und Kiefer ist nicht nur für ein ästhetisches Lächeln wichtig, sondern auch für den Erhalt der Mundgesundheit.",
        "Die kieferorthopädische Behandlung ist allgemein als die Behandlung zur Korrektur von Zahnfehlstellungen bekannt.",
        "Zahnfehlstellungen oder Bissstörungen sind manchmal genetisch bedingt, manchmal entstehen sie durch frühzeitig gezogene Milchzähne oder frühen Zahnverlust.",
        "Dass Milchzähne gesund an ihrem Platz bleiben und nicht vorzeitig gezogen werden, ist sehr wichtig, um eine kieferorthopädische Behandlung zu vermeiden.",
        "Wird die kieferorthopädische Behandlung im passenden Alter begonnen, kann sie schneller, einfacher und kostengünstiger abgeschlossen werden.",
      ],
    },
    image: "/images/services/ortodonti.webp",
    imageAlt: { tr: "Tel tedavisi gören gülümseyen genç", en: "Smiling teenager with braces", de: "Lächelnder Jugendlicher mit Zahnspange" },
  },
  {
    id: "seffaf-plak",
    slug: "seffaf-plak-tedavisi",
    title: {
      tr: "Şeffaf Plak Tedavisi (Telsiz Ortodonti)",
      en: "Clear Aligner Treatment (Wireless Orthodontics)",
      de: "Klarsichtschienen-Behandlung (Alignertherapie)",
    },
    summary: {
      tr: "Dişlerin düzgün sıralanması estetik ve fonksiyonel açıdan önemlidir; şeffaf plak dişleri hassas ve görünmez şekilde düzeltir.",
      en: "Properly aligned teeth matter aesthetically and functionally; clear aligners correct the teeth precisely and invisibly.",
      de: "Gerade Zähne sind ästhetisch und funktionell wichtig; Klarsichtschienen korrigieren die Zähne präzise und unsichtbar.",
    },
    body: {
      tr: [
        "Dişlerin düzgün bir şekilde sıralanması, estetik ve fonksiyonel açıdan önemlidir. Dentilion’da uygulanan şeffaf plak tedavisi, dişleri hassas ve görünmez bir şekilde düzelten modern bir ortodontik yöntemdir.",
        "Kişiye özel hazırlanan şeffaf plaklar, günlük yaşamı etkilemeden dişlerin doğru hizalanmasını sağlar. Tedavi süreci boyunca plaklar kolaylıkla takıp çıkarılabilir, hijyen ve konfor ön planda tutulur.",
        "Dentilion ile estetik, konforlu ve etkili bir gülüşe kavuşun.",
      ],
      en: [
        "Properly aligned teeth matter aesthetically and functionally. The clear aligner treatment offered at Dentilion is a modern orthodontic method that corrects the teeth precisely and invisibly.",
        "Custom-made clear aligners align the teeth correctly without affecting daily life. Throughout the treatment the aligners can easily be put in and taken out, with hygiene and comfort in the foreground.",
        "Get an aesthetic, comfortable and effective smile with Dentilion.",
      ],
      de: [
        "Gerade Zähne sind ästhetisch und funktionell wichtig. Die bei Dentilion angewendete Klarsichtschienen-Behandlung ist eine moderne kieferorthopädische Methode, die die Zähne präzise und unsichtbar korrigiert.",
        "Individuell angefertigte Klarsichtschienen richten die Zähne korrekt aus, ohne den Alltag zu beeinträchtigen. Während der gesamten Behandlung lassen sich die Schienen leicht einsetzen und herausnehmen; Hygiene und Komfort stehen im Vordergrund.",
        "Gewinnen Sie mit Dentilion ein ästhetisches, angenehmes und wirkungsvolles Lächeln.",
      ],
    },
    image: "/images/services/seffaf-plak.webp",
    imageAlt: { tr: "Şeffaf plak", en: "Clear aligner", de: "Transparente Schiene" },
  },
  {
    id: "botoks",
    slug: "botoks-tedavisi",
    title: { tr: "Botoks Tedavisi", en: "Botox Treatment", de: "Botox-Behandlung" },
    summary: {
      tr: "Botoks ilgili kas içerisine enjekte edilerek kasılma azaltılır ve hastalığın iyileşmesi sağlanır.",
      en: "Botox is injected into the relevant muscle to reduce contraction and promote healing of the condition.",
      de: "Botox wird in den betreffenden Muskel gespritzt, um die Anspannung zu verringern und die Heilung der Erkrankung zu fördern.",
    },
    body: {
      tr: [
        "Botoks ilgili kas içerisine enjekte edilerek kasılma azaltılır ve hastalığın iyileşmesi sağlanır.",
        "Diş hekimliğinde botoks; diş sıkma ve gıcırdatma gibi alışkanlıklarda çiğneme kaslarının aşırı çalışmasını dengelemek için, ayrıca yüz estetiği amacıyla kullanılabilir.",
        "Uygulama kısa sürer ve muayene sonrasında hekim tarafından kişiye özel planlanır. Uygunluk ve doz, hastanın durumuna göre belirlenir.",
        "Etki kalıcı değildir; gerektiğinde hekimin önerdiği aralıklarla tekrarlanır.",
      ],
      en: [
        "Botox is injected into the relevant muscle to reduce contraction and promote healing of the condition.",
        "In dentistry, botox can be used to balance overworking chewing muscles in habits such as clenching and grinding, and also for facial aesthetics.",
        "The application is short and is planned individually by the dentist after an examination. Suitability and dose are determined according to the patient's condition.",
        "The effect is not permanent; it is repeated at the intervals the dentist recommends when needed.",
      ],
      de: [
        "Botox wird in den betreffenden Muskel gespritzt, um die Anspannung zu verringern und die Heilung der Erkrankung zu fördern.",
        "In der Zahnmedizin kann Botox eingesetzt werden, um bei Gewohnheiten wie Zähnepressen und Knirschen die überarbeiteten Kaumuskeln zu entlasten, außerdem für die Gesichtsästhetik.",
        "Die Anwendung dauert nur kurz und wird nach einer Untersuchung vom Zahnarzt individuell geplant. Eignung und Dosis richten sich nach dem Zustand des Patienten.",
        "Die Wirkung ist nicht dauerhaft; bei Bedarf wird die Behandlung in den vom Zahnarzt empfohlenen Abständen wiederholt.",
      ],
    },
    image: "/images/services/botoks.webp",
    imageAlt: { tr: "Yüz estetiği uygulaması", en: "Facial aesthetic treatment", de: "Ästhetische Gesichtsbehandlung" },
  },
];

export const detailServices = services.filter((s) => s.slug);
