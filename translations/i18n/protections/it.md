---
title: "Protezioni: chiudere le falle del browser"
description: Come Privacy Magic protegge la tua privacy mentre navighi sul web
backToTop: "↑ Torna su"
---

Privacy Magic è un'estensione open source per Chrome che protegge in modo completo la tua privacy mentre navighi sul web. I browser perdono molte informazioni, quindi Privacy Magic offre più livelli di protezione, tra cui [il blocco di annunci e tracker](#blocking-ads-and-trackers), [la protezione delle informazioni di sistema](#protecting-system-information-fingerprinting), [la rimozione delle briciole di tracciamento](#removing-tracking-breadcrumbs), [l'arresto delle fughe web](#stopping-web-leaks), [l'invio di segnali di privacy](#privacy-signals) e [l'applicazione delle protezioni del browser](#browser-protections).

## Blocco di annunci e tracker {#blocking-ads-and-trackers}

In tutto il web, annunci, script di tracciamento e pixel di tracciamento ti seguono senza il tuo consenso usando una varietà di metodi invisibili.

Privacy Magic usa liste di filtri popolari per impedire al browser di richiedere molti annunci e tracker sulla rete. Le liste di filtri nascondono anche i riquadri vuoti che restano quando gli annunci vengono bloccati su una pagina web. Privacy Magic usa una versione fissata di queste liste di filtri, così che il comportamento di blocco dell'estensione sia completamente riproducibile e identico per ogni utente.

| Lista di filtri | Elementi bloccati |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Annunci, inclusi banner, script pubblicitari, immagini e annunci video. |
| [EasyPrivacy](https://easylist.to/) | Tracker, inclusi script di tracciamento, pixel, web bug e altri raccoglitori di informazioni. |
| [Fanboy's Annoyance List](https://easylist.to/) | Avvisi sui cookie, widget dei social media, pop-up nella pagina e altri elementi fastidiosi. |
| [small oisd blocklist](https://oisd.nl/) | Domini pubblicitari aggiuntivi. |

## Protezione delle informazioni di sistema (fingerprinting) {#protecting-system-information-fingerprinting}

Tradizionalmente, i browser divulgano enormi quantità di informazioni sul tuo computer a qualsiasi sito o script di tracciamento che le richieda! E i tracker raccolgono questi dati per seguirti mentre navighi sul web.

| Impronta | Browser web standard | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Le funzionalità di elaborazione audio dei browser web tipicamente divulgano informazioni sulla scheda audio. | Privacy Magic riduce queste fughe cancellando il bit meno significativo dai dati audio ogni volta che uno script li legge. Questa cancellazione non ha effetti udibili. |
| Batteria | I browser web tipicamente dicono a qualsiasi sito che lo chieda qual è il livello della batteria, se il dispositivo è collegato a una fonte di alimentazione e una stima di quanto tempo resta prima che la batteria si scarichi. | Privacy Magic ferma questa fuga di informazioni simulando una batteria sempre al 100% e un'alimentazione sempre collegata. |
| Browser | Una pagina web può interrogare il browser per ottenere informazioni dettagliate sul sistema operativo in cui è in esecuzione. | Privacy Magic falsifica `navigator.platform` con un unico valore per ogni diverso sistema operativo. |
| Dispositivo | I browser web dicono a qualsiasi sito che lo chieda se stai usando un dispositivo pieghevole. | Privacy Magic segnala sempre che il dispositivo non è pieghevole. |
| Disco | I browser web tipicamente divulgano quanto spazio su disco è disponibile per il sito e quanto ne sta usando, il che può rivelare lo spazio totale disponibile sul computer e il modo in cui i dati sono memorizzati. | Privacy Magic falsifica questi valori affinché siano uguali per tutti. |
| Display | Tradizionalmente i browser web divulgano le impostazioni di visualizzazione, incluso se il sistema è impostato su «preferisci movimento ridotto». | Privacy Magic impedisce questa fuga. |
| Font | I browser web standard divulgano quali font personalizzati hai installato sul sistema, rendendo potenzialmente la tua impronta molto unica. | Privacy Magic nasconde i font personalizzati installati sul sistema a tutti gli script. Le pagine web possono continuare a usare i font di sistema standard e i web font scaricati. |
| Grafica | Canvas e WebGL sono due importanti vettori di fingerprinting che divulgano il tipo di GPU (chip grafico) usato dal computer. | Privacy Magic usa tecniche avanzate per nascondere il chip grafico consentendoti comunque di giocare e usare altri siti che fanno un uso intensivo della grafica. |
| Tastiera | Per impostazione predefinita, i browser divulgano il layout di tastiera che stai usando a qualsiasi sito che lo chieda. | Privacy Magic blocca la rivelazione del layout di tastiera agli script dei siti. |
| Lingua | Tipicamente, i browser web divulgano un elenco di lingue che hai approvato. Sebbene sia importante poter specificare la lingua preferita per i siti visitati, i browser tipicamente rivelano un elenco delle lingue preferite dell'utente, che può essere troppo rivelatore. | Privacy Magic consente di passare ai siti visitati una sola lingua. |
| Math | Gli script di tracciamento nelle pagine web possono usare il comportamento idiosyncratico delle funzioni Math, come coseno o tangente iperbolica, sul tuo dispositivo per distinguerti dagli altri utenti del web. | Privacy Magic corregge le funzioni Math di JavaScript affinché si comportino in modo identico su tutte le piattaforme. |
| Memoria | I siti web possono scoprire dalla maggior parte dei browser quanta memoria è inutilizzata sul computer. | Privacy Magic nasconde la quantità di memoria disponibile sul sistema alle pagine web e ai tracker. |
| Rete | I browser normalmente divulgano dettagli sul tipo di connessione di rete che hai. | Privacy Magic impedisce la fuga di questi dettagli rendendoli omogenei per tutti gli utenti. |
| Processore | I browser sono progettati per segnalare il numero di core del processore del computer. | Privacy Magic finge che tutti ne abbiano esattamente `4`. |
| Schermo | I browser web divulgano le dimensioni dello schermo a qualsiasi sito che lo chieda, indipendentemente da quanto è grande la finestra del browser. | Privacy Magic nasconde la dimensione reale dello schermo. |
| Fuso orario | I browser web divulgano la tua posizione approssimativa quando gli script chiedono il fuso orario. Ad esempio, se sei nell'ora dell'Europa centrale, il browser fornisce un identificatore di fuso orario che indica se sei a Parigi, Berlino, Lussemburgo o in una delle dozzine di altre città. | Privacy Magic raggruppa i fusi orari in modo che ogni offset abbia un unico fuso rappresentativo. Così il browser non divulga informazioni non necessarie sulla tua posizione sul globo. |
| Timing | Le API di timing ad alta risoluzione permettono agli script di caratterizzare il sistema misurando minuscole differenze nel timing dei comportamenti del browser. | Privacy Magic arrotonda i tempi forniti da queste API, rendendo molto più difficile per gli script di tracciamento usarli per distinguere i browser. |
| Touch | La Touch API divulga se il dispositivo ha il touch e quanti punti di contatto consente. | Privacy Magic nasconde queste informazioni ai siti web. |

## Rimozione delle briciole di tracciamento {#removing-tracking-breadcrumbs}

Alcune funzionalità del browser sono vulnerabili all'uso per condividere parti della cronologia di navigazione («briciole») con diversi siti che visiti. Privacy Magic rafforza queste funzionalità affinché perdano meno informazioni.

| Briciola | Browser web standard | Privacy Magic |
| :--- | :--- | :--- |
| Fughe dalla cache | I browser memorizzano dati nelle cache locali, così che quando visiti una pagina o la visualizzi una seconda volta quei dati non debbano essere ricaricati. Purtroppo, a volte quelle cache perdono informazioni e rivelano qualcosa della cronologia di navigazione a un sito che visiti. | Privacy Magic svuota le cache vulnerabili affinché queste fughe non possano verificarsi. |
| Politica del referrer | Tradizionalmente, i browser dicono a ogni pagina web che visiti da quale pagina sei arrivato! | Privacy Magic elimina la pagina esatta (o il percorso) nel referrer e, per la compatibilità web, consente di condividere solo il dominio. |
| Parametri di tracciamento | I tracker possono aggiungere «parametri di tracciamento» extra agli indirizzi delle pagine che visiti, così che gli inserzionisti possano tenere traccia di chi sei o dove hai navigato. | Privacy Magic elimina i parametri di tracciamento noti dagli indirizzi web affinché queste informazioni non siano condivise con i siti che visiti. |
| Nome della finestra | Normalmente, l'API JavaScript `window.name` perde dati se navighi tra siti nella stessa scheda. | Privacy Magic impedisce questa fuga imponendo un `window.name` separato per ogni sito. |

## Arresto delle fughe web {#stopping-web-leaks}

I browser web sono creature complicate! Le fughe di informazioni private possono scaturire da molte funzionalità diverse. Il nostro approccio in Privacy Magic è chiudere le falle ovunque si trovino.

| Funzionalità | Browser web standard | Privacy Magic |
| :--- | :--- | :--- |
| Iframe | Un iframe è una «pagina web dentro una pagina web». È un riquadro all'interno della pagina che stai visitando, dove una seconda pagina web può nascondersi e usare tutte le stesse tecniche di tracciamento di una pagina normale. | Privacy Magic inietta tutte le sue protezioni in ogni iframe di una pagina web, per assicurarsi che un tracker non possa aggirarle nascondendosi in un iframe. |
| Service Workers | I Service Workers sono una funzionalità del browser che consente al codice di essere eseguito in background anche quando non sei connesso a Internet. Purtroppo, questi Service Workers possono facilmente divulgare informazioni private. | I Service Workers sono generalmente disabilitati su tutti i siti, per prevenire fughe di informazioni private che non possono essere corrette altrimenti. |
| Shared Storage | Shared Storage è una funzionalità del browser che consente di aggregare e raccogliere dati sulla navigazione. Sebbene sia stata presentata come rispettosa della privacy, questa funzionalità ha sollevato forti preoccupazioni ed è destinata a essere rimossa dai browser. | Privacy Magic si assicura che Shared Storage sia disabilitato su tutti i siti. |
| Shared Workers | I Shared Workers sono codice che viene eseguito in background e può essere condiviso tra siti web. | Privacy Magic inietta le sue protezioni in ogni Shared Worker caricato da qualsiasi sito. |
| Web Workers | I Web Workers sono codice che viene eseguito in background su una pagina web. Come gli script della pagina principale, il codice dei Web Workers può divulgare dati privati. | Privacy Magic inietta le sue protezioni in ogni Web Worker di una pagina, per assicurarsi che i tracker non possano usare i Web Workers per aggirare quelle protezioni. |

## Segnali di privacy {#privacy-signals}

Vogliamo migliorare la tua privacy in ogni modo possibile. Per questo Privacy Magic invia un segnale per richiedere politiche a favore della privacy dai siti che visiti.

| Segnale | Browser web standard | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Il Global Privacy Control è un segnale che può essere inviato ai siti che visiti per indicare che non vuoi che i tuoi dati siano venduti o condivisi. Purtroppo, la maggior parte dei browser non invia la preferenza Global Privacy Control per impostazione predefinita. | Privacy Magic assicura che il browser invii l'header Global Privacy Control con ogni richiesta a ogni pagina web o risorsa incorporata. Inietta anche un segnale JavaScript in ogni pagina e iframe. |

## Protezioni del browser {#browser-protections}

I browser si comportano male non solo nel modo in cui renderizzano le pagine web, ma anche nel modo in cui inviano dati all'azienda madre o ad aziende pubblicitarie terze. Privacy Magic disabilita una varietà di cattivi comportamenti del browser che altrimenti divulgherebbero le tue informazioni private.

### Disabilitazione delle funzionalità web che perdono dati {#disabling-leaky-web-features}

| Funzionalità | Browser web standard | Privacy Magic |
| :--- | :--- | :--- |
| Audit degli hyperlink | I browser standard hanno una funzionalità che consente ai siti di «pingare» un server di tracciamento con i link su cui fai clic. | Privacy Magic disabilita questo ping. |
| Cookie di terze parti | La funzionalità di tracciamento più famosa di tutte. Chrome consente i cookie di terze parti che permettono di tracciarti da un sito all'altro. | Privacy Magic disabilita i cookie di terze parti per impostazione predefinita. |
| WebRTC UDP non proxyato | WebRTC è una capacità del browser che ti consente di comunicare direttamente con altri utenti del web. Purtroppo, se usi un proxy del browser, i browser standard basati su Chrome fanno uscire le comunicazioni WebRTC al di fuori del proxy. | Privacy Magic blocca le fughe WebRTC, consentendo comunque a WebRTC di funzionare sui siti che lo usano. |

### Disabilitazione dei servizi cloud invasivi {#disabling-invasive-cloud-services}

| Servizio | Browser web standard | Privacy Magic |
| :--- | :--- | :--- |
| Pagine di errore alternative | Per impostazione predefinita, Chrome mostra pagine di errore alternative quando si verifica un errore. Per mostrare queste pagine, dati sulle pagine che stai visitando vengono inviati ai server di Google. | Privacy Magic disabilita queste pagine di errore alternative affinché non venga inviato alcun dato. |
| Safe Browsing Extended Reporting | Quando Safe Browsing blocca una pagina, Chrome può inviare il contenuto di una pagina bloccata ai server di Google. | Privacy Magic blocca questa funzionalità, affinché non venga inviato alcun dato. |
| Suggerimenti di ricerca | Per impostazione predefinita, Chrome invia qualsiasi cosa digiti nella barra degli indirizzi al motore di ricerca predefinito (tipicamente Google Search) mentre digiti, per fare autosuggestion. | Privacy Magic blocca questo monitoraggio continuo, affinché Chrome invii la ricerca solo quando premi «Invio». |
| Servizio di ortografia | Chrome offre un «controllo ortografico avanzato» che invia ciò che digiti ai server di Google. | Privacy Magic disabilita questa opzione e consente a Chrome di usare solo il «controllo ortografico di base» locale. |

### Disabilitazione delle API di targeting pubblicitario {#disabling-ad-targeting-apis}

| API | Browser web standard | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | L'Ad Measurement API (e la correlata Private Aggregation API) invia dati sulla navigazione, sugli annunci su cui fai clic e altri dati privati ai server pubblicitari. | Privacy Magic disabilita queste API per proteggere i tuoi dati. |
| Protected Audience API | Per impostazione predefinita, questa API è resa disponibile da Chrome per eseguire un'asta sulla tua attenzione per conto degli inserzionisti. | Privacy Magic disabilita questa API affinché i dati di navigazione non siano usati in questo modo. |
| Topics API | La Topics API di Chrome fornisce agli inserzionisti un elenco di argomenti che presumibilmente ti interessano. | Privacy Magic disabilita la Topics API per mantenere quei dati privati. |

### Disabilitazione delle impostazioni Chrome che perdono dati {#disabling-leaky-chrome-settings}

Chrome contiene alcune impostazioni antitetiche alla tua privacy: in particolare, funzionalità che raccolgono dati sulle abitudini di navigazione e li inviano ai server di Google. Queste impostazioni non possono essere controllate direttamente da un'estensione del browser, ma durante la configurazione Privacy Magic ti aiuterà a trovare le impostazioni e a disattivarle tu stesso.

| Impostazione | Browser web standard | Privacy Magic |
| :--- | :--- | :--- |
| Sincronizzazione della cronologia | Quando sei connesso a Chrome, sincronizza la cronologia di navigazione tra i dispositivi. Salva anche gli stessi dati sui server di Google. | Privacy Magic ti guida all'impostazione che disabilita la sincronizzazione della cronologia per mantenere privata la cronologia di navigazione. |
| Metriche dell'esperienza utente | Chrome invia silenziosamente metriche sul tuo uso del browser ai server di Google. | Privacy Magic ti aiuta a bloccare questa raccolta nascosta di dati. |
| Raccolta dati per URL | Per ogni URL che visiti, Chrome raccoglie dati «anonimizzati» sulla navigazione su quelle pagine e li invia a Google. | Privacy Magic ti aiuta a disabilitare questa impostazione per impedire l'invio dei dati. |
