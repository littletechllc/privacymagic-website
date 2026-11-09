---
title: "Ulinzi: kuziba uvujaji katika kivinjari chako"
description: Jinsi Privacy Magic inavyolinda faragha yako unapovinjari mtandao
backToTop: "↑ Rudi juu"
---

Privacy Magic ni kiendelezi cha chanzo wazi cha Chrome kinacholinda faragha yako kikamilifu unapovinjari mtandao. Vivinjari huvuja sana, kwa hivyo Privacy Magic hutoa tabaka nyingi za ulinzi, ikiwa ni pamoja na [kuzuia matangazo na wafuasi](#blocking-ads-and-trackers), [kulinda taarifa za mfumo](#protecting-system-information-fingerprinting), [kuondoa makombo ya ufuatiliaji](#removing-tracking-breadcrumbs), [kuzuia uvujaji wa wavuti](#stopping-web-leaks), [kutuma ishara za faragha](#privacy-signals), na [kutekeleza ulinzi wa kivinjari](#browser-protections).

## Kuzuia matangazo na wafuasi {#blocking-ads-and-trackers}

Kote kwenye wavuti, matangazo, hati za ufuatiliaji, na pikseli za ufuatiliaji zinakufuata pasipo idhini yako kwa kutumia mbinu mbalimbali zisizoonekana.

Privacy Magic hutumia orodha maarufu za vichujio ili kuzuia matangazo mengi na wafuasi wasiombwe na kivinjari chako kwenye mtandao. Orodha za vichujio pia huficha masanduku tupu yanayobaki matangazo yanapozuiwa kwenye ukurasa wa wavuti. Privacy Magic hutumia toleo lililobandikwa la orodha hizi za vichujio ili tabia ya kuzuia ya kiendelezi iweze kurudiwa kikamilifu na kuwa sawa kwa kila mtumiaji.

| Orodha ya vichujio | Vipengele vilivyozuiwa |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Matangazo, ikiwa ni pamoja na mabango, hati za matangazo, picha, na matangazo ya video. |
| [EasyPrivacy](https://easylist.to/) | Wafuasi, ikiwa ni pamoja na hati za ufuatiliaji, pikseli, wadudu wa wavuti, na watoza taarifa wengine. |
| [Fanboy's Annoyance List](https://easylist.to/) | Arifa za vidakuzi, wijeti za mitandao ya kijamii, dirisha zinazojitokeza ndani ya ukurasa, na usumbufu mwingine. |
| [small oisd blocklist](https://oisd.nl/) | Vikoa vya ziada vya matangazo. |

## Kulinda taarifa za mfumo (alama ya kidigitali) {#protecting-system-information-fingerprinting}

Kijadi, vivinjari huvuja kiasi kikubwa cha taarifa kuhusu kompyuta yako kwa tovuti yoyote au hati ya ufuatiliaji inayouliza! Na wafuasi hukusanya data hii ili kukufuatilia unapovinjari mtandao.

| Alama | Vivinjari vya kawaida vya wavuti | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Utendaji wa kuchakata sauti wa vivinjari kwa kawaida huvuja taarifa kuhusu kadi yako ya sauti. | Privacy Magic hupunguza uvujaji huo kwa kufuta biti yenye umuhimu mdogo kutoka kwa data ya sauti kila inaposomwa na hati. Ufutaji huu hauna athari zinazosikika. |
| Battery | Vivinjari kwa kawaida huambia tovuti yoyote inayouliza kiwango cha betri yako, kama kifaa chako kimeunganishwa kwenye chanzo cha umeme, na makadirio ya muda uliosalia kabla ya betri kuisha. | Privacy Magic husimamisha uvujaji huu wa taarifa kwa kuiga betri ambayo daima iko 100% na usambazaji wa umeme ambao daima umeunganishwa. |
| Browser | Ukurasa wa wavuti unaweza kuuliza kivinjari chako ili kupata taarifa za kina kuhusu mfumo wa uendeshaji unaotumika. | Privacy Magic hujifanya kuwa `navigator.platform` ina thamani moja kwa kila mfumo tofauti wa uendeshaji. |
| Device | Vivinjari huambia tovuti yoyote inayouliza kama unatumia kifaa kinachokunjwa. | Privacy Magic daima huripoti kuwa kifaa chako hakikunjiki. |
| Disk | Vivinjari kwa kawaida huvuja kiasi cha nafasi ya diski inayopatikana kwa tovuti, na ni kiasi gani tovuti hiyo inatumia, jambo linaloweza kufichua nafasi yote ya diski kwenye kompyuta yako na jinsi data inavyohifadhiwa. | Privacy Magic hujifanya kuwa thamani hizi ni sawa kwa kila mtu. |
| Display | Kijadi vivinjari huvuja mipangilio ya onyesho, ikiwa ni pamoja na kama mfumo wako umewekwa "kupendelea mwendo uliopunguzwa". | Privacy Magic huzuia uvujaji huu. |
| Fonts | Vivinjari vya kawaida huvuja fonti maalum ulizoweka kwenye mfumo wako, jambo linaloweza kufanya alama yako ya kidole cha kidijitali iwe ya kipekee sana. | Privacy Magic huficha fonti maalum zilizowekwa kwenye mfumo wako kutoka kwa hati zote. Kurasa za wavuti zinaweza kuendelea kutumia fonti za kawaida za mfumo na fonti za wavuti zilizopakuliwa. |
| Graphics | Canvas na WebGL ni njia kuu mbili za kutoa alama ya kidole cha kidijitali zinazovuja aina ya GPU (chipsi ya michoro) inayotumiwa na kompyuta yako. | Privacy Magic hutumia mbinu za hali ya juu kuficha chipsi ya michoro huku ikikuruhusu kuendelea kucheza michezo na kutumia tovuti nyingine zinazotumia michoro sana. |
| Keyboard | Kwa chaguo-msingi, vivinjari huvuja mpangilio wa kibodi unayotumia kwa tovuti yoyote inayouliza. | Privacy Magic huzuia mpangilio wa kibodi yako usifunuliwe kwa hati za tovuti. |
| Language | Kwa kawaida, vivinjari huvuja orodha ya lugha ulizoidhinisha. Ingawa ni muhimu kuweza kutaja lugha unayopendelea kwa tovuti unazotembelea, vivinjari kwa kawaida hufichua orodha ya lugha zinazopendelewa na mtumiaji, jambo linaloweza kufichua mno. | Privacy Magic inaruhusu lugha moja tu kupitishwa kwa tovuti unazotembelea. |
| Math | Hati za ufuatiliaji katika kurasa za wavuti zinaweza kutumia tabia ya kipekee ya kazi za Math, kama cosine au hyperbolic tangent, kwenye kifaa chako ili kukutofautisha na watumiaji wengine wa wavuti. | Privacy Magic hurekebisha kazi za JavaScript Math ili zifanye kazi sawa katika majukwaa yote. |
| Memory | Tovuti zinaweza kujua kutoka kwa vivinjari vingi ni kiasi gani cha kumbukumbu hakijatumika kwenye kompyuta yako. | Privacy Magic huficha kiasi cha kumbukumbu kinachopatikana kwenye mfumo wako kutoka kwa kurasa za wavuti na wafuasi. |
| Network | Vivinjari kawaida huvuja maelezo kuhusu aina ya muunganisho wa mtandao ulionao. | Privacy Magic huzuia maelezo haya yasivuje kwa kuyafanya yawe sawa kwa watumiaji wote. |
| Processor | Vivinjari vimeundwa kuripoti idadi ya cores kwenye processor ya kompyuta yako. | Privacy Magic hujifanya kuwa kila mtu ana `4` hasa. |
| Screen | Vivinjari huvuja vipimo vya skrini yako kwa tovuti yoyote inayouliza, bila kujali ukubwa wa dirisha la kivinjari. | Privacy Magic huficha ukubwa halisi wa skrini. |
| Time Zone | Vivinjari huvuja eneo lako takriban hati zinapouliza saa za eneo lako. Kwa mfano, ukiwa katika Central European Time, kivinjari kitatoa kitambulisho cha saa za eneo kinachoonyesha kama uko Paris, Berlin, Luxembourg au mojawapo ya miji mingine mingi. | Privacy Magic huunganisha saa za eneo ili kila tofauti ya saa za eneo iwe na saa moja ya mwakilishi. Hivyo kivinjari hakivuji taarifa zisizohitajika kuhusu eneo lako duniani. |
| Timing | API za muda wa azimio la juu huruhusu hati kuainisha mfumo wako kwa kupima tofauti ndogo katika muda wa tabia za kivinjari. | Privacy Magic hukadiria nyakati zinazotolewa na API hizi ili iwe vigumu zaidi kwa hati za ufuatiliaji kuzitumia kutofautisha vivinjari. |
| Touch | Touch API huvuja kama kifaa chako kina mguso na ni pointi ngapi za mguso inazoruhusu. | Privacy Magic huficha taarifa hii kutoka kwa tovuti. |

## Kuondoa makombo ya ufuatiliaji {#removing-tracking-breadcrumbs}

Vipengele vingine vya kivinjari vinaweza kutumiwa kushiriki sehemu za historia yako ya kuvinjari ("makombo") kwa tovuti tofauti unazotembelea. Privacy Magic huimarisha vipengele hivi ili visivuje sana.

| Kombo | Vivinjari vya kawaida vya wavuti | Privacy Magic |
| :--- | :--- | :--- |
| Cache Leaks | Vivinjari huhifadhi data katika akiba za ndani, ili unapotembelea ukurasa au kuuona mara ya pili, data hiyo isihitaji kupakiwa tena. Kwa bahati mbaya, akiba hizo wakati mwingine huvuja na kufichua kitu kuhusu historia yako ya kuvinjari kwa tovuti unayotembelea. | Privacy Magic husafisha akiba zilizo hatarini ili uvujaji huu usitokee. |
| Referrer Policy | Kijadi, vivinjari huambia kila ukurasa wa wavuti unaotembelea ni ukurasa gani ulitoka! | Privacy Magic hufuta ukurasa halisi (au njia) katika referrer, na kwa ajili ya uoanifu wa wavuti, inaruhusu kikoa tu kushirikiwa. |
| Tracking Parameters | Wafuasi wanaweza kuongeza "vigezo vya ufuatiliaji" vya ziada kwenye anwani za kurasa za wavuti unazotembelea, ili watangazaji waweze kufuatilia wewe ni nani au umekuwa unavinjari wapi. | Privacy Magic hufuta vigezo vinavyojulikana vya ufuatiliaji kutoka kwa anwani za wavuti ili taarifa hii isishirikiwe na tovuti unazotembelea. |
| Window Name | Kwa kawaida, API ya JavaScript ya `window.name` huvuja data ukienda kati ya tovuti katika kichupo kimoja. | Privacy Magic huzuia uvujaji huu kwa kutekeleza `window.name` tofauti kwa kila tovuti. |

## Kuzuia uvujaji wa wavuti {#stopping-web-leaks}

Vivinjari ni viumbe changamano! Uvujaji wa taarifa za kibinafsi unaweza kutoka kwa vipengele vingi tofauti vya kivinjari. Mbinu yetu katika Privacy Magic ni kuziba uvujaji popote unapopatikana.

| Kipengele | Vivinjari vya kawaida vya wavuti | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | iframe ni "ukurasa wa wavuti ndani ya ukurasa wa wavuti." Ni sanduku ndani ya ukurasa unaotembelea, ambapo ukurasa wa pili wa wavuti unaweza kujificha na kutumia mbinu zote zile zile za ufuatiliaji ambazo ukurasa wa kawaida wa wavuti unaweza kutumia. | Privacy Magic huingiza ulinzi wake wote katika kila iframe kwenye ukurasa wa wavuti, ili kuhakikisha mfuatiliaji hawezi kuepuka ulinzi huo kwa kujificha ndani ya iframe. |
| Service Workers | Service Workers ni kipengele cha kivinjari kinachoruhusu msimbo kuendeshwa chinichini hata usipounganishwa kwenye intaneti. Kwa bahati mbaya, Service Workers hawa wanaweza kwa urahisi kuvuja taarifa za kibinafsi. | Service workers kwa ujumla huzimwa kwenye tovuti zote, ili kuzuia uvujaji wa taarifa za kibinafsi ambao hauwezi kurekebishwa vinginevyo. |
| Shared Storage | Shared Storage ni kipengele cha kivinjari kinachoruhusu data kuhusu kuvinjari kwako kukusanywa na kukusanywa. Ingawa ilidaiwa kuhifadhi faragha, kipengele hiki kilizua wasiwasi mkubwa wa faragha na kinatarajiwa kuondolewa kutoka kwa vivinjari. | Privacy Magic inahakikisha kuwa Shared Storage imezimwa kwenye tovuti zote. |
| Shared Workers | Shared Workers ni msimbo unaoendeshwa chinichini na unaoweza kushirikiwa kati ya tovuti. | Privacy Magic huingiza ulinzi wake katika kila Shared Worker inayopakiwa na tovuti yoyote. |
| Web Workers | Web Workers ni msimbo unaoendeshwa chinichini kwenye ukurasa wa wavuti. Kama hati za ukurasa mkuu, msimbo wa web worker unaweza kuvuja data za kibinafsi. | Privacy Magic huingiza ulinzi wake katika kila Web Worker kwenye ukurasa, ili kuhakikisha wafuasi hawawezi kutumia Web Workers kuepuka ulinzi huo. |

## Ishara za faragha {#privacy-signals}

Tunavutiwa kuboresha faragha yako kwa kila njia iwezekanayo. Kwa hivyo Privacy Magic hutuma ishara kudai sera zinazounga mkono faragha kutoka kwa tovuti unazotembelea.

| Ishara | Vivinjari vya kawaida vya wavuti | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control ni ishara inayoweza kutumwa kwa tovuti unazotembelea kuonyesha kuwa hutaki data yako iuuzwe au ishirikiwe. Kwa bahati mbaya, vivinjari vingi havitumi mapendeleo ya Global Privacy Control kwa chaguo-msingi. | Privacy Magic inahakikisha kivinjari chako kinatuma kichwa cha Global Privacy Control na kila ombi kwa kila ukurasa wa wavuti au rasilimali iliyopachikwa. Pia huingiza ishara ya JavaScript katika kila ukurasa na iframe. |

## Ulinzi wa kivinjari {#browser-protections}

Vivinjari vina tabia mbaya si tu katika jinsi yanavyotoa kurasa za wavuti, bali pia katika jinsi yanavyotuma data kwa kampuni mama au kwa kampuni za matangazo za wahusika wengine. Privacy Magic huzima tabia mbalimbali mbaya za kivinjari ambazo vinginevyo zingevuja taarifa zako za kibinafsi.

### Kuzima vipengele vya wavuti vinavyovuja {#disabling-leaky-web-features}

| Kipengele | Vivinjari vya kawaida vya wavuti | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | Vivinjari vya kawaida vina kipengele kinachoruhusu tovuti "kupiga" seva ya ufuatiliaji kwa viungo unavyobofya. | Privacy Magic huzima ping hii. |
| Third-Party Cookies | Kipengele maarufu zaidi cha ufuatiliaji. Chrome inaruhusu vidakuzi vya wahusika wengine vinavyokuruhusu kufuatiliwa kutoka tovuti hadi tovuti. | Privacy Magic huzima vidakuzi vya wahusika wengine kwa chaguo-msingi. |
| WebRTC non-proxied UDP | WebRTC ni uwezo wa kivinjari unaokuruhusu kuwasiliana moja kwa moja na watumiaji wengine wa wavuti. Kwa bahati mbaya, ukitumia proxy ya kivinjari, vivinjari vya kawaida vinavyotegemea Chrome hutavuja mawasiliano ya WebRTC nje ya proxy. | Privacy Magic huzuia uvujaji wa WebRTC, huku bado ikiruhusu WebRTC kufanya kazi kwenye tovuti zinazotumia. |

### Kuzima huduma za wingu zenye uvamizi {#disabling-invasive-cloud-services}

| Huduma | Vivinjari vya kawaida vya wavuti | Privacy Magic |
| :--- | :--- | :--- |
| Alternate Error Pages | Kwa chaguo-msingi, Chrome itaonyesha kurasa mbadala za makosa hitilafu inapotokea. Kuonyesha kurasa hizi, data kuhusu kurasa unazotembelea hutumwa kwa seva za Google. | Privacy Magic huzima kurasa hizi mbadala za makosa ili hakuna data itumwayo. |
| Safe Browsing Extended Reporting | Safe Browsing inapozuia ukurasa, Chrome inaweza kutuma maudhui ya ukurasa uliozuiliwa kwa seva za Google. | Privacy Magic huzuia kipengele hiki, ili hakuna data itumwayo. |
| Search Suggest | Kwa chaguo-msingi, Chrome hutuma chochote unachochapa kwenye upau wa anwani kwa injini yako chaguo-msingi ya utafutaji (kwa kawaida Google search) unapoandika, ili kutoa mapendekezo otomatiki. | Privacy Magic huzuia ufuatiliaji huu endelevu, ili Chrome itume tu utafutaji wako unapobonyeza "enter". |
| Spelling Service | Chrome inatoa "ukaguzi wa tahajia ulioboreshwa" unaotuma unachoandika kwa seva za Google. | Privacy Magic huzima chaguo hili na inaruhusu Chrome kutumia tu "ukaguzi wa msingi wa tahajia" wa ndani. |

### Kuzima API za kulenga matangazo {#disabling-ad-targeting-apis}

| API | Vivinjari vya kawaida vya wavuti | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (na Private Aggregation API inayohusiana) hutuma data kuhusu kuvinjari kwako, matangazo unayobofya, na data nyingine za kibinafsi kwa seva za matangazo. | Privacy Magic huzima API hizi ili kulinda data yako. |
| Protected Audience API | Kwa chaguo-msingi, API hii inapatikana kutoka Chrome kuendesha mnada wa umakini wako kwa niaba ya watangazaji. | Privacy Magic huzima API hii ili data yako ya kuvinjari isitumike hivi. |
| Topics API | Topics API ya Chrome huwapa watangazaji orodha ya mada zinazodaiwa kukuvutia. | Privacy Magic huzima Topics API ili kuweka data hiyo faragha. |

### Kuzima mipangilio ya Chrome inayovuja {#disabling-leaky-chrome-settings}

Chrome ina mipangilio fulani inayopingana na faragha yako: hasa, utendaji unaokusanya data kuhusu tabia zako za kuvinjari na kuzituma kwa seva za Google. Mipangilio hii haiwezi kudhibitiwa moja kwa moja na kiendelezi cha kivinjari, lakini wakati wa usanidi, Privacy Magic itakusaidia kupata mipangilio na kuizima mwenyewe.

| Mpangilio | Vivinjari vya kawaida vya wavuti | Privacy Magic |
| :--- | :--- | :--- |
| History syncing | Unapoingia katika Chrome, inasawazisha historia yako ya kuvinjari kati ya vifaa. Pia huhifadhi data hiyo ile ile kwenye seva za Google. | Privacy Magic inakuongoza kwa mpangilio unaozima usawazishaji wa historia ili kuweka historia yako ya kuvinjari faragha. |
| User experience metrics | Chrome kimya hutuma vipimo kuhusu matumizi yako ya kivinjari kurudi kwa seva za Google. | Privacy Magic inakusaidia kuzuia ukusanyaji huu wa data uliofichwa. |
| Per-URL data collection | Kwa kila URL unayotembelea, Chrome hukusanya data "iliyofichwa utambulisho" kuhusu kuvinjari kwako kwenye kurasa hizo na kuzituma kwa Google. | Privacy Magic inakusaidia kuzima mpangilio huu ili kuzuia data kutumwa. |
