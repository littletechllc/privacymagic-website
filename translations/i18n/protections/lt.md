---
title: "Apsaugos: užkamšome jūsų naršyklės nutekėjimus"
description: Kaip Privacy Magic saugo jūsų privatumą naršant internete
backToTop: "↑ Grįžti į viršų"
---

Privacy Magic yra atvirojo kodo Chrome plėtinys, kuris išsamiai saugo jūsų privatumą naršant internete. Naršyklės yra labai pralaidžios, todėl Privacy Magic suteikia kelis apsaugos sluoksnius, įskaitant [reklamų ir sekiklių blokavimą](#blocking-ads-and-trackers), [sistemos informacijos apsaugą](#protecting-system-information-fingerprinting), [sekimo pėdsakų šalinimą](#removing-tracking-breadcrumbs), [internetinių nutekėjimų stabdymą](#stopping-web-leaks), [privatumo signalų siuntimą](#privacy-signals) ir [naršyklės apsaugų užtikrinimą](#browser-protections).

## Reklamų ir sekiklių blokavimas {#blocking-ads-and-trackers}

Visame internete reklamos, sekimo scenarijai ir sekimo pikseliai seka jus be jūsų sutikimo, naudodami įvairius nematomus metodus.

Privacy Magic naudoja populiarius filtrų sąrašus, kad blokuotų daugelį reklamų ir sekiklių, kurių jūsų naršyklė prašo tinkle. Filtrų sąrašai taip pat slepia tuščius langelius, kurie lieka, kai reklamos puslapyje užblokuojamos. Privacy Magic naudoja užfiksuotą šių filtrų sąrašų versiją, kad plėtinio blokavimo elgsena būtų visiškai atkuriama ir identiška kiekvienam naudotojui.

| Filtrų sąrašas | Blokuojami elementai |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Reklamos, įskaitant banerius, reklamos scenarijus, paveikslėlius ir vaizdo reklamas. |
| [EasyPrivacy](https://easylist.to/) | Sekikliai, įskaitant sekimo scenarijus, pikselius, internetinius klaidas ir kitus informacijos rinkėjus. |
| [Fanboy's Annoyance List](https://easylist.to/) | Slapukų pranešimai, socialinių tinklų valdikliai, iššokantys langai puslapyje ir kiti erzinimai. |
| [mažasis oisd blokavimo sąrašas](https://oisd.nl/) | Papildomi reklamos domenai. |

## Sistemos informacijos apsauga (skaitmeninis pėdsakas) {#protecting-system-information-fingerprinting}

Tradiciškai naršyklės nuteka daugybę informacijos apie jūsų kompiuterį bet kuriai svetainei ar sekimo scenarijui, kuris to paprašo! O sekikliai renka šiuos duomenis, kad sekėtų jus naršant internete.

| Skaitmeninis pėdsakas | Standartinės naršyklės | Privacy Magic |
| :--- | :--- | :--- |
| Garsas | Naršyklių garso apdorojimo funkcijos paprastai nuteka informaciją apie jūsų garso plokštę. | Privacy Magic sumažina tokius nutekėjimus, ištrindamas mažiausiai reikšmingą bitą iš garso duomenų, kai juos skaito scenarijus. Šis ištrynimas neturi girdimo poveikio. |
| Baterija | Naršyklės paprastai bet kuriai svetainei, kuri to paprašo, pasako jūsų baterijos lygį, ar įrenginys prijungtas prie maitinimo šaltinio, ir apytikslį laiką iki baterijos išsikrovimo. | Privacy Magic sustabdo šį informacijos nutekėjimą, imituodamas bateriją, kuri visada yra 100 %, ir maitinimo šaltinį, kuris visada prijungtas. |
| Naršyklė | Svetainė gali apklausti jūsų naršyklę, kad gautų išsamią informaciją apie operacinę sistemą, kurioje ji veikia. | Privacy Magic suklastoja `navigator.platform` iki vienos reikšmės kiekvienai skirtingai operacinei sistemai. |
| Įrenginys | Naršyklės bet kuriai svetainei, kuri to paprašo, pasako, ar naudojate sulankstomą įrenginį. | Privacy Magic visada praneša, kad jūsų įrenginys nėra sulankstomas. |
| Diskas | Naršyklės paprastai nuteka, kiek disko vietos prieinama svetainei ir kiek jos naudoja, o tai gali atskleisti bendrą disko vietą jūsų kompiuteryje ir kaip saugomi duomenys. | Privacy Magic suklastoja šias reikšmes, kad jos būtų tokios pačios visiems. |
| Ekranas | Tradiciškai naršyklės nuteka ekrano nustatymus, įskaitant tai, ar jūsų sistema nustatyta „pageidauti sumažinto judėjimo“. | Privacy Magic apsaugo nuo šio nutekėjimo. |
| Šriftai | Standartinės naršyklės nuteka, kokius pasirinktinius šriftus turite įdiegę sistemoje, o tai gali padaryti jūsų skaitmeninį pėdsaką labai unikalų. | Privacy Magic slepia pasirinktinius šriftus, įdiegtus jūsų sistemoje, nuo visų scenarijų. Svetainės ir toliau gali naudoti standartinius sistemos šriftus ir atsisiunčiamus internetinius šriftus. |
| Grafika | Canvas ir WebGL yra du pagrindiniai skaitmeninio pėdsako vektoriai, kurie nuteka, kokį GPU (grafikos lustą) naudoja jūsų kompiuteris. | Privacy Magic naudoja pažangias technikas, kad paslėptų grafikos lustą, tuo pačiu leisdamas jums toliau žaisti žaidimus ir naudotis kitomis svetainėmis, intensyviai naudojančiomis grafiką. |
| Klaviatūra | Pagal numatytuosius nustatymus naršyklės nuteka klaviatūros išdėstymą, kurį naudojate, bet kuriai svetainei, kuri to paprašo. | Privacy Magic blokuoja jūsų klaviatūros išdėstymo atskleidimą svetainių scenarijams. |
| Kalba | Paprastai naršyklės nuteka kalbų, kurias patvirtinote, sąrašą. Nors svarbu galėti nurodyti, kurią kalbą pageidaujate lankomoms svetainėms, naršyklės paprastai atskleidžia naudotojo pageidaujamų kalbų sąrašą, kuris gali būti per daug atskleidžiantis. | Privacy Magic leidžia perduoti lankomoms svetainėms tik vieną kalbą. |
| Matematika | Sekimo scenarijai svetainėse gali naudoti idiosinkratišką Math funkcijų, tokių kaip kosinusas ar hiperbolinis tangentas, elgseną jūsų įrenginyje, kad atskirtų jus nuo kitų naudotojų. | Privacy Magic pataiso JavaScript Math funkcijas, kad jos elgtųsi identiškai visose platformose. |
| Atmintis | Svetainės iš daugumos naršyklių gali sužinoti, kiek nenaudojamos atminties yra jūsų kompiuteryje. | Privacy Magic slepia jūsų sistemoje prieinamos atminties kiekį nuo svetainių ir sekiklių. |
| Tinklas | Naršyklės paprastai nuteka detales apie jūsų tinklo ryšio tipą. | Privacy Magic apsaugo nuo šių detalių nutekėjimo, padarydamas jas vienodas visiems naudotojams. |
| Procesorius | Naršyklės sukurtos pranešti jūsų kompiuterio procesoriaus branduolių skaičių. | Privacy Magic apsimeta, kad visi turi tiksliai `4`. |
| Ekrano dydis | Naršyklės nuteka jūsų ekrano matmenis bet kuriai svetainei, kuri to paprašo, nepriklausomai nuo to, koks didelis yra naršyklės langas. | Privacy Magic slepia tikrąjį ekrano dydį. |
| Laiko juosta | Naršyklės nuteka jūsų apytikslę vietą, kai scenarijai prašo jūsų laiko juostos. Pavyzdžiui, jei esate Vidurio Europos laike, naršyklė pateiks laiko juostos identifikatorių, kuris nurodo, ar esate Paryžiuje, Berlyne, Liuksemburge ar bet kuriame iš dešimčių kitų miestų. | Privacy Magic suvienodina laiko juostas, kad kiekvienas laiko juostos poslinkis turėtų vieną reprezentatyvią laiko juostą. Taip naršyklė nenuteka nereikalingos informacijos apie jūsų vietą pasaulyje. |
| Laikas | Aukštos skiriamosios gebos laiko API leidžia scenarijams apibūdinti jūsų sistemą, matuojant menkus naršyklės elgsenos laiko skirtumus. | Privacy Magic suapvalina šių API pateikiamus laikus, kad sekimo scenarijams būtų daug sunkiau juos naudoti naršyklėms atskirti. |
| Lietimas | Touch API nuteka, ar jūsų įrenginys turi jutiklinį ekraną ir kiek jutiklinių taškų leidžia. | Privacy Magic slepia šią informaciją nuo svetainių. |

## Sekimo pėdsakų šalinimas {#removing-tracking-breadcrumbs}

Kai kurios naršyklės funkcijos yra pažeidžiamos ir gali būti naudojamos dalytis jūsų naršymo istorijos dalimis („pėdsakais“) su skirtingomis lankomomis svetainėmis. Privacy Magic sustiprina šias funkcijas, kad jos būtų mažiau pralaidžios.

| Pėdsakas | Standartinės naršyklės | Privacy Magic |
| :--- | :--- | :--- |
| Talpyklos nutekėjimai | Naršyklės saugo duomenis vietinėse talpyklose, kad lankantis puslapyje ar peržiūrint jį antrą kartą, tų duomenų nereikėtų įkelti iš naujo. Deja, tos talpyklos kartais yra pralaidžios ir atskleidžia kažką apie jūsų naršymo istoriją lankomai svetainei. | Privacy Magic išvalo pažeidžiamas talpyklas, kad šie nutekėjimai negalėtų įvykti. |
| Referrer politika | Tradiciškai naršyklės kiekvienai lankomai svetainei pasako, iš kurio puslapio atėjote! | Privacy Magic ištrina tikslų puslapį (arba kelią) refereryje ir dėl suderinamumo leidžia dalytis tik domenu. |
| Sekimo parametrai | Sekikliai gali pridėti papildomus „sekimo parametrus“ prie lankomų puslapių adresų, kad reklamuotojai galėtų sekti, kas jūs esate arba kur naršėte. | Privacy Magic ištrina žinomus sekimo parametrus iš internetinių adresų, kad ši informacija nebūtų dalijamasi su lankomomis svetainėmis. |
| Lango pavadinimas | Paprastai `window.name` JavaScript API nuteka duomenis, jei naršote tarp svetainių tame pačiame skirtuke. | Privacy Magic apsaugo nuo šio nutekėjimo, užtikrindamas atskirą `window.name` kiekvienai svetainei. |

## Internetinių nutekėjimų stabdymas {#stopping-web-leaks}

Žiniatinklio naršyklės yra sudėtingi padarai! Privačios informacijos nutekėjimai gali atsirasti iš daugelio skirtingų naršyklės funkcijų. Privacy Magic požiūris – užkamšyti nutekėjimus, kur tik jie rastųsi.

| Funkcija | Standartinės naršyklės | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Iframe yra „tinklalapis tinklalapyje“. Tai dėžutė lankomame puslapyje, kurioje gali slėptis antras tinklalapis ir naudoti visas tas pačias sekimo technikas, kurias naudoja įprastas tinklalapis. | Privacy Magic įterpia visas savo apsaugas į kiekvieną iframe puslapyje, kad sekiklis negalėtų apeiti tų apsaugų, slėpdamasis iframe. |
| Service Workers | Service Workers yra naršyklės funkcija, leidžianti kodui veikti fone net tada, kai nesate prisijungę prie interneto. Deja, šie Service Workers lengvai gali nutekėti privačią informaciją. | Service workers paprastai išjungiami visose svetainėse, kad būtų išvengta privačios informacijos nutekėjimų, kurių kitaip negalima užtaisyti. |
| Shared Storage | Shared Storage yra naršyklės funkcija, leidžianti agreaguoti ir rinkti duomenis apie jūsų naršymą. Nors ji buvo pristatyta kaip privatumą išsauganti, ši funkcija sukėlė rimtų privatumo rūpesčių ir turi būti pašalinta iš naršyklių. | Privacy Magic užtikrina, kad Shared Storage būtų išjungtas visose svetainėse. |
| Shared Workers | Shared Workers yra kodas, veikiantis fone ir galintis būti bendrinamas tarp svetainių. | Privacy Magic įterpia savo apsaugas į kiekvieną Shared Worker, kurį įkelia bet kuri svetainė. |
| Web Workers | Web Workers yra kodas, veikiantis fone tinklalapyje. Kaip ir pagrindinio puslapio scenarijai, web worker kodas gali nutekėti privačius duomenis. | Privacy Magic įterpia savo apsaugas į kiekvieną Web Worker puslapyje, kad sekikliai negalėtų naudoti Web Workers toms apsaugoms apeiti. |

## Privatumo signalai {#privacy-signals}

Mus domina jūsų privatumo gerinimas kiekvienu įmanomu būdu. Todėl Privacy Magic siunčia signalą, reikalaudamas privatumo palaikančios politikos iš lankomų svetainių.

| Signalas | Standartinės naršyklės | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control yra signalas, kurį galima siųsti lankomoms svetainėms, nurodant, kad nenorite, jog jūsų duomenys būtų parduodami ar dalijami. Deja, dauguma naršyklių pagal numatytuosius nustatymus nesiunčia Global Privacy Control nuostatos. | Privacy Magic užtikrina, kad jūsų naršyklė siųstų Global Privacy Control antraštę su kiekviena užklausa kiekvienam tinklalapiui ar įterptam ištekliui. Ji taip pat įterpia JavaScript signalą kiekviename puslapyje ir iframe. |

## Naršyklės apsaugos {#browser-protections}

Naršyklės elgiasi blogai ne tik tuo, kaip atvaizduoja tinklalapius, bet ir tuo, kaip siunčia duomenis patronuojančiai įmonei ar trečiųjų šalių reklamos įmonėms. Privacy Magic išjungia įvairų blogą naršyklės elgesį, kuris kitaip nutekėtų jūsų privačią informaciją.

### Pralaidžių interneto funkcijų išjungimas {#disabling-leaky-web-features}

| Funkcija | Standartinės naršyklės | Privacy Magic |
| :--- | :--- | :--- |
| Hipersaitų auditas | Standartinės naršyklės turi funkciją, leidžiančią svetainėms „pinginti“ sekimo serverį su nuorodomis, kurias spustelite. | Privacy Magic išjungia šį ping. |
| Trečiųjų šalių slapukai | Garsiausia sekimo funkcija iš visų. Chrome leidžia trečiųjų šalių slapukus, kurie leidžia jus sekti nuo svetainės prie svetainės. | Privacy Magic pagal numatytuosius nustatymus išjungia trečiųjų šalių slapukus. |
| WebRTC neproxied UDP | WebRTC yra naršyklės galimybė, leidžianti tiesiogiai bendrauti su kitais interneto naudotojais. Deja, jei naudojate naršyklės proxy, standartinės Chrome pagrindu veikiančios naršyklės nuteka WebRTC komunikaciją už proxy ribų. | Privacy Magic blokuoja WebRTC nutekėjimus, tuo pačiu leisdamas WebRTC veikti svetainėse, kurios jį naudoja. |

### Invazinių debesijos paslaugų išjungimas {#disabling-invasive-cloud-services}

| Paslauga | Standartinės naršyklės | Privacy Magic |
| :--- | :--- | :--- |
| Alternatyvūs klaidų puslapiai | Pagal numatytuosius nustatymus Chrome rodo alternatyvius klaidų puslapius, kai įvyksta klaida. Norėdamas parodyti šiuos puslapius, duomenys apie lankomus puslapius siunčiami į Google serverius. | Privacy Magic išjungia šiuos alternatyvius klaidų puslapius, kad jokie duomenys nebūtų siunčiami. |
| Safe Browsing Extended Reporting | Kai Safe Browsing užblokuoja puslapį, Chrome gali išsiųsti užblokuoto puslapio turinį į Google serverius. | Privacy Magic blokuoja šią funkciją, kad jokie duomenys nebūtų siunčiami. |
| Paieškos pasiūlymai | Pagal numatytuosius nustatymus Chrome siunčia viską, ką įvedate į adreso juostą, į jūsų numatytąją paieškos sistemą (paprastai Google paiešką), kol rašote, kad pateiktų automatinius pasiūlymus. | Privacy Magic blokuoja šį nuolatinį stebėjimą, kad Chrome siųstų jūsų paiešką tik tada, kai paspaudžiate „enter“. |
| Rašybos paslauga | Chrome siūlo „patobulintą rašybos tikrinimą“, kuris siunčia tai, ką įvedate, į Google serverius. | Privacy Magic išjungia šią parinktį ir leidžia Chrome naudoti tik vietinį „pagrindinį rašybos tikrinimą“. |

### Reklamos taikymo API išjungimas {#disabling-ad-targeting-apis}

| API | Standartinės naršyklės | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (ir susijusi Private Aggregation API) siunčia duomenis apie jūsų naršymą, reklamas, kurias spustelite, ir kitus privačius duomenis į reklamos serverius. | Privacy Magic išjungia šias API, kad apsaugotų jūsų duomenis. |
| Protected Audience API | Pagal numatytuosius nustatymus Chrome suteikia šią API, kad reklamuotojų vardu vykdytų aukcioną dėl jūsų dėmesio. | Privacy Magic išjungia šią API, kad jūsų naršymo duomenys nebūtų taip naudojami. |
| Topics API | Chrome Topics API suteikia reklamuotojams temų, kurios neva jus domina, sąrašą. | Privacy Magic išjungia Topics API, kad tie duomenys liktų privatūs. |

### Pralaidžių Chrome nustatymų išjungimas {#disabling-leaky-chrome-settings}

Chrome turi tam tikrus nustatymus, kurie prieštarauja jūsų privatumui: konkrečiai, funkcijas, kurios renka duomenis apie jūsų naršymo įpročius ir siunčia juos į Google serverius. Šių nustatymų naršyklės plėtinys negali tiesiogiai kontroliuoti, tačiau diegimo metu Privacy Magic padės jums rasti nustatymus ir juos išjungti patiems.

| Nustatymas | Standartinės naršyklės | Privacy Magic |
| :--- | :--- | :--- |
| Istorijos sinchronizavimas | Kai esate prisijungę prie Chrome, ji sinchronizuoja jūsų naršymo istoriją tarp įrenginių. Ji taip pat saugo tuos pačius duomenis Google serveriuose. | Privacy Magic nukreipia jus į nustatymą, kuris išjungia istorijos sinchronizavimą, kad jūsų naršymo istorija liktų privati. |
| Naudotojo patirties metrikos | Chrome tyliai siunčia metrikas apie jūsų naršyklės naudojimą atgal į Google serverius. | Privacy Magic padeda jums blokuoti šį paslėptą duomenų rinkimą. |
| Duomenų rinkimas pagal URL | Kiekvienam lankomam URL Chrome renka „anonimizuotus“ duomenis apie jūsų naršymą tuose puslapiuose ir siunčia juos Google. | Privacy Magic padeda jums išjungti šį nustatymą, kad duomenys nebūtų siunčiami. |
