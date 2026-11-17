// [musteriye sor] EN/DE translations are ours; the clinic should review them.
// [musteriye sor] Old site exposed only the answers; the questions below are written by us from each answer.
import type { Localized } from "./types";

export type Faq = { q: Localized<string>; a: Localized<string> };

export const faqIntro: Localized<{ title: string; text: string }> = {
  tr: {
    title: "Aklınıza Takılan Sorular mı Var?",
    text: "Sorularınızın Cevaplarına Buradan Ulaşabilirsiniz.",
  },
  en: {
    title: "Any Questions on Your Mind?",
    text: "You can find the answers to your questions here.",
  },
  de: {
    title: "Haben Sie Fragen?",
    text: "Die Antworten auf Ihre Fragen finden Sie hier.",
  },
};

export const faq: Faq[] = [
  {
    q: {
      tr: "Dişlerimde hassasiyet neden olur ve nasıl geçer?",
      en: "What causes tooth sensitivity and how is it treated?",
      de: "Was verursacht empfindliche Zähne und wie wird das behandelt?",
    },
    a: {
      tr: "Dişlerdeki hassasiyetin birkaç nedeni olabilir. Çürükler, diş eti çekilmeleri, diş sıkmaya bağlı minedeki aşınmalar en başlıca nedenler arasında sayılabilir. Hassasiyet çürük nedenli ise dolgu tedavisi yapılması gerekir. diş eti çekilmelerine bağlı hassasiyetler de hassasiyet giderici diş macunları kullanarak uzun vadede ya da klinikte uygulanan ilaçlarla daha kısa vadede çözülebilir. Diş eti çekilmesi sonrası ortaya çıkan kök yüzeylerinde çürük başlamışsa yine dolgu yapılması gerekir. Diş sıkmaya bağlı hassasiyetleri önlemek için dişlerin aşınmasını engelleyen ve geceleri kullanılan plakları yapmak gerekebilir. Bu plaklar ölçü alınarak kişiye özel olarak diş hekiminiz tarafından yapılır.",
      en: "Tooth sensitivity can have several causes. Cavities, gum recession and enamel wear caused by clenching are among the main ones. If the sensitivity is caused by a cavity, a filling is needed. Sensitivity caused by gum recession can be resolved in the long term with desensitizing toothpastes or in the short term with medication applied in the clinic. If decay has started on root surfaces exposed after gum recession, a filling is needed as well. To prevent sensitivity caused by clenching, it may be necessary to make night guards that prevent tooth wear. These guards are made individually by your dentist after taking an impression.",
      de: "Empfindliche Zähne können mehrere Ursachen haben. Karies, Zahnfleischrückgang und Schmelzabrieb durch Zähneknirschen gehören zu den wichtigsten. Ist Karies die Ursache, ist eine Füllung nötig. Empfindlichkeit durch Zahnfleischrückgang lässt sich langfristig mit desensibilisierender Zahnpasta oder kurzfristig mit in der Praxis aufgetragenen Mitteln beheben. Hat sich auf den nach dem Zahnfleischrückgang freiliegenden Wurzeloberflächen Karies gebildet, ist ebenfalls eine Füllung nötig. Um Empfindlichkeit durch Zähneknirschen vorzubeugen, kann es notwendig sein, nachts getragene Schienen anzufertigen, die den Abrieb der Zähne verhindern. Diese Schienen werden von Ihrem Zahnarzt nach Abdrucknahme individuell hergestellt.",
    },
  },
  {
    q: {
      tr: "Ağız kokusunun nedenleri nelerdir?",
      en: "What causes bad breath?",
      de: "Was sind die Ursachen von Mundgeruch?",
    },
    a: {
      tr: "Ağız kokusunun nedenleri çoğunlukla ağızdaki bakterilerdir bu bakterilerin ağızda birikmemesi için yapılması gereken şey dişlerin düzenli temizlenmesi oluşuyorsa diş taşlarını temizlenmesi ve dişlerin üzerine yapışan gözle görülmeyen ince bir plak tabakası olan ve bakterilere konak olan bakteri plağı dediğimiz tabakanın temizlenmesidir. Yine ağızdaki çürükler dişlerdeki büyük çukurlar Ağız kokusuna neden olabilir. Bunlar için yapılacak olan şey çürükleri tedavi etmek, diş taşı varsa onları temizlemektir. Bunlar diş hekiminiz tarafından yapılır sizin yapacağınız şey düzenli olarak ve doğru bir şekilde diş fırçalamaya devam etmektir. Ağız kokusu nadir olarak diyabet, mide rahatsızlıkları ve bazı akciğer hastalıkları kaynaklı da olabilir. Öncelikle ağız içinin kontrolü yapılmalı burada herhangi bir şey bulunamıyorsa ilgili doktora başvurulmalıdır.",
      en: "Bad breath is mostly caused by bacteria in the mouth. To keep these bacteria from accumulating, the teeth must be cleaned regularly, tartar removed if present, and the dental plaque, the invisible thin layer that sticks to the teeth and hosts bacteria, must be cleaned off. Cavities in the mouth and large pits in the teeth can also cause bad breath. For these, the cavities must be treated and any tartar removed. These are done by your dentist; what you can do is continue brushing your teeth regularly and correctly. Rarely, bad breath can also stem from diabetes, stomach problems and some lung diseases. The mouth should be checked first, and if nothing is found there, the relevant doctor should be consulted.",
      de: "Mundgeruch wird meist durch Bakterien im Mund verursacht. Damit sich diese Bakterien nicht ansammeln, müssen die Zähne regelmäßig gereinigt, vorhandener Zahnstein entfernt und der Zahnbelag, die unsichtbare dünne Schicht auf den Zähnen, die Bakterien als Wirt dient, entfernt werden. Auch Karies und große Vertiefungen in den Zähnen können Mundgeruch verursachen. Hier müssen die Kariesstellen behandelt und vorhandener Zahnstein entfernt werden. Das übernimmt Ihr Zahnarzt; Sie selbst sollten weiterhin regelmäßig und richtig Zähne putzen. Selten kann Mundgeruch auch von Diabetes, Magenbeschwerden und einigen Lungenerkrankungen herrühren. Zuerst sollte der Mundraum untersucht werden; wird dort nichts gefunden, sollte der zuständige Arzt aufgesucht werden.",
    },
  },
  {
    q: {
      tr: "Diş çürükleri nasıl önlenir?",
      en: "How can tooth decay be prevented?",
      de: "Wie lässt sich Karies vorbeugen?",
    },
    a: {
      tr: "Diş çürükleri tıp literatüründe en sık rastlanılan hastalık olarak tanımlanmaktadır. Ancak önlenmesi de mümkün olan hastalıklardandır. Eğer erken çocukluk döneminde daha süt dişleri ağızda iken düzenli bir diş hekimi kontrolü başlarsa çeşitli önlemler sonucunda diş çürükleri önlenebilir. Ancak unutulmamalıdır ki diş çürüğü başladıktan sonra geriye dönüşü yoktur ve tedavisi ancak dolgu gibi yöntemlerle yapılabilir. Esas olan diş çürüğünün başlamasını engellemektir. Bunun için çocukluk döneminde çeşitli florür uygulamaları (florür gargaraları ve florür jelleri, vernikleri vb)ile müdahale etmek gerekir. Bunun yanında evde yapılacak düzenli ve doğru bir fırçalama alışkanlığı edinmek olmazsa olmazdır. Süt ve kalıcı dişleri yapılan sür örtücü uygulamaları da koruyuculuk anlamında büyük bir başarı sağlamaktadır.",
      en: "In the medical literature, tooth decay is described as the most common disease. However, it is also among the diseases that can be prevented. If regular dental check-ups begin in early childhood, while the primary teeth are still in the mouth, tooth decay can be prevented through various measures. It must not be forgotten, though, that once tooth decay has started it cannot be reversed and can only be treated with methods such as fillings. What matters is to stop tooth decay from starting. For this, various fluoride applications (fluoride rinses, gels, varnishes and so on) are needed in childhood. In addition, acquiring a regular and correct brushing habit at home is indispensable. Fissure sealant applications on primary and permanent teeth also provide great success in terms of protection.",
      de: "In der medizinischen Literatur wird Karies als die häufigste Erkrankung beschrieben. Sie gehört jedoch auch zu den Erkrankungen, die sich verhindern lassen. Beginnen regelmäßige zahnärztliche Kontrollen schon in der frühen Kindheit, solange noch die Milchzähne im Mund sind, kann Karies durch verschiedene Maßnahmen verhindert werden. Es darf jedoch nicht vergessen werden, dass Karies nach ihrem Beginn nicht mehr rückgängig zu machen ist und nur noch mit Methoden wie Füllungen behandelt werden kann. Entscheidend ist, den Beginn der Karies zu verhindern. Dazu sind in der Kindheit verschiedene Fluoridanwendungen (Fluoridspülungen, Gele, Lacke usw.) nötig. Darüber hinaus ist eine regelmäßige und richtige Putzgewohnheit zu Hause unerlässlich. Auch Fissurenversiegelungen an Milch- und bleibenden Zähnen bieten einen großen Schutz.",
    },
  },
  {
    q: {
      tr: "Diş eti hastalıklarının belirtileri nelerdir?",
      en: "What are the signs of gum disease?",
      de: "Was sind die Anzeichen von Zahnfleischerkrankungen?",
    },
    a: {
      tr: "Diş eti hastalıkları genellikle Ağrı yapmaz. İlk belirtileri diş etinde kızarıklık şişlik dokunulduğunda kanama ya da daha ileri aşamalarda kendiliğinden kanamalardır. Nadiren ağızda yaralar oluşturan ve ağrılı diş eti iltihapları da görülebilir. Çok ileri aşamalarda artık dişler sallanmaya başlar. Bu aşamalar son evreleridir ve dişlerin tedavisi zorlaşır. Diş fırçalama esnasında bir kanama ile karşılaşılıyorsa mutlaka diş hekimine başvurulmalıdır.",
      en: "Gum diseases usually cause no pain. The first signs are redness and swelling of the gums, bleeding when touched or, at more advanced stages, spontaneous bleeding. Rarely, painful gum infections that form sores in the mouth can also occur. At very advanced stages the teeth begin to loosen. These are the final stages and treating the teeth becomes difficult. If bleeding is noticed while brushing, a dentist must be consulted.",
      de: "Zahnfleischerkrankungen verursachen meist keine Schmerzen. Erste Anzeichen sind Rötung und Schwellung des Zahnfleisches, Bluten bei Berührung oder in fortgeschrittenen Stadien spontanes Bluten. Selten kommen auch schmerzhafte Zahnfleischentzündungen vor, die Wunden im Mund bilden. In sehr fortgeschrittenen Stadien beginnen die Zähne zu wackeln. Dies sind die Endstadien, in denen die Behandlung der Zähne schwierig wird. Wenn beim Zähneputzen Blutungen auftreten, sollte unbedingt ein Zahnarzt aufgesucht werden.",
    },
  },
  {
    q: {
      tr: "Çocuğumu ne zaman diş hekimine götürmeliyim?",
      en: "When should I take my child to the dentist?",
      de: "Wann sollte ich mein Kind zum Zahnarzt bringen?",
    },
    a: {
      tr: "Dişler ağız içine sürmeye başladıktan sonra çürüme eğilimi de başlar. Çürümeyi önleyecek en önemli şey beslenmenin düzenlenmesi ve diş fırçalama alışkanlığıdır. Bu nedenle süt dişleri çıktıktan sonra bir diş hekimine başvurarak beslenme ve ağız bakımı konusunda genel bilgileri almakta fayda vardır. 6 ay aralıklı olarak çocuğu diş hekimine götürmek birçok sorunun önüne erken geçilmesini sağlayabilir. Çok Küçük yaşlarda uygulama yapmak çok zor olacağı için önleyici uygulamalar koruyucu tedaviler çok önemlidir.",
      en: "Once the teeth begin to erupt into the mouth, the tendency to decay begins as well. The most important things for preventing decay are regulating nutrition and the habit of brushing. For this reason, after the primary teeth appear it is useful to see a dentist and get general information on nutrition and oral care. Taking the child to the dentist at 6-month intervals can help prevent many problems early. Since treatment at a very young age is very difficult, preventive applications and protective treatments are very important.",
      de: "Sobald die Zähne durchbrechen, beginnt auch die Neigung zu Karies. Das Wichtigste zur Kariesvorbeugung sind eine geregelte Ernährung und die Gewohnheit des Zähneputzens. Deshalb ist es sinnvoll, nach dem Durchbruch der Milchzähne einen Zahnarzt aufzusuchen und allgemeine Informationen zu Ernährung und Mundpflege einzuholen. Wird das Kind im Abstand von 6 Monaten zum Zahnarzt gebracht, können viele Probleme frühzeitig vermieden werden. Da Behandlungen in sehr jungem Alter sehr schwierig sind, sind vorbeugende Maßnahmen und schützende Behandlungen sehr wichtig.",
    },
  },
  {
    q: {
      tr: "Hamilelikte diş tedavisi yapılabilir mi?",
      en: "Can dental treatment be done during pregnancy?",
      de: "Ist eine Zahnbehandlung in der Schwangerschaft möglich?",
    },
    a: {
      tr: "Hamilelik döneminde her türlü tedavi yapılabilir. Ama genellikle en güvenli dönem ikinci 3 aylık dönemdir. İlk 3 ay bebeğe zarar gelme olasılığı son 3 ayda annenin zorlanma olasılığı nedeniyle tercih edilmez. Ancak bu demek değildir ki hamilelik döneminde antibiyotik kullanılmaz dolgu yapılmaz diş çekilmez. İhtiyaç olduğu anda hepsi gerekli önlemler alınarak yapılabilir.",
      en: "Any kind of treatment can be done during pregnancy. However, the safest period is generally the second trimester. The first 3 months are not preferred because of the possibility of harm to the baby, and the last 3 months because of the possibility of strain on the mother. This does not mean, however, that antibiotics are not used, fillings are not placed or teeth are not extracted during pregnancy. When needed, all of these can be done with the necessary precautions.",
      de: "In der Schwangerschaft können alle Arten von Behandlungen durchgeführt werden. Der sicherste Zeitraum ist jedoch im Allgemeinen das zweite Trimester. Die ersten 3 Monate werden wegen der möglichen Gefährdung des Babys, die letzten 3 Monate wegen einer möglichen Belastung der Mutter nicht bevorzugt. Das bedeutet jedoch nicht, dass in der Schwangerschaft keine Antibiotika verwendet, keine Füllungen gelegt und keine Zähne gezogen werden. Bei Bedarf kann all dies unter den nötigen Vorsichtsmaßnahmen durchgeführt werden.",
    },
  },
  {
    q: {
      tr: "Kanal tedavisi ağrılı mıdır?",
      en: "Is root canal treatment painful?",
      de: "Ist eine Wurzelkanalbehandlung schmerzhaft?",
    },
    a: {
      tr: "Hayır, kanal tedavisi sırasında bölgesel anestezi uygulandığı için hasta işlem esnasında ağrı hissetmez.",
      en: "No, because local anesthesia is applied during root canal treatment, the patient does not feel pain during the procedure.",
      de: "Nein, da bei der Wurzelkanalbehandlung eine örtliche Betäubung angewendet wird, verspürt der Patient während des Eingriffs keine Schmerzen.",
    },
  },
];
