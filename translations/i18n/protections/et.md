---
title: "Kaitsekihid: brauseri lekete sulgemine"
description: Kuidas Privacy Magic kaitseb teie privaatsust veebis sirvides
backToTop: "↑ Tagasi üles"
---

Privacy Magic on avatud lähtekoodiga Chrome’i laiendus, mis kaitseb teie privaatsust veebis sirvides terviklikult. Brauserid lekivad palju, seega pakub Privacy Magic mitut kaitsekihti, sealhulgas [reklaamide ja jälitajate blokeerimist](#blocking-ads-and-trackers), [süsteemiteabe kaitsmist](#protecting-system-information-fingerprinting), [jälituspurude eemaldamist](#removing-tracking-breadcrumbs), [veebilekete peatamist](#stopping-web-leaks), [privaatsussignaalide saatmist](#privacy-signals) ja [brauseri kaitsete jõustamist](#browser-protections).

## Reklaamide ja jälitajate blokeerimine {#blocking-ads-and-trackers}

Kogu veebis järgivad teid ilma teie nõusolekuta reklaamid, jälitusskriptid ja jälituspikslid, kasutades mitmesuguseid nähtamatuid meetodeid.

Privacy Magic kasutab populaarseid filtriloendeid, et blokeerida paljusid reklaame ja jälitajaid, et teie brauser neid võrgus ei päringuks. Filtriloendid peidavad ka tühjad kastid, mis jäävad alles, kui reklaamid veebilehel blokeeritakse. Privacy Magic kasutab nende filtriloendite kinnitatud versiooni, et laienduse blokeerimiskäitumine oleks täielikult korratav ja iga kasutaja jaoks identne.

| Filtriloend | Blokeeritavad elemendid |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Reklaamid, sealhulgas bännerid, reklaamiskriptid, pildid ja videoreklaamid. |
| [EasyPrivacy](https://easylist.to/) | Jälitajad, sealhulgas jälitusskriptid, pikslid, veebivead ja muud teabekogujad. |
| [Fanboy's Annoyance List](https://easylist.to/) | Küpsisteatised, sotsiaalmeedia vidinad, lehesisised hüpikaknad ja muud tüütused. |
| [väike oisd blokiloend](https://oisd.nl/) | Täiendavad reklaamidomeenid. |

## Süsteemiteabe kaitsmine (sõrmejälg) {#protecting-system-information-fingerprinting}

Traditsiooniliselt lekivad brauserid ohtralt teavet teie arvuti kohta igale veebisaidile või jälitusskriptile, mis seda küsib. Ja jälitajad koguvad neid andmeid, et teid veebis sirvides jälitada.

| Sõrmejälg | Standardsed veebibrauserid | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Brauserite helitöötlusfunktsioon lekib tavaliselt teavet teie helikaardi kohta. | Privacy Magic vähendab selliseid lekkeid, kustutades heliandmetest vähima tähtsusega biti iga kord, kui skript neid loeb. Sellel kustutamisel pole kuuldavaid mõjusid. |
| Aku | Veebibrauserid ütlevad tavaliselt igale saidile, mis küsib, milline on teie aku tase, kas seade on vooluvõrku ühendatud, ning annavad hinnangu, kui palju aega jääb enne aku tühjenemist. | Privacy Magic peatab selle teabeleke, simuleerides akut, mis on alati 100% peal, ja toiteallikat, mis on alati ühendatud. |
| Brauser | Veebileht saab teie brauserilt küsida üksikasjalikku teavet selle operatsioonisüsteemi kohta, milles see töötab. | Privacy Magic võltsib `navigator.platform` väärtuse üheks väärtuseks iga erineva operatsioonisüsteemi jaoks. |
| Seade | Veebibrauserid ütlevad igale saidile, mis küsib, kas kasutate kokkupandavat seadet. | Privacy Magic teatab alati, et teie seade ei ole kokkupandav. |
| Kettaruum | Veebibrauserid lekivad tavaliselt veebisaidile saadaoleva kettaruumi hulga ja selle, kui palju see sait kasutab, mis võib paljastada teie arvuti kogu kettaruumi ja andmete salvestamise viisi. | Privacy Magic võltsib need väärtused nii, et need on kõigil ühesugused. |
| Kuva | Traditsiooniliselt lekivad veebibrauserid kuvaseadeid, sealhulgas seda, kas teie süsteemis on seatud „eelistada vähendatud liikumist“. | Privacy Magic takistab seda leket. |
| Fondid | Standardsed veebibrauserid lekivad, millised kohandatud fondid teil süsteemi on installitud, mis võib muuta teie sõrmejälje väga unikaalseks. | Privacy Magic peidab teie süsteemi installitud kohandatud fondid kõigi skriptide eest. Veebilehed saavad jätkuvalt kasutada standardseid süsteemifonte ja allalaaditud veebifonte. |
| Graafika | Canvas ja WebGL on kaks peamist sõrmejäljevektorit, mis lekivad, millist GPU-d (graafikakiipi) teie arvuti kasutab. | Privacy Magic kasutab arenenud tehnikaid graafikakiibi peitmiseks, võimaldades samal ajal jätkata mängimist ja teiste graafikat intensiivselt kasutavate saitide kasutamist. |
| Klaviatuur | Vaikimisi lekivad brauserid igale saidile, mis küsib, millist klaviatuuripaigutust te kasutate. | Privacy Magic blokeerib teie klaviatuuripaigutuse avalikustamise veebisaidi skriptidele. |
| Keel | Tavaliselt lekivad veebibrauserid keelte loendi, mille olete heaks kiitnud. Kuigi on oluline määrata, millist keelt eelistate külastatavatel saitidel, paljastavad brauserid tavaliselt kasutaja eelistatud keelte loendi, mis võib olla liiga paljastav. | Privacy Magic lubab külastatavatele saitidele edastada ainult ühe keele. |
| Matemaatika | Jälitusskriptid veebilehtedel saavad kasutada Math-funktsioonide, näiteks koosinuse või hüperboolse tangensi, omapärast käitumist teie seadmes, et teid teistest veebikasutajatest eristada. | Privacy Magic parandab JavaScripti Math-funktsioonid nii, et need käituvad kõigil platvormidel identselt. |
| Mälu | Veebisaidid saavad enamikust brauseritest teada, kui palju mälu teie arvutis on kasutamata. | Privacy Magic peidab teie süsteemis saadaoleva mälu hulga veebilehtede ja jälitajate eest. |
| Võrk | Brauserid lekivad tavaliselt üksikasju teie võrguühenduse tüübi kohta. | Privacy Magic takistab nende üksikasjade lekkimist, muutes need kõigi kasutajate jaoks ühetaoliseks. |
| Protsessor | Brauserid on loodud teatama teie arvuti protsessori tuumade arvust. | Privacy Magic teeskleb, et kõigil on täpselt `4`. |
| Ekraan | Veebibrauserid lekivad teie ekraani mõõtmed igale saidile, mis küsib, olenemata brauseriakna suurusest. | Privacy Magic peidab tegeliku ekraani suuruse. |
| Ajavöönd | Veebibrauserid lekivad teie ligikaudse asukoha, kui skriptid küsivad teie ajavööndit. Näiteks kui olete Kesk-Euroopa aja tsoonis, annab brauser ajavööndi tunnuse, mis näitab, kas olete Pariisis, Berliinis, Luxembourgis või mõnes kümnetest teistest linnadest. | Privacy Magic koondab ajavööndid nii, et igal ajanihkega on üks esinduslik ajavöönd. Nii ei leki brauser tarbetut teavet teie asukoha kohta maakeral. |
| Ajastus | Kõrge eraldusvõimega ajastus-API-d võimaldavad skriptidel teie süsteemi iseloomustada, mõõtes brauserikäitumise ajastuse väikseid erinevusi. | Privacy Magic ümardab nende API-de antud ajad, et jälitusskriptidel oleks palju raskem neid brauserite eristamiseks kasutada. |
| Puute | Touch API lekib, kas teie seadmel on puutetugi ja mitu puutepunkti see lubab. | Privacy Magic peidab selle teabe veebisaitide eest. |

## Jälituspurude eemaldamine {#removing-tracking-breadcrumbs}

Mõned brauserifunktsioonid on haavatavad sellele, et neid kasutatakse teie sirvimisajaloo osade („purude“) jagamiseks erinevatele külastatavatele saitidele. Privacy Magic tugevdab neid funktsioone, et need vähem lekiksid.

| Purud | Standardsed veebibrauserid | Privacy Magic |
| :--- | :--- | :--- |
| Vahemälu lekked | Brauserid salvestavad andmeid kohalikesse vahemäludesse, et lehte külastades või teist korda vaadates ei peaks neid andmeid uuesti laadima. Kahjuks lekivad need vahemälud mõnikord ja paljastavad külastatavale saidile midagi teie sirvimisajaloost. | Privacy Magic tühjendab haavatavad vahemälud, et need lekked ei saaks tekkida. |
| Referrer-poliitika | Traditsiooniliselt ütlevad brauserid igale külastatavale veebilehele, milliselt veebilehelt te tulite! | Privacy Magic kustutab referrerist täpse lehe (või tee) ja veebiühilduvuse huvides lubab jagada ainult domeeni. |
| Jälitusparameetrid | Jälitajad saavad külastatavate veebilehtede aadressidele lisada täiendavaid „jälitusparameetreid“, et reklaamijad saaksid jälgida, kes te olete või kus olete sirvinud. | Privacy Magic kustutab teadaolevad jälitusparameetrid veebiaadressidelt, et seda teavet külastatavate saitidega ei jagataks. |
| Akna nimi | Tavaliselt lekib JavaScripti API `window.name` andmeid, kui liigute samas vahekaardis saitide vahel. | Privacy Magic takistab seda leket, jõustades iga saidi jaoks eraldi `window.name` väärtuse. |

## Veebilekete peatamine {#stopping-web-leaks}

Veebibrauserid on keerulised olendid! Privaatse teabe lekked võivad tekkida paljudest erinevatest brauserifunktsioonidest. Privacy Magicu lähenemine on lekkeid sulgeda kõikjal, kust neid leitakse.

| Funktsioon | Standardsed veebibrauserid | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Iframe on „veebileht veebilehe sees“. See on kast külastataval lehel, kus teine veebileht saab peituda ja kasutada kõiki samu jälitustehnikaid, mida tavaline veebileht. | Privacy Magic süstib kõik oma kaitsekihid igasse veebilehe iframe’i, et jälitaja ei saaks neid kaitseid mööda hiilida, peitudes iframe’i sisse. |
| Service Workers | Service Workers on brauserifunktsioon, mis võimaldab koodil töötada taustal isegi siis, kui te pole internetiga ühendatud. Kahjuks saavad need Service Workers hõlpsasti privaatset teavet lekkida. | Service worker’id on üldiselt kõigil saitidel välja lülitatud, et vältida privaatse teabe lekkeid, mida muul viisil ei saa parandada. |
| Shared Storage | Shared Storage on brauserifunktsioon, mis võimaldab teie sirvimise andmeid koondada ja koguda. Kuigi seda väideti privaatsust säilitavaks, tekitas see funktsioon tugevaid privaatsusprobleeme ja see kavatsetakse brauseritest eemaldada. | Privacy Magic tagab, et Shared Storage on kõigil veebisaitidel välja lülitatud. |
| Shared Workers | Shared Workers on kood, mis töötab taustal ja mida saab saitide vahel jagada. | Privacy Magic süstib oma kaitsekihid igasse Shared Worker’isse, mille ükskõik milline sait laadib. |
| Web Workers | Web Workers on kood, mis töötab veebilehel taustal. Nagu peamise lehe skriptid, võib web worker’i kood lekke privaatseid andmeid. | Privacy Magic süstib oma kaitsekihid igasse lehe Web Worker’isse, et jälitajad ei saaks Web Worker’eid nende kaitsete möödahiilimiseks kasutada. |

## Privaatsussignaalid {#privacy-signals}

Meid huvitab teie privaatsuse parandamine igal võimalikul viisil. Seega saadab Privacy Magic signaali, et nõuda külastatavatelt saitidelt privaatsussõbralikke poliitikaid.

| Signaal | Standardsed veebibrauserid | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control on signaal, mida saab saata külastatavatele saitidele, et näidata, et te ei soovi oma andmete müümist ega jagamist. Kahjuks ei saada enamik veebibrausereid Global Privacy Controli eelistust vaikimisi. | Privacy Magic tagab, et teie brauser saadab Global Privacy Controli päise iga päringuga igale veebilehele või manustatud ressursile. Samuti süstib see JavaScripti signaali igasse lehte ja iframe’i. |

## Brauseri kaitsekihid {#browser-protections}

Brauserid käituvad halvasti mitte ainult selles, kuidas nad veebilehti renderdavad, vaid ka selles, kuidas nad andmeid emaettevõttele või kolmandate osapoolte reklaamiettevõtetele saadavad. Privacy Magic lülitab välja mitmesugused halvad brauserikäitumised, mis muidu lekiksid teie privaatset teavet.

### Lekkivate veebifunktsioonide väljalülitamine {#disabling-leaky-web-features}

| Funktsioon | Standardsed veebibrauserid | Privacy Magic |
| :--- | :--- | :--- |
| Hüperlingi auditeerimine | Standardsetel brauseritel on funktsioon, mis võimaldab saitidel „pingida“ jälitusserverit linkidega, millel klõpsate. | Privacy Magic lülitab selle pingi välja. |
| Kolmandate osapoolte küpsised | Kõige kuulsam jälitusfunktsioon üldse. Chrome lubab kolmandate osapoolte küpsiseid, mis võimaldavad teid saidilt saidile jälitada. | Privacy Magic lülitab kolmandate osapoolte küpsised vaikimisi välja. |
| WebRTC mitteproxitud UDP | WebRTC on veebibrauseri võimekus, mis võimaldab teil suhelda teiste veebikasutajatega otse. Kahjuks, kui kasutate brauseriproksit, lekivad standardsed Chrome’il põhinevad brauserid WebRTC-side proksist välja. | Privacy Magic blokeerib WebRTC lekkeid, lubades samal ajal WebRTC-l töötada saitidel, mis seda kasutavad. |

### Invasiivsete pilveteenuste väljalülitamine {#disabling-invasive-cloud-services}

| Teenus | Standardsed veebibrauserid | Privacy Magic |
| :--- | :--- | :--- |
| Alternatiivsed veateated | Vaikimisi näitab Chrome vea korral alternatiivseid vealehti. Nende lehtede näitamiseks saadetakse Google’i serveritesse andmeid külastatavate lehtede kohta. | Privacy Magic lülitab need alternatiivsed vealehed välja, et andmeid ei saadetaks. |
| Safe Browsing laiendatud aruandlus | Kui Safe Browsing blokeerib lehe, võib Chrome saata blokeeritud lehe sisu Google’i serveritesse. | Privacy Magic blokeerib selle funktsiooni, et andmeid ei saadetaks. |
| Otsingu soovitused | Vaikimisi saadab Chrome kõik, mida aadressiribale tipite, teie vaikeotsingumootorile (tavaliselt Google’i otsing) tipimise ajal, et teha automaatsoovitusi. | Privacy Magic blokeerib selle pideva jälgimise, nii et Chrome saadab teie otsingu alles siis, kui vajutate „Enter“. |
| Õigekirjateenus | Chrome pakub „täiustatud õigekirjakontrolli“, mis saadab teie tipitu Google’i serveritesse. | Privacy Magic lülitab selle valiku välja ja lubab Chrome’il kasutada ainult kohalikku „põhilist õigekirjakontrolli“. |

### Reklaami sihtimise API-de väljalülitamine {#disabling-ad-targeting-apis}

| API | Standardsed veebibrauserid | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (ja seotud Private Aggregation API) saadab teie sirvimise, klikitud reklaamide ja muude privaatsete andmete kohta teavet reklaamiserveritesse. | Privacy Magic lülitab need API-d välja, et kaitsta teie andmeid. |
| Protected Audience API | Vaikimisi teeb Chrome selle API kättesaadavaks, et korraldada teie tähelepanu üle oksjon reklaamijate nimel. | Privacy Magic lülitab selle API välja, et teie sirvimisandmeid sel viisil ei kasutataks. |
| Topics API | Chrome’i Topics API annab reklaamijatele teemade loendi, mis väidetavalt teid huvitavad. | Privacy Magic lülitab Topics API välja, et hoida need andmed privaatsena. |

### Lekkivate Chrome’i seadete väljalülitamine {#disabling-leaky-chrome-settings}

Chrome sisaldab teatud seadeid, mis on teie privaatsusele vastuolus: konkreetselt funktsioone, mis koguvad andmeid teie sirvimisharjumuste kohta ja saadavad need Google’i serveritesse. Neid seadeid ei saa brauserilaiendus otseselt juhtida, kuid seadistamise ajal aitab Privacy Magic teil seaded üles leida ja need ise välja lülitada.

| Seade | Standardsed veebibrauserid | Privacy Magic |
| :--- | :--- | :--- |
| Ajaloo sünkroonimine | Kui olete Chrome’i sisse loginud, sünkroonib see teie sirvimisajaloo seadmete vahel. Samuti salvestab see samad andmed Google’i serveritesse. | Privacy Magic juhatab teid seadeni, mis lülitab ajaloo sünkroonimise välja, et hoida teie sirvimisajalugu privaatsena. |
| Kasutajakogemuse mõõdikud | Chrome saadab vaikselt teie brauserikasutuse mõõdikuid tagasi Google’i serveritesse. | Privacy Magic aitab teil seda peidetud andmekogumist blokeerida. |
| Andmete kogumine URL-i kohta | Iga külastatud URL-i kohta kogub Chrome „anonüümitud“ andmeid teie sirvimise kohta nendel lehtedel ja saadab need Google’ile. | Privacy Magic aitab teil selle seade välja lülitada, et vältida andmete saatmist. |
