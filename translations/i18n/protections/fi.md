---
title: "Suojaukset: selaimen tietovuotojen tukkiminen"
description: Miten Privacy Magic suojaa yksityisyyttäsi verkkoa selatessa
backToTop: "↑ Takaisin ylös"
---

Privacy Magic on avoimen lähdekoodin Chrome-laajennus, joka suojaa yksityisyyttäsi kattavasti verkkoa selatessa. Selaimet vuotavat paljon, joten Privacy Magic tarjoaa useita suojauskerroksia, mukaan lukien [mainosten ja seurainten estämisen](#blocking-ads-and-trackers), [järjestelmätietojen suojaamisen](#protecting-system-information-fingerprinting), [seurantaleivänmurujen poistamisen](#removing-tracking-breadcrumbs), [verkkovuotojen pysäyttämisen](#stopping-web-leaks), [yksityisyyssignaalien lähettämisen](#privacy-signals) ja [selaimen suojausten varmistamisen](#browser-protections).

## Mainosten ja seurainten estäminen {#blocking-ads-and-trackers}

Verkossa mainokset, seurantaskriptit ja seurantapikselit seuraavat sinua ilman suostumustasi monenlaisilla näkymättömillä menetelmillä.

Privacy Magic käyttää suosittuja suodatinlistoja estääkseen monia mainoksia ja seurantimia, jotta selaimesi ei pyytäisi niitä verkosta. Suodatinlistat peittävät myös tyhjät laatikot, jotka jäävät jäljelle, kun mainokset estetään verkkosivulla. Privacy Magic käyttää näiden suodatinlistojen kiinnitettyä versiota, jotta laajennuksen estokäyttäytyminen on täysin toistettavissa ja identtinen jokaiselle käyttäjälle.

| Suodatinlista | Estetyt kohteet |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Mainokset, mukaan lukien bannerit, mainosskriptit, kuvat ja videomainokset. |
| [EasyPrivacy](https://easylist.to/) | Seurantimet, mukaan lukien seurantaskriptit, pikselit, web-bugit ja muut tiedonkerääjät. |
| [Fanboy's Annoyance List](https://easylist.to/) | Evästeilmoitukset, somewidgetit, sivunsisäiset ponnahdusikkunat ja muut ärsykkeet. |
| [pieni oisd-estolista](https://oisd.nl/) | Lisämainosverkkotunnukset. |

## Järjestelmätietojen suojaaminen (sormenjälki) {#protecting-system-information-fingerprinting}

Perinteisesti selaimet vuotavat runsaasti tietoja tietokoneestasi mille tahansa verkkosivustolle tai seurantaskriptille, joka kysyy! Ja seurantimet keräävät näitä tietoja seuratakseen sinua verkkoa selatessa.

| Sormenjälki | Tavalliset verkkoselaimet | Privacy Magic |
| :--- | :--- | :--- |
| Ääni | Selaimien äänikäsittelytoiminto vuotaa tyypillisesti tietoja äänikortistasi. | Privacy Magic vähentää tällaisia vuotoja poistamalla ääritietojen vähiten merkitsevän bitin aina, kun skripti lukee niitä. Tällä poistolla ei ole kuuluvia vaikutuksia. |
| Akku | Verkkoselaimet kertovat tyypillisesti mille tahansa kysyvälle sivustolle akun tason, onko laite kytketty virtalähteeseen, sekä arvion siitä, kuinka paljon aikaa on jäljellä ennen akun tyhjenemistä. | Privacy Magic pysäyttää tämän tietovuodon simuloimalla akkua, joka on aina 100 %:ssa, ja virtalähdettä, joka on aina kytkettynä. |
| Selain | Verkkosivu voi kuulustella selainta saadakseen yksityiskohtaista tietoa käyttöjärjestelmästä, jossa se toimii. | Privacy Magic väärentää `navigator.platform`-arvon yhdeksi arvoksi kutakin eri käyttöjärjestelmää varten. |
| Laite | Verkkoselaimet kertovat mille tahansa kysyvälle sivustolle, käytätkö taittuvaa laitetta. | Privacy Magic ilmoittaa aina, että laitteesi ei ole taittuva. |
| Levy | Verkkoselaimet vuotavat tyypillisesti sivustolle käytettävissä olevan levytilan määrän ja sen, kuinka paljon sivusto käyttää, mikä voi paljastaa tietokoneesi kokonaislevytilan ja tavan, jolla dataa tallennetaan. | Privacy Magic väärentää nämä arvot niin, että ne ovat samat kaikille. |
| Näyttö | Perinteisesti verkkoselaimet vuotavat näyttöasetuksia, mukaan lukien sen, onko järjestelmässäsi käytössä ”suosi vähennettyä liikettä”. | Privacy Magic estää tämän vuodon. |
| Fontit | Tavalliset verkkoselaimet vuotavat, mitä mukautettuja fontteja järjestelmääsi on asennettu, mikä voi tehdä sormenjäljestäsi hyvin ainutlaatuisen. | Privacy Magic peittää järjestelmääsi asennetut mukautetut fontit kaikilta skripteiltä. Verkkosivut voivat edelleen käyttää tavallisia järjestelmäfontteja ja ladattuja webfontteja. |
| Grafiikka | Canvas ja WebGL ovat kaksi merkittävää sormenjälkivektoria, jotka vuotavat, millainen GPU (grafiikkasiru) tietokoneesi käyttää. | Privacy Magic käyttää edistyneitä tekniikoita grafiikkasirun peittämiseen ja antaa sinun silti pelata pelejä ja käyttää muita sivustoja, jotka käyttävät grafiikkaa intensiivisesti. |
| Näppäimistö | Oletuksena selaimet vuotavat käyttämäsi näppäimistöasettelun mille tahansa kysyvälle sivustolle. | Privacy Magic estää näppäimistöasettelusi paljastamisen sivustojen skripteille. |
| Kieli | Tyypillisesti verkkoselaimet vuotavat luettelon kielistä, jotka olet hyväksynyt. Vaikka on tärkeää voida määrittää, mitä kieltä preferoit vierailemillasi sivustoilla, selaimet paljastavat tyypillisesti käyttäjän preferoimien kielten luettelon, mikä voi olla liian paljastavaa. | Privacy Magic sallii vain yhden kielen välittämisen vierailemillesi sivustoille. |
| Matematiikka | Seurantaskriptit verkkosivuilla voivat käyttää Math-funktioiden, kuten kosinin tai hyperbolisen tangentin, idiosynkraattista käyttäytymistä laitteellasi erottaakseen sinut muista verkkokäyttäjistä. | Privacy Magic korjaa JavaScriptin Math-funktiot niin, että ne käyttäytyvät identtisesti kaikilla alustoilla. |
| Muisti | Sivustot voivat useimmista selaimista selvittää, kuinka paljon muistia tietokoneellasi on käyttämättä. | Privacy Magic peittää järjestelmässäsi käytettävissä olevan muistin määrän verkkosivuilta ja seurantimilta. |
| Verkko | Selaimet vuotavat normaalisti yksityiskohtia verkkoyhteytesi tyypistä. | Privacy Magic estää näiden yksityiskohtien vuotamisen tekemällä niistä yhtenäisiä kaikille käyttäjille. |
| Suoritin | Selaimet on suunniteltu raportoimaan tietokoneesi suorittimen ytimien määrän. | Privacy Magic teeskentelee, että kaikilla on tasan `4`. |
| Näytön koko | Verkkoselaimet vuotavat näyttösi mitat mille tahansa kysyvälle sivustolle riippumatta selainikkunan koosta. | Privacy Magic peittää todellisen näytön koon. |
| Aikavyöhyke | Verkkoselaimet vuotavat likimääräisen sijaintisi, kun skriptit kysyvät aikavyöhykettäsi. Esimerkiksi jos olet Keski-Euroopan ajassa, selain antaa aikavyöhyketunnisteen, joka kertoo, oletko Pariisissa, Berliinissä, Luxemburgissa tai jossakin kymmenistä muista kaupungeista. | Privacy Magic yhdistää aikavyöhykkeet niin, että jokaisella aikavyöhykesiirtymällä on yksi edustava aikavyöhyke. Näin selain ei vuoda tarpeetonta tietoa sijainnistasi maapallolla. |
| Ajoitus | Korkean resoluution ajoitus-API:t antavat skriptien karakterisoida järjestelmääsi mittaamalla pieniä eroja selainkäyttäytymisten ajoituksessa. | Privacy Magic pyöristää näiden API:iden tarjoamat ajat, jotta seurantaskriptien on paljon vaikeampi käyttää niitä selainten erottamiseen. |
| Kosketus | Touch API vuotaa, onko laitteessasi kosketus ja kuinka monta kosketuspistettä se sallii. | Privacy Magic peittää tämän tiedon sivustoilta. |

## Seurantaleivänmurujen poistaminen {#removing-tracking-breadcrumbs}

Jotkin selainominaisuudet ovat alttiita sille, että niitä käytetään jakamaan osia selaushistoriastasi (”leivänmuruja”) eri sivustoille, joilla vierailet. Privacy Magic koventaa näitä ominaisuuksia, jotta ne vuotavat vähemmän.

| Leivänmuru | Tavalliset verkkoselaimet | Privacy Magic |
| :--- | :--- | :--- |
| Välimuistivuodot | Selaimet tallentavat dataa paikallisiin välimuisteihin, jotta sivua vieraillessa tai sitä toisen kerran katsottaessa dataa ei tarvitse ladata uudelleen. Valitettavasti nämä välimuistit joskus vuotavat ja paljastavat jotain selaushistoriastasi sivustolle, jolla vierailet. | Privacy Magic tyhjentää haavoittuvat välimuistit, jotta nämä vuodot eivät voi tapahtua. |
| Referrer-käytäntö | Perinteisesti selaimet kertovat jokaiselle vierailemallesi verkkosivulle, miltä verkkosivulta tulit! | Privacy Magic poistaa tarkan sivun (tai polun) referreristä ja verkkoyhteensopivuuden vuoksi sallii vain verkkotunnuksen jakamisen. |
| Seurantaparametrit | Seurantimet voivat lisätä ylimääräisiä ”seurantaparametreja” vierailemiesi sivujen osoitteisiin, jotta mainostajat voivat seurata, kuka olet tai missä olet selaillut. | Privacy Magic poistaa tunnetut seurantaparametrit verkko-osoitteista, jotta tätä tietoa ei jaeta vierailemiesi sivustojen kanssa. |
| Ikkunan nimi | Normaalisti JavaScript-API `window.name` vuotaa dataa, jos siirryt sivustojen välillä samassa välilehdessä. | Privacy Magic estää tämän vuodon pakottamalla erillisen `window.name`-arvon kullekin sivustolle. |

## Verkkovuotojen pysäyttäminen {#stopping-web-leaks}

Verkkoselaimet ovat monimutkaisia otuksia! Yksityisten tietojen vuodot voivat syntyä monista eri selainominaisuuksista. Lähestymistapamme Privacy Magicissa on tukkia vuodot kaikkialta, mistä niitä löytyy.

| Ominaisuus | Tavalliset verkkoselaimet | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Iframe on ”verkkosivu verkkosivun sisällä”. Se on laatikko sivulla, jolla vierailet, jossa toinen verkkosivu voi piiloutua ja käyttää samoja seurantatekniikoita kuin tavallinen verkkosivu. | Privacy Magic injektoi kaikki suojauksensa jokaiseen sivun iframeen, jotta seurain ei voi ohittaa suojauksia piiloutumalla iframeen. |
| Service Workers | Service Workers on selainominaisuus, joka antaa koodin suorittaa taustalla jopa ilman internetyhteyttä. Valitettavasti nämä Service Workers voivat helposti vuotaa yksityisiä tietoja. | Service workerit on yleensä poistettu käytöstä kaikilla sivustoilla, jotta estetään yksityisten tietojen vuodot, joita ei voida muuten paikata. |
| Shared Storage | Shared Storage on selainominaisuus, joka mahdollistaa selaustietojesi yhdistämisen ja keräämisen. Vaikka sen väitettiin säilyttävän yksityisyyttä, tämä ominaisuus herätti vahvoja yksityisyyshuolia ja se on määrä poistaa selaimista. | Privacy Magic varmistaa, että Shared Storage on poistettu käytöstä kaikilla sivustoilla. |
| Shared Workers | Shared Workers on koodia, joka suoritetaan taustalla ja jota voidaan jakaa sivustojen välillä. | Privacy Magic injektoi suojauksensa jokaiseen Shared Workeriin, jonka mikä tahansa sivusto lataa. |
| Web Workers | Web Workers on koodia, joka suoritetaan taustalla verkkosivulla. Kuten pääsivun skriptit, web worker -koodi voi vuotaa yksityistä dataa. | Privacy Magic injektoi suojauksensa jokaiseen sivun Web Workeriin, jotta seurantimet eivät voi käyttää Web Workereita suojauksien ohittamiseen. |

## Yksityisyyssignaalit {#privacy-signals}

Haluamme parantaa yksityisyyttäsi kaikilla mahdollisilla tavoilla. Siksi Privacy Magic lähettää signaalin vaatiakseen yksityisyyttä edistäviä käytäntöjä vierailemiltasi sivustoilta.

| Signaali | Tavalliset verkkoselaimet | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control on signaali, joka voidaan lähettää vierailemillesi sivustoille ilmoittamaan, ettet halua tietojasi myytävän tai jaettavan. Valitettavasti useimmat verkkoselaimet eivät lähetä Global Privacy Control -asetusta oletuksena. | Privacy Magic varmistaa, että selaimesi lähettää Global Privacy Control -otsikon jokaisen pyynnön yhteydessä jokaiselle verkkosivulle tai upotetulle resurssille. Se injektoi myös JavaScript-signaalin jokaiselle sivulle ja iframeen. |

## Selaimen suojaukset {#browser-protections}

Selaimet käyttäytyvät huonosti paitsi siinä, miten ne renderöivät verkkosivuja, myös siinä, miten ne lähettävät dataa emoyhtiölle tai kolmannen osapuolen mainosyhtiöille. Privacy Magic poistaa käytöstä monenlaisia huonoja selainkäyttäytymisiä, jotka muuten vuotaisivat yksityisiä tietojasi.

### Vuotavien verkko-ominaisuuksien poistaminen käytöstä {#disabling-leaky-web-features}

| Ominaisuus | Tavalliset verkkoselaimet | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlinkkiauditointi | Tavallisissa selaimissa on ominaisuus, jonka avulla sivustot voivat ”pingata” seurantapalvelinta klikkaamillasi linkeillä. | Privacy Magic poistaa tämän pingin käytöstä. |
| Kolmannen osapuolen evästeet | Kaikista kuuluisin seurantatoiminto. Chrome sallii kolmannen osapuolen evästeet, joiden avulla sinua voidaan seurata sivustolta toiselle. | Privacy Magic poistaa kolmannen osapuolen evästeet käytöstä oletuksena. |
| WebRTC ei-proxattu UDP | WebRTC on verkkoselaimen ominaisuus, joka mahdollistaa suoran kommunikaation muiden verkkokäyttäjien kanssa. Valitettavasti, jos käytät selainproxya, tavalliset Chrome-pohjaiset selaimet vuotavat WebRTC-viestinnän proxyn ulkopuolelle. | Privacy Magic estää WebRTC-vuodot ja sallii silti WebRTC:n toimia sivustoilla, jotka sitä käyttävät. |

### Tunkeilevien pilvipalveluiden poistaminen käytöstä {#disabling-invasive-cloud-services}

| Palvelu | Tavalliset verkkoselaimet | Privacy Magic |
| :--- | :--- | :--- |
| Vaihtoehtoiset virhesivut | Oletuksena Chrome näyttää vaihtoehtoisia virhesivuja virheen sattuessa. Näiden sivujen näyttämiseksi tietoja vierailemistasi sivuista lähetetään Googlen palvelimille. | Privacy Magic poistaa nämä vaihtoehtoiset virhesivut käytöstä, jotta dataa ei lähetetä. |
| Safe Browsing -laajennettu raportointi | Kun Safe Browsing estää sivun, Chrome voi lähettää estetyn sivun sisällön Googlen palvelimille. | Privacy Magic estää tämän ominaisuuden, jotta dataa ei lähetetä. |
| Hakuehdotukset | Oletuksena Chrome lähettää kaiken, mitä kirjoitat osoitepalkkiin, oletushakukoneellesi (tyypillisesti Google-haku) kirjoittaessasi automaattiehdotuksia varten. | Privacy Magic estää tämän jatkuvan seurannan, jotta Chrome lähettää hakusi vasta, kun painat ”Enter”. |
| Oikolukupalvelu | Chrome tarjoaa ”parannetun oikoluvun”, joka lähettää kirjoittamasi Googlen palvelimille. | Privacy Magic poistaa tämän vaihtoehdon käytöstä ja sallii Chromen käyttää vain paikallista ”perusoikolukua”. |

### Mainoskohdennus-API:iden poistaminen käytöstä {#disabling-ad-targeting-apis}

| API | Tavalliset verkkoselaimet | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (ja siihen liittyvä Private Aggregation API) lähettää tietoja selaamisestasi, klikkaamistasi mainoksista ja muista yksityisistä tiedoista mainospalvelimille. | Privacy Magic poistaa nämä API:t käytöstä suojatakseen tietojasi. |
| Protected Audience API | Oletuksena Chrome tarjoaa tämän API:n mainostajien puolesta järjestettävään huutokauppaan huomiosi perusteella. | Privacy Magic poistaa tämän API:n käytöstä, jotta selaustietojasi ei käytetä tällä tavalla. |
| Topics API | Chromen Topics API antaa mainostajille luettelon aiheista, jotka väitetysti kiinnostavat sinua. | Privacy Magic poistaa Topics API:n käytöstä pitääkseen nämä tiedot yksityisinä. |

### Vuotavien Chrome-asetusten poistaminen käytöstä {#disabling-leaky-chrome-settings}

Chrome sisältää tiettyjä asetuksia, jotka ovat ristiriidassa yksityisyytesi kanssa: erityisesti toimintoja, jotka keräävät tietoja selauskäytännöistäsi ja lähettävät ne Googlen palvelimille. Selainlaajennus ei voi suoraan hallita näitä asetuksia, mutta asennuksen aikana Privacy Magic auttaa sinua löytämään asetukset ja sammuttamaan ne itse.

| Asetus | Tavalliset verkkoselaimet | Privacy Magic |
| :--- | :--- | :--- |
| Historian synkronointi | Kun olet kirjautunut Chromeen, se synkronoi selaushistoriasi laitteiden välillä. Se myös tallentaa samat tiedot Googlen palvelimille. | Privacy Magic ohjaa sinut asetukseen, joka poistaa historian synkronoinnin käytöstä pitääkseen selaushistoriasi yksityisenä. |
| Käyttäjäkokemusmittarit | Chrome lähettää hiljaa mittareita selainkäytöstäsi Googlen palvelimille. | Privacy Magic auttaa sinua estämään tämän piilotetun tiedonkeruun. |
| URL-kohtainen tiedonkeruu | Jokaisesta vierailemastasi URL-osoitteesta Chrome kerää ”anonymisoitua” dataa selaamisestasi niillä sivuilla ja lähettää ne Googlelle. | Privacy Magic auttaa sinua poistamaan tämän asetuksen käytöstä, jotta dataa ei lähetetä. |
