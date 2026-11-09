---
title: "Beskyttelser: tette lekkasjene i nettleseren din"
description: Hvordan Privacy Magic beskytter personvernet ditt mens du surfer på nettet
backToTop: "↑ Tilbake til toppen"
---

Privacy Magic er en åpen kildekode-utvidelse for Chrome som beskytter personvernet ditt grundig mens du surfer på nettet. Nettlesere lekker mye, så Privacy Magic tilbyr flere lag med beskyttelse, inkludert [blokkering av annonser og sporere](#blocking-ads-and-trackers), [beskyttelse av systeminformasjon](#protecting-system-information-fingerprinting), [fjerning av sporingsbrødsmuler](#removing-tracking-breadcrumbs), [stopp av weblekkasjer](#stopping-web-leaks), [sending av personvernsignaler](#privacy-signals) og [håndheving av nettleserbeskyttelser](#browser-protections).

## Blokkering av annonser og sporere {#blocking-ads-and-trackers}

Over hele nettet følger annonser, sporingsskript og sporingspiksler deg uten ditt samtykke ved hjelp av en rekke usynlige metoder.

Privacy Magic bruker populære filterlister for å blokkere mange annonser og sporere fra å bli forespurt av nettleseren din på nettverket. Filterlistene skjuler også de tomme boksene som blir igjen når annonser blokkeres på en nettside. Privacy Magic bruker en låst versjon av disse filterlistene, slik at utvidelsens blokkeringsatferd er fullt reproduserbar og identisk for hver bruker.

| Filterliste | Elementer som blokkeres |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Annonser, inkludert bannere, annonseskript, bilder og videoannonser. |
| [EasyPrivacy](https://easylist.to/) | Sporere, inkludert sporingsskript, piksler, web bugs og andre informasjonsinnsamlere. |
| [Fanboy's Annoyance List](https://easylist.to/) | Informasjonskapsler-varsler, sosiale medie-widgets, popup-vinduer på siden og andre irritasjoner. |
| [small oisd blocklist](https://oisd.nl/) | Ytterligere annonsedomener. |

## Beskyttelse av systeminformasjon (fingeravtrykk) {#protecting-system-information-fingerprinting}

Tradisjonelt lekker nettlesere store mengder informasjon om datamaskinen din til ethvert nettsted eller sporingsskript som spør! Og sporere samler inn disse dataene for å spore deg mens du surfer på nettet.

| Fingeravtrykk | Standard nettlesere | Privacy Magic |
| :--- | :--- | :--- |
| Lyd | Nettlesernes lydbehandlingsfunksjonalitet lekker typisk informasjon om lydkortet ditt. | Privacy Magic reduserer slike lekkasjer ved å slette den minst signifikante biten fra lyddata hver gang de leses av et skript. Denne slettingen har ingen hørbare effekter. |
| Batteri | Nettlesere forteller typisk ethvert nettsted som spør hva batterinivået ditt er, om enheten er koblet til en strømkilde, og et estimat for hvor mye tid som gjenstår før batteriet er tomt. | Privacy Magic stopper denne informasjonslekkasjen ved å simulere et batteri som alltid er på 100 % og en strømforsyning som alltid er tilkoblet. |
| Nettleser | En nettside kan avhøre nettleseren din for å få detaljert informasjon om operativsystemet den kjører i. | Privacy Magic forfalsker `navigator.platform` til én enkelt verdi for hvert forskjellige operativsystem. |
| Enhet | Nettlesere forteller ethvert nettsted som spør om du bruker en foldbar enhet. | Privacy Magic rapporterer alltid at enheten din ikke er foldbar. |
| Disk | Nettlesere lekker typisk hvor mye diskplass som er tilgjengelig for nettstedet, og hvor mye nettstedet bruker, noe som kan avsløre den totale diskplassen på datamaskinen din og hvordan dataene lagres. | Privacy Magic forfalsker disse verdiene slik at de er like for alle. |
| Skjerm | Tradisjonelt lekker nettlesere skjerminnstillinger, inkludert om systemet ditt er satt til «foretrekk redusert bevegelse». | Privacy Magic forhindrer denne lekkasjen. |
| Skrifter | Standard nettlesere lekker hvilke egendefinerte skrifter du har installert på systemet, noe som potensielt gjør fingeravtrykket ditt svært unikt. | Privacy Magic skjuler egendefinerte skrifter installert på systemet ditt for alle skript. Nettsider kan fortsatt bruke standard systemskrifter og nedlastede webskrifter. |
| Grafikk | Canvas og WebGL er to store fingeravtrykksvektorer som lekker hvilken type GPU (grafikkchip) datamaskinen din bruker. | Privacy Magic bruker avanserte teknikker for å skjule grafikkchipen samtidig som du kan fortsette å spille spill og bruke andre nettsteder som bruker grafikk intensivt. |
| Tastatur | Som standard lekker nettlesere tastaturoppsettet du bruker til ethvert nettsted som spør. | Privacy Magic blokkerer tastaturoppsettet ditt fra å bli avslørt for nettstedsskript. |
| Språk | Typisk lekker nettlesere en liste over språk du har godkjent. Selv om det er viktig å kunne spesifisere hvilket språk du foretrekker for nettstedene du besøker, avslører nettlesere typisk en liste over brukerens foretrukne språk, noe som kan være for avslørende. | Privacy Magic lar bare ett enkelt språk sendes til nettstedene du besøker. |
| Matematikk | Sporingsskript på nettsider kan bruke særegen oppførsel hos Math-funksjoner, som cosinus eller hyperbolsk tangens, på enheten din for å skille deg fra andre nettbrukere. | Privacy Magic patcher JavaScript Math-funksjonene slik at de oppfører seg identisk på alle plattformer. |
| Minne | Nettsteder kan finne ut fra de fleste nettlesere hvor mye minne som er ubrukt på datamaskinen din. | Privacy Magic skjuler mengden tilgjengelig minne på systemet ditt for nettsider og sporere. |
| Nettverk | Nettlesere lekker normalt detaljer om hvilken type nettverkstilkobling du har. | Privacy Magic forhindrer at disse detaljene lekker ved å gjøre dem homogene for alle brukere. |
| Prosessor | Nettlesere er designet for å rapportere antall kjerner på datamaskinens prosessor. | Privacy Magic late som om alle har nøyaktig `4`. |
| Skjermstørrelse | Nettlesere lekker dimensjonene på skjermen din til ethvert nettsted som spør, uavhengig av hvor stort nettleservinduet er. | Privacy Magic skjuler den faktiske skjermstørrelsen. |
| Tidssone | Nettlesere lekker din omtrentlige plassering når skript spør etter tidssonen din. Hvis du for eksempel er i sentraleuropeisk tid, gir nettleseren en tidssoneidentifikator som indikerer om du er i Paris, Berlin, Luxembourg eller en av dusinvis av andre byer. | Privacy Magic slår sammen tidssoner slik at hvert tidssoneforskyvning har én representativ tidssone. På den måten lekker ikke nettleseren unødvendig informasjon om hvor du er på kloden. |
| Timing | Timing-API-er med høy oppløsning lar skript karakterisere systemet ditt ved å måle små forskjeller i timing for nettleseratferd. | Privacy Magic runder av tidene som disse API-ene gir, slik at det blir mye vanskeligere for sporingsskript å bruke dem til å skille mellom nettlesere. |
| Touch | Touch API lekker om enheten din har berøring og hvor mange berøringspunkter den tillater. | Privacy Magic skjuler denne informasjonen for nettsteder. |

## Fjerning av sporingsbrødsmuler {#removing-tracking-breadcrumbs}

Noen nettleserfunksjoner er sårbare for å bli brukt til å dele deler av nettleserhistorikken din («brødsmuler») med forskjellige nettsteder du besøker. Privacy Magic herder disse funksjonene slik at de lekker mindre.

| Brødsmule | Standard nettlesere | Privacy Magic |
| :--- | :--- | :--- |
| Cache-lekkasjer | Nettlesere lagrer data i lokale cacher, slik at når du besøker en side eller viser den en annen gang, trenger ikke dataene lastes på nytt. Dessverre er disse cachene noen ganger lekkende og vil avsløre noe om nettleserhistorikken din for et nettsted du besøker. | Privacy Magic tømmer sårbare cacher slik at disse lekkasjene ikke kan skje. |
| Referrer Policy | Tradisjonelt forteller nettlesere hver nettside du besøker hvilken nettside du kom fra! | Privacy Magic sletter den eksakte siden (eller stien) i referrer, og for webkompatibilitet tillates bare domenet å deles. |
| Sporingsparametere | Sporere kan legge til ekstra «sporingsparametere» i adressene til nettsidene du besøker, slik at annonsører kan holde oversikt over hvem du er eller hvor du har surfet. | Privacy Magic sletter kjente sporingsparametere fra nettadresser slik at denne informasjonen ikke deles med nettstedene du besøker. |
| Window Name | Normalt lekker `window.name` JavaScript-API-et data hvis du navigerer mellom nettsteder i samme fane. | Privacy Magic forhindrer denne lekkasjen ved å håndheve en separat `window.name` for hvert nettsted. |

## Stopp av weblekkasjer {#stopping-web-leaks}

Nettlesere er kompliserte skapninger! Lekkasjer av privat informasjon kan oppstå fra mange forskjellige nettleserfunksjoner. Vår tilnærming i Privacy Magic er å tette lekkasjer uansett hvor de finnes.

| Funksjon | Standard nettlesere | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | En iframe er en «nettside innenfor en nettside». Det er en boks inne på siden du besøker, der en annen nettside kan gjemme seg og bruke alle de samme sporingsteknikkene som en vanlig nettside kan bruke. | Privacy Magic injiserer alle sine beskyttelser i hver iframe på en nettside, for å sikre at en sporingsaktør ikke kan omgå disse beskyttelsene ved å gjemme seg inne i en iframe. |
| Service Workers | Service Workers er en nettleserfunksjon som lar kode kjøre i bakgrunnen selv når du ikke er koblet til internett. Dessverre kan disse Service Workers lett lekke privat informasjon. | Service Workers er generelt deaktivert på alle nettsteder, for å forhindre lekkasjer av privat informasjon som ikke kan patches på annen måte. |
| Shared Storage | Shared Storage er en nettleserfunksjon som lar data om surfingen din aggregeres og samles inn. Selv om den ble hevdet å være personvernbevarende, reiste denne funksjonen sterke personvernbekymringer og er planlagt fjernet fra nettlesere. | Privacy Magic sørger for at Shared Storage er deaktivert på alle nettsteder. |
| Shared Workers | Shared Workers er kode som kjører i bakgrunnen og kan deles mellom nettsteder. | Privacy Magic injiserer sine beskyttelser i hver Shared Worker lastet av ethvert nettsted. |
| Web Workers | Web Workers er kode som kjører i bakgrunnen på en nettside. Som hovedsidens skript kan web worker-kode lekke private data. | Privacy Magic injiserer sine beskyttelser i hver Web Worker på en side, for å sikre at sporere ikke kan bruke Web Workers til å omgå disse beskyttelsene. |

## Personvernsignaler {#privacy-signals}

Vi er interessert i å forbedre personvernet ditt på alle mulige måter. Derfor sender Privacy Magic et signal for å kreve personvernvennlige retningslinjer fra nettstedene du besøker.

| Signal | Standard nettlesere | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control er et signal som kan sendes til nettstedene du besøker for å indikere at du ikke vil at dataene dine skal selges eller deles. Dessverre sender de fleste nettlesere ikke Global Privacy Control-preferansen som standard. | Privacy Magic sørger for at nettleseren din sender Global Privacy Control-headeren med hver forespørsel til hver nettside eller innebygd ressurs. Den injiserer også et JavaScript-signal på hver side og iframe. |

## Nettleserbeskyttelser {#browser-protections}

Nettlesere oppfører seg dårlig ikke bare i hvordan de viser nettsider, men også i hvordan de sender data til morselskapet eller til tredjeparts annonseselskaper. Privacy Magic deaktiverer en rekke dårlige nettleseratferder som ellers ville lekket din private informasjon.

### Deaktivering av lekkende webfunksjoner {#disabling-leaky-web-features}

| Funksjon | Standard nettlesere | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | Standard nettlesere har en funksjon som lar nettsteder «pinge» en sporingsserver med lenkene du klikker. | Privacy Magic deaktiverer denne pingen. |
| Tredjepartsinformasjonskapsler | Den mest berømte sporingsfunksjonen av alle. Chrome tillater tredjepartsinformasjonskapsler som lar deg spores fra nettsted til nettsted. | Privacy Magic deaktiverer tredjepartsinformasjonskapsler som standard. |
| WebRTC non-proxied UDP | WebRTC er en nettleserkapasitet som lar deg kommunisere direkte med andre nettbrukere. Dessverre, hvis du bruker en nettleserproxy, vil standard Chrome-baserte nettlesere lekke WebRTC-kommunikasjon utenfor proxyen. | Privacy Magic blokkerer WebRTC-lekkasjene, samtidig som WebRTC fortsatt kan fungere på nettstedene som bruker det. |

### Deaktivering av invasive skytjenester {#disabling-invasive-cloud-services}

| Tjeneste | Standard nettlesere | Privacy Magic |
| :--- | :--- | :--- |
| Alternative feilsider | Som standard viser Chrome alternative feilsider når det oppstår en feil. For å vise disse sidene sendes data om hvilke sider du besøker til Googles servere. | Privacy Magic deaktiverer disse alternative feilsidene slik at ingen data sendes. |
| Safe Browsing Extended Reporting | Når Safe Browsing blokkerer en side, kan Chrome sende innholdet på en blokkert side til Googles servere. | Privacy Magic blokkerer denne funksjonen, slik at ingen data sendes. |
| Search Suggest | Som standard sender Chrome alt du skriver i adressefeltet til din standard søkemotor (typisk Google-søk) mens du skriver, for å lage autoforslag. | Privacy Magic blokkerer denne kontinuerlige overvåkingen, slik at Chrome bare sender søket ditt når du trykker «enter». |
| Stavekontrolltjeneste | Chrome tilbyr en «forbedret stavekontroll» som sender det du skriver til Googles servere. | Privacy Magic deaktiverer dette alternativet og tillater Chrome å bruke bare den lokale «grunnleggende stavekontrollen». |

### Deaktivering av annonsemålrettings-API-er {#disabling-ad-targeting-apis}

| API | Standard nettlesere | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (og den relaterte Private Aggregation API) sender data om surfingen din, annonsene du klikker på, og andre private data til annonseservere. | Privacy Magic deaktiverer disse API-ene for å beskytte dataene dine. |
| Protected Audience API | Som standard gjøres denne API-en tilgjengelig av Chrome for å kjøre en auksjon om oppmerksomheten din på vegne av annonsører. | Privacy Magic deaktiverer denne API-en slik at nettleserdataene dine ikke brukes på denne måten. |
| Topics API | Chromes Topics API gir annonsører en liste over emner som angivelig interesserer deg. | Privacy Magic deaktiverer Topics API for å holde disse dataene private. |

### Deaktivering av lekkende Chrome-innstillinger {#disabling-leaky-chrome-settings}

Chrome inneholder visse innstillinger som er i strid med personvernet ditt: spesielt funksjonalitet som samler inn data om surfevanene dine og sender dem til Googles servere. Disse innstillingene kan ikke direkte kontrolleres av en nettleserutvidelse, men under oppsettet vil Privacy Magic hjelpe deg med å finne innstillingene og slå dem av selv.

| Innstilling | Standard nettlesere | Privacy Magic |
| :--- | :--- | :--- |
| Synkronisering av historikk | Når du er logget inn i Chrome, synkroniserer den nettleserhistorikken din mellom enheter. Den lagrer også de samme dataene på Googles servere. | Privacy Magic veileder deg til innstillingen som deaktiverer synkronisering av historikk for å holde nettleserhistorikken din privat. |
| Brukeropplevelsesmetrikker | Chrome sender stille metrikker om din bruk av nettleseren tilbake til Googles servere. | Privacy Magic hjelper deg med å blokkere denne skjulte datainnsamlingen. |
| Datainnsamling per URL | For hver URL du besøker, samler Chrome inn «anonymiserte» data om surfingen din på disse sidene og sender dem til Google. | Privacy Magic hjelper deg med å deaktivere denne innstillingen for å forhindre at dataene sendes. |
