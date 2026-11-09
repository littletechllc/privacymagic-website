---
title: "Zaštite: začepljivanje curenja u pregledniku"
description: Kako Privacy Magic štiti vašu privatnost dok pregledavate web
backToTop: "↑ Natrag na vrh"
---

Privacy Magic je open-source proširenje za Chrome koje sveobuhvatno štiti vašu privatnost dok pregledavate web. Preglednici jako curе, pa Privacy Magic pruža više slojeva zaštite, uključujući [blokiranje oglasa i pratitelja](#blocking-ads-and-trackers), [zaštitu informacija o sustavu](#protecting-system-information-fingerprinting), [uklanjanje tragova praćenja](#removing-tracking-breadcrumbs), [zaustavljanje web curenja](#stopping-web-leaks), [slanje signala privatnosti](#privacy-signals) i [provedbu zaštita preglednika](#browser-protections).

## Blokiranje oglasa i pratitelja {#blocking-ads-and-trackers}

Diljem weba oglasi, skripte za praćenje i pikseli za praćenje prate vas bez vašeg pristanka koristeći razne nevidljive metode.

Privacy Magic koristi popularne filtre kako bi blokirao mnoge oglase i pratitelje koje bi vaš preglednik inače zatražio na mreži. Filtri također skrivaju prazne okvire koji ostanu kada se oglasi blokiraju na web stranici. Privacy Magic koristi fiksiranu verziju tih filtara kako bi ponašanje blokiranja proširenja bilo potpuno reproducibilno i identično za svakog korisnika.

| Filtrar | Blokirane stavke |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Oglasi, uključujući banere, skripte oglasa, slike i video oglase. |
| [EasyPrivacy](https://easylist.to/) | Pratitelji, uključujući skripte za praćenje, piksele, web bugove i druge sakupljače informacija. |
| [Fanboy's Annoyance List](https://easylist.to/) | Obavijesti o kolačićima, widgeti društvenih mreža, skočni prozori na stranici i druge smetnje. |
| [small oisd blocklist](https://oisd.nl/) | Dodatne domene za oglašavanje. |

## Zaštita informacija o sustavu (otisak prsta) {#protecting-system-information-fingerprinting}

Tradicionalno, preglednici propuštaju obilje informacija o vašem računalu svakoj web stranici ili skripti za praćenje koja ih zatraži! A pratitelji prikupljaju te podatke kako bi vas pratili dok pregledavate web.

| Otisak | Standardni web preglednici | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Funkcionalnost obrade zvuka preglednika tipično propušta informacije o vašoj zvučnoj kartici. | Privacy Magic smanjuje takva curenja brisanjem najmanje značajnog bita iz audio podataka kad god ih skripta pročita. To brisanje nema čujnih učinaka. |
| Baterija | Preglednici tipično svakoj web stranici koja pita kažu kakva je razina baterije, je li uređaj spojen na napajanje i procjenu koliko vremena preostaje prije nego što se baterija isprazni. | Privacy Magic zaustavlja ovo curenje informacija simulirajući bateriju koja je uvijek na 100% i napajanje koje je uvijek spojeno. |
| Preglednik | Web stranica može ispitati vaš preglednik kako bi dobila detaljne informacije o operacijskom sustavu u kojem radi. | Privacy Magic lažira `navigator.platform` na jednu vrijednost za svaki različiti operacijski sustav. |
| Uređaj | Web preglednici svakoj web stranici koja pita kažu koristite li sklopivi uređaj. | Privacy Magic uvijek prijavljuje da vaš uređaj nije sklopiv. |
| Disk | Web preglednici tipično propuštaju koliko prostora na disku je dostupno web stranici i koliko ta stranica koristi, što može otkriti ukupni prostor na disku vašeg računala i način pohrane podataka. | Privacy Magic lažira te vrijednosti tako da budu iste za sve. |
| Zaslon | Tradicionalno web preglednici propuštaju postavke zaslona, uključujući je li sustav postavljen na „prefer reduced motion”. | Privacy Magic sprječava ovo curenje. |
| Fontovi | Standardni web preglednici propuštaju koje prilagođene fontove imate instalirane na sustavu, što potencijalno čini vaš otisak vrlo jedinstvenim. | Privacy Magic skriva prilagođene fontove instalirane na sustavu od svih skripti. Web stranice i dalje mogu koristiti standardne sistemske fontove i preuzete web fontove. |
| Grafika | Canvas i WebGL dva su glavna vektora za otisak prsta koji propuštaju kakav GPU (grafički čip) vaše računalo koristi. | Privacy Magic koristi napredne tehnike za skrivanje grafičkog čipa dok vam i dalje omogućuje igranje igara i korištenje drugih web stranica koje intenzivno koriste grafiku. |
| Tipkovnica | Prema zadanim postavkama, preglednici propuštaju raspored tipkovnice koji koristite svakoj web stranici koja pita. | Privacy Magic blokira otkrivanje rasporeda tipkovnice skriptama web stranica. |
| Jezik | Tipično, web preglednici propuštaju popis jezika koje ste odobrili. Iako je važno moći navesti koji jezik preferirate za web stranice koje posjećujete, preglednici tipično otkrivaju popis korisnikovih preferiranih jezika, što može biti previše otkrivajuće. | Privacy Magic dopušta da se web stranicama koje posjećujete proslijedi samo jedan jezik. |
| Math | Skripte za praćenje na web stranicama mogu koristiti idiosinkratično ponašanje Math funkcija, poput kosinusa ili hiperboličnog tangensa, na vašem uređaju kako bi vas razlikovale od drugih web korisnika. | Privacy Magic zakrpa JavaScript Math funkcije tako da se ponašaju identično na svim platformama. |
| Memorija | Web stranice mogu saznati od većine preglednika koliko je memorije neiskorišteno na vašem računalu. | Privacy Magic skriva količinu dostupne memorije na sustavu od web stranica i pratitelja. |
| Mreža | Preglednici normalno propuštaju detalje o vrsti mrežne veze koju imate. | Privacy Magic sprječava curenje tih detalja čineći ih homogenima za sve korisnike. |
| Procesor | Preglednici su dizajnirani da prijave broj jezgri na procesoru vašeg računala. | Privacy Magic pretvara se da svi imaju točno `4`. |
| Ekran | Web preglednici propuštaju dimenzije vašeg ekrana svakoj web stranici koja pita, bez obzira na veličinu prozora preglednika. | Privacy Magic skriva stvarnu veličinu ekrana. |
| Vremenska zona | Web preglednici propuštaju vašu približnu lokaciju kada skripte zatraže vašu vremensku zonu. Na primjer, ako ste u srednjoeuropskom vremenu, preglednik će pružiti identifikator vremenske zone koji ukazuje jeste li u Parizu, Berlinu, Luksemburgu ili bilo kojem od desetaka drugih gradova. | Privacy Magic objedinjuje vremenske zone tako da svaki pomak vremenske zone ima jednog predstavnika. Tako preglednik ne propušta nepotrebne informacije o vašoj lokaciji na globusu. |
| Vrijeme | API-ji za mjerenje vremena visoke rezolucije omogućuju skriptama karakterizaciju vašeg sustava mjerenjem sitnih razlika u vremenu ponašanja preglednika. | Privacy Magic zaokružuje vremena koja pružaju ti API-ji tako da je skriptama za praćenje mnogo teže koristiti ih za razlikovanje preglednika. |
| Dodir | Touch API propušta ima li vaš uređaj dodir i koliko dodirnih točaka dopušta. | Privacy Magic skriva te informacije od web stranica. |

## Uklanjanje tragova praćenja {#removing-tracking-breadcrumbs}

Neke značajke preglednika ranjive su na korištenje za dijeljenje dijelova vaše povijesti pregledavanja („tragova”) različitim web stranicama koje posjećujete. Privacy Magic učvršćuje te značajke kako bi manje curile.

| Trag | Standardni web preglednici | Privacy Magic |
| :--- | :--- | :--- |
| Curenje predmemorije | Preglednici pohranjuju podatke u lokalnim predmemorijama, tako da kada posjetite stranicu ili je pogledate drugi put, te podatke nije potrebno ponovno učitavati. Nažalost, te predmemorije ponekad cure i otkrit će nešto o vašoj povijesti pregledavanja web stranici koju posjetite. | Privacy Magic briše ranjive predmemorije kako se ta curenja ne bi dogodila. |
| Referrer Policy | Tradicionalno, preglednici će svakoj web stranici koju posjetite reći s koje ste web stranice došli! | Privacy Magic briše točnu stranicu (ili put) u referreru i, radi web kompatibilnosti, dopušta dijeljenje samo domene. |
| Parametri praćenja | Pratitelji mogu dodati dodatne „parametre praćenja” adresama web stranica koje posjećujete, kako bi oglašivači mogli pratiti tko ste ili gdje ste pregledavali. | Privacy Magic briše poznate parametre praćenja s web adresa kako se te informacije ne bi dijelile s web stranicama koje posjećujete. |
| Window Name | Normalno, JavaScript API `window.name` propušta podatke ako navigirate između web stranica u istoj kartici. | Privacy Magic sprječava ovo curenje namećući zaseban `window.name` za svaku web stranicu. |

## Zaustavljanje web curenja {#stopping-web-leaks}

Web preglednici su složene zvijeri! Curenja privatnih informacija mogu potjecati iz mnogih različitih značajki preglednika. Naš pristup u Privacy Magicu je začepiti curenja gdje god se nađu.

| Značajka | Standardni web preglednici | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | iframe je „web stranica unutar web stranice.” To je okvir unutar stranice koju posjećujete, gdje se druga web stranica može sakriti i koristiti sve iste tehnike praćenja koje može koristiti normalna web stranica. | Privacy Magic ubrizgava sve svoje zaštite u svaki iframe na web stranici, kako bi osigurao da pratitelj ne može zaobići te zaštite skrivajući se unutar iframea. |
| Service Workers | Service Workers su značajka preglednika koja omogućuje pokretanje koda u pozadini čak i kada niste povezani s internetom. Nažalost, ti Service Workers lako mogu propuštati privatne informacije. | Service workers su općenito onemogućeni na svim stranicama, kako bi se spriječila curenja privatnih informacija koja se inače ne mogu zakrpati. |
| Shared Storage | Shared Storage je značajka preglednika koja omogućuje agregiranje i prikupljanje podataka o vašem pregledavanju. Iako se tvrdilo da čuva privatnost, ta je značajka izazvala jake zabrinutosti oko privatnosti i trebala bi biti uklonjena iz preglednika. | Privacy Magic osigurava da je Shared Storage onemogućen na svim web stranicama. |
| Shared Workers | Shared Workers su kod koji se izvodi u pozadini i može se dijeliti između web stranica. | Privacy Magic ubrizgava svoje zaštite u svaki Shared Worker koji učita bilo koja web stranica. |
| Web Workers | Web Workers su kod koji se izvodi u pozadini na web stranici. Poput skripti glavne stranice, kod web workera može propuštati privatne podatke. | Privacy Magic ubrizgava svoje zaštite u svaki Web Worker na stranici, kako bi osigurao da pratitelji ne mogu koristiti Web Workere za zaobilaženje tih zaštita. |

## Signali privatnosti {#privacy-signals}

Zainteresirani smo za poboljšanje vaše privatnosti na svaki mogući način. Stoga Privacy Magic šalje signal kojim zahtijeva politike prijateljske prema privatnosti od web stranica koje posjećujete.

| Signal | Standardni web preglednici | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control je signal koji se može poslati web stranicama koje posjećujete kako bi se naznačilo da ne želite da se vaši podaci prodaju ili dijele. Nažalost, većina web preglednika prema zadanim postavkama ne šalje preferenciju Global Privacy Control. | Privacy Magic osigurava da vaš preglednik šalje zaglavlje Global Privacy Control sa svakim zahtjevom svakoj web stranici ili ugrađenom resursu. Također ubrizgava JavaScript signal na svaku stranicu i iframe. |

## Zaštite preglednika {#browser-protections}

Preglednici se loše ponašaju ne samo u načinu na koji prikazuju web stranice, već i u načinu na koji šalju podatke matičnoj tvrtki ili trećim oglašivačkim tvrtkama. Privacy Magic onemogućuje razna loša ponašanja preglednika koja bi inače propuštala vaše privatne informacije.

### Onemogućavanje curenih web značajki {#disabling-leaky-web-features}

| Značajka | Standardni web preglednici | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | Standardni preglednici imaju značajku koja web stranicama omogućuje „ping” poslužitelja za praćenje s poveznicama na koje kliknete. | Privacy Magic onemogućuje taj ping. |
| Kolačići treće strane | Najpoznatija značajka praćenja od svih. Chrome dopušta kolačiće treće strane koji omogućuju praćenje s mjesta na mjesto. | Privacy Magic prema zadanim postavkama onemogućuje kolačiće treće strane. |
| WebRTC non-proxied UDP | WebRTC je sposobnost web preglednika koja vam omogućuje izravnu komunikaciju s drugim web korisnicima. Nažalost, ako koristite proxy preglednika, standardni preglednici temeljeni na Chromeu propuštat će WebRTC komunikacije izvan proxyja. | Privacy Magic blokira WebRTC curenja, a da WebRTC i dalje može funkcionirati na web stranicama koje ga koriste. |

### Onemogućavanje invazivnih cloud usluga {#disabling-invasive-cloud-services}

| Usluga | Standardni web preglednici | Privacy Magic |
| :--- | :--- | :--- |
| Alternativne stranice grešaka | Prema zadanim postavkama, Chrome će prikazati alternativne stranice grešaka kada dođe do greške. Za prikaz tih stranica, podaci o stranicama koje posjećujete šalju se Googleovim poslužiteljima. | Privacy Magic onemogućuje te alternativne stranice grešaka tako da se ne šalju nikakvi podaci. |
| Safe Browsing Extended Reporting | Kada Safe Browsing blokira stranicu, Chrome može poslati sadržaj blokirane stranice Googleovim poslužiteljima. | Privacy Magic blokira tu značajku, tako da se ne šalju nikakvi podaci. |
| Search Suggest | Prema zadanim postavkama, Chrome šalje sve što tipkate u adresnu traku vašem zadanom tražilici (tipično Google pretraživanju) dok tipkate, radi automatskih prijedloga. | Privacy Magic blokira to kontinuirano praćenje, tako da Chrome šalje vašu pretragu tek kada pritisnete „enter”. |
| Usluga pravopisa | Chrome nudi „enhanced spell check” koji šalje ono što tipkate Googleovim poslužiteljima. | Privacy Magic onemogućuje tu opciju i dopušta Chromeu da koristi samo lokalnu „basic spell check.” |

### Onemogućavanje API-ja za ciljanje oglasa {#disabling-ad-targeting-apis}

| API | Standardni web preglednici | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (i povezani Private Aggregation API) šalje podatke o vašem pregledavanju, oglasima na koje kliknete i drugim privatnim podacima oglašivačkim poslužiteljima. | Privacy Magic onemogućuje te API-je kako bi zaštitio vaše podatke. |
| Protected Audience API | Prema zadanim postavkama, ovaj API Chrome stavlja na raspolaganje za provođenje aukcije vaše pažnje u ime oglašivača. | Privacy Magic onemogućuje ovaj API kako se vaši podaci o pregledavanju ne bi koristili na taj način. |
| Topics API | Chromeov Topics API daje oglašivačima popis tema koje vas navodno zanimaju. | Privacy Magic onemogućuje Topics API kako bi ti podaci ostali privatni. |

### Onemogućavanje curenih Chrome postavki {#disabling-leaky-chrome-settings}

Chrome sadrži određene postavke koje su u suprotnosti s vašom privatnošću: konkretno, funkcionalnost koja prikuplja podatke o vašim navikama pregledavanja i šalje ih Googleovim poslužiteljima. Tim postavkama proširenje preglednika ne može izravno upravljati, ali tijekom postavljanja Privacy Magic će vam pomoći pronaći postavke i sami ih isključiti.

| Postavka | Standardni web preglednici | Privacy Magic |
| :--- | :--- | :--- |
| Sinkronizacija povijesti | Kada ste prijavljeni u Chrome, sinkronizira vašu povijest pregledavanja između uređaja. Također sprema iste podatke na Googleove poslužitelje. | Privacy Magic vodi vas do postavke koja onemogućuje sinkronizaciju povijesti kako bi vaša povijest pregledavanja ostala privatna. |
| Metrike korisničkog iskustva | Chrome tiho šalje metrike o vašem korištenju preglednika natrag Googleovim poslužiteljima. | Privacy Magic pomaže vam blokirati to skriveno prikupljanje podataka. |
| Prikupljanje podataka po URL-u | Za svaki URL koji posjetite, Chrome prikuplja „anonimizirane” podatke o vašem pregledavanju na tim stranicama i šalje ih Googleu. | Privacy Magic pomaže vam onemogućiti tu postavku kako bi se spriječilo slanje podataka. |
