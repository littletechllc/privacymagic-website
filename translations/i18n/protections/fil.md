---
title: "Mga Proteksyon: pagtatakip sa mga tagas sa iyong browser"
description: Paano pinoprotektahan ng Privacy Magic ang iyong privacy habang nagba-browse sa web
backToTop: "↑ Bumalik sa itaas"
---

Ang Privacy Magic ay isang open-source na extension para sa Chrome na komprehensibong pinoprotektahan ang iyong privacy habang nagba-browse sa web. Napakatagas ng mga browser, kaya nagbibigay ang Privacy Magic ng maraming layer ng proteksyon, kabilang ang [pagharang sa mga ad at tracker](#blocking-ads-and-trackers), [pagprotekta sa impormasyon ng system](#protecting-system-information-fingerprinting), [pag-aalis ng mga bakas ng pagsubaybay](#removing-tracking-breadcrumbs), [pagpigil sa mga tagas sa web](#stopping-web-leaks), [pagpapadala ng mga signal ng privacy](#privacy-signals), at [pagpapatupad ng mga proteksyon ng browser](#browser-protections).

## Pagharang sa mga ad at tracker {#blocking-ads-and-trackers}

Sa buong web, ang mga advertisement, tracking script, at tracking pixel ay sumusunod sa iyo nang walang pahintulot mo gamit ang iba't ibang hindi nakikitang paraan.

Gumagamit ang Privacy Magic ng mga popular na filter list para harangin ang maraming ad at tracker na hihilingin ng iyong browser sa network. Itinatago rin ng mga filter list ang mga bakanteng kahon na natitira kapag naharang ang mga ad sa isang web page. Gumagamit ang Privacy Magic ng naka-pin na bersyon ng mga filter list na ito upang ang pagharang ng extension ay ganap na maulit at magkapareho para sa bawat user.

| Filter list | Mga item na hinaharang |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Mga advertisement, kabilang ang mga banner, ad script, larawan, at video ad. |
| [EasyPrivacy](https://easylist.to/) | Mga tracker, kabilang ang mga tracking script, pixel, web bug, at iba pang nangongolekta ng impormasyon. |
| [Fanboy's Annoyance List](https://easylist.to/) | Mga abiso sa cookie, social media widget, in-page pop-up, at iba pang nakakaabala. |
| [small oisd blocklist](https://oisd.nl/) | Karagdagang mga domain ng advertising. |

## Pagprotekta sa impormasyon ng system (fingerprinting) {#protecting-system-information-fingerprinting}

Tradisyonal na nagtatagas ang mga browser ng napakaraming impormasyon tungkol sa iyong computer sa anumang website o tracking script na humiling! At kinokolekta ng mga tracker ang datos na ito para subaybayan ka habang nagba-browse sa web.

| Fingerprint | Karaniwang web browser | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Karaniwang nagtatagas ang audio processing ng mga browser ng impormasyon tungkol sa iyong sound card. | Binabawasan ng Privacy Magic ang gayong mga tagas sa pamamagitan ng pagbura sa least significant bit mula sa audio data tuwing binabasa ito ng isang script. Walang naririnig na epekto ang pagburang ito. |
| Battery | Karaniwang sinasabi ng mga browser sa anumang website na humiling kung ano ang antas ng baterya mo, kung naka-plug ang device sa kuryente, at isang pagtataya kung gaano katagal bago maubos ang baterya. | Hinaharang ng Privacy Magic ang tagas ng impormasyong ito sa pamamagitan ng paggaya ng bateryang palaging nasa 100% at power supply na palaging naka-plug. |
| Browser | Maaaring tanungin ng isang web page ang iyong browser para makakuha ng detalyadong impormasyon tungkol sa operating system kung saan ito tumatakbo. | Ginagaya ng Privacy Magic ang `navigator.platform` sa isang solong halaga para sa bawat magkaibang operating system. |
| Device | Sasabihin ng mga browser sa anumang website na humiling kung gumagamit ka ng foldable device. | Palaging iniuulat ng Privacy Magic na hindi foldable ang iyong device. |
| Disk | Karaniwang nagtatagas ang mga browser ng dami ng disk space na available sa website, at kung gaano karami ang ginagamit ng website, na maaaring magbunyag ng kabuuang disk space sa computer mo at kung paano iniimbak ang datos. | Ginagaya ng Privacy Magic ang mga halagang ito upang magkapareho ang mga ito para sa lahat. |
| Display | Tradisyonal na nagtatagas ang mga browser ng mga setting ng display, kabilang kung naka-set ang system mo sa "prefer reduced motion". | Pinipigilan ng Privacy Magic ang tagas na ito. |
| Fonts | Nagtatagas ang mga karaniwang web browser ng mga custom font na naka-install sa system mo, na posibleng gawing napaka-unique ang fingerprint mo. | Itinatago ng Privacy Magic ang mga custom font na naka-install sa system mo mula sa lahat ng script. Maaari pa ring gumamit ang mga web page ng mga standard system font at na-download na web font. |
| Graphics | Ang Canvas at WebGL ay dalawang pangunahing vector ng fingerprinting na nagtatagas kung anong uri ng GPU (graphics chip) ang ginagamit ng computer mo. | Gumagamit ang Privacy Magic ng mga advanced na teknik para itago ang graphics chip habang pinapayagan ka pa ring maglaro at gumamit ng iba pang website na mabigat ang paggamit ng graphics. |
| Keyboard | Bilang default, nagtatagas ang mga browser ng keyboard layout na ginagamit mo sa anumang website na humiling. | Hinaharang ng Privacy Magic ang pagbubunyag ng keyboard layout mo sa mga script ng website. |
| Language | Karaniwang nagtatagas ang mga browser ng listahan ng mga wikang inaprubahan mo. Bagama't mahalagang matukoy kung anong wika ang gusto mo para sa mga website na binibisita mo, karaniwang ibinubunyag ng mga browser ang listahan ng mga preferred language ng user, na maaaring masyadong nagbubunyag. | Pinapayagan lang ng Privacy Magic na isang wika ang ipasa sa mga website na binibisita mo. |
| Math | Maaaring gamitin ng mga tracking script sa mga web page ang kakaibang pag-uugali ng mga Math function, gaya ng cosine o hyperbolic tangent, sa device mo para makilala ka mula sa ibang user. | Pina-patch ng Privacy Magic ang mga JavaScript Math function upang magkapareho ang pag-uugali nila sa lahat ng platform. |
| Memory | Kayang alamin ng mga website mula sa karamihan ng browser kung gaano karaming memory ang hindi ginagamit sa computer mo. | Itinatago ng Privacy Magic ang dami ng available na memory sa system mo mula sa mga web page at tracker. |
| Network | Karaniwang nagtatagas ang mga browser ng mga detalye tungkol sa uri ng network connection mo. | Pinipigilan ng Privacy Magic ang pagtatagas ng mga detalyeng ito sa pamamagitan ng paggawa sa mga ito nang homogeneous para sa lahat ng user. |
| Processor | Dinisenyo ang mga browser na iulat ang bilang ng core sa processor ng computer mo. | Nagpapanggap ang Privacy Magic na lahat ay may eksaktong `4`. |
| Screen | Nagtatagas ang mga browser ng mga sukat ng screen mo sa anumang website na humiling, anuman ang laki ng window ng browser. | Itinatago ng Privacy Magic ang totoong laki ng screen. |
| Time Zone | Nagtatagas ang mga browser ng tinatayang lokasyon mo kapag humiling ang mga script ng time zone mo. Halimbawa, kung nasa Central European Time ka, magbibigay ang browser ng time zone identifier na nagsasabi kung nasa Paris, Berlin, Luxembourg ka o alinman sa dose-dosenang iba pang lungsod. | Pinagsasama-sama ng Privacy Magic ang mga time zone upang ang bawat time zone offset ay may isang kinatawang time zone. Sa gayon hindi nagtatagas ang browser ng hindi kinakailangang impormasyon tungkol sa lokasyon mo sa mundo. |
| Timing | Pinapayagan ng mga high resolution timing API ang mga script na makilala ang system mo sa pamamagitan ng pagsukat ng maliliit na pagkakaiba sa timing ng mga pag-uugali ng browser. | Ino-round off ng Privacy Magic ang mga oras na ibinibigay ng mga API na ito upang mas mahirap para sa mga tracking script na gamitin ang mga ito para makilala ang mga browser. |
| Touch | Nagtatagas ang Touch API kung may touch ang device mo at kung ilang touch point ang pinapayagan nito. | Itinatago ng Privacy Magic ang impormasyong ito mula sa mga website. |

## Pag-aalis ng mga bakas ng pagsubaybay {#removing-tracking-breadcrumbs}

Ang ilang feature ng browser ay madaling magamit para ibahagi ang mga bahagi ng browsing history mo ("breadcrumbs") sa iba't ibang website na binibisita mo. Pinapatibay ng Privacy Magic ang mga feature na ito upang mas kaunti ang tagas.

| Breadcrumb | Karaniwang web browser | Privacy Magic |
| :--- | :--- | :--- |
| Cache Leaks | Nag-iimbak ang mga browser ng datos sa lokal na cache, upang kapag bumisita ka sa isang page o tiningnan ito sa pangalawang pagkakataon, hindi na kailangang i-load muli ang datos na iyon. Sa kasamaang-palad, minsan ay tumatagas ang mga cache na iyon at nagbubunyag ng isang bagay tungkol sa browsing history mo sa website na binibisita mo. | Nililinis ng Privacy Magic ang mga vulnerable na cache upang hindi mangyari ang mga tagas na ito. |
| Referrer Policy | Tradisyonal na sinasabi ng mga browser sa bawat web page na binibisita mo kung mula saang web page ka nanggaling! | Binubura ng Privacy Magic ang eksaktong page (o path) sa referrer, at para sa web compatibility, pinapayagan lang na ibahagi ang domain. |
| Tracking Parameters | Maaaring magdagdag ang mga tracker ng karagdagang "tracking parameter" sa mga address ng mga web page na binibisita mo, upang masubaybayan ng mga advertiser kung sino ka o saan ka nagba-browse. | Binubura ng Privacy Magic ang mga kilalang tracking parameter mula sa mga web address upang hindi maibahagi ang impormasyong ito sa mga website na binibisita mo. |
| Window Name | Karaniwang nagtatagas ng datos ang `window.name` JavaScript API kung nag-navigate ka sa pagitan ng mga website sa parehong tab. | Pinipigilan ng Privacy Magic ang tagas na ito sa pamamagitan ng pagpapatupad ng hiwalay na `window.name` para sa bawat website. |

## Pagpigil sa mga tagas sa web {#stopping-web-leaks}

Komplikadong hayop ang mga web browser! Maaaring magmula ang mga tagas ng pribadong impormasyon sa maraming iba't ibang feature ng browser. Ang approach namin sa Privacy Magic ay takpan ang mga tagas saanman sila matagpuan.

| Feature | Karaniwang web browser | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Ang iframe ay isang "web page sa loob ng web page." Ito ay isang kahon sa loob ng page na binibisita mo, kung saan maaaring magtago ang pangalawang web page at gamitin ang lahat ng parehong teknik sa pagsubaybay na magagamit ng karaniwang web page. | Ipinapasok ng Privacy Magic ang lahat ng proteksyon nito sa bawat iframe sa isang web page, upang matiyak na hindi maaaring iwasan ng tracker ang mga proteksyong iyon sa pamamagitan ng pagtatago sa loob ng iframe. |
| Service Workers | Ang Service Workers ay feature ng browser na nagpapahintulot sa code na tumakbo sa background kahit hindi ka konektado sa internet. Sa kasamaang-palad, madaling makapagtagas ang mga Service Worker na ito ng pribadong impormasyon. | Karaniwang naka-disable ang service workers sa lahat ng site, para pigilan ang mga tagas ng pribadong impormasyon na hindi maaaring ma-patch nang iba. |
| Shared Storage | Ang Shared Storage ay feature ng browser na nagpapahintulot na i-aggregate at kolektahin ang datos tungkol sa browsing mo. Bagama't sinasabing privacy-preserving ito, nagdulot ang feature na ito ng malalakas na alalahanin sa privacy at dapat nang alisin sa mga browser. | Tinitiyak ng Privacy Magic na naka-disable ang Shared Storage sa lahat ng website. |
| Shared Workers | Ang Shared Workers ay code na tumatakbo sa background at maaaring ibahagi sa pagitan ng mga website. | Ipinapasok ng Privacy Magic ang mga proteksyon nito sa bawat Shared Worker na ni-load ng anumang website. |
| Web Workers | Ang Web Workers ay code na tumatakbo sa background sa isang web page. Tulad ng mga script ng pangunahing page, maaaring magtagas ang code ng web worker ng pribadong datos. | Ipinapasok ng Privacy Magic ang mga proteksyon nito sa bawat Web Worker sa isang page, upang matiyak na hindi magagamit ng mga tracker ang Web Workers para iwasan ang mga proteksyong iyon. |

## Mga signal ng privacy {#privacy-signals}

Interesado kaming pagbutihin ang privacy mo sa lahat ng posibleng paraan. Kaya nagpapadala ang Privacy Magic ng signal para hingin ang mga pro-privacy na patakaran mula sa mga website na binibisita mo.

| Signal | Karaniwang web browser | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Ang Global Privacy Control ay signal na maaaring ipadala sa mga website na binibisita mo upang ipakita na ayaw mong ibenta o ibahagi ang datos mo. Sa kasamaang-palad, karamihan sa mga web browser ay hindi nagpapadala ng Global Privacy Control preference bilang default. | Tinitiyak ng Privacy Magic na ipinapadala ng browser mo ang Global Privacy Control header sa bawat request sa bawat web page o embedded resource. Nag-iinject din ito ng JavaScript signal sa bawat page at iframe. |

## Mga proteksyon ng browser {#browser-protections}

Masama ang ugali ng mga browser hindi lang sa kung paano nila i-render ang mga web page, kundi pati sa kung paano nila ipinapadala ang datos sa parent company o sa mga third-party advertising company. Dina-disable ng Privacy Magic ang iba't ibang masamang pag-uugali ng browser na kung hindi ay magtatagas ng pribadong impormasyon mo.

### Pag-disable ng mga tagas na feature ng web {#disabling-leaky-web-features}

| Feature | Karaniwang web browser | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | May feature ang mga karaniwang browser na nagpapahintulot sa mga website na "i-ping" ang isang tracking server gamit ang mga link na kini-click mo. | Dina-disable ng Privacy Magic ang ping na ito. |
| Third-Party Cookies | Ang pinakasikat na feature sa pagsubaybay sa lahat. Pinapayagan ng Chrome ang third-party cookies na nagpapahintulot na masubaybayan ka mula sa isang site patungo sa iba. | Bilang default, dina-disable ng Privacy Magic ang third-party cookies. |
| WebRTC non-proxied UDP | Ang WebRTC ay kakayahan ng web browser na nagpapahintulot sa iyo na direktang makipag-usap sa ibang user sa web. Sa kasamaang-palad, kung gumagamit ka ng browser proxy, nagtatagas ang mga karaniwang browser na batay sa Chrome ng mga komunikasyon ng WebRTC sa labas ng proxy. | Hinaharang ng Privacy Magic ang mga tagas ng WebRTC, habang pinapayagan pa ring gumana ang WebRTC sa mga website na gumagamit nito. |

### Pag-disable ng mga invasive na cloud service {#disabling-invasive-cloud-services}

| Service | Karaniwang web browser | Privacy Magic |
| :--- | :--- | :--- |
| Alternate Error Pages | Bilang default, nagpapakita ang Chrome ng mga alternate error page kapag may error. Para ipakita ang mga page na ito, ipinapadala sa mga server ng Google ang datos tungkol sa mga page na binibisita mo. | Dina-disable ng Privacy Magic ang mga alternate error page na ito upang walang datos na maipadala. |
| Safe Browsing Extended Reporting | Kapag hinadlangan ng Safe Browsing ang isang page, maaaring ipadala ng Chrome ang nilalaman ng naharang na page sa mga server ng Google. | Hinaharang ng Privacy Magic ang feature na ito, upang walang datos na maipadala. |
| Search Suggest | Bilang default, ipinapadala ng Chrome ang anumang itina-type mo sa address bar sa default search engine mo (karaniwang Google search) habang nagta-type ka, para sa auto-suggestion. | Hinaharang ng Privacy Magic ang tuloy-tuloy na pagsubaybay na ito, upang ipadala lang ng Chrome ang search mo kapag pinindot mo ang "enter". |
| Spelling Service | Nag-aalok ang Chrome ng "enhanced spell check" na nagpapadala ng itina-type mo sa mga server ng Google. | Dina-disable ng Privacy Magic ang opsyong ito at pinapayagan ang Chrome na gumamit lang ng lokal na "basic spell check." |

### Pag-disable ng mga ad targeting API {#disabling-ad-targeting-apis}

| API | Karaniwang web browser | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ipinapadala ng Ad Measurement API (at ng kaugnay na Private Aggregation API) ang datos tungkol sa browsing mo, sa mga ad na kini-click mo, at iba pang pribadong datos sa mga advertising server. | Dina-disable ng Privacy Magic ang mga API na ito para protektahan ang datos mo. |
| Protected Audience API | Bilang default, ginagawang available ng Chrome ang API na ito para magpatakbo ng auction sa atensyon mo para sa mga advertiser. | Dina-disable ng Privacy Magic ang API na ito upang hindi magamit ang browsing data mo sa ganitong paraan. |
| Topics API | Binibigyan ng Topics API ng Chrome ang mga advertiser ng listahan ng mga topic na umano'y interesado ka. | Dina-disable ng Privacy Magic ang Topics API upang panatilihing pribado ang datos na iyon. |

### Pag-disable ng mga tagas na setting ng Chrome {#disabling-leaky-chrome-settings}

May ilang setting ang Chrome na salungat sa privacy mo: partikular, ang functionality na nangongolekta ng datos tungkol sa mga browsing habit mo at ipinapadala ang mga ito sa mga server ng Google. Hindi direktang makokontrol ng isang browser extension ang mga setting na ito, ngunit sa panahon ng setup, tutulungan ka ng Privacy Magic na hanapin ang mga setting at i-off ang mga ito mismo.

| Setting | Karaniwang web browser | Privacy Magic |
| :--- | :--- | :--- |
| History syncing | Kapag naka-sign in ka sa Chrome, sine-sync nito ang browsing history mo sa pagitan ng mga device. Iniimbak din nito ang parehong datos sa mga server ng Google. | Ginagabayan ka ng Privacy Magic sa setting na nagdi-disable ng history syncing upang panatilihing pribado ang browsing history mo. |
| User experience metrics | Tahimik na nagpapadala ang Chrome ng metrics tungkol sa paggamit mo ng browser pabalik sa mga server ng Google. | Tinutulungan ka ng Privacy Magic na harangin ang nakatagong pangongolekta ng datos na ito. |
| Per-URL data collection | Para sa bawat URL na binibisita mo, nangongolekta ang Chrome ng "anonymized" na datos tungkol sa browsing mo sa mga page na iyon at ipinapadala ang mga ito sa Google. | Tinutulungan ka ng Privacy Magic na i-disable ang setting na ito upang pigilan ang pagpapadala ng datos. |
