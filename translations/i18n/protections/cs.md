---
title: "Ochrana: ucpání úniků ve vašem prohlížeči"
description: Jak Privacy Magic chrání vaše soukromí při prohlížení webu
backToTop: "↑ Zpět nahoru"
---

Privacy Magic je open-source rozšíření pro Chrome, které komplexně chrání vaše soukromí při prohlížení webu. Prohlížeče jsou velmi děravé, proto Privacy Magic poskytuje několik vrstev ochrany, včetně [blokování reklam a trackerů](#blocking-ads-and-trackers), [ochrany systémových informací](#protecting-system-information-fingerprinting), [odstraňování stop sledování](#removing-tracking-breadcrumbs), [zastavení webových úniků](#stopping-web-leaks), [odesílání signálů o soukromí](#privacy-signals) a [vynucování ochran prohlížeče](#browser-protections).

## Blokování reklam a trackerů {#blocking-ads-and-trackers}

Po celém webu vás reklamy, sledovací skripty a sledovací pixely sledují bez vašeho souhlasu pomocí řady neviditelných metod.

Privacy Magic používá populární filtrační seznamy k blokování mnoha reklam a trackerů, aby je váš prohlížeč nevyžadoval ze sítě. Filtrační seznamy také skryjí prázdné rámečky, které zbývají, když jsou reklamy na webové stránce zablokovány. Privacy Magic používá pevnou verzi těchto filtračních seznamů, aby bylo blokovací chování rozšíření plně reprodukovatelné a stejné pro každého uživatele.

| Filtrační seznam | Blokované položky |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Reklamy, včetně bannerů, reklamních skriptů, obrázků a video reklam. |
| [EasyPrivacy](https://easylist.to/) | Trackery, včetně sledovacích skriptů, pixelů, webových bugů a dalších sběračů informací. |
| [Fanboy's Annoyance List](https://easylist.to/) | Upozornění na cookies, widgety sociálních sítí, vyskakovací okna na stránce a další otravné prvky. |
| [small oisd blocklist](https://oisd.nl/) | Další reklamní domény. |

## Ochrana systémových informací (fingerprinting) {#protecting-system-information-fingerprinting}

Tradičně prohlížeče unikají obrovské množství informací o vašem počítači jakékoli webové stránce nebo sledovacímu skriptu, které se zeptají! A trackery tato data shromažďují, aby vás sledovaly při prohlížení webu.

| Otisk | Standardní webové prohlížeče | Privacy Magic |
| :--- | :--- | :--- |
| Zvuk | Funkce zpracování zvuku webových prohlížečů typicky uniká informace o vaší zvukové kartě. | Privacy Magic snižuje takové úniky mazáním nejméně významného bitu ze zvukových dat, kdykoli je skript přečte. Toto mazání nemá žádné slyšitelné účinky. |
| Baterie | Webové prohlížeče typicky sdělí jakékoli webové stránce, která se zeptá, jaká je úroveň vaší baterie, zda je vaše zařízení připojeno ke zdroji napájení, a odhad, kolik času zbývá, než bude baterie prázdná. | Privacy Magic zastaví tento únik informací simulací baterie, která je vždy na 100 %, a napájení, které je vždy připojené. |
| Prohlížeč | Webová stránka může váš prohlížeč vyslýchat, aby získala podrobné informace o operačním systému, ve kterém běží. | Privacy Magic falšuje `navigator.platform` na jedinou hodnotu pro každý různý operační systém. |
| Zařízení | Webové prohlížeče sdělí jakékoli webové stránce, která se zeptá, zda používáte skládací zařízení. | Privacy Magic vždy hlásí, že vaše zařízení není skládací. |
| Disk | Webové prohlížeče typicky unikají množství diskového prostoru dostupného pro webovou stránku a kolik tato stránka používá, což může odhalit celkový diskový prostor dostupný na vašem počítači a způsob uložení dat. | Privacy Magic falšuje tyto hodnoty tak, aby byly pro všechny stejné. |
| Displej | Tradičně webové prohlížeče unikají nastavení displeje, včetně toho, zda je váš systém nastaven na „preferovat omezený pohyb“. | Privacy Magic tomuto úniku brání. |
| Písma | Standardní webové prohlížeče unikají, jaká vlastní písma máte nainstalovaná ve svém systému, což může učinit váš otisk velmi unikátním. | Privacy Magic skrývá vlastní písma nainstalovaná ve vašem systému před všemi skripty. Webové stránky mohou nadále používat standardní systémová písma a stažená webová písma. |
| Grafika | Canvas a WebGL jsou dva hlavní vektory fingerprintingu, které unikají typ GPU (grafického čipu), který váš počítač používá. | Privacy Magic používá pokročilé techniky k skrytí grafického čipu a zároveň vám umožňuje hrát hry a používat jiné webové stránky, které silně využívají grafiku. |
| Klávesnice | Ve výchozím nastavení prohlížeče unikají rozložení klávesnice, které používáte, jakékoli webové stránce, která se zeptá. | Privacy Magic blokuje odhalení rozložení vaší klávesnice skriptům webových stránek. |
| Jazyk | Typicky webové prohlížeče unikají seznam jazyků, které jste schválili. Ačkoli je důležité moci specifikovat, který jazyk preferujete pro navštívené webové stránky, prohlížeče typicky odhalí seznam preferovaných jazyků uživatele, což může být příliš odhalující. | Privacy Magic povoluje předat navštíveným webovým stránkám pouze jeden jazyk. |
| Matematika | Sledovací skripty na webových stránkách mohou použít idiosynkratické chování Math funkcí, jako je kosinus nebo hyperbolický tangens, na vašem zařízení, aby vás odlišily od jiných uživatelů webu. | Privacy Magic opravuje JavaScript Math funkce tak, aby se chovaly identicky na všech platformách. |
| Paměť | Webové stránky mohou z většiny prohlížečů zjistit, kolik paměti je na vašem počítači nevyužito. | Privacy Magic skrývá množství dostupné paměti ve vašem systému před webovými stránkami a trackery. |
| Síť | Prohlížeče běžně unikají podrobnosti o typu síťového připojení, které máte. | Privacy Magic brání úniku těchto podrobností tím, že je homogenizuje pro všechny uživatele. |
| Procesor | Prohlížeče jsou navrženy tak, aby hlásily počet jader procesoru vašeho počítače. | Privacy Magic předstírá, že každý má přesně `4`. |
| Obrazovka | Webové prohlížeče unikají rozměry vaší obrazovky jakékoli webové stránce, která se zeptá, bez ohledu na to, jak velké je okno prohlížeče. | Privacy Magic skrývá skutečnou velikost obrazovky. |
| Časové pásmo | Webové prohlížeče unikají vaši přibližnou polohu, když skripty požádají o vaše časové pásmo. Pokud jste například ve středoevropském čase, prohlížeč poskytne identifikátor časového pásma, který naznačuje, zda jste v Paříži, Berlíně, Lucemburku nebo v kterémkoli z desítek dalších měst. | Privacy Magic sjednocuje časová pásma tak, že každý offset časového pásma má jedno reprezentativní časové pásmo. Prohlížeč tak neuniká zbytečné informace o vaší poloze na zeměkouli. |
| Timing | Timing API s vysokým rozlišením umožňují skriptům charakterizovat váš systém měřením drobných rozdílů v časování chování prohlížeče. | Privacy Magic zaokrouhluje časy poskytované těmito API, takže je pro sledovací skripty mnohem těžší je použít k rozlišení mezi prohlížeči. |
| Touch | Touch API uniká, zda má vaše zařízení touch a kolik touch bodů povoluje. | Privacy Magic skrývá tyto informace před webovými stránkami. |

## Odstraňování stop sledování {#removing-tracking-breadcrumbs}

Některé funkce prohlížeče jsou zranitelné vůči použití ke sdílení částí vaší historie prohlížení („drobečky“) s různými webovými stránkami, které navštívíte. Privacy Magic tyto funkce zpevňuje, aby byly méně děravé.

| Stopa | Standardní webové prohlížeče | Privacy Magic |
| :--- | :--- | :--- |
| Úniky cache | Prohlížeče ukládají data do místních mezipamětí, takže když stránku navštívíte nebo zobrazíte podruhé, tato data nemusí být načtena znovu. Bohužel tyto mezipaměti někdy unikají a odhalí něco o vaší historii prohlížení webové stránce, kterou navštívíte. | Privacy Magic vymazává zranitelné mezipaměti, aby k těmto únikům nemohlo dojít. |
| Zásady referreru | Tradičně prohlížeče sdělí každé webové stránce, kterou navštívíte, ze které webové stránky jste přišli! | Privacy Magic maže přesnou stránku (nebo cestu) v referreru a kvůli webové kompatibilitě povoluje sdílet pouze doménu. |
| Parametry sledování | Trackery mohou přidávat extra „parametry sledování“ k adresám webových stránek, které navštívíte, aby inzerenti mohli sledovat, kdo jste nebo kde jste prohlíželi. | Privacy Magic maže známé parametry sledování z webových adres, aby tyto informace nebyly sdíleny s webovými stránkami, které navštívíte. |
| Window Name | Normálně JavaScript API `window.name` uniká data, pokud přecházíte mezi webovými stránkami ve stejné kartě. | Privacy Magic tomuto úniku brání vynucením samostatného `window.name` pro každou webovou stránku. |

## Zastavení webových úniků {#stopping-web-leaks}

Webové prohlížeče jsou komplikované bytosti! Úniky soukromých informací mohou pramenit z mnoha různých funkcí prohlížeče. Náš přístup v Privacy Magic je ucpat úniky všude, kde mohou být nalezeny.

| Funkce | Standardní webové prohlížeče | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Iframe je „webová stránka uvnitř webové stránky.“ Je to rámeček uvnitř stránky, kterou navštěvujete, kde se může skrýt druhá webová stránka a používat všechny stejné techniky sledování, které může používat běžná webová stránka. | Privacy Magic vkládá všechny své ochrany do každého iframe na webové stránce, aby zajistil, že tracker nemůže tyto ochrany obejít skrytím se uvnitř iframe. |
| Service Workers | Service Workers jsou funkce prohlížeče, která umožňuje kódu běžet na pozadí, i když nejste připojeni k internetu. Bohužel tyto Service Workers snadno unikají soukromé informace. | Service workers jsou obecně deaktivovány na všech stránkách, aby se zabránilo únikům soukromých informací, které nelze jinak opravit. |
| Shared Storage | Shared Storage je funkce prohlížeče, která umožňuje agregovat a shromažďovat data o vašem prohlížení. Ačkoli byla vydávána za zachovávající soukromí, tato funkce vyvolala silné obavy o soukromí a má být z prohlížečů odstraněna. | Privacy Magic zajišťuje, že Shared Storage je deaktivován na všech webových stránkách. |
| Shared Workers | Shared Workers jsou kód, který běží na pozadí a může být sdílen mezi webovými stránkami. | Privacy Magic vkládá své ochrany do každého Shared Worker načteného jakoukoli webovou stránkou. |
| Web Workers | Web Workers jsou kód, který běží na pozadí na webové stránce. Stejně jako skripty hlavní stránky může kód web workerů unikat soukromá data. | Privacy Magic vkládá své ochrany do každého Web Worker na stránce, aby zajistil, že trackery nemohou použít Web Workers k obejití těchto ochran. |

## Signály o soukromí {#privacy-signals}

Zajímá nás zlepšení vašeho soukromí všemi možnými způsoby. Proto Privacy Magic odesílá signál, aby požadoval zásady podporující soukromí od webových stránek, které navštívíte.

| Signál | Standardní webové prohlížeče | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control je signál, který lze odeslat webovým stránkám, které navštívíte, aby naznačil, že nechcete, aby byla vaše data prodávána nebo sdílena. Bohužel většina webových prohlížečů neodesílá preferenci Global Privacy Control ve výchozím nastavení. | Privacy Magic zajišťuje, že váš prohlížeč odesílá hlavičku Global Privacy Control s každým požadavkem na každou webovou stránku nebo vložený zdroj. Také vkládá JavaScript signál do každé stránky a iframe. |

## Ochrany prohlížeče {#browser-protections}

Prohlížeče se chovají špatně nejen v tom, jak vykreslují webové stránky, ale také v tom, jak odesílají data mateřské společnosti nebo reklamním společnostem třetích stran. Privacy Magic deaktivuje různé špatné chování prohlížeče, které by jinak unikaly vaše soukromé informace.

### Deaktivace děravých webových funkcí {#disabling-leaky-web-features}

| Funkce | Standardní webové prohlížeče | Privacy Magic |
| :--- | :--- | :--- |
| Auditování hypertextových odkazů | Standardní prohlížeče mají funkci, která umožňuje webovým stránkám „pingnout“ sledovací server s odkazy, na které kliknete. | Privacy Magic tento ping deaktivuje. |
| Cookies třetích stran | Nejslavnější sledovací funkce ze všech. Chrome povoluje cookies třetích stran, které umožňují sledovat vás z webu na web. | Privacy Magic deaktivuje cookies třetích stran ve výchozím nastavení. |
| WebRTC non-proxied UDP | WebRTC je schopnost webového prohlížeče, která vám umožňuje komunikovat přímo s ostatními uživateli webu. Bohužel, pokud používáte proxy prohlížeče, standardní prohlížeče založené na Chrome unikají komunikaci WebRTC mimo proxy. | Privacy Magic blokuje úniky WebRTC a zároveň stále umožňuje WebRTC fungovat na webových stránkách, které jej používají. |

### Deaktivace invazivních cloudových služeb {#disabling-invasive-cloud-services}

| Služba | Standardní webové prohlížeče | Privacy Magic |
| :--- | :--- | :--- |
| Alternativní chybové stránky | Ve výchozím nastavení Chrome zobrazí alternativní chybové stránky, když dojde k chybě. K zobrazení těchto stránek se data o tom, které stránky navštěvujete, odesílají na servery Google. | Privacy Magic tyto alternativní chybové stránky deaktivuje, aby se neodesílala žádná data. |
| Safe Browsing Extended Reporting | Když Safe Browsing zablokuje stránku, Chrome může odeslat obsah zablokované stránky na servery Google. | Privacy Magic tuto funkci blokuje, aby se neodesílala žádná data. |
| Návrhy vyhledávání | Ve výchozím nastavení Chrome odesílá cokoli, co napíšete do adresního řádku, vašemu výchozímu vyhledávači (typicky Google vyhledávání), zatímco píšete, aby vytvářel automatické návrhy. | Privacy Magic blokuje toto průběžné monitorování, takže Chrome odesílá vaše vyhledávání až když stisknete „enter“. |
| Služba kontroly pravopisu | Chrome nabízí „vylepšenou kontrolu pravopisu“, která odesílá to, co píšete, na servery Google. | Privacy Magic tuto možnost deaktivuje a povoluje Chrome používat pouze místní „základní kontrolu pravopisu“. |

### Deaktivace API pro cílení reklam {#disabling-ad-targeting-apis}

| API | Standardní webové prohlížeče | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (a související Private Aggregation API) odesílá data o vašem prohlížení, reklamách, na které klikáte, a další soukromá data na reklamní servery. | Privacy Magic tato API deaktivuje, aby chránil vaše data. |
| Protected Audience API | Ve výchozím nastavení Chrome zpřístupňuje toto API k provozování aukce o vaši pozornost jménem inzerentů. | Privacy Magic toto API deaktivuje, aby vaše data o prohlížení nebyla tímto způsobem použita. |
| Topics API | Topics API od Chrome dává inzerentům seznam témat, která vás údajně zajímají. | Privacy Magic deaktivuje Topics API, aby tato data zůstala soukromá. |

### Deaktivace děravých nastavení Chrome {#disabling-leaky-chrome-settings}

Chrome obsahuje určitá nastavení, která jsou v rozporu s vaším soukromím: konkrétně funkce, které shromažďují data o vašich návycích prohlížení a odesílají je na servery Google. Tato nastavení nemůže přímo ovládat rozšíření prohlížeče, ale během nastavení vám Privacy Magic pomůže nastavení najít a vypnout je sami.

| Nastavení | Standardní webové prohlížeče | Privacy Magic |
| :--- | :--- | :--- |
| Synchronizace historie | Když jste přihlášeni do Chrome, synchronizuje vaši historii prohlížení mezi zařízeními. Také ukládá stejná data na servery Google. | Privacy Magic vás navede k nastavení, které deaktivuje synchronizaci historie, aby vaše historie prohlížení zůstala soukromá. |
| Metriky uživatelského prostředí | Chrome tiše odesílá metriky o vašem používání prohlížeče zpět na servery Google. | Privacy Magic vám pomáhá zablokovat toto skryté shromažďování dat. |
| Shromažďování dat podle URL | Pro každou URL, kterou navštívíte, Chrome shromažďuje „anonymizovaná“ data o vašem prohlížení na těchto stránkách a odesílá je Googlu. | Privacy Magic vám pomáhá toto nastavení deaktivovat, aby se zabránilo odesílání dat. |
