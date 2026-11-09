---
title: "Zaščite: zamašimo puščanja v vašem brskalniku"
description: Kako Privacy Magic ščiti vašo zasebnost med brskanjem po spletu
backToTop: "↑ Nazaj na vrh"
---

Privacy Magic je odprtokodna razširitev za Chrome, ki celovito ščiti vašo zasebnost med brskanjem po spletu. Brskalniki močno puščajo, zato Privacy Magic zagotavlja več plasti zaščite, vključno z [blokiranjem oglasov in sledilnikov](#blocking-ads-and-trackers), [zaščito sistemskih informacij](#protecting-system-information-fingerprinting), [odstranjevanjem sledi sledenja](#removing-tracking-breadcrumbs), [ustavljanjem spletnih puščanj](#stopping-web-leaks), [pošiljanjem signalov zasebnosti](#privacy-signals) in [uveljavljanjem zaščit brskalnika](#browser-protections).

## Blokiranje oglasov in sledilnikov {#blocking-ads-and-trackers}

Po vsem spletu vas oglasi, sledilni skripti in sledilni piksli sledijo brez vašega soglasja z različnimi nevidnimi metodami.

Privacy Magic uporablja priljubljene sezname filtrov, da blokira številne oglase in sledilnike, da jih vaš brskalnik ne zahteva po omrežju. Seznami filtrov tudi skrijejo prazne okvirje, ki ostanejo, ko so oglasi na strani blokirani. Privacy Magic uporablja pripeto različico teh seznamov filtrov, da je vedenje blokiranja razširitve popolnoma ponovljivo in enako za vsakega uporabnika.

| Seznam filtrov | Blokirane postavke |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Oglasi, vključno z pasicami, oglasnimi skripti, slikami in video oglasi. |
| [EasyPrivacy](https://easylist.to/) | Sledilniki, vključno s sledilnimi skripti, piksli, spletnimi hrošči in drugimi zbiralci informacij. |
| [Fanboy's Annoyance List](https://easylist.to/) | Obvestila o piškotkih, gradniki družbenih omrežij, pojavna okna na strani in druge nadloge. |
| [small oisd blocklist](https://oisd.nl/) | Dodatne oglaševalske domene. |

## Zaščita sistemskih informacij (fingerprinting) {#protecting-system-information-fingerprinting}

Tradicionalno brskalniki spustijo obilico informacij o vašem računalniku katerikoli spletni strani ali sledilnemu skriptu, ki jih vpraša! Sledilniki pa te podatke zberejo, da vas sledijo med brskanjem po spletu.

| Prstni odtis | Standardni spletni brskalniki | Privacy Magic |
| :--- | :--- | :--- |
| Zvok | Funkcionalnost obdelave zvoka v brskalnikih običajno spusti informacije o vaši zvočni kartici. | Privacy Magic zmanjša taka puščanja z izbrisom najmanj pomembnega bita iz zvočnih podatkov, kadar koli jih prebere skript. Ta izbris nima slišnih učinkov. |
| Baterija | Brskalniki običajno katerikoli strani, ki vpraša, povedo raven baterije, ali je naprava priključena na napajanje, in oceno, koliko časa ostane do prazne baterije. | Privacy Magic ustavi to puščanje s simulacijo baterije, ki je vedno na 100 %, in napajanja, ki je vedno priključeno. |
| Brskalnik | Spletna stran lahko izpraša vaš brskalnik, da pridobi podrobne informacije o operacijskem sistemu, v katerem teče. | Privacy Magic ponaredi `navigator.platform` na eno vrednost za vsak različni operacijski sistem. |
| Naprava | Brskalniki katerikoli strani, ki vpraša, povedo, ali uporabljate zložljivo napravo. | Privacy Magic vedno sporoči, da vaša naprava ni zložljiva. |
| Disk | Brskalniki običajno spustijo količino prostora na disku, ki je na voljo strani, in koliko ta stran uporablja, kar lahko razkrije skupni prostor na disku vašega računalnika in način shranjevanja podatkov. | Privacy Magic te vrednosti ponaredi, da so enake za vse. |
| Zaslon | Tradicionalno brskalniki spustijo nastavitve prikaza, vključno s tem, ali je sistem nastavljen na »raje zmanjšano gibanje«. | Privacy Magic prepreči to puščanje. |
| Pisave | Standardni brskalniki spustijo, katere pisave po meri imate nameščene v sistemu, kar lahko naredi vaš prstni odtis zelo edinstven. | Privacy Magic skrije pisave po meri, nameščene v vašem sistemu, pred vsemi skripti. Spletne strani lahko še naprej uporabljajo standardne sistemske pisave in prenesene spletne pisave. |
| Grafika | Canvas in WebGL sta dva glavna vektorja fingerprintinga, ki spustita vrsto GPU (grafičnega čipa) vašega računalnika. | Privacy Magic uporablja napredne tehnike za skrivanje grafičnega čipa, hkrati pa vam omogoča, da še naprej igrate igre in uporabljate druge strani z intenzivno grafiko. |
| Tipkovnica | Privzeto brskalniki spustijo razporeditev tipkovnice, ki jo uporabljate, katerikoli strani, ki vpraša. | Privacy Magic blokira razkritje razporeditve tipkovnice skriptom spletnih strani. |
| Jezik | Običajno brskalniki spustijo seznam jezikov, ki ste jih odobrili. Čeprav je pomembno, da lahko določite želeni jezik za strani, ki jih obiščete, brskalniki tipično razkrijejo seznam uporabnikovih želenih jezikov, kar je lahko preveč razkrivajoče. | Privacy Magic dovoli, da se obiskanima stranema posreduje le en jezik. |
| Matematika | Sledilni skripti na spletnih straneh lahko uporabijo idiosinkratično vedenje funkcij Math, kot sta kosinus ali hiperbolični tangens, na vaši napravi, da vas ločijo od drugih spletnih uporabnikov. | Privacy Magic popravi funkcije Math v JavaScriptu, da se obnašajo enako na vseh platformah. |
| Pomnilnik | Spletne strani lahko pri večini brskalnikov ugotovijo, koliko pomnilnika je v vašem računalniku neuporabljenega. | Privacy Magic skrije količino razpoložljivega pomnilnika vašega sistema pred spletnimi stranmi in sledilniki. |
| Omrežje | Brskalniki običajno spustijo podrobnosti o vrsti omrežne povezave, ki jo imate. | Privacy Magic prepreči puščanje teh podrobnosti, tako da so homogene za vse uporabnike. |
| Procesor | Brskalniki so zasnovani tako, da sporočijo število jeder procesorja vašega računalnika. | Privacy Magic pretvarja, da imajo vsi natanko `4`. |
| Zaslon (mere) | Brskalniki spustijo mere vašega zaslona katerikoli strani, ki vpraša, ne glede na to, kako veliko je okno brskalnika. | Privacy Magic skrije pravo velikost zaslona. |
| Časovni pas | Brskalniki spustijo vašo približno lokacijo, ko skripti zahtevajo časovni pas. Na primer, če ste v srednjeevropskem času, bo brskalnik zagotovil identifikator časovnega pasu, ki nakazuje, ali ste v Parizu, Berlinu, Luksemburgu ali v katerem od desetin drugih mest. | Privacy Magic združuje časovne pasove, tako da ima vsak odmik časovnega pasu enega predstavnika. Tako brskalnik ne spusti nepotrebnih informacij o vaši lokaciji na planetu. |
| Časovanje | API-ji za časovanje visoke ločljivosti skriptom omogočajo karakterizacijo vašega sistema z merjenjem drobnih razlik v časovanju vedenja brskalnika. | Privacy Magic zaokroži čase, ki jih zagotavljajo ti API-ji, da je sledilnim skriptom veliko težje uporabiti jih za razlikovanje brskalnikov. |
| Dotik | Touch API spusti, ali ima vaša naprava dotik in koliko točk dotika dovoljuje. | Privacy Magic te informacije skrije pred spletnimi stranmi. |

## Odstranjevanje sledi sledenja {#removing-tracking-breadcrumbs}

Nekatere funkcije brskalnika so ranljive za uporabo pri deljenju delov vaše zgodovine brskanja (»drobtinic«) z različnimi stranmi, ki jih obiščete. Privacy Magic te funkcije utrdi, da manj puščajo.

| Sled | Standardni spletni brskalniki | Privacy Magic |
| :--- | :--- | :--- |
| Puščanja predpomnilnika | Brskalniki shranjujejo podatke v lokalne predpomnilnike, da jih ob obisku strani ali drugem ogledu ni treba znova naložiti. Žal ti predpomnilniki včasih puščajo in razkrijejo nekaj o vaši zgodovini brskanja strani, ki jo obiščete. | Privacy Magic počisti ranljive predpomnilnike, da do teh puščanj ne more priti. |
| Politika referrer | Tradicionalno brskalniki vsaki strani, ki jo obiščete, povedo, s katere strani ste prišli! | Privacy Magic izbriše točno stran (ali pot) v referrerju in zaradi spletne združljivosti dovoli deljenje le domene. |
| Sledilni parametri | Sledilniki lahko naslovom strani, ki jih obiščete, dodajo dodatne »sledilne parametre«, da lahko oglaševalci sledijo, kdo ste ali kje ste brskali. | Privacy Magic izbriše znane sledilne parametre iz spletnih naslovov, da te informacije niso deljene s stranmi, ki jih obiščete. |
| Ime okna | Običajno JavaScript API `window.name` spusti podatke, če navigirate med stranmi v istem zavihku. | Privacy Magic prepreči to puščanje z uveljavitvijo ločenega `window.name` za vsako stran. |

## Ustavljanje spletnih puščanj {#stopping-web-leaks}

Spletni brskalniki so zapletene zveri! Puščanja zasebnih informacij lahko izvirajo iz številnih različnih funkcij brskalnika. Naš pristop v Privacy Magic je zamašiti puščanja, kjer koli jih najdemo.

| Funkcija | Standardni spletni brskalniki | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Iframe je »spletna stran znotraj spletne strani«. To je okvir znotraj strani, ki jo obiskujete, kjer se lahko skrije druga stran in uporabi vse enake tehnike sledenja kot običajna stran. | Privacy Magic vbrizga vse svoje zaščite v vsak iframe na strani, da sledilnik teh zaščit ne more zaobiti s skrivanjem v iframe. |
| Service Workers | Service Workers so funkcija brskalnika, ki omogoča, da koda teče v ozadju tudi, ko niste povezani z internetom. Žal lahko ti Service Workers zlahka spustijo zasebne informacije. | Service Workers so na splošno onemogočeni na vseh straneh, da se preprečijo puščanja zasebnih informacij, ki jih sicer ni mogoče popraviti. |
| Shared Storage | Shared Storage je funkcija brskalnika, ki omogoča združevanje in zbiranje podatkov o vašem brskanju. Čeprav naj bi ohranjala zasebnost, je ta funkcija vzbudila močne pomisleke glede zasebnosti in naj bi bila odstranjena iz brskalnikov. | Privacy Magic poskrbi, da je Shared Storage onemogočen na vseh spletnih straneh. |
| Shared Workers | Shared Workers so koda, ki teče v ozadju in jo je mogoče deliti med spletnimi stranmi. | Privacy Magic vbrizga svoje zaščite v vsak Shared Worker, ki ga naloži katerakoli stran. |
| Web Workers | Web Workers so koda, ki teče v ozadju na spletni strani. Tako kot skripti glavne strani lahko tudi koda web worker spusti zasebne podatke. | Privacy Magic vbrizga svoje zaščite v vsak Web Worker na strani, da sledilniki ne morejo uporabiti Web Workers za zaobitev teh zaščit. |

## Signali zasebnosti {#privacy-signals}

Želimo izboljšati vašo zasebnost na vse mogoče načine. Zato Privacy Magic pošlje signal, s katerim od strani, ki jih obiščete, zahteva politike, naklonjene zasebnosti.

| Signal | Standardni spletni brskalniki | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control je signal, ki ga je mogoče poslati stranem, ki jih obiščete, da nakažete, da ne želite, da se vaši podatki prodajajo ali delijo. Žal večina brskalnikov prednosti Global Privacy Control privzeto ne pošilja. | Privacy Magic poskrbi, da vaš brskalnik pošlje glavo Global Privacy Control z vsako zahtevo na vsako spletno stran ali vdelani vir. Vbrizga tudi JavaScript signal v vsako stran in iframe. |

## Zaščite brskalnika {#browser-protections}

Brskalniki se slabo obnašajo ne le pri upodabljanju spletnih strani, temveč tudi pri pošiljanju podatkov matičnemu podjetju ali tretjim oglaševalskim podjetjem. Privacy Magic onemogoči različna slaba vedenja brskalnika, ki bi sicer spustila vaše zasebne informacije.

### Onemogočanje puščajočih spletnih funkcij {#disabling-leaky-web-features}

| Funkcija | Standardni spletni brskalniki | Privacy Magic |
| :--- | :--- | :--- |
| Revizija hiperpovezav | Standardni brskalniki imajo funkcijo, ki stranem omogoča, da »pingajo« sledilni strežnik s povezavami, na katere kliknete. | Privacy Magic ta ping onemogoči. |
| Piškotki tretjih oseb | Najbolj znana sledilna funkcija od vseh. Chrome dovoljuje piškotke tretjih oseb, ki omogočajo sledenje od strani do strani. | Privacy Magic privzeto onemogoči piškotke tretjih oseb. |
| WebRTC UDP brez proxyja | WebRTC je zmožnost brskalnika, ki vam omogoča neposredno komunikacijo z drugimi spletnimi uporabniki. Žal, če uporabljate proxy brskalnika, standardni brskalniki na osnovi Chrome spustijo komunikacijo WebRTC zunaj proxyja. | Privacy Magic blokira puščanja WebRTC, hkrati pa še vedno omogoča delovanje WebRTC na straneh, ki ga uporabljajo. |

### Onemogočanje vsiljivih storitev v oblaku {#disabling-invasive-cloud-services}

| Storitev | Standardni spletni brskalniki | Privacy Magic |
| :--- | :--- | :--- |
| Nadomestne strani z napakami | Privzeto Chrome pri napaki prikaže nadomestne strani z napakami. Za prikaz teh strani se podatki o straneh, ki jih obiskujete, pošljejo Googlovim strežnikom. | Privacy Magic te nadomestne strani z napakami onemogoči, da se ne pošljejo nobeni podatki. |
| Safe Browsing Extended Reporting | Ko Safe Browsing blokira stran, lahko Chrome pošlje vsebino blokirane strani Googlovim strežnikom. | Privacy Magic to funkcijo blokira, da se ne pošljejo nobeni podatki. |
| Predlogi iskanja | Privzeto Chrome vse, kar vtipkate v naslovno vrstico, pošlje vašemu privzetemu iskalniku (običajno Googlovemu iskanju), medtem ko tipkate, da nudi samodejne predloge. | Privacy Magic blokira to neprekinjeno spremljanje, da Chrome pošlje vaše iskanje šele, ko pritisnete »Enter«. |
| Storitev črkovanja | Chrome ponuja »izboljšano preverjanje črkovanja«, ki pošlje to, kar tipkate, Googlovim strežnikom. | Privacy Magic to možnost onemogoči in dovoli Chromeu, da uporablja le lokalno »osnovno preverjanje črkovanja«. |

### Onemogočanje API-jev za ciljanje oglasov {#disabling-ad-targeting-apis}

| API | Standardni spletni brskalniki | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (in povezani Private Aggregation API) pošilja podatke o vašem brskanju, oglasih, na katere kliknete, in druge zasebne podatke oglaševalskim strežnikom. | Privacy Magic te API-je onemogoči, da zaščiti vaše podatke. |
| Protected Audience API | Privzeto Chrome ta API da na voljo za izvedbo dražbe za vašo pozornost v imenu oglaševalcev. | Privacy Magic ta API onemogoči, da se vaši podatki o brskanju ne uporabijo na ta način. |
| Topics API | Topics API v Chromu oglaševalcem da seznam tem, ki vas naj bi zanimale. | Privacy Magic onemogoči Topics API, da ti podatki ostanejo zasebni. |

### Onemogočanje puščajočih nastavitev Chrome {#disabling-leaky-chrome-settings}

Chrome vsebuje določene nastavitve, ki so v nasprotju z vašo zasebnostjo: konkretno funkcionalnosti, ki zbirajo podatke o vaših navadah brskanja in jih pošiljajo Googlovim strežnikom. Teh nastavitev razširitev brskalnika ne more neposredno nadzorovati, a med nastavitvijo vam Privacy Magic pomaga najti nastavitve in jih izklopiti sami.

| Nastavitev | Standardni spletni brskalniki | Privacy Magic |
| :--- | :--- | :--- |
| Sinhronizacija zgodovine | Ko ste prijavljeni v Chrome, sinhronizira zgodovino brskanja med napravami. Enake podatke tudi shrani na Googlovih strežnikih. | Privacy Magic vas usmeri do nastavitve, ki onemogoči sinhronizacijo zgodovine, da ostane vaša zgodovina brskanja zasebna. |
| Metrike uporabniške izkušnje | Chrome tiho pošilja metrike o vaši uporabi brskalnika nazaj Googlovim strežnikom. | Privacy Magic vam pomaga blokirati to skrito zbiranje podatkov. |
| Zbiranje podatkov po URL | Za vsak URL, ki ga obiščete, Chrome zbira »anonimizirane« podatke o vašem brskanju na teh straneh in jih pošlje Googlu. | Privacy Magic vam pomaga onemogočiti to nastavitev, da se podatki ne pošljejo. |
