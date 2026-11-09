---
title: "Protecții: astupăm scurgerile din browserul tău"
description: Cum protejează Privacy Magic confidențialitatea ta în timp ce navighezi pe web
backToTop: "↑ Înapoi sus"
---

Privacy Magic este o extensie open-source pentru Chrome care îți protejează cuprinzător confidențialitatea în timp ce navighezi pe web. Browserele lasă să se scurgă multe informații, de aceea Privacy Magic oferă mai multe straturi de protecție, inclusiv [blocarea reclamelor și a trackerelor](#blocking-ads-and-trackers), [protejarea informațiilor de sistem](#protecting-system-information-fingerprinting), [eliminarea urmelor de urmărire](#removing-tracking-breadcrumbs), [oprirea scurgerilor web](#stopping-web-leaks), [trimiterea semnalelor de confidențialitate](#privacy-signals) și [aplicarea protecțiilor browserului](#browser-protections).

## Blocarea reclamelor și a trackerelor {#blocking-ads-and-trackers}

Pe tot webul, reclamele, scripturile de urmărire și pixelii de urmărire te urmăresc fără consimțământul tău, folosind o varietate de metode invizibile.

Privacy Magic folosește liste de filtre populare pentru a bloca multe reclame și trackere să fie solicitate de browserul tău pe rețea. Listele de filtre ascund și casetele goale rămase când reclamele sunt blocate pe o pagină. Privacy Magic folosește o versiune fixă a acestor liste de filtre, astfel încât comportamentul de blocare al extensiei să fie pe deplin reproductibil și identic pentru fiecare utilizator.

| Listă de filtre | Elemente blocate |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Reclame, inclusiv bannere, scripturi publicitare, imagini și reclame video. |
| [EasyPrivacy](https://easylist.to/) | Trackere, inclusiv scripturi de urmărire, pixeli, web bugs și alți colectori de informații. |
| [Fanboy's Annoyance List](https://easylist.to/) | Notificări despre cookie-uri, widgeturi de social media, pop-up-uri în pagină și alte deranjamente. |
| [small oisd blocklist](https://oisd.nl/) | Domenii publicitare suplimentare. |

## Protejarea informațiilor de sistem (fingerprinting) {#protecting-system-information-fingerprinting}

În mod tradițional, browserele lasă să se scurgă cantități mari de informații despre computerul tău către orice site sau script de urmărire care întreabă! Iar trackerele adună aceste date pentru a te urmări pe măsură ce navighezi pe web.

| Amprentă | Browsere web standard | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Funcționalitatea de procesare audio a browserelor lasă de obicei să se scurgă informații despre placa ta de sunet. | Privacy Magic reduce astfel de scurgeri ștergând bitul cel mai puțin semnificativ din datele audio ori de câte ori sunt citite de un script. Această ștergere nu are efecte audibile. |
| Baterie | Browserele spun de obicei oricărui site care întreabă care este nivelul bateriei, dacă dispozitivul este conectat la o sursă de alimentare și o estimare a timpului rămas până se golește bateria. | Privacy Magic oprește această scurgere simulând o baterie mereu la 100% și o sursă de alimentare mereu conectată. |
| Browser | O pagină web poate interoga browserul tău pentru a obține informații detaliate despre sistemul de operare în care rulează. | Privacy Magic falsifică `navigator.platform` la o singură valoare pentru fiecare sistem de operare diferit. |
| Dispozitiv | Browserele spun oricărui site care întreabă dacă folosești un dispozitiv pliabil. | Privacy Magic raportează întotdeauna că dispozitivul tău nu este pliabil. |
| Disc | Browserele lasă de obicei să se scurgă cantitatea de spațiu pe disc disponibilă site-ului și cât folosește acel site, ceea ce poate dezvălui spațiul total pe disc al computerului tău și modul în care sunt stocate datele. | Privacy Magic falsifică aceste valori astfel încât să fie aceleași pentru toată lumea. |
| Afișaj | În mod tradițional, browserele lasă să se scurgă setările de afișare, inclusiv dacă sistemul este setat să „prefere mișcarea redusă”. | Privacy Magic împiedică această scurgere. |
| Fonturi | Browserele standard lasă să se scurgă ce fonturi personalizate ai instalate pe sistem, ceea ce poate face amprenta ta foarte unică. | Privacy Magic ascunde de toate scripturile fonturile personalizate instalate pe sistemul tău. Paginile web pot continua să folosească fonturi standard de sistem și fonturi web descărcate. |
| Grafică | Canvas și WebGL sunt doi vectori majori de fingerprinting care lasă să se scurgă tipul de GPU (cip grafic) pe care îl folosește computerul tău. | Privacy Magic folosește tehnici avansate pentru a ascunde cipul grafic, permițându-ți totodată să continui să joci jocuri și să folosești alte site-uri care folosesc intens grafica. |
| Tastatură | Implicit, browserele lasă să se scurgă aspectul tastaturii pe care o folosești către orice site care întreabă. | Privacy Magic blochează dezvăluirea aspectului tastaturii către scripturile site-urilor. |
| Limbă | De obicei, browserele lasă să se scurgă o listă de limbi pe care le-ai aprobat. Deși este important să poți specifica limba preferată pentru site-urile pe care le vizitezi, browserele dezvăluie tipic o listă a limbilor preferate ale utilizatorului, ceea ce poate fi prea revelator. | Privacy Magic permite ca doar o singură limbă să fie transmisă site-urilor pe care le vizitezi. |
| Matematică | Scripturile de urmărire din paginile web pot folosi comportamentul idiosincratic al funcțiilor Math, precum cosinusul sau tangenta hiperbolică, pe dispozitivul tău pentru a te deosebi de alți utilizatori web. | Privacy Magic corectează funcțiile Math din JavaScript astfel încât să se comporte identic pe toate platformele. |
| Memorie | Site-urile pot afla de la majoritatea browserelor câtă memorie este nefolosită pe computerul tău. | Privacy Magic ascunde de pagini și trackere cantitatea de memorie disponibilă pe sistemul tău. |
| Rețea | Browserele lasă de obicei să se scurgă detalii despre tipul de conexiune la rețea pe care o ai. | Privacy Magic împiedică scurgerea acestor detalii făcându-le omogene pentru toți utilizatorii. |
| Procesor | Browserele sunt concepute să raporteze numărul de nuclee ale procesorului computerului tău. | Privacy Magic pretinde că toată lumea are exact `4`. |
| Ecran | Browserele lasă să se scurgă dimensiunile ecranului tău către orice site care întreabă, indiferent cât de mare este fereastra browserului. | Privacy Magic ascunde dimensiunea reală a ecranului. |
| Fus orar | Browserele lasă să se scurgă locația ta aproximativă când scripturile cer fusul orar. De exemplu, dacă ești în Ora Europei Centrale, browserul va oferi un identificator de fus orar care indică dacă ești în Paris, Berlin, Luxemburg sau în zeci de alte orașe. | Privacy Magic consolidează fusele orare astfel încât fiecare decalaj de fus să aibă un singur fus reprezentativ. Astfel browserul nu lasă să se scurgă informații inutile despre locația ta pe glob. |
| Temporizare | API-urile de temporizare de înaltă rezoluție permit scripturilor să caracterizeze sistemul tău măsurând diferențe minuscule în temporizarea comportamentelor browserului. | Privacy Magic rotunjește timpii furnizați de aceste API-uri, astfel încât scripturilor de urmărire să le fie mult mai greu să le folosească pentru a distinge browserele. |
| Atingere | Touch API lasă să se scurgă dacă dispozitivul tău are atingere și câte puncte de atingere permite. | Privacy Magic ascunde aceste informații site-urilor. |

## Eliminarea urmelor de urmărire {#removing-tracking-breadcrumbs}

Unele funcții ale browserului sunt vulnerabile la a fi folosite pentru a partaja părți din istoricul tău de navigare („urmă”) cu diferite site-uri pe care le vizitezi. Privacy Magic consolidează aceste funcții ca să aibă mai puține scurgeri.

| Urmă | Browsere web standard | Privacy Magic |
| :--- | :--- | :--- |
| Scurgeri din cache | Browserele stochează date în cache-uri locale, astfel încât când vizitezi o pagină sau o vezi a doua oară, acele date nu trebuie încărcate din nou. Din păcate, acele cache-uri sunt uneori cu scurgeri și vor dezvălui ceva despre istoricul tău de navigare unui site pe care îl vizitezi. | Privacy Magic golește cache-urile vulnerabile, astfel încât aceste scurgeri să nu se poată produce. |
| Politica referrer | În mod tradițional, browserele spun fiecărei pagini pe care o vizitezi de pe ce pagină ai venit! | Privacy Magic șterge pagina (sau calea) exactă din referrer și, pentru compatibilitate web, permite doar partajarea domeniului. |
| Parametri de urmărire | Trackerele pot adăuga „parametri de urmărire” extra la adresele paginilor pe care le vizitezi, astfel încât advertiserii să poată urmări cine ești sau unde ai navigat. | Privacy Magic șterge parametrii de urmărire cunoscuți din adresele web, astfel încât aceste informații să nu fie partajate cu site-urile pe care le vizitezi. |
| Numele ferestrei | În mod normal, API-ul JavaScript `window.name` lasă să se scurgă date dacă navighezi între site-uri în același tab. | Privacy Magic împiedică această scurgere impunând un `window.name` separat pentru fiecare site. |

## Oprirea scurgerilor web {#stopping-web-leaks}

Browserele web sunt creaturi complicate! Scurgerile de informații private pot apărea din multe funcții diferite ale browserului. Abordarea noastră în Privacy Magic este să astupăm scurgerile oriunde ar fi găsite.

| Funcție | Browsere web standard | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Un iframe este o „pagină web în cadrul unei pagini web”. Este o casetă în pagina pe care o vizitezi, unde o a doua pagină se poate ascunde și folosi toate aceleași tehnici de urmărire pe care le poate folosi o pagină normală. | Privacy Magic injectează toate protecțiile sale în fiecare iframe de pe o pagină, pentru a se asigura că un tracker nu poate ocoli acele protecții ascunzându-se într-un iframe. |
| Service Workers | Service Workers sunt o funcție a browserului care permite codului să ruleze în fundal chiar și când nu ești conectat la internet. Din păcate, acești Service Workers pot lăsa cu ușurință să se scurgă informații private. | Service Workers sunt în general dezactivați pe toate site-urile, pentru a preveni scurgeri de informații private care nu pot fi remediate altfel. |
| Shared Storage | Shared Storage este o funcție a browserului care permite agregarea și colectarea datelor despre navigarea ta. Deși a fost prezentată ca păstrătoare a confidențialității, această funcție a ridicat îngrijorări puternice privind confidențialitatea și urmează să fie eliminată din browsere. | Privacy Magic se asigură că Shared Storage este dezactivat pe toate site-urile. |
| Shared Workers | Shared Workers sunt cod care rulează în fundal și poate fi partajat între site-uri. | Privacy Magic injectează protecțiile sale în fiecare Shared Worker încărcat de orice site. |
| Web Workers | Web Workers sunt cod care rulează în fundal pe o pagină web. La fel ca scripturile paginii principale, codul web worker poate lăsa să se scurgă date private. | Privacy Magic injectează protecțiile sale în fiecare Web Worker de pe o pagină, pentru a se asigura că trackerele nu pot folosi Web Workers pentru a ocoli acele protecții. |

## Semnale de confidențialitate {#privacy-signals}

Ne interesează să îți îmbunătățim confidențialitatea în toate felurile posibile. Așadar Privacy Magic trimite un semnal pentru a cere politici pro-confidențialitate de la site-urile pe care le vizitezi.

| Semnal | Browsere web standard | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control este un semnal care poate fi trimis site-urilor pe care le vizitezi pentru a indica că nu vrei ca datele tale să fie vândute sau partajate. Din păcate, majoritatea browserelor nu trimit preferința Global Privacy Control în mod implicit. | Privacy Magic se asigură că browserul tău trimite antetul Global Privacy Control cu fiecare cerere către fiecare pagină web sau resursă încorporată. Injectează și un semnal JavaScript în fiecare pagină și iframe. |

## Protecții ale browserului {#browser-protections}

Browserele se comportă rău nu doar în modul în care redau paginile web, ci și în modul în care trimit date către compania-mamă sau către companii publicitare terțe. Privacy Magic dezactivează o varietate de comportamente rele ale browserului care altfel ar lăsa să se scurgă informațiile tale private.

### Dezactivarea funcțiilor web cu scurgeri {#disabling-leaky-web-features}

| Funcție | Browsere web standard | Privacy Magic |
| :--- | :--- | :--- |
| Auditarea hiperlinkurilor | Browserele standard au o funcție care permite site-urilor să „pinguiască” un server de urmărire cu linkurile pe care le apeși. | Privacy Magic dezactivează acest ping. |
| Cookie-uri terțe | Cea mai faimoasă funcție de urmărire dintre toate. Chrome permite cookie-uri terțe care îți permit să fii urmărit de pe un site pe altul. | Privacy Magic dezactivează cookie-urile terțe în mod implicit. |
| WebRTC UDP fără proxy | WebRTC este o capacitate a browserului care îți permite să comunici direct cu alți utilizatori web. Din păcate, dacă folosești un proxy în browser, browserele standard bazate pe Chrome lasă să se scurgă comunicațiile WebRTC în afara proxy-ului. | Privacy Magic blochează scurgerile WebRTC, permițând totodată WebRTC să funcționeze pe site-urile care îl folosesc. |

### Dezactivarea serviciilor cloud invazive {#disabling-invasive-cloud-services}

| Serviciu | Browsere web standard | Privacy Magic |
| :--- | :--- | :--- |
| Pagini de eroare alternative | Implicit, Chrome afișează pagini de eroare alternative când apare o eroare. Pentru a afișa aceste pagini, date despre paginile pe care le vizitezi sunt trimise către serverele Google. | Privacy Magic dezactivează aceste pagini de eroare alternative, astfel încât să nu fie trimise date. |
| Safe Browsing Extended Reporting | Când Safe Browsing blochează o pagină, Chrome poate trimite conținutul unei pagini blocate către serverele Google. | Privacy Magic blochează această funcție, astfel încât să nu fie trimise date. |
| Sugestii de căutare | Implicit, Chrome trimite orice tastezi în bara de adrese către motorul tău de căutare implicit (de obicei căutarea Google) pe măsură ce tastezi, pentru a genera sugestii automate. | Privacy Magic blochează această monitorizare continuă, astfel încât Chrome să trimită căutarea ta doar când apeși „Enter”. |
| Serviciul de ortografie | Chrome oferă o „verificare ortografică îmbunătățită” care trimite ce tastezi către serverele Google. | Privacy Magic dezactivează această opțiune și permite Chrome să folosească doar „verificarea ortografică de bază” locală. |

### Dezactivarea API-urilor de targetare a reclamelor {#disabling-ad-targeting-apis}

| API | Browsere web standard | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (și Private Aggregation API aferentă) trimite date despre navigarea ta, reclamele pe care le apeși și alte date private către servere publicitare. | Privacy Magic dezactivează aceste API-uri pentru a-ți proteja datele. |
| Protected Audience API | Implicit, acest API este pus la dispoziție de Chrome pentru a rula o licitație pe atenția ta în numele advertiserilor. | Privacy Magic dezactivează acest API, astfel încât datele tale de navigare să nu fie folosite în acest fel. |
| Topics API | Topics API din Chrome oferă advertiserilor o listă de subiecte care ar trebui să te intereseze. | Privacy Magic dezactivează Topics API pentru a păstra acele date private. |

### Dezactivarea setărilor Chrome cu scurgeri {#disabling-leaky-chrome-settings}

Chrome conține anumite setări antiteticie confidențialității tale: anume funcționalități care colectează date despre obiceiurile tale de navigare și le trimit către serverele Google. Aceste setări nu pot fi controlate direct de o extensie de browser, dar în timpul configurării Privacy Magic te ajută să găsești setările și să le dezactivezi tu însuți.

| Setare | Browsere web standard | Privacy Magic |
| :--- | :--- | :--- |
| Sincronizarea istoricului | Când ești autentificat în Chrome, acesta sincronizează istoricul de navigare între dispozitive. Salvează de asemenea aceleași date pe serverele Google. | Privacy Magic te ghidează către setarea care dezactivează sincronizarea istoricului pentru a-ți păstra istoricul de navigare privat. |
| Metrici de experiență a utilizatorului | Chrome trimite în tăcere metrici despre utilizarea browserului înapoi către serverele Google. | Privacy Magic te ajută să blochezi această colectare ascunsă de date. |
| Colectarea de date pe URL | Pentru fiecare URL pe care îl vizitezi, Chrome colectează date „anonimizate” despre navigarea ta pe acele pagini și le trimite către Google. | Privacy Magic te ajută să dezactivezi această setare pentru a preveni trimiterea datelor. |
