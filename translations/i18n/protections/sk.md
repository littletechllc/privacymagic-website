---
title: "Ochrana: upchávame úniky vo vašom prehliadači"
description: Ako Privacy Magic chráni vaše súkromie pri prehliadaní webu
backToTop: "↑ Späť nahor"
---

Privacy Magic je open-source rozšírenie pre Chrome, ktoré komplexne chráni vaše súkromie pri prehliadaní webu. Prehliadače veľa unikajú, preto Privacy Magic poskytuje viacero vrstiev ochrany vrátane [blokovania reklám a sledovačov](#blocking-ads-and-trackers), [ochrany systémových informácií](#protecting-system-information-fingerprinting), [odstraňovania stôp sledovania](#removing-tracking-breadcrumbs), [zastavenia webových únikov](#stopping-web-leaks), [odosielania signálov súkromia](#privacy-signals) a [vynucovania ochrán prehliadača](#browser-protections).

## Blokovanie reklám a sledovačov {#blocking-ads-and-trackers}

Po celom webe vás reklamy, sledovacie skripty a sledovacie pixely sledujú bez vášho súhlasu pomocou rôznych neviditeľných metód.

Privacy Magic používa populárne zoznamy filtrov na blokovanie mnohých reklám a sledovačov, aby ich váš prehliadač nevyžadoval zo siete. Zoznamy filtrov tiež skrývajú prázdne políčka, ktoré zostanú po zablokovaní reklám na stránke. Privacy Magic používa pripnutú verziu týchto zoznamov filtrov, aby bolo správanie blokovania rozšírenia plne reprodukovateľné a rovnaké pre každého používateľa.

| Zoznam filtrov | Blokované položky |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Reklamy vrátane bannerov, reklamných skriptov, obrázkov a video reklám. |
| [EasyPrivacy](https://easylist.to/) | Sledovače vrátane sledovacích skriptov, pixelov, web bugs a iných zberačov informácií. |
| [Fanboy's Annoyance List](https://easylist.to/) | Upozornenia na cookies, widgety sociálnych médií, vyskakovacie okná na stránke a iné otravnosti. |
| [small oisd blocklist](https://oisd.nl/) | Ďalšie reklamné domény. |

## Ochrana systémových informácií (fingerprinting) {#protecting-system-information-fingerprinting}

Tradične prehliadače unikajú obrovské množstvo informácií o vašom počítači akejkoľvek webovej stránke alebo sledovaciemu skriptu, ktorý sa spýta! A sledovače tieto údaje zbierajú, aby vás sledovali pri prehliadaní webu.

| Odtlačok | Štandardné webové prehliadače | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Funkcia spracovania zvuku v prehliadačoch zvyčajne uniká informácie o vašej zvukovej karte. | Privacy Magic znižuje takéto úniky vymazaním najmenej významného bitu z audio dát vždy, keď ich skript prečíta. Toto vymazanie nemá počuteľné účinky. |
| Batéria | Prehliadače zvyčajne povedia akejkoľvek stránke, ktorá sa spýta, aká je úroveň batérie, či je zariadenie pripojené k napájaniu a odhad, koľko času zostáva do vybitia. | Privacy Magic zastaví tento únik simuláciou batérie vždy na 100 % a napájania, ktoré je vždy pripojené. |
| Prehliadač | Webová stránka môže vypytovať váš prehliadač, aby získala podrobné informácie o operačnom systéme, v ktorom beží. | Privacy Magic falšuje `navigator.platform` na jednu hodnotu pre každý rôzny operačný systém. |
| Zariadenie | Prehliadače povedia akejkoľvek stránke, ktorá sa spýta, či používate skladacie zariadenie. | Privacy Magic vždy hlási, že vaše zariadenie nie je skladacie. |
| Disk | Prehliadače zvyčajne unikajú množstvo diskového priestoru dostupného stránke a koľko tá stránka využíva, čo môže odhaliť celkový diskový priestor vášho počítača a spôsob uloženia dát. | Privacy Magic falšuje tieto hodnoty tak, aby boli rovnaké pre všetkých. |
| Displej | Tradične prehliadače unikajú nastavenia displeja vrátane toho, či máte nastavené „uprednostňovať znížený pohyb“. | Privacy Magic tomuto úniku zabráni. |
| Písma | Štandardné prehliadače unikajú, aké vlastné písma máte nainštalované v systéme, čo môže urobiť váš odtlačok veľmi jedinečným. | Privacy Magic skrýva vlastné písma nainštalované vo vašom systéme pred všetkými skriptmi. Webové stránky môžu naďalej používať štandardné systémové písma a stiahnuté webové písma. |
| Grafika | Canvas a WebGL sú dva hlavné vektory fingerprintingu, ktoré unikajú typ GPU (grafického čipu) vášho počítača. | Privacy Magic používa pokročilé techniky na skrytie grafického čipu a zároveň vám umožňuje naďalej hrať hry a používať iné stránky s intenzívnou grafikou. |
| Klávesnica | Predvolene prehliadače unikajú rozloženie klávesnice, ktoré používate, akejkoľvek stránke, ktorá sa spýta. | Privacy Magic blokuje odhalenie rozloženia klávesnice skriptom stránok. |
| Jazyk | Zvyčajne prehliadače unikajú zoznam jazykov, ktoré ste schválili. Aj keď je dôležité vedieť určiť preferovaný jazyk pre navštívené stránky, prehliadače typicky odhalia zoznam preferovaných jazykov používateľa, čo môže byť príliš odhalujúce. | Privacy Magic povoľuje odovzdať navštíveným stránkam iba jeden jazyk. |
| Matematika | Sledovacie skripty na webových stránkach môžu použiť idiosynkratické správanie funkcií Math, ako je kosínus alebo hyperbolický tangens, na vašom zariadení, aby vás odlíšili od iných používateľov. | Privacy Magic opravuje funkcie Math v JavaScripte tak, aby sa správali identicky na všetkých platformách. |
| Pamäť | Webové stránky dokážu zistiť u väčšiny prehliadačov, koľko pamäte je na vašom počítači nevyužitej. | Privacy Magic skrýva množstvo dostupnej pamäte vášho systému pred stránkami a sledovačmi. |
| Sieť | Prehliadače bežne unikajú podrobnosti o type sieťového pripojenia, ktoré máte. | Privacy Magic zabráni úniku týchto podrobností tým, že ich urobí rovnakými pre všetkých používateľov. |
| Procesor | Prehliadače sú navrhnuté tak, aby hlásili počet jadier procesora vášho počítača. | Privacy Magic predstiera, že každý má presne `4`. |
| Obrazovka | Prehliadače unikajú rozmery vašej obrazovky akejkoľvek stránke, ktorá sa spýta, bez ohľadu na to, aké veľké je okno prehliadača. | Privacy Magic skrýva skutočnú veľkosť obrazovky. |
| Časové pásmo | Prehliadače unikajú vašu približnú polohu, keď skripty požiadajú o časové pásmo. Napríklad ak ste v stredoeurópskom čase, prehliadač poskytne identifikátor časového pásma, ktorý naznačuje, či ste v Paríži, Berlíne, Luxembursku alebo v desiatkach iných miest. | Privacy Magic zjednocuje časové pásma tak, aby každé posunutie pásma malo jedného zástupcu. Tak prehliadač neuniká zbytočné informácie o vašej polohe na planéte. |
| Časovanie | API s vysokým rozlíšením času umožňujú skriptom charakterizovať váš systém meraním drobných rozdielov v časovaní správania prehliadača. | Privacy Magic zaokrúhľuje časy poskytované týmito API, aby bolo sledovacím skriptom oveľa ťažšie ich použiť na rozlíšenie prehliadačov. |
| Dotyk | Touch API uniká, či má vaše zariadenie dotyk a koľko bodov dotyku umožňuje. | Privacy Magic tieto informácie pred webovými stránkami skrýva. |

## Odstraňovanie stôp sledovania {#removing-tracking-breadcrumbs}

Niektoré funkcie prehliadača sú zraniteľné voči použitiu na zdieľanie častí vášho histórie prehliadania („stôp“) s rôznymi stránkami, ktoré navštívite. Privacy Magic tieto funkcie spevňuje, aby menej unikali.

| Stopa | Štandardné webové prehliadače | Privacy Magic |
| :--- | :--- | :--- |
| Úniky z cache | Prehliadače ukladajú dáta do lokálnych cache, aby pri návšteve stránky alebo jej druhom zobrazení nebolo potrebné dáta znova načítať. Bohužiaľ, tieto cache niekedy unikajú a odhalia niečo o vašej histórii prehliadania stránke, ktorú navštívite. | Privacy Magic vymaže zraniteľné cache, aby k týmto únikom nemohlo dôjsť. |
| Politika referrer | Tradične prehliadače povedia každej navštívenej stránke, z akej stránky ste prišli! | Privacy Magic vymaže presnú stránku (alebo cestu) v referrer a kvôli webovej kompatibilite povoľuje zdieľať iba doménu. |
| Sledovacie parametre | Sledovače môžu pridať extra „sledovacie parametre“ k adresám stránok, ktoré navštívite, aby inzerenti mohli sledovať, kto ste alebo kde ste prehliadali. | Privacy Magic vymaže známe sledovacie parametre z webových adries, aby sa tieto informácie nezdieľali so stránkami, ktoré navštívite. |
| Názov okna | Bežne JavaScript API `window.name` uniká dáta, ak prechádzate medzi stránkami v tej istej karte. | Privacy Magic tomuto úniku zabráni vynútením samostatného `window.name` pre každú stránku. |

## Zastavenie webových únikov {#stopping-web-leaks}

Webové prehliadače sú komplikované stvorenia! Úniky súkromných informácií môžu vzniknúť z mnohých rôznych funkcií prehliadača. Náš prístup v Privacy Magic je upchať úniky všade, kde ich nájdeme.

| Funkcia | Štandardné webové prehliadače | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Iframe je „webová stránka vo vnútri webovej stránky“. Je to rámček vo vnútri stránky, ktorú navštevujete, kde sa môže skryť druhá stránka a použiť všetky rovnaké sledovacie techniky ako bežná stránka. | Privacy Magic vstrekuje všetky svoje ochrany do každého iframe na stránke, aby sledovač nemohol tieto ochrany obísť skrytím sa v iframe. |
| Service Workers | Service Workers sú funkcia prehliadača, ktorá umožňuje kódu bežať na pozadí aj keď nie ste pripojení na internet. Bohužiaľ, tieto Service Workers dokážu ľahko uniknúť súkromné informácie. | Service Workers sú vo všeobecnosti vypnuté na všetkých stránkach, aby sa zabránilo únikom súkromných informácií, ktoré inak nemožno opraviť. |
| Shared Storage | Shared Storage je funkcia prehliadača, ktorá umožňuje agregovať a zbierať údaje o vašom prehliadaní. Hoci bola prezentovaná ako zachovávajúca súkromie, táto funkcia vyvolala silné obavy o súkromie a má byť z prehliadačov odstránená. | Privacy Magic zabezpečí, že Shared Storage je vypnuté na všetkých stránkach. |
| Shared Workers | Shared Workers sú kód, ktorý beží na pozadí a môže byť zdieľaný medzi stránkami. | Privacy Magic vstrekuje svoje ochrany do každého Shared Worker načítaného ktoroukoľvek stránkou. |
| Web Workers | Web Workers sú kód, ktorý beží na pozadí na webovej stránke. Podobne ako skripty hlavnej stránky môže kód web worker uniknúť súkromné dáta. | Privacy Magic vstrekuje svoje ochrany do každého Web Worker na stránke, aby sledovače nemohli použiť Web Workers na obídenie týchto ochrán. |

## Signály súkromia {#privacy-signals}

Zaujíma nás zlepšovanie vášho súkromia všetkými možnými spôsobmi. Preto Privacy Magic odosiela signál, ktorým od navštívených stránok vyžaduje politiky podporujúce súkromie.

| Signál | Štandardné webové prehliadače | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control je signál, ktorý možno odoslať navštíveným stránkam, aby ste uviedli, že nechcete, aby sa vaše údaje predávali alebo zdieľali. Bohužiaľ, väčšina prehliadačov predvoľbu Global Privacy Control predvolene neodosiela. | Privacy Magic zabezpečí, že váš prehliadač odosiela hlavičku Global Privacy Control s každou požiadavkou na každú webovú stránku alebo vložený zdroj. Tiež vstrekuje JavaScriptový signál do každej stránky a iframe. |

## Ochrany prehliadača {#browser-protections}

Prehliadače sa správajú zle nielen v tom, ako vykresľujú webové stránky, ale aj v tom, ako odosielajú údaje materskej spoločnosti alebo tretím reklamným spoločnostiam. Privacy Magic vypína rôzne zlé správanie prehliadača, ktoré by inak unikalo vaše súkromné informácie.

### Vypínanie unikajúcich webových funkcií {#disabling-leaky-web-features}

| Funkcia | Štandardné webové prehliadače | Privacy Magic |
| :--- | :--- | :--- |
| Audit hypertextových odkazov | Štandardné prehliadače majú funkciu, ktorá umožňuje stránkam „pingnúť“ sledovací server s odkazmi, na ktoré kliknete. | Privacy Magic tento ping vypína. |
| Cookies tretích strán | Najznámejšia sledovacia funkcia vôbec. Chrome povoľuje cookies tretích strán, ktoré umožňujú sledovať vás zo stránky na stránku. | Privacy Magic predvolene vypína cookies tretích strán. |
| WebRTC UDP bez proxy | WebRTC je schopnosť prehliadača, ktorá vám umožňuje komunikovať priamo s inými používateľmi webu. Bohužiaľ, ak používate proxy prehliadača, štandardné prehliadače založené na Chrome unikajú komunikáciu WebRTC mimo proxy. | Privacy Magic blokuje úniky WebRTC a zároveň stále umožňuje WebRTC fungovať na stránkach, ktoré ho používajú. |

### Vypínanie invazívnych cloudových služieb {#disabling-invasive-cloud-services}

| Služba | Štandardné webové prehliadače | Privacy Magic |
| :--- | :--- | :--- |
| Alternatívne chybové stránky | Predvolene Chrome zobrazí alternatívne chybové stránky, keď nastane chyba. Na zobrazenie týchto stránok sa údaje o navštívených stránkach odosielajú na servery Google. | Privacy Magic tieto alternatívne chybové stránky vypína, aby sa žiadne údaje neodosielali. |
| Safe Browsing Extended Reporting | Keď Safe Browsing zablokuje stránku, Chrome môže odoslať obsah zablokovanej stránky na servery Google. | Privacy Magic túto funkciu blokuje, aby sa žiadne údaje neodosielali. |
| Návrhy vyhľadávania | Predvolene Chrome odosiela všetko, čo napíšete do adresného riadka, vášmu predvolenému vyhľadávaču (zvyčajne Google), kým píšete, aby poskytol automatické návrhy. | Privacy Magic blokuje toto nepretržité monitorovanie, aby Chrome odoslal vaše vyhľadávanie až po stlačení „Enter“. |
| Služba kontroly pravopisu | Chrome ponúka „vylepšenú kontrolu pravopisu“, ktorá odosiela to, čo píšete, na servery Google. | Privacy Magic túto možnosť vypína a povoľuje Chrome používať iba lokálnu „základnú kontrolu pravopisu“. |

### Vypínanie API na cielenie reklamy {#disabling-ad-targeting-apis}

| API | Štandardné webové prehliadače | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (a súvisiace Private Aggregation API) odosiela údaje o vašom prehliadaní, reklamách, na ktoré kliknete, a iné súkromné údaje reklamným serverom. | Privacy Magic tieto API vypína, aby chránilo vaše údaje. |
| Protected Audience API | Predvolene Chrome sprístupňuje toto API na spustenie aukcie o vašu pozornosť v mene inzerentov. | Privacy Magic toto API vypína, aby sa vaše údaje o prehliadaní takto nepoužívali. |
| Topics API | Topics API v Chrome dáva inzerentom zoznam tém, ktoré vás údajne zaujímajú. | Privacy Magic vypína Topics API, aby tieto údaje zostali súkromné. |

### Vypínanie unikajúcich nastavení Chrome {#disabling-leaky-chrome-settings}

Chrome obsahuje určité nastavenia, ktoré sú v rozpore s vaším súkromím: konkrétne funkcie, ktoré zbierajú údaje o vašich návykoch prehliadania a odosielajú ich na servery Google. Tieto nastavenia nemôže priamo ovládať rozšírenie prehliadača, ale počas nastavenia vám Privacy Magic pomôže nájsť nastavenia a vypnúť ich sami.

| Nastavenie | Štandardné webové prehliadače | Privacy Magic |
| :--- | :--- | :--- |
| Synchronizácia histórie | Keď ste prihlásení do Chrome, synchronizuje históriu prehliadania medzi zariadeniami. Tiež ukladá rovnaké údaje na servery Google. | Privacy Magic vás nasmeruje na nastavenie, ktoré vypína synchronizáciu histórie, aby zostala vaša história prehliadania súkromná. |
| Metriky používateľskej skúsenosti | Chrome ticho odosiela metriky o vašom používaní prehliadača späť na servery Google. | Privacy Magic vám pomáha zablokovať tento skrytý zber údajov. |
| Zber údajov podľa URL | Pre každú URL, ktorú navštívite, Chrome zbiera „anonymizované“ údaje o vašom prehliadaní na týchto stránkach a odosiela ich Googlu. | Privacy Magic vám pomáha vypnúť toto nastavenie, aby sa zabránilo odosielaniu údajov. |
