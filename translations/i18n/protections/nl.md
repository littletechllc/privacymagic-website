---
title: "Bescherming: de lekken in je browser dichten"
description: Hoe Privacy Magic je privacy beschermt terwijl je op het web surft
backToTop: "↑ Terug naar boven"
---

Privacy Magic is een open-source-extensie voor Chrome die je privacy uitgebreid beschermt terwijl je op het web surft. Browsers lekken veel, daarom biedt Privacy Magic meerdere lagen bescherming, waaronder [advertenties en trackers blokkeren](#blocking-ads-and-trackers), [systeeminformatie beschermen](#protecting-system-information-fingerprinting), [volgkruimels verwijderen](#removing-tracking-breadcrumbs), [weblekken stoppen](#stopping-web-leaks), [privacysignalen sturen](#privacy-signals) en [browserbescherming afdwingen](#browser-protections).

## Advertenties en trackers blokkeren {#blocking-ads-and-trackers}

Overal op het web volgen advertenties, tracking scripts en tracking pixels je zonder je toestemming met een verscheidenheid aan onzichtbare methoden.

Privacy Magic gebruikt populaire filterlijsten om te voorkomen dat je browser veel advertenties en trackers via het netwerk opvraagt. De filterlijsten verbergen ook de lege vakken die overblijven wanneer advertenties op een webpagina worden geblokkeerd. Privacy Magic gebruikt een vastgezette versie van deze filterlijsten, zodat het blokkeergedrag van de extensie volledig reproduceerbaar en voor elke gebruiker identiek is.

| Filterlijst | Geblokkeerde items |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Advertenties, waaronder banners, adscripts, afbeeldingen en videoadvertenties. |
| [EasyPrivacy](https://easylist.to/) | Trackers, waaronder tracking scripts, pixels, web bugs en andere informatieverzamelaars. |
| [Fanboy's Annoyance List](https://easylist.to/) | Cookiemeldingen, socialemediawidgets, pop-ups in de pagina en andere ergernissen. |
| [small oisd blocklist](https://oisd.nl/) | Extra advertentiedomeinen. |

## Systeeminformatie beschermen (fingerprinting) {#protecting-system-information-fingerprinting}

Traditioneel lekken browsers enorme hoeveelheden informatie over je computer naar elke website of tracking script die erom vraagt! En trackers verzamelen die gegevens om je te volgen terwijl je op het web surft.

| Vingerafdruk | Standaard webbrowsers | Privacy Magic |
| :--- | :--- | :--- |
| Audio | De audioprocessing van webbrowsers lekt doorgaans informatie over je geluidskaart. | Privacy Magic vermindert zulke lekken door het minst significante bit uit audiogegevens te wissen wanneer een script ze leest. Dit wissen heeft geen hoorbare effecten. |
| Batterij | Webbrowsers vertellen doorgaans aan elke website die erom vraagt wat je batterijniveau is, of je apparaat is aangesloten op een stroombron, en een schatting van hoeveel tijd er resteert voordat de batterij leeg is. | Privacy Magic stopt dit informatielek door een batterij te simuleren die altijd op 100% staat en een voeding die altijd is aangesloten. |
| Browser | Een webpagina kan je browser ondervragen om gedetailleerde informatie te krijgen over het besturingssysteem waarin die draait. | Privacy Magic spoof `navigator.platform` naar één waarde voor elk verschillend besturingssysteem. |
| Apparaat | Webbrowsers vertellen aan elke website die erom vraagt of je een vouwbaar apparaat gebruikt. | Privacy Magic meldt altijd dat je apparaat niet vouwbaar is. |
| Schijf | Webbrowsers lekken doorgaans hoeveel schijfruimte beschikbaar is voor de website, en hoeveel die website gebruikt, wat de totale beschikbare schijfruimte op je computer en de manier waarop gegevens worden opgeslagen kan onthullen. | Privacy Magic spoof deze waarden zodat ze voor iedereen hetzelfde zijn. |
| Weergave | Traditioneel lekken webbrowsers weergave-instellingen, inclusief of je systeem is ingesteld op «voorkeur voor verminderde beweging». | Privacy Magic voorkomt dit lek. |
| Lettertypen | Standaard webbrowsers lekken welke aangepaste lettertypen je op je systeem hebt geïnstalleerd, waardoor je vingerafdruk potentieel zeer uniek wordt. | Privacy Magic verbergt aangepaste lettertypen die op je systeem zijn geïnstalleerd voor alle scripts. Webpagina's kunnen standaard systeemlettertypen en gedownloade webfonts blijven gebruiken. |
| Graphics | Canvas en WebGL zijn twee belangrijke fingerprintingvectoren die het type GPU (grafische chip) lekken dat je computer gebruikt. | Privacy Magic gebruikt geavanceerde technieken om de grafische chip te verbergen, terwijl je games kunt blijven spelen en andere websites kunt gebruiken die intensief van graphics gebruikmaken. |
| Toetsenbord | Standaard lekken browsers de toetsenbordindeling die je gebruikt naar elke website die erom vraagt. | Privacy Magic blokkeert dat je toetsenbordindeling aan websitescripts wordt onthuld. |
| Taal | Doorgaans lekken webbrowsers een lijst van talen die je hebt goedgekeurd. Hoewel het belangrijk is om te kunnen aangeven welke taal je prefereert voor de websites die je bezoekt, onthullen browsers doorgaans een lijst van de voorkeurstalen van de gebruiker, wat te veel kan verraden. | Privacy Magic laat slechts één taal doorgeven aan de websites die je bezoekt. |
| Math | Tracking scripts in webpagina's kunnen idiosyncratisch gedrag van Math-functies, zoals cosinus of hyperbolische tangens, op je apparaat gebruiken om je van andere webgebruikers te onderscheiden. | Privacy Magic past de JavaScript Math-functies aan zodat ze op alle platforms identiek werken. |
| Geheugen | Websites kunnen bij de meeste browsers te weten komen hoeveel geheugen er ongebruikt is op je computer. | Privacy Magic verbergt de hoeveelheid beschikbaar geheugen op je systeem voor webpagina's en trackers. |
| Netwerk | Browsers lekken normaal gesproken details over het type netwerkverbinding dat je hebt. | Privacy Magic voorkomt dat deze details lekken door ze voor alle gebruikers homogeen te maken. |
| Processor | Browsers zijn ontworpen om het aantal kernen op de processor van je computer te melden. | Privacy Magic doet alsof iedereen er precies `4` heeft. |
| Scherm | Webbrowsers lekken de afmetingen van je scherm naar elke website die erom vraagt, ongeacht hoe groot het browserscherm is. | Privacy Magic verbergt de echte schermgrootte. |
| Tijdzone | Webbrowsers lekken je ongeveerelijke locatie wanneer scripts om je tijdzone vragen. Als je bijvoorbeeld in Midden-Europese Tijd zit, levert de browser een tijdzone-identifier die aangeeft of je in Parijs, Berlijn, Luxemburg of een van tientallen andere steden bent. | Privacy Magic voegt tijdzones samen zodat elke tijdzone-offset één representatieve tijdzone heeft. Zo lekt de browser geen onnodige informatie over je locatie op de wereldbol. |
| Timing | High-resolution timing-API's stellen scripts in staat je systeem te karakteriseren door minuscule verschillen in de timing van browsergedrag te meten. | Privacy Magic rondt de tijden die deze API's leveren af, zodat het voor tracking scripts veel moeilijker wordt ze te gebruiken om browsers te onderscheiden. |
| Touch | De Touch API lekt of je apparaat touch heeft en hoeveel touchpunten het toestaat. | Privacy Magic verbergt deze informatie voor websites. |

## Volgkruimels verwijderen {#removing-tracking-breadcrumbs}

Sommige browserfuncties zijn kwetsbaar om te worden gebruikt om delen van je browsegeschiedenis («kruimels») te delen met verschillende websites die je bezoekt. Privacy Magic versterkt deze functies zodat ze minder lekken.

| Kruimel | Standaard webbrowsers | Privacy Magic |
| :--- | :--- | :--- |
| Cachelekken | Browsers slaan gegevens op in lokale caches, zodat wanneer je een pagina bezoekt of een tweede keer bekijkt, die gegevens niet opnieuw hoeven te worden geladen. Helaas lekken die caches soms en onthullen ze iets over je browsegeschiedenis aan een website die je bezoekt. | Privacy Magic wist kwetsbare caches zodat deze lekken niet kunnen plaatsvinden. |
| Referrer Policy | Traditioneel vertellen browsers aan elke webpagina die je bezoekt vanaf welke webpagina je kwam! | Privacy Magic verwijdert de exacte pagina (of het pad) in de referrer en staat, voor webcompatibiliteit, alleen toe dat het domein wordt gedeeld. |
| Trackingparameters | Trackers kunnen extra «trackingparameters» toevoegen aan de adressen van de webpagina's die je bezoekt, zodat adverteerders kunnen bijhouden wie je bent of waar je hebt gesurft. | Privacy Magic verwijdert bekende trackingparameters uit webadressen zodat deze informatie niet wordt gedeeld met de websites die je bezoekt. |
| Window Name | Normaal gesproken lekt de JavaScript-API `window.name` gegevens als je tussen websites navigeert in hetzelfde tabblad. | Privacy Magic voorkomt dit lek door een aparte `window.name` af te dwingen voor elke website. |

## Weblekken stoppen {#stopping-web-leaks}

Webbrowsers zijn ingewikkelde beesten! Lekken van privé-informatie kunnen uit veel verschillende browserfuncties voortkomen. Onze aanpak in Privacy Magic is om lekken te dichten waar ze ook worden gevonden.

| Functie | Standaard webbrowsers | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Een iframe is een «webpagina binnen een webpagina». Het is een vak binnen de pagina die je bezoekt, waarin een tweede webpagina zich kan verbergen en alle dezelfde trackingtechnieken kan gebruiken die een normale webpagina kan gebruiken. | Privacy Magic injecteert al zijn beschermingen in elk iframe op een webpagina, om te zorgen dat een tracker die beschermingen niet kan omzeilen door zich in een iframe te verbergen. |
| Service Workers | Service Workers zijn een browserfunctie die code op de achtergrond laat draaien, zelfs wanneer je niet verbonden bent met het internet. Helaas kunnen deze Service Workers gemakkelijk privé-informatie lekken. | Service Workers zijn over het algemeen uitgeschakeld op alle sites, om lekken van privé-informatie te voorkomen die anders niet kunnen worden verholpen. |
| Shared Storage | Shared Storage is een browserfunctie die gegevens over je browsen laat aggregeren en verzamelen. Hoewel het als privacyvriendelijk werd gepresenteerd, riep deze functie sterke privacyzorgen op en zal deze uit browsers worden verwijderd. | Privacy Magic zorgt ervoor dat Shared Storage op alle websites is uitgeschakeld. |
| Shared Workers | Shared Workers zijn code die op de achtergrond draait en tussen websites kan worden gedeeld. | Privacy Magic injecteert zijn beschermingen in elke Shared Worker die door een website wordt geladen. |
| Web Workers | Web Workers zijn code die op de achtergrond op een webpagina draait. Net als de scripts van de hoofdpagina kan Web Worker-code privégegevens lekken. | Privacy Magic injecteert zijn beschermingen in elke Web Worker op een pagina, om te zorgen dat trackers Web Workers niet kunnen gebruiken om die beschermingen te omzeilen. |

## Privacysignalen {#privacy-signals}

We willen je privacy op alle mogelijke manieren verbeteren. Daarom stuurt Privacy Magic een signaal om privacyvriendelijke beleidsregels te eisen van de websites die je bezoekt.

| Signaal | Standaard webbrowsers | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | De Global Privacy Control is een signaal dat naar de websites die je bezoekt kan worden gestuurd om aan te geven dat je niet wilt dat je gegevens worden verkocht of gedeeld. Helaas sturen de meeste webbrowsers de voorkeur Global Privacy Control niet standaard. | Privacy Magic zorgt ervoor dat je browser de Global Privacy Control-header meestuurt bij elk verzoek naar elke webpagina of ingesloten bron. Het injecteert ook een JavaScript-signaal in elke pagina en iframe. |

## Browserbescherming {#browser-protections}

Browsers gedragen zich slecht niet alleen in hoe ze webpagina's weergeven, maar ook in hoe ze gegevens sturen naar het moederbedrijf of naar externe advertentiebedrijven. Privacy Magic schakelt een reeks slechte browsergedragingen uit die anders je privé-informatie zouden lekken.

### Lekke webfuncties uitschakelen {#disabling-leaky-web-features}

| Functie | Standaard webbrowsers | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | Standaardbrowsers hebben een functie waarmee websites een trackingserver kunnen «pingen» met de links waarop je klikt. | Privacy Magic schakelt deze ping uit. |
| Third-Party Cookies | De beroemdste trackingfunctie van allemaal. Chrome staat third-party cookies toe waarmee je van site tot site kunt worden gevolgd. | Privacy Magic schakelt third-party cookies standaard uit. |
| WebRTC non-proxied UDP | WebRTC is een browsercapaciteit waarmee je rechtstreeks met andere webgebruikers kunt communiceren. Helaas lekken standaard Chrome-gebaseerde browsers WebRTC-communicatie buiten de proxy als je een browserproxy gebruikt. | Privacy Magic blokkeert de WebRTC-lekken, terwijl WebRTC nog steeds kan werken op de websites die het gebruiken. |

### Invasieve cloudservices uitschakelen {#disabling-invasive-cloud-services}

| Service | Standaard webbrowsers | Privacy Magic |
| :--- | :--- | :--- |
| Alternatieve foutpagina's | Standaard toont Chrome alternatieve foutpagina's wanneer er een fout optreedt. Om deze pagina's te tonen, worden gegevens over welke pagina's je bezoekt naar de servers van Google gestuurd. | Privacy Magic schakelt deze alternatieve foutpagina's uit zodat er geen gegevens worden verzonden. |
| Safe Browsing Extended Reporting | Wanneer Safe Browsing een pagina blokkeert, kan Chrome de inhoud van een geblokkeerde pagina naar de servers van Google sturen. | Privacy Magic blokkeert deze functie, zodat er geen gegevens worden verzonden. |
| Zoeksuggesties | Standaard stuurt Chrome alles wat je in de adresbalk typt naar je standaardzoekmachine (doorgaans Google Search) terwijl je typt, om autosuggesties te doen. | Privacy Magic blokkeert deze continue monitoring, zodat Chrome je zoekopdracht alleen stuurt wanneer je op «Enter» drukt. |
| Spellingsservice | Chrome biedt een «verbeterde spellingcontrole» die wat je typt naar de servers van Google stuurt. | Privacy Magic schakelt deze optie uit en staat Chrome alleen toe de lokale «basisspellingcontrole» te gebruiken. |

### Advertentietargeting-API's uitschakelen {#disabling-ad-targeting-apis}

| API | Standaard webbrowsers | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | De Ad Measurement API (en de gerelateerde Private Aggregation API) stuurt gegevens over je browsen, de advertenties waarop je klikt en andere privégegevens naar advertentieservers. | Privacy Magic schakelt deze API's uit om je gegevens te beschermen. |
| Protected Audience API | Standaard wordt deze API door Chrome beschikbaar gemaakt om namens adverteerders een veiling op je aandacht te voeren. | Privacy Magic schakelt deze API uit zodat je browsegegevens niet op deze manier worden gebruikt. |
| Topics API | De Topics API van Chrome geeft adverteerders een lijst van onderwerpen die je naar verluidt interesseren. | Privacy Magic schakelt de Topics API uit om die gegevens privé te houden. |

### Lekke Chrome-instellingen uitschakelen {#disabling-leaky-chrome-settings}

Chrome bevat bepaalde instellingen die haaks staan op je privacy: specifiek functionaliteit die gegevens over je browsegewoonten verzamelt en naar de servers van Google stuurt. Deze instellingen kunnen niet rechtstreeks door een browserextensie worden aangestuurd, maar tijdens de installatie helpt Privacy Magic je de instellingen te vinden en zelf uit te schakelen.

| Instelling | Standaard webbrowsers | Privacy Magic |
| :--- | :--- | :--- |
| Geschiedenissynchronisatie | Wanneer je bent aangemeld bij Chrome, synchroniseert het je browsegeschiedenis tussen apparaten. Het slaat diezelfde gegevens ook op op de servers van Google. | Privacy Magic leidt je naar de instelling die geschiedenissynchronisatie uitschakelt om je browsegeschiedenis privé te houden. |
| Gebruikerservaringsstatistieken | Chrome stuurt stilzwijgend statistieken over je gebruik van de browser terug naar de servers van Google. | Privacy Magic helpt je deze verborgen gegevensverzameling te blokkeren. |
| Gegevensverzameling per URL | Voor elke URL die je bezoekt verzamelt Chrome «geanonimiseerde» gegevens over je browsen op die pagina's en stuurt die naar Google. | Privacy Magic helpt je deze instelling uit te schakelen om te voorkomen dat de gegevens worden verzonden. |
