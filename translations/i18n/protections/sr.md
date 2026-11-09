---
title: "Zaštite: zatvaranje curenja u pregledaču"
description: Kako Privacy Magic štiti vašu privatnost dok pregledate veb
backToTop: "↑ Nazad na vrh"
---

Privacy Magic je open-source proširenje za Chrome koje sveobuhvatno štiti vašu privatnost dok pregledate veb. Pregledači mnogo cure, pa Privacy Magic pruža više slojeva zaštite, uključujući [blokiranje oglasa i pratilaca](#blocking-ads-and-trackers), [zaštitu sistemskih informacija](#protecting-system-information-fingerprinting), [uklanjanje tragova praćenja](#removing-tracking-breadcrumbs), [zaustavljanje veb curenja](#stopping-web-leaks), [slanje signala privatnosti](#privacy-signals) i [primenu zaštita pregledača](#browser-protections).

## Blokiranje oglasa i pratilaca {#blocking-ads-and-trackers}

Širom veba, reklame, skripte za praćenje i pikseli za praćenje prate vas bez vaše saglasnosti koristeći razne nevidljive metode.

Privacy Magic koristi popularne filter liste da blokira mnoge oglase i pratioce koje bi vaš pregledač inače zahtevao na mreži. Filter liste takođe sakrivaju prazne okvire koji ostaju kada se oglasi blokiraju na veb stranici. Privacy Magic koristi fiksiranu verziju ovih filter lista tako da je ponašanje blokiranja proširenja potpuno reproduktivno i identično za svakog korisnika.

| Filter lista | Blokirane stavke |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Reklame, uključujući banere, skripte oglasa, slike i video reklame. |
| [EasyPrivacy](https://easylist.to/) | Pratioci, uključujući skripte za praćenje, piksele, veb bagove i druge sakupljače informacija. |
| [Fanboy's Annoyance List](https://easylist.to/) | Obaveštenja o kolačićima, vidžeti društvenih mreža, iskačući prozori na stranici i druge smetnje. |
| [small oisd blocklist](https://oisd.nl/) | Dodatni domeni za oglašavanje. |

## Zaštita sistemskih informacija (otisak prsta) {#protecting-system-information-fingerprinting}

Tradicionalno, pregledači propuštaju obilje informacija o vašem računaru svakoj veb stranici ili skripti za praćenje koja ih zatraži! A pratioci prikupljaju te podatke kako bi vas pratili dok pregledate veb.

| Otisak | Standardni veb pregledači | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Funkcionalnost obrade zvuka u pregledačima tipično propušta informacije o vašoj zvučnoj kartici. | Privacy Magic smanjuje takva curenja brisanjem najmanje značajnog bita iz audio podataka kad god ih skripta pročita. To brisanje nema čujnih efekata. |
| Baterija | Pregledači tipično svakoj veb stranici koja pita kažu kakav je nivo baterije, da li je uređaj priključen na napajanje i procenu koliko vremena preostaje pre nego što se baterija isprazni. | Privacy Magic zaustavlja ovo curenje informacija simulirajući bateriju koja je uvek na 100% i napajanje koje je uvek priključeno. |
| Pregledač | Veb stranica može da ispita vaš pregledač kako bi dobila detaljne informacije o operativnom sistemu u kojem radi. | Privacy Magic lažira `navigator.platform` na jednu vrednost za svaki različiti operativni sistem. |
| Uređaj | Pregledači će svakoj veb stranici koja pita reći da li koristite sklopivi uređaj. | Privacy Magic uvek prijavljuje da vaš uređaj nije sklopiv. |
| Disk | Pregledači tipično propuštaju količinu dostupnog prostora na disku za veb sajt i koliko taj sajt koristi, što može otkriti ukupan prostor na disku i način skladištenja podataka. | Privacy Magic lažira ove vrednosti tako da budu iste za sve. |
| Prikaz | Tradicionalno pregledači propuštaju podešavanja prikaza, uključujući da li je sistem podešen na „prefer reduced motion“. | Privacy Magic sprečava ovo curenje. |
| Fontovi | Standardni veb pregledači propuštaju koje prilagođene fontove imate instalirane na sistemu, što potencijalno čini vaš otisak veoma jedinstvenim. | Privacy Magic skriva prilagođene fontove instalirane na sistemu od svih skripti. Veb stranice i dalje mogu da koriste standardne sistemske fontove i preuzete veb fontove. |
| Grafika | Canvas i WebGL su dva glavna vektora otiska prsta koja propuštaju kakav GPU (grafički čip) vaš računar koristi. | Privacy Magic koristi napredne tehnike da sakrije grafički čip dok vam i dalje omogućava da igrate igre i koristite druge sajtove koji intenzivno koriste grafiku. |
| Tastatura | Podrazumevano, pregledači propuštaju raspored tastature koji koristite svakoj veb stranici koja pita. | Privacy Magic blokira otkrivanje rasporeda tastature skriptama sajta. |
| Jezik | Tipično, pregledači propuštaju listu jezika koje ste odobrili. Iako je važno moći da navedete koji jezik preferirate za sajtove koje posećujete, pregledači tipično otkrivaju listu preferiranih jezika korisnika, što može biti previše otkrivajuće. | Privacy Magic dozvoljava da se sajtovima koje posećujete prosledi samo jedan jezik. |
| Math | Skripte za praćenje na veb stranicama mogu da koriste idiosinkratično ponašanje Math funkcija, kao što su kosinus ili hiperbolički tangens, na vašem uređaju da vas razlikuju od drugih korisnika. | Privacy Magic zakrpljuje JavaScript Math funkcije tako da se ponašaju identično na svim platformama. |
| Memorija | Veb sajtovi mogu od većine pregledača da saznaju koliko memorije je neiskorišćeno na vašem računaru. | Privacy Magic skriva količinu dostupne memorije na sistemu od veb stranica i pratilaca. |
| Mreža | Pregledači normalno propuštaju detalje o vrsti mrežne veze koju imate. | Privacy Magic sprečava curenje ovih detalja čineći ih homogenim za sve korisnike. |
| Procesor | Pregledači su dizajnirani da prijave broj jezgara na procesoru vašeg računara. | Privacy Magic pretvara da svi imaju tačno `4`. |
| Ekran | Pregledači propuštaju dimenzije ekrana svakoj veb stranici koja pita, bez obzira na veličinu prozora pregledača. | Privacy Magic skriva stvarnu veličinu ekrana. |
| Vremenska zona | Pregledači propuštaju vašu približnu lokaciju kada skripte zatraže vremensku zonu. Na primer, ako ste u srednjoevropskom vremenu, pregledač će dati identifikator vremenske zone koji ukazuje da li ste u Parizu, Berlinu, Luksemburgu ili bilo kom od desetina drugih gradova. | Privacy Magic spaja vremenske zone tako da svaki pomeraj vremenske zone ima jednog predstavnika. Na taj način pregledač ne propušta nepotrebne informacije o vašoj lokaciji na planeti. |
| Vreme | API-ji za merenje vremena visoke rezolucije omogućavaju skriptama da karakterišu vaš sistem merenjem sitnih razlika u tajmingu ponašanja pregledača. | Privacy Magic zaokružuje vremena koja daju ovi API-ji tako da je skriptama za praćenje mnogo teže da ih koriste za razlikovanje pregledača. |
| Dodir | Touch API propušta da li vaš uređaj ima dodir i koliko tačaka dodira dozvoljava. | Privacy Magic skriva ove informacije od veb sajtova. |

## Uklanjanje tragova praćenja {#removing-tracking-breadcrumbs}

Neke funkcije pregledača su ranjive na korišćenje za deljenje delova istorije pregledanja („mrvice“) sa različitim sajtovima koje posećujete. Privacy Magic ojačava ove funkcije da manje cure.

| Trag | Standardni veb pregledači | Privacy Magic |
| :--- | :--- | :--- |
| Curenje keša | Pregledači čuvaju podatke u lokalnim keševima, tako da kada posetite stranicu ili je pogledate drugi put, ti podaci ne moraju ponovo da se učitaju. Nažalost, ti keševi ponekad cure i otkrivaju nešto o istoriji pregledanja sajtu koji posećujete. | Privacy Magic briše ranjive keševe tako da ova curenja ne mogu da se dese. |
| Referrer Policy | Tradicionalno, pregledači će svakoj veb stranici koju posetite reći sa koje ste veb stranice došli! | Privacy Magic briše tačnu stranicu (ili putanju) u referrer-u i, zbog kompatibilnosti, dozvoljava samo deljenje domena. |
| Parametri praćenja | Pratioci mogu da dodaju dodatne „parametre praćenja“ u adrese veb stranica koje posećujete, kako bi oglašivači pratili ko ste ili gde ste pregledali. | Privacy Magic briše poznate parametre praćenja iz veb adresa tako da se te informacije ne dele sa sajtovima koje posećujete. |
| Window Name | Normalno, JavaScript API `window.name` propušta podatke ako navigirate između sajtova u istom tabu. | Privacy Magic sprečava ovo curenje namećući zaseban `window.name` za svaki sajt. |

## Zaustavljanje veb curenja {#stopping-web-leaks}

Veb pregledači su komplikovane zveri! Curenja privatnih informacija mogu da poteknu iz mnogih različitih funkcija pregledača. Naš pristup u Privacy Magic-u je da zatvorimo curenja gde god se nađu.

| Funkcija | Standardni veb pregledači | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Iframe je „veb stranica unutar veb stranice“. To je okvir unutar stranice koju posećujete, gde druga veb stranica može da se sakrije i koristi sve iste tehnike praćenja kao normalna veb stranica. | Privacy Magic ubrizgava sve svoje zaštite u svaki iframe na veb stranici, kako bi se osiguralo da pratilac ne može da zaobiđe te zaštite skrivajući se unutar iframe-a. |
| Service Workers | Service Workers su funkcija pregledača koja omogućava da kod radi u pozadini čak i kada niste povezani na internet. Nažalost, ovi Service Workers lako mogu da propuštaju privatne informacije. | Service workers su generalno onemogućeni na svim sajtovima, da se spreče curenja privatnih informacija koja inače ne mogu da se zakrpe. |
| Shared Storage | Shared Storage je funkcija pregledača koja omogućava agregaciju i prikupljanje podataka o vašem pregledanju. Iako je navodno trebalo da čuva privatnost, ova funkcija je izazvala ozbiljne zabrinutosti za privatnost i treba da bude uklonjena iz pregledača. | Privacy Magic osigurava da je Shared Storage onemogućen na svim veb sajtovima. |
| Shared Workers | Shared Workers su kod koji radi u pozadini i može se deliti između sajtova. | Privacy Magic ubrizgava svoje zaštite u svaki Shared Worker koji učita bilo koji sajt. |
| Web Workers | Web Workers su kod koji radi u pozadini na veb stranici. Kao i skripte glavne stranice, kod web workera može da propušta privatne podatke. | Privacy Magic ubrizgava svoje zaštite u svaki Web Worker na stranici, kako bi se osiguralo da pratioci ne mogu da koriste Web Workers da zaobiđu te zaštite. |

## Signali privatnosti {#privacy-signals}

Želimo da poboljšamo vašu privatnost na svaki mogući način. Zato Privacy Magic šalje signal kojim zahteva politike u korist privatnosti od sajtova koje posećujete.

| Signal | Standardni veb pregledači | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control je signal koji se može poslati sajtovima koje posećujete da pokaže da ne želite da se vaši podaci prodaju ili dele. Nažalost, većina veb pregledača podrazumevano ne šalje preferenciju Global Privacy Control. | Privacy Magic osigurava da vaš pregledač šalje zaglavlje Global Privacy Control sa svakim zahtevom ka svakoj veb stranici ili ugrađenom resursu. Takođe ubrizgava JavaScript signal na svaku stranicu i iframe. |

## Zaštite pregledača {#browser-protections}

Pregledači se loše ponašaju ne samo u tome kako prikazuju veb stranice, već i u tome kako šalju podatke matičnoj kompaniji ili trećim oglašivačkim kompanijama. Privacy Magic onemogućava razna loša ponašanja pregledača koja bi inače propuštala vaše privatne informacije.

### Onemogućavanje curivih veb funkcija {#disabling-leaky-web-features}

| Funkcija | Standardni veb pregledači | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | Standardni pregledači imaju funkciju koja omogućava sajtovima da „pinguju“ server za praćenje linkovima na koje kliknete. | Privacy Magic onemogućava ovaj ping. |
| Third-Party Cookies | Najpoznatija funkcija praćenja od svih. Chrome dozvoljava kolačiće trećih strana koji omogućavaju praćenje sa sajta na sajt. | Privacy Magic podrazumevano onemogućava kolačiće trećih strana. |
| WebRTC non-proxied UDP | WebRTC je mogućnost veb pregledača koja vam omogućava da komunicirate direktno sa drugim korisnicima veba. Nažalost, ako koristite proksi pregledača, standardni pregledači zasnovani na Chrome-u propuštaju WebRTC komunikacije van proksija. | Privacy Magic blokira WebRTC curenja, a i dalje omogućava da WebRTC radi na sajtovima koji ga koriste. |

### Onemogućavanje invazivnih cloud usluga {#disabling-invasive-cloud-services}

| Usluga | Standardni veb pregledači | Privacy Magic |
| :--- | :--- | :--- |
| Alternate Error Pages | Podrazumevano, Chrome prikazuje alternativne stranice greške kada dođe do greške. Da bi prikazao te stranice, podaci o tome koje stranice posećujete šalju se Google-ovim serverima. | Privacy Magic onemogućava ove alternativne stranice greške tako da se nikakvi podaci ne šalju. |
| Safe Browsing Extended Reporting | Kada Safe Browsing blokira stranicu, Chrome može da pošalje sadržaj blokirane stranice Google-ovim serverima. | Privacy Magic blokira ovu funkciju, tako da se nikakvi podaci ne šalju. |
| Search Suggest | Podrazumevano, Chrome šalje sve što kucate u adresnu traku vašem podrazumevanom pretraživaču (obično Google pretraga) dok kucate, radi automatskih predloga. | Privacy Magic blokira ovo kontinuirano praćenje, tako da Chrome šalje vašu pretragu tek kada pritisnete „enter“. |
| Spelling Service | Chrome nudi „poboljšanu proveru pravopisa“ koja šalje ono što kucate Google-ovim serverima. | Privacy Magic onemogućava ovu opciju i dozvoljava Chrome-u da koristi samo lokalnu „osnovnu proveru pravopisa“. |

### Onemogućavanje API-ja za ciljanje oglasa {#disabling-ad-targeting-apis}

| API | Standardni veb pregledači | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (i povezani Private Aggregation API) šalje podatke o vašem pregledanju, oglasima na koje kliknete i druge privatne podatke oglašivačkim serverima. | Privacy Magic onemogućava ove API-je da zaštiti vaše podatke. |
| Protected Audience API | Podrazumevano, Chrome stavlja ovaj API na raspolaganje da pokrene aukciju za vašu pažnju u ime oglašivača. | Privacy Magic onemogućava ovaj API tako da se vaši podaci o pregledanju ne koriste na taj način. |
| Topics API | Chrome-ov Topics API daje oglašivačima listu tema za koje se pretpostavlja da vas interesuju. | Privacy Magic onemogućava Topics API da te podatke zadrži privatnim. |

### Onemogućavanje curivih Chrome podešavanja {#disabling-leaky-chrome-settings}

Chrome sadrži određena podešavanja koja su suprotna vašoj privatnosti: konkretno, funkcionalnost koja prikuplja podatke o vašim navikama pregledanja i šalje ih Google-ovim serverima. Ova podešavanja ne može direktno da kontroliše proširenje pregledača, ali tokom podešavanja Privacy Magic će vam pomoći da ih pronađete i sami isključite.

| Podešavanje | Standardni veb pregledači | Privacy Magic |
| :--- | :--- | :--- |
| Sinhronizacija istorije | Kada ste prijavljeni u Chrome, sinhronizuje istoriju pregledanja između uređaja. Takođe čuva te iste podatke na Google serverima. | Privacy Magic vas vodi do podešavanja koje onemogućava sinhronizaciju istorije da bi istorija pregledanja ostala privatna. |
| Metrike korisničkog iskustva | Chrome tiho šalje metrike o vašem korišćenju pregledača nazad Google-ovim serverima. | Privacy Magic vam pomaže da blokirate ovo skriveno prikupljanje podataka. |
| Prikupljanje podataka po URL-u | Za svaki URL koji posetite, Chrome prikuplja „anonimizovane“ podatke o vašem pregledanju na tim stranicama i šalje ih Google-u. | Privacy Magic vam pomaže da onemogućite ovo podešavanje kako bi se sprečilo slanje podataka. |
