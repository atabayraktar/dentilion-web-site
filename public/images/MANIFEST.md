# Image manifest (B1)
Old-site files are copied 1:1 from .pipeline/source/assets (source = old site). Alt text is Turkish.

| File | Use | Alt | Source |
|---|---|---|---|
| team/cagla.webp (1143x1238) | Team slot 1 | Dt. Cagla, Dentilion dis klinigi ekibi | old home-18 (ASSUMED Cagla, confirm) |
| team/mustafa.webp (321x359) | Team slot 2 | Dt. Mustafa, Dentilion dis klinigi ekibi | old home-17 (ASSUMED Mustafa, low-res, confirm) |
| services/pediatrik.webp | Pediatric card | Dis hekimi muayenede gulumseyen cocuk hasta | old home-21 |
| services/protez.webp | Prosthesis card | Dis protezi modeli | old home-22 |
| services/endodonti.webp | Endodontics card | Mikroskop altinda kanal tedavisi | old home-23 |
| services/restoratif.webp | Restorative card | Dis hekimi eldivenli ellerle dolgu yapiyor | old home-24 |
| services/ortodonti.webp | Orthodontics card | Tel tedavisi goren gulumseyen genc | old home-25 |
| services/seffaf-plak.webp | Clear aligners card | Seffaf plak | old home-26 |
| services/botoks.webp | Botox card | Yuz estetigi uygulamasi | old home-27 |
| services/estetik-beyazlatma.webp | Whitening / restorative alt | Dis rengi secimi yapilan hasta | old home-28 |
| services/periodontoloji.webp | Periodontology card | Dis eti muayenesi | old home-29 |
| services/gulus.webp | Generic smile / quiz banner candidate | Beyaz dislerle genis gulus | old home-30 |
| about/hasta-tedavi.webp | Hero secondary candidate | Tedavi koltugunda gulumseyen hasta | old home-10 |
| about/klinik-bekleme.webp | About/page banner | Klinik bekleme alani | old hakkimizda-38 |
| about/klinik-giris.webp | Clinic exterior | Dentilion klinigi giris cephesi | old hakkimizda-39 |
| about/klinik-ic.webp | Clinic interior | Klinik resepsiyon ve bekleme | old hakkimizda-40 |
| blog/curuk-onleme-kapak.webp (971x370) | Existing blog cover | Dis curuklerini onleme | old dis-curuklerini-31 |
| brand/logo-old.webp | Logo/favicon reference | Dentilion logosu | old logo |

## GAPS (stock download blocked)
Network downloads from Unsplash/Pexels were denied by the permission classifier in this run, so NO stock was fetched. Still missing:
- Hero 4:5 + 3:2; implant, oral surgery (cerrahi), clear whitening hero imagery; 16:9 detail heroes + 2 body 3:2 per service (old files are only 300x460, fine for cards, too small for heroes)
- Quiz banner 16:9, 2 new blog covers, in-article images, blog list banner 21:9, banners for hizmetler/hakkimizda/iletisim 21:9
- Before/after: the old site has NO before/after images (diagnosis.md confirms); needs stock or client photos [musteriye sor]. Existing public/images/ba-*.svg remain.
- Team names Cagla/Mustafa are not in old content; photo mapping is a guess.

## STOCK (Pexels, free licence, downloaded 2026-11-17)
| file | size | alt | source |
|---|---|---|---|
| stock/hero-chair.webp | 1800x2700 | Modern dental chair in a bright clinic | https://images.pexels.com/photos/4269265/pexels-photo-4269265.jpeg (Pexels licence) |
| stock/implant-model.webp | 1800x1200 | Dental implant cross-section model | https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg (Pexels licence) |
| stock/implant-crown.webp | 1800x2700 | Ceramic dental crown held with gloved hand | https://images.pexels.com/photos/38362421/pexels-photo-38362421.jpeg (Pexels licence) |
| stock/tooth-model.webp | 1800x1200 | Dentist showing tooth anatomy model | https://images.pexels.com/photos/4971514/pexels-photo-4971514.jpeg (Pexels licence) |
| stock/braces-model.webp | 1800x2700 | Orthodontic braces on jaw model | https://images.pexels.com/photos/13207278/pexels-photo-13207278.jpeg (Pexels licence) |
| stock/whitening-tray.webp | 1800x2700 | Clear whitening tray | https://images.pexels.com/photos/10896051/pexels-photo-10896051.jpeg (Pexels licence) |
| stock/smile-close.webp | 1800x1201 | Close-up of a healthy white smile | https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg (Pexels licence) |
| stock/toothbrushes.webp | 1800x1200 | Row of toothbrushes | https://images.pexels.com/photos/4045552/pexels-photo-4045552.jpeg (Pexels licence) |
| stock/brush-glass.webp | 1800x1200 | Toothbrushes in a glass | https://images.pexels.com/photos/13466251/pexels-photo-13466251.jpeg (Pexels licence) |

## STOCK 2 (HD, round v0.4)

## STOCK 3 (round v0.9, Pexels licence, 1600w webp <200KB; healthy-food and smile-strawberry removed)
kids-brush 16180688, clinic-room-blue 30902075, dentures-cast 7422519, implant-bridge 12712256, endo-tools 4269359, xray-tablet 4270367, instruments-cast 15771809, ortho-pliers 7787977, aligners-hands 28407748, aligners-hands-2 28407749, tools-blue 33359445, handpieces 6627668, syringe-tools 6502746, implant-closeup 6502340, dental-chair-bw 287237, bamboo-brushes 5478207, bamboo-brush-counter 4202922, smile-toothpaste 15694640, dental-chair 6812479, clinic-room 6812453 (all https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg). Repeats: kids-brush (pedodonti card + blog 3), brush-glass (blog 1 + 3 pool limit avoided: blog1 only).

## v0.9b fixes: removed face/off-topic files (hero-clinic*, clinic-team, whitening-shade, smile-joy, treat-doc, kids-dentist, dentist-patient, tooth-pain, hygienist, surgery, clinic-teal-chair, magnifier-blue, dental-chair-bw, aligners-hands-2, smile-teeth-close). New Pexels: surgery-tools 4269371, botox-syringe 28407648, botox-vials 15688022.
