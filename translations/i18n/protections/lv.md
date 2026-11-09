---
title: "Aizsardzība: aizlāpām noplūdes jūsu pārlūkprogrammā"
description: Kā Privacy Magic aizsargā jūsu privātumu, pārlūkojot tīmekli
backToTop: "↑ Atpakaļ uz augšu"
---

Privacy Magic ir atvērtā pirmkoda paplašinājums Chrome, kas visaptveroši aizsargā jūsu privātumu, pārlūkojot tīmekli. Pārlūkprogrammas ir ļoti caurlaidīgas, tāpēc Privacy Magic nodrošina vairākus aizsardzības slāņus, tostarp [reklāmu un izsekotāju bloķēšanu](#blocking-ads-and-trackers), [sistēmas informācijas aizsardzību](#protecting-system-information-fingerprinting), [izsekošanas pēdu noņemšanu](#removing-tracking-breadcrumbs), [tīmekļa noplūžu apturēšanu](#stopping-web-leaks), [privātuma signālu sūtīšanu](#privacy-signals) un [pārlūkprogrammas aizsardzības nodrošināšanu](#browser-protections).

## Reklāmu un izsekotāju bloķēšana {#blocking-ads-and-trackers}

Visā tīmeklī reklāmas, izsekošanas skripti un izsekošanas pikseļi jūs seko bez jūsu piekrišanas, izmantojot dažādas neredzamas metodes.

Privacy Magic izmanto populārus filtru sarakstus, lai bloķētu daudzas reklāmas un izsekotājus, ko jūsu pārlūkprogramma pieprasa tīklā. Filtru saraksti arī paslēpj tukšos lodziņus, kas paliek, kad reklāmas lapā tiek bloķētas. Privacy Magic izmanto fiksētu šo filtru sarakstu versiju, lai paplašinājuma bloķēšanas uzvedība būtu pilnībā reproducējama un identiska katram lietotājam.

| Filtru saraksts | Bloķētie elementi |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Reklāmas, tostarp baneri, reklāmas skripti, attēli un video reklāmas. |
| [EasyPrivacy](https://easylist.to/) | Izsekotāji, tostarp izsekošanas skripti, pikseļi, tīmekļa kļūdas un citi informācijas vācēji. |
| [Fanboy's Annoyance List](https://easylist.to/) | Sīkdatņu paziņojumi, sociālo mediju logrīki, uznirstošie logi lapā un citi traucēkļi. |
| [mazais oisd bloķēšanas saraksts](https://oisd.nl/) | Papildu reklāmas domēni. |

## Sistēmas informācijas aizsardzība (pirkstu nospiedums) {#protecting-system-information-fingerprinting}

Tradicionāli pārlūkprogrammas nopludina milzīgu daudzumu informācijas par jūsu datoru jebkurai vietnei vai izsekošanas skriptam, kas to prasa! Un izsekotāji vāc šos datus, lai jūs izsekotu, pārlūkojot tīmekli.

| Pirkstu nospiedums | Standarta tīmekļa pārlūkprogrammas | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Pārlūkprogrammu audio apstrādes funkcionalitāte parasti nopludina informāciju par jūsu skaņas karti. | Privacy Magic samazina šādas noplūdes, izdzēšot mazākā nozīmīguma bitu no audio datiem, kad skripts tos nolasa. Šai dzēšanai nav dzirdamas ietekmes. |
| Akumulators | Pārlūkprogrammas parasti jebkurai vietnei, kas to prasa, pastāsta jūsu akumulatora līmeni, vai ierīce ir pievienota strāvas avotam, un aptuveno laiku līdz akumulatora iztukšošanai. | Privacy Magic aptur šo informācijas noplūdi, simulējot akumulatoru, kas vienmēr ir 100 %, un strāvas padevi, kas vienmēr ir pievienota. |
| Pārlūkprogramma | Tīmekļa lapa var aptaujāt jūsu pārlūkprogrammu, lai iegūtu detalizētu informāciju par operētājsistēmu, kurā tā darbojas. | Privacy Magic vilto `navigator.platform` uz vienu vērtību katrai atšķirīgai operētājsistēmai. |
| Ierīce | Pārlūkprogrammas jebkurai vietnei, kas to prasa, pastāsta, vai izmantojat salokāmu ierīci. | Privacy Magic vienmēr ziņo, ka jūsu ierīce nav salokāma. |
| Disks | Pārlūkprogrammas parasti nopludina vietnei pieejamo diska vietas apjomu un to, cik daudz tā izmanto, kas var atklāt kopējo diska vietu jūsu datorā un veidu, kā dati tiek glabāti. | Privacy Magic vilto šīs vērtības, lai tās būtu vienādas visiem. |
| Displejs | Tradicionāli pārlūkprogrammas nopludina displeja iestatījumus, tostarp to, vai jūsu sistēma ir iestatīta uz „dot priekšroku samazinātai kustībai“. | Privacy Magic novērš šo noplūdi. |
| Fonti | Standarta pārlūkprogrammas nopludina, kādus pielāgotus fontus esat instalējis sistēmā, potenciāli padarot jūsu pirkstu nospiedumu ļoti unikālu. | Privacy Magic slēpj jūsu sistēmā instalētos pielāgotos fontus no visiem skriptiem. Tīmekļa lapas var turpināt izmantot standarta sistēmas fontus un lejupielādētus tīmekļa fontus. |
| Grafika | Canvas un WebGL ir divi galvenie pirkstu nospieduma vektori, kas nopludina, kādu GPU (grafikas mikroshēmu) izmanto jūsu dators. | Privacy Magic izmanto progresīvas metodes, lai paslēptu grafikas mikroshēmu, vienlaikus ļaujot jums turpināt spēlēt spēles un izmantot citas vietnes, kas intensīvi izmanto grafiku. |
| Tastatūra | Pēc noklusējuma pārlūkprogrammas nopludina jūsu izmantoto tastatūras izkārtojumu jebkurai vietnei, kas to prasa. | Privacy Magic bloķē jūsu tastatūras izkārtojuma atklāšanu vietņu skriptiem. |
| Valoda | Parasti pārlūkprogrammas nopludina valodu sarakstu, ko esat apstiprinājis. Lai gan ir svarīgi varēt norādīt, kuru valodu vēlaties apmeklētajām vietnēm, pārlūkprogrammas parasti atklāj lietotāja vēlamo valodu sarakstu, kas var būt pārāk atklājošs. | Privacy Magic ļauj apmeklētajām vietnēm nodot tikai vienu valodu. |
| Matemātika | Izsekošanas skripti tīmekļa lapās var izmantot Math funkciju, piemēram, kosinusa vai hiperboliskā tangensa, idiosinkrātisko uzvedību jūsu ierīcē, lai jūs atšķirtu no citiem tīmekļa lietotājiem. | Privacy Magic labo JavaScript Math funkcijas, lai tās uzvestos identiski visās platformās. |
| Atmiņa | Vietnes no lielākās daļas pārlūkprogrammu var uzzināt, cik daudz neizmantotas atmiņas ir jūsu datorā. | Privacy Magic slēpj jūsu sistēmā pieejamās atmiņas apjomu no tīmekļa lapām un izsekotājiem. |
| Tīkls | Pārlūkprogrammas parasti nopludina detaļas par jūsu tīkla savienojuma veidu. | Privacy Magic novērš šo detaļu noplūdi, padarot tās viendabīgas visiem lietotājiem. |
| Procesors | Pārlūkprogrammas ir izstrādātas, lai ziņotu jūsu datora procesora kodolu skaitu. | Privacy Magic izliekas, ka visiem ir tieši `4`. |
| Ekrāns | Pārlūkprogrammas nopludina jūsu ekrāna izmērus jebkurai vietnei, kas to prasa, neatkarīgi no tā, cik liels ir pārlūkprogrammas logs. | Privacy Magic slēpj patieso ekrāna izmēru. |
| Laika josla | Pārlūkprogrammas nopludina jūsu aptuveno atrašanās vietu, kad skripti prasa jūsu laika joslu. Piemēram, ja esat Centrāleiropas laikā, pārlūkprogramma sniegs laika joslas identifikatoru, kas norāda, vai esat Parīzē, Berlīnē, Luksemburgā vai kādā no desmitiem citu pilsētu. | Privacy Magic apvieno laika joslas tā, lai katram laika joslas nobīdei būtu viena reprezentatīva laika josla. Tādējādi pārlūkprogramma neizpludina nevajadzīgu informāciju par jūsu atrašanās vietu uz zemeslodes. |
| Laiks | Augstas izšķirtspējas laika API ļauj skriptiem raksturot jūsu sistēmu, mērot sīkas atšķirības pārlūkprogrammas uzvedības laikā. | Privacy Magic noapaļo šo API sniegtos laikus, lai izsekošanas skriptiem būtu daudz grūtāk tos izmantot pārlūkprogrammu atšķiršanai. |
| Pieskāriens | Touch API nopludina, vai jūsu ierīcei ir pieskāriens un cik pieskāriena punktu tā atļauj. | Privacy Magic slēpj šo informāciju no vietnēm. |

## Izsekošanas pēdu noņemšana {#removing-tracking-breadcrumbs}

Dažas pārlūkprogrammas funkcijas ir ievainojamas pret izmantošanu, lai dalītos ar daļām no jūsu pārlūkošanas vēstures („pēdām“) ar dažādām apmeklētajām vietnēm. Privacy Magic nostiprina šīs funkcijas, lai tās būtu mazāk caurlaidīgas.

| Pēda | Standarta tīmekļa pārlūkprogrammas | Privacy Magic |
| :--- | :--- | :--- |
| Kešatmiņas noplūdes | Pārlūkprogrammas glabā datus vietējās kešatmiņās, lai, apmeklējot lapu vai skatot to otro reizi, šie dati nebūtu jāielādē atkārtoti. Diemžēl šīs kešatmiņas dažkārt ir caurlaidīgas un atklāj kaut ko par jūsu pārlūkošanas vēsturi apmeklētajai vietnei. | Privacy Magic notīra ievainojamās kešatmiņas, lai šīs noplūdes nevarētu notikt. |
| Referrer politika | Tradicionāli pārlūkprogrammas katrai apmeklētajai tīmekļa lapai pastāsta, no kuras lapas jūs atnācāt! | Privacy Magic izdzēš precīzo lapu (vai ceļu) referrerā un tīmekļa saderarbības dēļ ļauj dalīties tikai ar domēnu. |
| Izsekošanas parametri | Izsekotāji var pievienot papildu „izsekošanas parametrus“ apmeklēto tīmekļa lapu adresēm, lai reklāmdevēji varētu sekot, kas jūs esat vai kur esat pārlūkojis. | Privacy Magic izdzēš zināmos izsekošanas parametrus no tīmekļa adresēm, lai šī informācija netiktu kopīgota ar apmeklētajām vietnēm. |
| Loga nosaukums | Parasti `window.name` JavaScript API nopludina datus, ja pārvietojaties starp vietnēm vienā un tajā pašā cilnē. | Privacy Magic novērš šo noplūdi, nodrošinot atsevišķu `window.name` katrai vietnei. |

## Tīmekļa noplūžu apturēšana {#stopping-web-leaks}

Tīmekļa pārlūkprogrammas ir sarežģīti zvēri! Privātas informācijas noplūdes var rasties no daudzām dažādām pārlūkprogrammas funkcijām. Mūsu pieeja Privacy Magic ir aizlāpīt noplūdes, kur vien tās var atrast.

| Funkcija | Standarta tīmekļa pārlūkprogrammas | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Iframe ir „tīmekļa lapa tīmekļa lapā“. Tas ir lodziņš apmeklētajā lapā, kurā otra tīmekļa lapa var paslēpties un izmantot visas tās pašas izsekošanas metodes, ko izmanto parasta tīmekļa lapa. | Privacy Magic ievada visas savas aizsardzības katrā iframe tīmekļa lapā, lai nodrošinātu, ka izsekotājs nevar apiet šīs aizsardzības, paslēpjoties iframe. |
| Service Workers | Service Workers ir pārlūkprogrammas funkcija, kas ļauj kodam darboties fonā pat tad, kad neesat savienots ar internetu. Diemžēl šie Service Workers viegli var nopludināt privātu informāciju. | Service workers parasti ir atspējoti visās vietnēs, lai novērstu privātas informācijas noplūdes, ko citādi nevar aizlāpīt. |
| Shared Storage | Shared Storage ir pārlūkprogrammas funkcija, kas ļauj apkopot un vākt datus par jūsu pārlūkošanu. Lai gan tā tika prezentēta kā privātumu saglabājoša, šī funkcija raisīja nopietnas privātuma bažas un ir paredzēta noņemšanai no pārlūkprogrammām. | Privacy Magic nodrošina, ka Shared Storage ir atspējots visās vietnēs. |
| Shared Workers | Shared Workers ir kods, kas darbojas fonā un var tikt kopīgots starp vietnēm. | Privacy Magic ievada savas aizsardzības katrā Shared Worker, ko ielādē jebkura vietne. |
| Web Workers | Web Workers ir kods, kas darbojas fonā tīmekļa lapā. Tāpat kā galvenās lapas skripti, web worker kods var nopludināt privātus datus. | Privacy Magic ievada savas aizsardzības katrā Web Worker lapā, lai nodrošinātu, ka izsekotāji nevar izmantot Web Workers, lai apietu šīs aizsardzības. |

## Privātuma signāli {#privacy-signals}

Mēs esam ieinteresēti uzlabot jūsu privātumu ikvienā iespējamā veidā. Tāpēc Privacy Magic sūta signālu, lai pieprasītu privātumam labvēlīgu politiku no apmeklētajām vietnēm.

| Signāls | Standarta tīmekļa pārlūkprogrammas | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control ir signāls, ko var nosūtīt apmeklētajām vietnēm, lai norādītu, ka nevēlaties, lai jūsu dati tiktu pārdoti vai kopīgoti. Diemžēl lielākā daļa pārlūkprogrammu pēc noklusējuma nesūta Global Privacy Control preferenci. | Privacy Magic nodrošina, ka jūsu pārlūkprogramma sūta Global Privacy Control galveni ar katru pieprasījumu katrai tīmekļa lapai vai iegultajam resursam. Tā arī ievada JavaScript signālu katrā lapā un iframe. |

## Pārlūkprogrammas aizsardzība {#browser-protections}

Pārlūkprogrammas uzvedas slikti ne tikai tajā, kā tās renderē tīmekļa lapas, bet arī tajā, kā tās sūta datus mātesuzņēmumam vai trešo pušu reklāmas uzņēmumiem. Privacy Magic atspējo dažādu sliktu pārlūkprogrammas uzvedību, kas citādi nopludinātu jūsu privāto informāciju.

### Caurlaidīgu tīmekļa funkciju atspējošana {#disabling-leaky-web-features}

| Funkcija | Standarta tīmekļa pārlūkprogrammas | Privacy Magic |
| :--- | :--- | :--- |
| Hipersaišu audits | Standarta pārlūkprogrammām ir funkcija, kas ļauj vietnēm „pingot“ izsekošanas serveri ar saitēm, uz kurām noklikšķināt. | Privacy Magic atspējo šo ping. |
| Trešo pušu sīkdatnes | Vispazīstamākā izsekošanas funkcija no visām. Chrome atļauj trešo pušu sīkdatnes, kas ļauj jūs izsekot no vietnes uz vietni. | Privacy Magic pēc noklusējuma atspējo trešo pušu sīkdatnes. |
| WebRTC neproxied UDP | WebRTC ir pārlūkprogrammas spēja, kas ļauj jums tieši sazināties ar citiem tīmekļa lietotājiem. Diemžēl, ja izmantojat pārlūkprogrammas starpniekserveri, standarta Chrome balstītās pārlūkprogrammas nopludinās WebRTC komunikāciju ārpus starpniekservera. | Privacy Magic bloķē WebRTC noplūdes, vienlaikus joprojām ļaujot WebRTC darboties vietnēs, kas to izmanto. |

### Invazīvu mākoņpakalpojumu atspējošana {#disabling-invasive-cloud-services}

| Pakalpojums | Standarta tīmekļa pārlūkprogrammas | Privacy Magic |
| :--- | :--- | :--- |
| Alternatīvās kļūdu lapas | Pēc noklusējuma Chrome rāda alternatīvas kļūdu lapas, kad notiek kļūda. Lai rādītu šīs lapas, dati par apmeklētajām lapām tiek nosūtīti uz Google serveriem. | Privacy Magic atspējo šīs alternatīvās kļūdu lapas, lai netiktu nosūtīti nekādi dati. |
| Safe Browsing Extended Reporting | Kad Safe Browsing bloķē lapu, Chrome var nosūtīt bloķētās lapas saturu uz Google serveriem. | Privacy Magic bloķē šo funkciju, lai netiktu nosūtīti nekādi dati. |
| Meklēšanas ieteikumi | Pēc noklusējuma Chrome sūta visu, ko ierakstāt adreses joslā, uz jūsu noklusējuma meklētājprogrammu (parasti Google meklēšanu), kamēr rakstāt, lai sniegtu automātiskos ieteikumus. | Privacy Magic bloķē šo nepārtraukto uzraudzību, lai Chrome sūtītu jūsu meklēšanu tikai tad, kad nospiežat „enter“. |
| Pareizrakstības pakalpojums | Chrome piedāvā „uzlabotu pareizrakstības pārbaudi“, kas sūta to, ko ierakstāt, uz Google serveriem. | Privacy Magic atspējo šo opciju un ļauj Chrome izmantot tikai lokālo „pamata pareizrakstības pārbaudi“. |

### Reklāmas mērķēšanas API atspējošana {#disabling-ad-targeting-apis}

| API | Standarta tīmekļa pārlūkprogrammas | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (un saistītā Private Aggregation API) sūta datus par jūsu pārlūkošanu, reklāmām, uz kurām noklikšķināt, un citus privātus datus uz reklāmas serveriem. | Privacy Magic atspējo šīs API, lai aizsargātu jūsu datus. |
| Protected Audience API | Pēc noklusējuma Chrome padara šo API pieejamu, lai reklāmdevēju vārdā rīkotu izsoli par jūsu uzmanību. | Privacy Magic atspējo šo API, lai jūsu pārlūkošanas dati netiktu izmantoti šādi. |
| Topics API | Chrome Topics API sniedz reklāmdevējiem tēmu sarakstu, kas it kā jūs interesē. | Privacy Magic atspējo Topics API, lai saglabātu šos datus privātus. |

### Caurlaidīgu Chrome iestatījumu atspējošana {#disabling-leaky-chrome-settings}

Chrome satur noteiktus iestatījumus, kas ir pretēji jūsu privātumam: konkrēti, funkcionalitāti, kas vāc datus par jūsu pārlūkošanas paradumiem un sūta tos uz Google serveriem. Šos iestatījumus pārlūkprogrammas paplašinājums nevar tieši kontrolēt, bet iestatīšanas laikā Privacy Magic palīdzēs jums atrast iestatījumus un izslēgt tos pašiem.

| Iestatījums | Standarta tīmekļa pārlūkprogrammas | Privacy Magic |
| :--- | :--- | :--- |
| Vēstures sinhronizācija | Kad esat pierakstījies Chrome, tā sinhronizē jūsu pārlūkošanas vēsturi starp ierīcēm. Tā arī saglabā tos pašus datus Google serveros. | Privacy Magic novirza jūs uz iestatījumu, kas atspējo vēstures sinhronizāciju, lai saglabātu jūsu pārlūkošanas vēsturi privātu. |
| Lietotāja pieredzes metrika | Chrome klusi sūta metriku par jūsu pārlūkprogrammas izmantošanu atpakaļ uz Google serveriem. | Privacy Magic palīdz jums bloķēt šo slēpto datu vākšanu. |
| Datu vākšana pa URL | Katram apmeklētajam URL Chrome vāc „anonimizētus“ datus par jūsu pārlūkošanu šajās lapās un sūta tos Google. | Privacy Magic palīdz jums atspējot šo iestatījumu, lai novērstu datu nosūtīšanu. |
