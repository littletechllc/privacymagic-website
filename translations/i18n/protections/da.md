---
title: "Beskyttelser: lukker hullerne i din browser"
description: Hvordan Privacy Magic beskytter dit privatliv, mens du surfer på nettet
backToTop: "↑ Tilbage til toppen"
---

Privacy Magic er en open source-udvidelse til Chrome, der omfattende beskytter dit privatliv, mens du surfer på nettet. Browsere er meget utætte, så Privacy Magic tilbyder flere lag af beskyttelse, herunder [blokering af annoncer og trackere](#blocking-ads-and-trackers), [beskyttelse af systemoplysninger](#protecting-system-information-fingerprinting), [fjernelse af tracking-spor](#removing-tracking-breadcrumbs), [stop af weblækager](#stopping-web-leaks), [afsendelse af privatlivssignaler](#privacy-signals) og [håndhævelse af browserbeskyttelser](#browser-protections).

## Blokering af annoncer og trackere {#blocking-ads-and-trackers}

På tværs af nettet følger annoncer, tracking-scripts og tracking-pixels dig rundt uden dit samtykke ved hjælp af en række usynlige metoder.

Privacy Magic bruger populære filterlister til at blokere mange annoncer og trackere fra at blive anmodet af din browser på netværket. Filterlisterne skjuler også de tomme bokse, der efterlades, når annoncer blokeres på en webside. Privacy Magic bruger en fastlåst version af disse filterlister, så udvidelsens blokeringsadfærd er fuldt reproducerbar og identisk for alle brugere.

| Filterliste | Blokerede elementer |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Annoncer, herunder bannere, annoncescripts, billeder og videoannoncer. |
| [EasyPrivacy](https://easylist.to/) | Trackere, herunder tracking-scripts, pixels, webbugs og andre informationssamlere. |
| [Fanboy's Annoyance List](https://easylist.to/) | Cookie-meddelelser, sociale medie-widgets, pop-ups på siden og andre gener. |
| [small oisd blocklist](https://oisd.nl/) | Yderligere reklamdomæner. |

## Beskyttelse af systemoplysninger (fingerprinting) {#protecting-system-information-fingerprinting}

Traditionelt lækker browsere store mængder oplysninger om din computer til ethvert website eller tracking-script, der spørger! Og trackere indsamler disse data for at spore dig, mens du surfer på nettet.

| Fingeraftryk | Standard webbrowsere | Privacy Magic |
| :--- | :--- | :--- |
| Lyd | Webbrowsers lydbehandlingsfunktionalitet lækker typisk oplysninger om dit lydkort. | Privacy Magic reducerer sådanne lækager ved at slette den mindst betydende bit fra lyddata, når de læses af et script. Denne sletning har ingen hørbare effekter. |
| Batteri | Webbrowsere fortæller typisk ethvert website, der spørger, hvad dit batteriniveau er, om din enhed er tilsluttet en strømkilde, og et estimat for, hvor meget tid der er tilbage, før dit batteri er tomt. | Privacy Magic stopper denne informationslækage ved at simulere et batteri, der altid er på 100 %, og en strømforsyning, der altid er tilsluttet. |
| Browser | En webside kan udspørge din browser for at få detaljerede oplysninger om det operativsystem, den kører i. | Privacy Magic spoof'er `navigator.platform` til en enkelt værdi for hvert forskelligt operativsystem. |
| Enhed | Webbrowsere fortæller ethvert website, der spørger, om du bruger en foldbar enhed. | Privacy Magic rapporterer altid, at din enhed ikke er foldbar. |
| Disk | Webbrowsere lækker typisk, hvor meget diskplads der er tilgængelig for websitet, og hvor meget websitet bruger, hvilket kan afsløre den samlede diskplads på din computer og måden, dataene er gemt på. | Privacy Magic spoof'er disse værdier, så de er de samme for alle. |
| Skærm | Traditionelt lækker webbrowsere skærmindstillinger, herunder om dit system er indstillet til at „foretrække reduceret bevægelse“. | Privacy Magic forhindrer denne lækage. |
| Skrifttyper | Standard webbrowsere lækker, hvilke brugerdefinerede skrifttyper du har installeret på dit system, hvilket potentielt gør dit fingeraftryk meget unikt. | Privacy Magic skjuler brugerdefinerede skrifttyper installeret på dit system for alle scripts. Websider kan fortsætte med at bruge standard systems-skrifttyper og downloadede webskrifttyper. |
| Grafik | Canvas og WebGL er to store fingerprinting-vektorer, der lækker den type GPU (grafikchip), din computer bruger. | Privacy Magic bruger avancerede teknikker til at skjule grafikchippen, mens du stadig kan spille spil og bruge andre websites, der gør tung brug af grafik. |
| Tastatur | Som standard lækker browsere det tastaturlayout, du bruger, til ethvert website, der spørger. | Privacy Magic blokerer dit tastaturlayout fra at blive afsløret for websitescripts. |
| Sprog | Typisk lækker webbrowsere en liste over sprog, du har godkendt. Selvom det er vigtigt at kunne angive, hvilket sprog du foretrækker for de websites, du besøger, afslører browsere typisk en liste over brugerens foretrukne sprog, som kan være for afslørende. | Privacy Magic tillader kun, at et enkelt sprog sendes til de websites, du besøger. |
| Matematik | Tracking-scripts på websider kan bruge idiosynkratisk adfærd for Math-funktioner, såsom cosinus eller hyperbolsk tangens, på din enhed til at skelne dig fra andre webbrugere. | Privacy Magic patcher JavaScript Math-funktionerne, så de opfører sig identisk på alle platforme. |
| Hukommelse | Websites kan finde ud af fra de fleste browsere, hvor meget hukommelse der er ubrugt på din computer. | Privacy Magic skjuler mængden af tilgængelig hukommelse på dit system for websider og trackere. |
| Netværk | Browsere lækker normalt detaljer om den type netværksforbindelse, du har. | Privacy Magic forhindrer disse detaljer i at lække ved at gøre dem homogene for alle brugere. |
| Processor | Browsere er designet til at rapportere antallet af kerner på din computers processor. | Privacy Magic lader som om, at alle har præcis `4`. |
| Skærmstørrelse | Webbrowsere lækker dimensionerne af din skærm til ethvert website, der spørger, uanset hvor stort browservinduet er. | Privacy Magic skjuler den sande skærmstørrelse. |
| Tidszone | Webbrowsere lækker din omtrentlige placering, når scripts spørger efter din tidszone. Hvis du for eksempel er i centraleuropæisk tid, giver browseren en tidszoneidentifikator, der angiver, om du er i Paris, Berlin, Luxembourg eller en af snesevis af andre byer. | Privacy Magic samler tidszoner, så hver tidszone-offset har en enkelt repræsentativ tidszone. På den måde lækker browseren ikke unødvendige oplysninger om din placering på kloden. |
| Timing | Timing-API'er med høj opløsning giver scripts mulighed for at karakterisere dit system ved at måle små forskelle i timing af browseradfærder. | Privacy Magic afrunder de tider, der leveres af disse API'er, så det bliver meget sværere for tracking-scripts at bruge dem til at skelne mellem browsere. |
| Touch | Touch API lækker, om din enhed har touch, og hvor mange touchpunkter den tillader. | Privacy Magic skjuler disse oplysninger for websites. |

## Fjernelse af tracking-spor {#removing-tracking-breadcrumbs}

Nogle browserfunktioner er sårbare over for at blive brugt til at dele dele af din browserhistorik („breadcrumbs“) med forskellige websites, du besøger. Privacy Magic hærder disse funktioner, så de er mindre utætte.

| Spor | Standard webbrowsere | Privacy Magic |
| :--- | :--- | :--- |
| Cache-lækager | Browsere gemmer data i lokale caches, så når du besøger en side eller ser den anden gang, behøver dataene ikke at blive indlæst en anden gang. Desværre er disse caches nogle gange utætte og afslører noget om din browserhistorik for et website, du besøger. | Privacy Magic rydder sårbare caches, så disse lækager ikke kan ske. |
| Referrer-politik | Traditionelt fortæller browsere hver webside, du besøger, hvilken webside du kom fra! | Privacy Magic sletter den præcise side (eller sti) i referreren og tillader af hensyn til webkompatibilitet kun, at domænet deles. |
| Tracking-parametre | Trackere kan tilføje ekstra „tracking-parametre“ til adresserne på de websider, du besøger, så annoncører kan holde styr på, hvem du er, eller hvor du har surfet. | Privacy Magic sletter kendte tracking-parametre fra webadresser, så disse oplysninger ikke deles med de websites, du besøger. |
| Window Name | Normalt lækker JavaScript-API'en `window.name` data, hvis du navigerer mellem websites i den samme fane. | Privacy Magic forhindrer denne lækage ved at håndhæve et separat `window.name` for hvert website. |

## Stop af weblækager {#stopping-web-leaks}

Webbrowsere er komplicerede væsener! Lækager af private oplysninger kan springe fra mange forskellige browserfunktioner. Vores tilgang i Privacy Magic er at stoppe lækager, uanset hvor de måtte findes.

| Funktion | Standard webbrowsere | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | En iframe er en „webside inden i en webside.“ Det er en boks inde på den side, du besøger, hvor en anden webside kan gemme sig og bruge alle de samme tracking-teknikker, som en normal webside kan bruge. | Privacy Magic injicerer alle sine beskyttelser i hver iframe på en webside for at sikre, at en tracker ikke kan omgå disse beskyttelser ved at gemme sig inde i en iframe. |
| Service Workers | Service Workers er en browserfunktion, der gør det muligt for kode at køre i baggrunden, selv når du ikke er forbundet til internettet. Desværre er disse Service Workers let i stand til at lække private oplysninger. | Service workers er generelt deaktiveret på alle sites for at forhindre lækager af private oplysninger, der ikke kan patches på anden måde. |
| Shared Storage | Shared Storage er en browserfunktion, der gør det muligt at aggregere og indsamle data om din browsing. Selvom den blev hævdet at være privatlivsbevarende, rejste denne funktion stærke privatlivsbekymringer og skal fjernes fra browsere. | Privacy Magic sørger for, at Shared Storage er deaktiveret på alle websites. |
| Shared Workers | Shared Workers er kode, der kører i baggrunden og kan deles mellem websites. | Privacy Magic injicerer sine beskyttelser i hver Shared Worker, der indlæses af ethvert website. |
| Web Workers | Web Workers er kode, der kører i baggrunden på en webside. Ligesom hovedsidens scripts kan web worker-kode lække private data. | Privacy Magic injicerer sine beskyttelser i hver Web Worker på en side for at sikre, at trackere ikke kan bruge Web Workers til at omgå disse beskyttelser. |

## Privatlivssignaler {#privacy-signals}

Vi er interesserede i at forbedre dit privatliv på alle mulige måder. Så Privacy Magic sender et signal for at kræve pro-privatlivspolitikker fra de websites, du besøger.

| Signal | Standard webbrowsere | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control er et signal, der kan sendes til de websites, du besøger, for at angive, at du ikke ønsker, at dine data sælges eller deles. Desværre sender de fleste webbrowsere ikke Global Privacy Control-præferencen som standard. | Privacy Magic sikrer, at din browser sender Global Privacy Control-headeren med hver anmodning til hver webside eller indlejret ressource. Den injicerer også et JavaScript-signal på hver side og iframe. |

## Browserbeskyttelser {#browser-protections}

Browsere opfører sig dårligt, ikke kun i, hvordan de renderer websider, men også i, hvordan de sender data til moderselskabet eller til tredjepartsreklamevirksomheder. Privacy Magic deaktiverer en række dårlige browseradfærder, der ellers ville lække dine private oplysninger.

### Deaktivering af utætte webfunktioner {#disabling-leaky-web-features}

| Funktion | Standard webbrowsere | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink-auditering | Standardbrowsere har en funktion, der giver websites mulighed for at „pinge“ en tracking-server med de links, du klikker på. | Privacy Magic deaktiverer denne ping. |
| Tredjepartscookies | Den mest berømte tracking-funktion af dem alle. Chrome tillader tredjepartscookies, som gør det muligt at spore dig fra site til site. | Privacy Magic deaktiverer tredjepartscookies som standard. |
| WebRTC non-proxied UDP | WebRTC er en webbrowserkapabilitet, der giver dig mulighed for at kommunikere direkte med andre webbrugere. Desværre, hvis du bruger en browserproxy, vil standard Chrome-baserede browsere lække WebRTC-kommunikation uden for proxyen. | Privacy Magic blokerer WebRTC-lækagerne, mens WebRTC stadig tillades at fungere på de websites, der bruger det. |

### Deaktivering af invasive cloudtjenester {#disabling-invasive-cloud-services}

| Tjeneste | Standard webbrowsere | Privacy Magic |
| :--- | :--- | :--- |
| Alternative fejl sider | Som standard viser Chrome alternative fejl sider, når der opstår en fejl. For at vise disse sider sendes data om, hvilke sider du besøger, til Googles servere. | Privacy Magic deaktiverer disse alternative fejl sider, så der ikke sendes nogen data. |
| Safe Browsing Extended Reporting | Når Safe Browsing blokerer en side, kan Chrome sende indholdet af en blokeret side til Googles servere. | Privacy Magic blokerer denne funktion, så der ikke sendes nogen data. |
| Søgeforslag | Som standard sender Chrome alt, hvad du skriver i adresselinjen, til din standardsøgemaskine (typisk Google-søgning), mens du skriver, for at lave autosuggestioner. | Privacy Magic blokerer denne kontinuerlige overvågning, så Chrome kun sender din søgning, når du trykker på „enter“. |
| Stavekontroltjeneste | Chrome tilbyder en „udvidet stavekontrol“, der sender det, du skriver, til Googles servere. | Privacy Magic deaktiverer denne mulighed og tillader Chrome kun at bruge den lokale „grundlæggende stavekontrol“. |

### Deaktivering af annoncetargeting-API'er {#disabling-ad-targeting-apis}

| API | Standard webbrowsere | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (og den relaterede Private Aggregation API) sender data om din browsing, de annoncer, du klikker på, og andre private data til reklameservere. | Privacy Magic deaktiverer disse API'er for at beskytte dine data. |
| Protected Audience API | Som standard stilles denne API til rådighed af Chrome for at køre en auktion om din opmærksomhed på vegne af annoncører. | Privacy Magic deaktiverer denne API, så dine browsingdata ikke bruges på denne måde. |
| Topics API | Chromes Topics API giver annoncører en liste over emner, der angiveligt interesserer dig. | Privacy Magic deaktiverer Topics API for at holde disse data private. |

### Deaktivering af utætte Chrome-indstillinger {#disabling-leaky-chrome-settings}

Chrome indeholder visse indstillinger, der er i strid med dit privatliv: specifikt funktionalitet, der indsamler data om dine surfingvaner og sender dem til Googles servere. Disse indstillinger kan ikke styres direkte af en browserudvidelse, men under opsætningen hjælper Privacy Magic dig med at finde indstillingerne og slå dem fra selv.

| Indstilling | Standard webbrowsere | Privacy Magic |
| :--- | :--- | :--- |
| Synkronisering af historik | Når du er logget ind på Chrome, synkroniserer den din browserhistorik mellem enheder. Den gemmer også de samme data på Google-servere. | Privacy Magic guider dig til indstillingen, der deaktiverer synkronisering af historik for at holde din browserhistorik privat. |
| Brugeroplevelsesmetrikker | Chrome sender stille metrikker om din brug af browseren tilbage til Googles servere. | Privacy Magic hjælper dig med at blokere denne skjulte dataindsamling. |
| Dataindsamling pr. URL | For hver URL, du besøger, indsamler Chrome „anonymiserede“ data om din browsing på disse sider og sender dem til Google. | Privacy Magic hjælper dig med at deaktivere denne indstilling for at forhindre, at dataene sendes. |
