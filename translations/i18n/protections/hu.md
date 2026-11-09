---
title: "Védelem: a böngésző szivárgásainak bedugása"
description: Hogyan védi a Privacy Magic az Ön adatvédelmét böngészés közben
backToTop: "↑ Vissza a tetejére"
---

A Privacy Magic egy nyílt forráskódú Chrome-bővítmény, amely átfogóan védi az Ön adatvédelmét a web böngészése közben. A böngészők nagyon szivárognak, ezért a Privacy Magic több rétegű védelmet biztosít, beleértve a [hirdetések és nyomkövetők blokkolását](#blocking-ads-and-trackers), a [rendszerinformációk védelmét](#protecting-system-information-fingerprinting), a [nyomkövetési morzsák eltávolítását](#removing-tracking-breadcrumbs), a [web szivárgásainak megállítását](#stopping-web-leaks), a [adatvédelmi jelek küldését](#privacy-signals) és a [böngészővédelmek érvényesítését](#browser-protections).

## Hirdetések és nyomkövetők blokkolása {#blocking-ads-and-trackers}

A weben hirdetések, nyomkövető szkriptek és nyomkövető pixelek követik Önt az Ön beleegyezése nélkül, különféle láthatatlan módszerekkel.

A Privacy Magic népszerű szűrőlistákat használ, hogy megakadályozza, hogy a böngészője sok hirdetést és nyomkövetőt kérjen a hálózaton. A szűrőlisták elrejtik azokat az üres dobozokat is, amelyek akkor maradnak hátra, amikor a hirdetéseket egy weboldalon blokkolják. A Privacy Magic ezeknek a szűrőlistáknak egy rögzített verzióját használja, így a bővítmény blokkolási viselkedése teljesen reprodukálható és minden felhasználónál azonos.

| Szűrőlista | Blokkolt elemek |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Hirdetések, beleértve a bannereket, hirdetési szkripteket, képeket és videóhirdetéseket. |
| [EasyPrivacy](https://easylist.to/) | Nyomkövetők, beleértve a nyomkövető szkripteket, pixeleket, webbugokat és egyéb információgyűjtőket. |
| [Fanboy's Annoyance List](https://easylist.to/) | Sütiértesítések, közösségimédia-widgetek, oldalon belüli felugró ablakok és egyéb zavaró elemek. |
| [small oisd blocklist](https://oisd.nl/) | További hirdetési domainek. |

## Rendszerinformációk védelme (ujjlenyomatvétel) {#protecting-system-information-fingerprinting}

Hagyományosan a böngészők rengeteg információt szivárogtatnak a számítógépéről bármely weboldalnak vagy nyomkövető szkriptnek, amely ezt kéri! A nyomkövetők pedig ezeket az adatokat gyűjtik, hogy kövessék Önt a web böngészése közben.

| Ujjlenyomat | Standard webböngészők | Privacy Magic |
| :--- | :--- | :--- |
| Hang | A webböngészők hangfeldolgozási funkciója jellemzően információkat szivárogtat a hangkártyájáról. | A Privacy Magic csökkenti az ilyen szivárgásokat azáltal, hogy törli a legkevésbé jelentős bitet a hangadatokból, amikor egy szkript olvassa őket. Ennek a törlésnek nincs hallható hatása. |
| Akkumulátor | A webböngészők jellemzően elmondják bármely weboldalnak, amely ezt kéri, hogy milyen az akkumulátorszintje, hogy a készüléke csatlakoztatva van-e áramforráshoz, és becslést adnak arról, mennyi idő van hátra, amíg az akkumulátor lemerül. | A Privacy Magic megállítja ezt az információszivárgást azáltal, hogy olyan akkumulátort szimulál, amely mindig 100%-on van, és olyan áramforrást, amely mindig csatlakoztatva van. |
| Böngésző | Egy weboldal lekérdezheti a böngészőjét, hogy részletes információkat kapjon arról az operációs rendszerről, amelyben fut. | A Privacy Magic a `navigator.platform` értékét minden különböző operációs rendszerhez egyetlen értékre hamisítja. |
| Eszköz | A webböngészők elmondják bármely weboldalnak, amely ezt kéri, hogy összecsukható eszközt használ-e. | A Privacy Magic mindig azt jelenti, hogy az eszköze nem összecsukható. |
| Lemez | A webböngészők jellemzően kiszivárogtatják, mennyi lemezterület áll a weboldal rendelkezésére, és mennyit használ a weboldal, ami felfedheti a számítógépén rendelkezésre álló teljes lemezterületet és az adatok tárolásának módját. | A Privacy Magic ezeket az értékeket úgy hamisítja, hogy mindenkinél azonosak legyenek. |
| Megjelenítés | Hagyományosan a webböngészők kiszivárogtatják a megjelenítési beállításokat, beleértve azt is, hogy a rendszer be van-e állítva a „csökkentett mozgás előnyben részesítésére”. | A Privacy Magic megakadályozza ezt a szivárgást. |
| Betűtípusok | A standard webböngészők kiszivárogtatják, milyen egyéni betűtípusok vannak telepítve a rendszerén, ami potenciálisan nagyon egyedivé teheti az ujjlenyomatát. | A Privacy Magic elrejti a rendszerére telepített egyéni betűtípusokat minden szkript elől. A weboldalak továbbra is használhatják a standard rendszerbetűtípusokat és a letöltött webbetűtípusokat. |
| Grafika | A Canvas és a WebGL két fő ujjlenyomat-vektor, amelyek kiszivárogtatják, milyen GPU-t (grafikus chipet) használ a számítógépe. | A Privacy Magic fejlett technikákat használ a grafikus chip elrejtésére, miközben lehetővé teszi, hogy továbbra is játsszon és használjon más, grafikát intenzíven használó webhelyeket. |
| Billentyűzet | Alapértelmezés szerint a böngészők kiszivárogtatják a használt billentyűzetkiosztást bármely weboldalnak, amely ezt kéri. | A Privacy Magic megakadályozza, hogy a billentyűzetkiosztása felfedésre kerüljön a webhely szkriptjei előtt. |
| Nyelv | Jellemzően a webböngészők kiszivárogtatják az Ön által jóváhagyott nyelvek listáját. Bár fontos, hogy megadhassa, melyik nyelvet részesíti előnyben a meglátogatott webhelyeken, a böngészők jellemzően feltárják a felhasználó preferált nyelveinek listáját, ami túl sokat elárulhat. | A Privacy Magic csak egyetlen nyelv átadását engedi a meglátogatott webhelyeknek. |
| Math | A weboldalakon lévő nyomkövető szkriptek az Ön eszközén a Math függvények, például a koszinusz vagy a hiperbolikus tangens idioszinkratikus viselkedését használhatják, hogy megkülönböztessék Önt más webfelhasználóktól. | A Privacy Magic javítja a JavaScript Math függvényeket, hogy minden platformon azonos módon viselkedjenek. |
| Memória | A webhelyek a legtöbb böngészőből megtudhatják, mennyi memória van szabadon a számítógépén. | A Privacy Magic elrejti a rendszerén rendelkezésre álló memória mennyiségét a weboldalak és nyomkövetők elől. |
| Hálózat | A böngészők általában kiszivárogtatják a hálózati kapcsolat típusának részleteit. | A Privacy Magic megakadályozza e részletek szivárgását azáltal, hogy minden felhasználónál egységessé teszi őket. |
| Processzor | A böngészők úgy vannak tervezve, hogy jelentik a számítógép processzorának magjainak számát. | A Privacy Magic úgy tesz, mintha mindenkinek pontosan `4` magja lenne. |
| Képernyő | A webböngészők kiszivárogtatják a képernyő méreteit bármely weboldalnak, amely ezt kéri, függetlenül attól, hogy mekkora a böngészőablak. | A Privacy Magic elrejti a valódi képernyőméretet. |
| Időzóna | A webböngészők kiszivárogtatják a hozzávetőleges tartózkodási helyét, amikor a szkriptek az időzónáját kérik. Például, ha Közép-európai időzónában van, a böngésző olyan időzóna-azonosítót ad, amely jelzi, hogy Párizsban, Berlinben, Luxemburgban vagy több tucat másik város valamelyikében tartózkodik. | A Privacy Magic összevonja az időzónákat, így minden időzóna-eltolásnak egyetlen reprezentatív időzónája van. Így a böngésző nem szivárogtat felesleges információt a Földön való tartózkodási helyéről. |
| Időzítés | A nagy felbontású időzítési API-k lehetővé teszik a szkriptek számára, hogy jellemezzék a rendszerét a böngészőviselkedések időzítésének apró különbségeinek mérésével. | A Privacy Magic lekerekíti ezeknek az API-knak az időértékeit, így sokkal nehezebb a nyomkövető szkripteknek ezekkel megkülönböztetni a böngészőket. |
| Érintés | A Touch API kiszivárogtatja, hogy az eszközének van-e érintésérzékelője, és hány érintési pontot engedélyez. | A Privacy Magic elrejti ezt az információt a webhelyek elől. |

## Nyomkövetési morzsák eltávolítása {#removing-tracking-breadcrumbs}

Egyes böngészőfunkciók sebezhetőek azzal szemben, hogy a böngészési előzményeinek részeit („morzsákat”) megosszák a meglátogatott különböző webhelyekkel. A Privacy Magic megerősíti ezeket a funkciókat, hogy kevésbé szivárogjanak.

| Morzsa | Standard webböngészők | Privacy Magic |
| :--- | :--- | :--- |
| Gyorsítótár-szivárgások | A böngészők adatokat tárolnak helyi gyorsítótárakban, így amikor meglátogat egy oldalt vagy másodszor is megtekinti, az adatokat nem kell újra betölteni. Sajnos ezek a gyorsítótárak néha szivárognak, és valamit felfednek a böngészési előzményeiből egy meglátogatott webhelynek. | A Privacy Magic törli a sebezhető gyorsítótárakat, hogy ezek a szivárgások ne történhessenek meg. |
| Referrer Policy | Hagyományosan a böngészők elmondják minden meglátogatott weboldalnak, melyik weboldalról érkezett! | A Privacy Magic törli a pontos oldalt (vagy útvonalat) a referrerben, és a webkompatibilitás érdekében csak a domain megosztását engedi. |
| Nyomkövetési paraméterek | A nyomkövetők extra „nyomkövetési paramétereket” adhatnak a meglátogatott weboldalak címeihez, így a hirdetők nyomon követhetik, ki Ön, vagy hol böngészett. | A Privacy Magic törli az ismert nyomkövetési paramétereket a webcímekből, hogy ez az információ ne legyen megosztva a meglátogatott webhelyekkel. |
| Ablaknév | Normális esetben a `window.name` JavaScript API adatokat szivárogtat, ha ugyanabban a lapon navigál a webhelyek között. | A Privacy Magic megakadályozza ezt a szivárgást azáltal, hogy minden webhelyhez külön `window.name` értéket érvényesít. |

## Web szivárgásainak megállítása {#stopping-web-leaks}

A webböngészők bonyolult lények! A privát információk szivárgásai sokféle böngészőfunkcióból eredhetnek. A Privacy Magic megközelítése az, hogy bedugjuk a szivárgásokat, bárhol is találhatók.

| Funkció | Standard webböngészők | Privacy Magic |
| :--- | :--- | :--- |
| Iframe-ek | Az iframe egy „weboldal egy weboldalon belül”. Ez egy doboz a meglátogatott oldalon belül, ahol egy második weboldal elrejtőzhet, és ugyanazokat a nyomkövetési technikákat használhatja, mint egy normál weboldal. | A Privacy Magic az összes védelmét minden iframe-be injektálja egy weboldalon, hogy biztosítsa: a nyomkövető ne kerülhesse meg ezeket a védelmeket azáltal, hogy egy iframe-ben bújik meg. |
| Service Workers | A Service Workers olyan böngészőfunkció, amely lehetővé teszi a kód háttérben való futtatását akkor is, amikor nincs internetkapcsolata. Sajnos ezek a Service Workers könnyen képesek privát információkat szivárogtatni. | A Service Workers általában minden webhelyen le vannak tiltva, hogy megakadályozzák a privát információk olyan szivárgásait, amelyeket egyébként nem lehetne javítani. |
| Shared Storage | A Shared Storage olyan böngészőfunkció, amely lehetővé teszi a böngészési adatok összesítését és gyűjtését. Bár azt állították róla, hogy adatvédelem-barát, ez a funkció erős adatvédelmi aggodalmakat vetett fel, és a böngészőkből való eltávolítása várható. | A Privacy Magic gondoskodik arról, hogy a Shared Storage minden webhelyen le legyen tiltva. |
| Shared Workers | A Shared Workers olyan kód, amely a háttérben fut, és webhelyek között megosztható. | A Privacy Magic a védelmeit minden Shared Workerbe injektálja, amelyet bármely webhely betölt. |
| Web Workers | A Web Workers olyan kód, amely egy weboldal háttérében fut. A főoldal szkriptjeihez hasonlóan a web worker kód is szivárogtathat privát adatokat. | A Privacy Magic a védelmeit minden Web Workerbe injektálja egy oldalon, hogy a nyomkövetők ne használhassák a Web Workers-t e védelmek megkerülésére. |

## Adatvédelmi jelek {#privacy-signals}

Minden lehetséges módon szeretnénk javítani az Ön adatvédelmét. Ezért a Privacy Magic jelet küld, hogy adatvédelem-párti szabályzatokat követeljen a meglátogatott webhelyektől.

| Jel | Standard webböngészők | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | A Global Privacy Control egy jel, amely elküldhető a meglátogatott webhelyeknek annak jelzésére, hogy nem szeretné, ha adatait eladnák vagy megosztanák. Sajnos a legtöbb webböngésző alapértelmezés szerint nem küldi el a Global Privacy Control preferenciát. | A Privacy Magic biztosítja, hogy a böngészője minden kéréssel minden weboldalhoz vagy beágyazott erőforráshoz elküldje a Global Privacy Control fejlécet. Emellett minden oldalon és iframe-ben JavaScript jelet is injektál. |

## Böngészővédelmek {#browser-protections}

A böngészők nemcsak a weboldalak megjelenítésében viselkednek rosszul, hanem abban is, hogyan küldenek adatokat az anyavállalatnak vagy harmadik fél hirdetőcégeknek. A Privacy Magic letiltja a különféle rossz böngészőviselkedéseket, amelyek egyébként kiszivárogtatnák a privát információit.

### Szivárgó webfunkciók letiltása {#disabling-leaky-web-features}

| Funkció | Standard webböngészők | Privacy Magic |
| :--- | :--- | :--- |
| Hivatkozás-auditálás | A standard böngészőknek van egy funkciója, amely lehetővé teszi a webhelyeknek, hogy „pingeljék” a nyomkövető szervert az Ön által kattintott hivatkozásokkal. | A Privacy Magic letiltja ezt a pinget. |
| Harmadik féltől származó sütik | Minden nyomkövetési funkció közül a leghíresebb. A Chrome lehetővé teszi a harmadik féltől származó sütiket, amelyekkel webhelyről webhelyre követhetők. | A Privacy Magic alapértelmezés szerint letiltja a harmadik féltől származó sütiket. |
| WebRTC nem proxyn keresztüli UDP | A WebRTC olyan webböngésző-képesség, amely lehetővé teszi, hogy közvetlenül kommunikáljon más webfelhasználókkal. Sajnos, ha böngészőproxyt használ, a standard Chrome-alapú böngészők a proxyn kívül szivárogtatják a WebRTC-kommunikációt. | A Privacy Magic blokkolja a WebRTC-szivárgásokat, miközben továbbra is lehetővé teszi a WebRTC működését az azt használó webhelyeken. |

### Behatoló felhőszolgáltatások letiltása {#disabling-invasive-cloud-services}

| Szolgáltatás | Standard webböngészők | Privacy Magic |
| :--- | :--- | :--- |
| Alternatív hibaoldalak | Alapértelmezés szerint a Chrome alternatív hibaoldalakat jelenít meg, amikor hiba történik. Ezen oldalak megjelenítéséhez adatokat küldenek a Google szervereire arról, milyen oldalakat látogat. | A Privacy Magic letiltja ezeket az alternatív hibaoldalakat, így nem kerül adat küldésre. |
| Safe Browsing Extended Reporting | Amikor a Safe Browsing blokkol egy oldalt, a Chrome elküldheti a blokkolt oldal tartalmát a Google szervereire. | A Privacy Magic blokkolja ezt a funkciót, így nem kerül adat küldésre. |
| Keresési javaslatok | Alapértelmezés szerint a Chrome mindent, amit a címsávba gépel, elküld az alapértelmezett keresőmotorjának (jellemzően a Google keresésnek) gépelés közben, hogy automatikus javaslatokat tegyen. | A Privacy Magic blokkolja ezt a folyamatos megfigyelést, így a Chrome csak akkor küldi el a keresését, amikor megnyomja az „Enter” billentyűt. |
| Helyesírás-ellenőrző szolgáltatás | A Chrome „továbbfejlesztett helyesírás-ellenőrzést” kínál, amely elküldi a begépelt szöveget a Google szervereire. | A Privacy Magic letiltja ezt az opciót, és csak a helyi „alap helyesírás-ellenőrzés” használatát engedi a Chrome-nak. |

### Hirdetéscélzási API-k letiltása {#disabling-ad-targeting-apis}

| API | Standard webböngészők | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Az Ad Measurement API (és a kapcsolódó Private Aggregation API) adatokat küld a böngészéséről, a kattintott hirdetésekről és egyéb privát adatokról a hirdetési szerverekre. | A Privacy Magic letiltja ezeket az API-kat az adatai védelme érdekében. |
| Protected Audience API | Alapértelmezés szerint ezt az API-t a Chrome teszi elérhetővé, hogy aukciót futtasson az Ön figyelméért a hirdetők nevében. | A Privacy Magic letiltja ezt az API-t, hogy a böngészési adatai ne kerüljenek így felhasználásra. |
| Topics API | A Chrome Topics API listát ad a hirdetőknek azokról a témákról, amelyek állítólag érdeklik Önt. | A Privacy Magic letiltja a Topics API-t, hogy ezek az adatok privátak maradjanak. |

### Szivárgó Chrome-beállítások letiltása {#disabling-leaky-chrome-settings}

A Chrome bizonyos beállításokat tartalmaz, amelyek ellentétesek az Ön adatvédelmével: konkrétan olyan funkciókat, amelyek adatokat gyűjtenek a böngészési szokásairól, és elküldik azokat a Google szervereire. Ezeket a beállításokat egy böngészőbővítmény nem tudja közvetlenül vezérelni, de a beállítás során a Privacy Magic segít megtalálni a beállításokat, és Ön maga kikapcsolhatja őket.

| Beállítás | Standard webböngészők | Privacy Magic |
| :--- | :--- | :--- |
| Előzmények szinkronizálása | Amikor be van jelentkezve a Chrome-ba, az szinkronizálja a böngészési előzményeit az eszközök között. Ugyanezeket az adatokat a Google szerverein is elmenti. | A Privacy Magic elvezeti Önt ahhoz a beállításhoz, amely letiltja az előzmények szinkronizálását, hogy a böngészési előzményei privátak maradjanak. |
| Felhasználói élmény metrikái | A Chrome csendben küldi vissza a böngésző használatáról szóló metrikákat a Google szervereire. | A Privacy Magic segít blokkolni ezt a rejtett adatgyűjtést. |
| URL-enkénti adatgyűjtés | Minden meglátogatott URL-hez a Chrome „anonimizált” adatokat gyűjt az azokon az oldalakon végzett böngészéséről, és elküldi azokat a Google-nak. | A Privacy Magic segít letiltani ezt a beállítást, hogy megakadályozza az adatok elküldését. |
