---
title: "Skydd: täppa till läckorna i din webbläsare"
description: Hur Privacy Magic skyddar din integritet när du surfar på webben
backToTop: "↑ Tillbaka till toppen"
---

Privacy Magic är ett öppen källkod-tillägg för Chrome som skyddar din integritet omfattande när du surfar på webben. Webbläsare läcker mycket, så Privacy Magic erbjuder flera lager av skydd, inklusive [blockering av annonser och spårare](#blocking-ads-and-trackers), [skydd av systeminformation](#protecting-system-information-fingerprinting), [borttagning av spårningsbrödsmulor](#removing-tracking-breadcrumbs), [stopp av webbäckor](#stopping-web-leaks), [sändning av integritetssignaler](#privacy-signals) och [upprätthållande av webbläsarskydd](#browser-protections).

## Blockering av annonser och spårare {#blocking-ads-and-trackers}

Över hela webben följer annonser, spårningsskript och spårningspixlar dig utan ditt samtycke med hjälp av en mängd osynliga metoder.

Privacy Magic använder populära filterlistor för att blockera många annonser och spårare från att begäras av din webbläsare på nätverket. Filterlistorna döljer också de tomma rutorna som blir kvar när annonser blockeras på en webbsida. Privacy Magic använder en låst version av dessa filterlistor så att tilläggets blockeringsbeteende är fullt reproducerbart och identiskt för varje användare.

| Filterlista | Blockerade objekt |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Annonser, inklusive banners, annonsskript, bilder och videoannonser. |
| [EasyPrivacy](https://easylist.to/) | Spårare, inklusive spårningsskript, pixlar, webbuggar och andra informationssamlare. |
| [Fanboy's Annoyance List](https://easylist.to/) | Cookie-meddelanden, sociala medie-widgets, popup-fönster på sidan och andra irritationsmoment. |
| [small oisd blocklist](https://oisd.nl/) | Ytterligare annonsdomäner. |

## Skydd av systeminformation (fingeravtryck) {#protecting-system-information-fingerprinting}

Traditionellt läcker webbläsare stora mängder information om din dator till vilken webbplats eller vilket spårningsskript som helst som frågar! Och spårare samlar in dessa data för att spåra dig när du surfar på webben.

| Fingeravtryck | Standardwebbläsare | Privacy Magic |
| :--- | :--- | :--- |
| Ljud | Webbläsarnas ljudbehandlingsfunktionalitet läcker typiskt information om ditt ljudkort. | Privacy Magic minskar sådana läckor genom att radera den minst signifikanta biten från ljuddata närhelst de läses av ett skript. Denna radering har inga hörbara effekter. |
| Batteri | Webbläsare berättar typiskt för vilken webbplats som helst som frågar vad din batterinivå är, om din enhet är inkopplad till en strömkälla, och en uppskattning av hur mycket tid som återstår innan batteriet är tomt. | Privacy Magic stoppar denna informationsläcka genom att simulera ett batteri som alltid är på 100 % och en strömförsörjning som alltid är inkopplad. |
| Webbläsare | En webbsida kan förhöra din webbläsare för att få detaljerad information om operativsystemet den körs i. | Privacy Magic förfalskar `navigator.platform` till ett enda värde för varje olika operativsystem. |
| Enhet | Webbläsare berättar för vilken webbplats som helst som frågar om du använder en vikbar enhet. | Privacy Magic rapporterar alltid att din enhet inte är vikbar. |
| Disk | Webbläsare läcker typiskt hur mycket diskutrymme som är tillgängligt för webbplatsen, och hur mycket den webbplatsen använder, vilket kan avslöja det totala diskutrymmet på din dator och hur data lagras. | Privacy Magic förfalskar dessa värden så att de är samma för alla. |
| Display | Traditionellt läcker webbläsare displayinställningar, inklusive om ditt system är inställt på att ”föredra minskad rörelse”. | Privacy Magic förhindrar denna läcka. |
| Typsnitt | Standardwebbläsare läcker vilka anpassade typsnitt du har installerat på ditt system, vilket potentiellt gör ditt fingeravtryck mycket unikt. | Privacy Magic döljer anpassade typsnitt installerade på ditt system från alla skript. Webbsidor kan fortsätta använda standard systemtypsnitt och nedladdade webbtypsnitt. |
| Grafik | Canvas och WebGL är två stora fingeravtrycksvektorer som läcker vilken typ av GPU (grafikchip) din dator använder. | Privacy Magic använder avancerade tekniker för att dölja grafikchipet samtidigt som du kan fortsätta spela spel och använda andra webbplatser som använder grafik intensivt. |
| Tangentbord | Som standard läcker webbläsare tangentbordslayouten du använder till vilken webbplats som helst som frågar. | Privacy Magic blockerar din tangentbordslayout från att avslöjas för webbplatsskript. |
| Språk | Typiskt läcker webbläsare en lista över språk som du har godkänt. Även om det är viktigt att kunna ange vilket språk du föredrar för webbplatserna du besöker, avslöjar webbläsare typiskt en lista över användarens föredragna språk, vilket kan vara för avslöjande. | Privacy Magic tillåter endast ett enda språk att skickas till webbplatserna du besöker. |
| Matematik | Spårningsskript på webbsidor kan använda idiosynkratiskt beteende hos Math-funktioner, såsom cosinus eller hyperbolisk tangens, på din enhet för att skilja dig från andra webbanvändare. | Privacy Magic patchar JavaScript Math-funktionerna så att de beter sig identiskt på alla plattformar. |
| Minne | Webbplatser kan ta reda på från de flesta webbläsare hur mycket minne som är oanvänt på din dator. | Privacy Magic döljer mängden tillgängligt minne på ditt system från webbsidor och spårare. |
| Nätverk | Webbläsare läcker normalt detaljer om vilken typ av nätverksanslutning du har. | Privacy Magic förhindrar att dessa detaljer läcker genom att göra dem homogena för alla användare. |
| Processor | Webbläsare är utformade för att rapportera antalet kärnor på din dators processor. | Privacy Magic låtsas att alla har exakt `4`. |
| Skärm | Webbläsare läcker dimensionerna på din skärm till vilken webbplats som helst som frågar, oavsett hur stort webbläsarfönstret är. | Privacy Magic döljer den verkliga skärmstorleken. |
| Tidszon | Webbläsare läcker din ungefärliga plats när skript frågar efter din tidszon. Om du till exempel är i centraleuropeisk tid ger webbläsaren en tidszonsidentifierare som anger om du är i Paris, Berlin, Luxemburg eller någon av dussintals andra städer. | Privacy Magic slår samman tidszoner så att varje tidszonsförskjutning har en enda representativ tidszon. På så sätt läcker inte webbläsaren onödig information om din plats på jordklotet. |
| Timing | Timing-API:er med hög upplösning låter skript karakterisera ditt system genom att mäta små skillnader i timing för webbläsarbeteenden. | Privacy Magic avrundar tiderna som dessa API:er ger så att det blir mycket svårare för spårningsskript att använda dem för att skilja mellan webbläsare. |
| Touch | Touch API läcker om din enhet har pekskärm och hur många beröringspunkter den tillåter. | Privacy Magic döljer denna information från webbplatser. |

## Borttagning av spårningsbrödsmulor {#removing-tracking-breadcrumbs}

Vissa webbläsarfunktioner är sårbara för att användas för att dela delar av din webbhistorik (”brödsmulor”) med olika webbplatser du besöker. Privacy Magic härdar dessa funktioner så att de läcker mindre.

| Brödsmula | Standardwebbläsare | Privacy Magic |
| :--- | :--- | :--- |
| Cacheläckor | Webbläsare lagrar data i lokala cachar, så att när du besöker en sida eller visar den en andra gång behöver inte den datan laddas en andra gång. Tyvärr är dessa cachar ibland läckande och avslöjar något om din webbhistorik för en webbplats du besöker. | Privacy Magic rensar sårbara cachar så att dessa läckor inte kan ske. |
| Referrer Policy | Traditionellt berättar webbläsare för varje webbsida du besöker vilken webbsida du kom från! | Privacy Magic raderar den exakta sidan (eller sökvägen) i referrern, och för webbkompatibilitet tillåts endast domänen att delas. |
| Spårningsparametrar | Spårare kan lägga till extra ”spårningsparametrar” i adresserna till webbsidorna du besöker, så att annonsörer kan hålla koll på vem du är eller var du har surfat. | Privacy Magic raderar kända spårningsparametrar från webbadresser så att denna information inte delas med webbplatserna du besöker. |
| Window Name | Normalt läcker `window.name` JavaScript-API:et data om du navigerar mellan webbplatser i samma flik. | Privacy Magic förhindrar denna läcka genom att upprätthålla en separat `window.name` för varje webbplats. |

## Stopp av webbäckor {#stopping-web-leaks}

Webbläsare är komplicerade varelser! Läckor av privat information kan uppstå från många olika webbläsarfunktioner. Vår metod i Privacy Magic är att täppa till läckor varhelst de finns.

| Funktion | Standardwebbläsare | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | En iframe är en ”webbsida inom en webbsida”. Det är en ruta inuti sidan du besöker, där en andra webbsida kan gömma sig och använda alla samma spårningstekniker som en vanlig webbsida kan använda. | Privacy Magic injicerar alla sina skydd i varje iframe på en webbsida, för att säkerställa att en spårare inte kan kringgå dessa skydd genom att gömma sig inuti en iframe. |
| Service Workers | Service Workers är en webbläsarfunktion som låter kod köras i bakgrunden även när du inte är ansluten till internet. Tyvärr kan dessa Service Workers lätt läcka privat information. | Service Workers är generellt inaktiverade på alla webbplatser, för att förhindra läckor av privat information som inte kan patchas på annat sätt. |
| Shared Storage | Shared Storage är en webbläsarfunktion som låter data om ditt surfande aggregeras och samlas in. Även om den påstods vara integritetsbevarande väckte denna funktion starka integritetsbekymmer och ska tas bort från webbläsare. | Privacy Magic ser till att Shared Storage är inaktiverat på alla webbplatser. |
| Shared Workers | Shared Workers är kod som körs i bakgrunden och kan delas mellan webbplatser. | Privacy Magic injicerar sina skydd i varje Shared Worker som laddas av vilken webbplats som helst. |
| Web Workers | Web Workers är kod som körs i bakgrunden på en webbsida. Precis som huvudsidans skript kan web worker-kod läcka privata data. | Privacy Magic injicerar sina skydd i varje Web Worker på en sida, för att säkerställa att spårare inte kan använda Web Workers för att kringgå dessa skydd. |

## Integritetssignaler {#privacy-signals}

Vi är intresserade av att förbättra din integritet på alla möjliga sätt. Därför skickar Privacy Magic en signal för att kräva integritetsvänliga policyer från webbplatserna du besöker.

| Signal | Standardwebbläsare | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control är en signal som kan skickas till webbplatserna du besöker för att ange att du inte vill att dina data ska säljas eller delas. Tyvärr skickar de flesta webbläsare inte Global Privacy Control-preferensen som standard. | Privacy Magic säkerställer att din webbläsare skickar Global Privacy Control-headern med varje begäran till varje webbsida eller inbäddad resurs. Den injicerar också en JavaScript-signal på varje sida och iframe. |

## Webbläsarskydd {#browser-protections}

Webbläsare uppför sig illa inte bara i hur de renderar webbsidor, utan också i hur de skickar data till moderbolaget eller till tredjeparts annonsföretag. Privacy Magic inaktiverar en mängd dåliga webbläsarbeteenden som annars skulle läcka din privata information.

### Inaktivering av läckande webbfunktioner {#disabling-leaky-web-features}

| Funktion | Standardwebbläsare | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | Standardwebbläsare har en funktion som låter webbplatser ”pinga” en spårningsserver med länkarna du klickar. | Privacy Magic inaktiverar denna ping. |
| Tredjepartscookies | Den mest berömda spårningsfunktionen av alla. Chrome tillåter tredjepartscookies som låter dig spåras från webbplats till webbplats. | Privacy Magic inaktiverar tredjepartscookies som standard. |
| WebRTC non-proxied UDP | WebRTC är en webbläsarkapacitet som låter dig kommunicera direkt med andra webbanvändare. Tyvärr, om du använder en webbläsarproxy, läcker standard Chrome-baserade webbläsare WebRTC-kommunikation utanför proxyn. | Privacy Magic blockerar WebRTC-läckorna, samtidigt som WebRTC fortfarande kan fungera på webbplatserna som använder det. |

### Inaktivering av invasiva molntjänster {#disabling-invasive-cloud-services}

| Tjänst | Standardwebbläsare | Privacy Magic |
| :--- | :--- | :--- |
| Alternativa felsidor | Som standard visar Chrome alternativa felsidor när ett fel uppstår. För att visa dessa sidor skickas data om vilka sidor du besöker till Googles servrar. | Privacy Magic inaktiverar dessa alternativa felsidor så att ingen data skickas. |
| Safe Browsing Extended Reporting | När Safe Browsing blockerar en sida kan Chrome skicka innehållet på en blockerad sida till Googles servrar. | Privacy Magic blockerar denna funktion, så att ingen data skickas. |
| Search Suggest | Som standard skickar Chrome allt du skriver i adressfältet till din standardsökmotor (typiskt Google-sök) medan du skriver, för att skapa autoförslag. | Privacy Magic blockerar denna kontinuerliga övervakning, så att Chrome bara skickar din sökning när du trycker på ”enter”. |
| Stavningstjänst | Chrome erbjuder en ”förbättrad stavningskontroll” som skickar det du skriver till Googles servrar. | Privacy Magic inaktiverar detta alternativ och tillåter Chrome att endast använda den lokala ”grundläggande stavningskontrollen”. |

### Inaktivering av annonsinriktnings-API:er {#disabling-ad-targeting-apis}

| API | Standardwebbläsare | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (och den relaterade Private Aggregation API) skickar data om ditt surfande, annonserna du klickar på och andra privata data till annonsservrar. | Privacy Magic inaktiverar dessa API:er för att skydda dina data. |
| Protected Audience API | Som standard görs detta API tillgängligt av Chrome för att köra en auktion om din uppmärksamhet på uppdrag av annonsörer. | Privacy Magic inaktiverar detta API så att dina webbläsardata inte används på detta sätt. |
| Topics API | Chromes Topics API ger annonsörer en lista över ämnen som påstås intressera dig. | Privacy Magic inaktiverar Topics API för att hålla den datan privat. |

### Inaktivering av läckande Chrome-inställningar {#disabling-leaky-chrome-settings}

Chrome innehåller vissa inställningar som är oförenliga med din integritet: specifikt funktionalitet som samlar in data om dina surfvanor och skickar dem till Googles servrar. Dessa inställningar kan inte direkt styras av ett webbläsartillägg, men under installationen hjälper Privacy Magic dig att hitta inställningarna och stänga av dem själv.

| Inställning | Standardwebbläsare | Privacy Magic |
| :--- | :--- | :--- |
| Synkronisering av historik | När du är inloggad i Chrome synkroniserar den din webbhistorik mellan enheter. Den sparar också samma data på Googles servrar. | Privacy Magic vägleder dig till inställningen som inaktiverar synkronisering av historik för att hålla din webbhistorik privat. |
| Användarupplevelsemått | Chrome skickar tyst mått om din användning av webbläsaren tillbaka till Googles servrar. | Privacy Magic hjälper dig att blockera denna dolda datainsamling. |
| Datainsamling per URL | För varje URL du besöker samlar Chrome in ”anonymiserade” data om ditt surfande på dessa sidor och skickar dem till Google. | Privacy Magic hjälper dig att inaktivera denna inställning för att förhindra att data skickas. |
