---
title: "Proteccions: tapant les fuites del vostre navegador"
description: Com Privacy Magic protegeix la vostra privadesa mentre navegueu per la web
backToTop: "↑ Torna a dalt"
---

Privacy Magic és una extensió de codi obert per a Chrome que protegeix exhaustivament la vostra privadesa mentre navegueu per la web. Els navegadors tenen moltes fuites, així que Privacy Magic ofereix múltiples capes de protecció, incloent-hi [bloquejar anuncis i rastrejadors](#blocking-ads-and-trackers), [protegir la informació del sistema](#protecting-system-information-fingerprinting), [eliminar les engrunes de rastreig](#removing-tracking-breadcrumbs), [aturar les fuites web](#stopping-web-leaks), [enviar senyals de privadesa](#privacy-signals) i [aplicar proteccions del navegador](#browser-protections).

## Bloquejar anuncis i rastrejadors {#blocking-ads-and-trackers}

A tota la web, els anuncis, els scripts de rastreig i els píxels de rastreig us segueixen sense el vostre consentiment mitjançant una varietat de mètodes invisibles.

Privacy Magic utilitza llistes de filtres populars per bloquejar molts anuncis i rastrejadors perquè el vostre navegador no els sol·liciti a la xarxa. Les llistes de filtres també amaguen les caixes buides que queden quan es bloquegen anuncis en una pàgina web. Privacy Magic utilitza una versió fixada d'aquestes llistes de filtres perquè el comportament de bloqueig de l'extensió sigui totalment reproduïble i idèntic per a cada usuari.

| Llista de filtres | Elements bloquejats |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Anuncis, incloent-hi bàners, scripts publicitaris, imatges i anuncis de vídeo. |
| [EasyPrivacy](https://easylist.to/) | Rastrejadors, incloent-hi scripts de rastreig, píxels, web bugs i altres recol·lectors d'informació. |
| [Fanboy's Annoyance List](https://easylist.to/) | Avisos de cookies, ginys de xarxes socials, finestres emergents a la pàgina i altres molèsties. |
| [small oisd blocklist](https://oisd.nl/) | Dominis publicitaris addicionals. |

## Protegir la informació del sistema (fingerprinting) {#protecting-system-information-fingerprinting}

Tradicionalment, els navegadors filtren quantitats abundants d'informació sobre l'ordinador a qualsevol lloc web o script de rastreig que ho demani! I els rastrejadors recopilen aquestes dades per seguir-vos mentre navegueu per la web.

| Empremta | Navegadors web estàndard | Privacy Magic |
| :--- | :--- | :--- |
| Àudio | La funcionalitat de processament d'àudio dels navegadors web normalment filtra informació sobre la vostra targeta de so. | Privacy Magic redueix aquestes fuites esborrant el bit menys significatiu de les dades d'àudio sempre que un script les llegeix. Aquest esborrat no té efectes audibles. |
| Bateria | Els navegadors web normalment diuen a qualsevol lloc web que ho demani quin és el nivell de la bateria, si el dispositiu està connectat a una font d'alimentació i una estimació de quant de temps queda abans que la bateria s'esgoti. | Privacy Magic atura aquesta fuita d'informació simulant una bateria que sempre està al 100% i un subministrament d'energia que sempre està connectat. |
| Navegador | Una pàgina web pot interrogar el vostre navegador per obtenir informació detallada sobre el sistema operatiu en què s'executa. | Privacy Magic falsifica `navigator.platform` a un únic valor per a cada sistema operatiu diferent. |
| Dispositiu | Els navegadors web diuen a qualsevol lloc web que ho demani si esteu utilitzant un dispositiu plegable. | Privacy Magic sempre informa que el vostre dispositiu no és plegable. |
| Disc | Els navegadors web normalment filtren la quantitat d'espai de disc disponible per al lloc web i quant n'està utilitzant, cosa que pot revelar l'espai total de disc disponible a l'ordinador i la manera com s'emmagatzemen les dades. | Privacy Magic falsifica aquests valors perquè siguin els mateixos per a tothom. |
| Pantalla | Tradicionalment els navegadors web filtren la configuració de la pantalla, incloent-hi si el sistema està configurat per «preferir el moviment reduït». | Privacy Magic evita aquesta fuita. |
| Tipografies | Els navegadors web estàndard filtren quines tipografies personalitzades teniu instal·lades al sistema, fet que pot fer que la vostra empremta sigui molt única. | Privacy Magic amaga les tipografies personalitzades instal·lades al sistema de tots els scripts. Les pàgines web poden continuar utilitzant tipografies estàndard del sistema i tipografies web descarregades. |
| Gràfics | Canvas i WebGL són dos vectors importants de fingerprinting que filtren el tipus de GPU (xip gràfic) que utilitza l'ordinador. | Privacy Magic utilitza tècniques avançades per amagar el xip gràfic mentre us permet continuar jugant i utilitzar altres llocs web que fan un ús intensiu de gràfics. |
| Teclat | Per defecte, els navegadors filtren la disposició del teclat que utilitzeu a qualsevol lloc web que ho demani. | Privacy Magic bloqueja que la disposició del teclat es reveli als scripts dels llocs web. |
| Idioma | Normalment, els navegadors web filtren una llista d'idiomes que heu aprovat. Tot i que és important poder especificar quin idioma preferiu per als llocs web que visiteu, els navegadors normalment revelen una llista dels idiomes preferits de l'usuari, cosa que pot ser massa reveladora. | Privacy Magic només permet que s'enviï un sol idioma als llocs web que visiteu. |
| Matemàtiques | Els scripts de rastreig a les pàgines web poden utilitzar el comportament idiosincràtic de les funcions Math, com el cosinus o la tangent hiperbòlica, al vostre dispositiu per distingir-vos d'altres usuaris web. | Privacy Magic corregeix les funcions Math de JavaScript perquè es comportin de manera idèntica en totes les plataformes. |
| Memòria | Els llocs web poden esbrinar a partir de la majoria de navegadors quanta memòria hi ha sense utilitzar a l'ordinador. | Privacy Magic amaga la quantitat de memòria disponible al sistema de les pàgines web i els rastrejadors. |
| Xarxa | Els navegadors normalment filtren detalls sobre el tipus de connexió de xarxa que teniu. | Privacy Magic evita que aquests detalls filtrin fent-los homogenis per a tots els usuaris. |
| Processador | Els navegadors estan dissenyats per informar del nombre de nuclis del processador de l'ordinador. | Privacy Magic fa veure que tothom en té exactament `4`. |
| Pantalla | Els navegadors web filtren les dimensions de la pantalla a qualsevol lloc web que ho demani, independentment de la mida de la finestra del navegador. | Privacy Magic amaga la mida real de la pantalla. |
| Zona horària | Els navegadors web filtren la vostra ubicació aproximada quan els scripts demanen la zona horària. Per exemple, si esteu a l'hora de l'Europa Central, el navegador proporcionarà un identificador de zona horària que indica si sou a París, Berlín, Luxemburg o a qualsevol d'una desena d'altres ciutats. | Privacy Magic unifica les zones horàries de manera que cada desplaçament de zona horària tingui una única zona horària representativa. Així el navegador no filtra informació innecessària sobre la vostra ubicació al globus. |
| Temporització | Les API de temporització d'alta resolució permeten als scripts caracteritzar el vostre sistema mesurant petites diferències en la temporització dels comportaments del navegador. | Privacy Magic arrodoneix els temps proporcionats per aquestes API perquè sigui molt més difícil per als scripts de rastreig utilitzar-los per distingir entre navegadors. |
| Touch | La Touch API filtra si el vostre dispositiu té touch i quants punts tàctils permet. | Privacy Magic amaga aquesta informació dels llocs web. |

## Eliminar les engrunes de rastreig {#removing-tracking-breadcrumbs}

Algunes funcions del navegador són vulnerables a ser utilitzades per compartir parts del vostre historial de navegació («engrunes») amb diferents llocs web que visiteu. Privacy Magic reforça aquestes funcions perquè filtrin menys.

| Engruna | Navegadors web estàndard | Privacy Magic |
| :--- | :--- | :--- |
| Fuites de memòria cau | Els navegadors emmagatzemen dades en memòries cau locals, de manera que quan visiteu una pàgina o la visualitzeu una segona vegada, aquestes dades no calen carregar-se una altra vegada. Malauradament, aquestes memòries cau de vegades filtren i revelen alguna cosa sobre el vostre historial de navegació a un lloc web que visiteu. | Privacy Magic esborra les memòries cau vulnerables perquè aquestes fuites no puguin passar. |
| Política de referrer | Tradicionalment, els navegadors diuen a cada pàgina web que visiteu de quina pàgina web heu vingut! | Privacy Magic elimina la pàgina exacta (o el camí) al referrer i, per compatibilitat web, només permet compartir el domini. |
| Paràmetres de rastreig | Els rastrejadors poden afegir «paràmetres de rastreig» extra a les adreces de les pàgines web que visiteu, perquè els anunciants puguin fer un seguiment de qui sou o on heu estat navegant. | Privacy Magic elimina els paràmetres de rastreig coneguts de les adreces web perquè aquesta informació no es comparteixi amb els llocs web que visiteu. |
| Window Name | Normalment, l'API de JavaScript `window.name` filtra dades si navegueu entre llocs web a la mateixa pestanya. | Privacy Magic evita aquesta fuita forçant un `window.name` separat per a cada lloc web. |

## Aturar les fuites web {#stopping-web-leaks}

Els navegadors web són bèsties complicades! Les fuites d'informació privada poden sorgir de moltes funcions diferents del navegador. El nostre enfocament a Privacy Magic és tapar les fuites allà on es trobin.

| Funció | Navegadors web estàndard | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Un iframe és una «pàgina web dins d'una pàgina web.» És una caixa dins de la pàgina que esteu visitant, on una segona pàgina web es pot amagar i utilitzar totes les mateixes tècniques de rastreig que pot utilitzar una pàgina web normal. | Privacy Magic injecta totes les seves proteccions a cada iframe d'una pàgina web, per assegurar-se que un rastrejador no pugui eludir aquestes proteccions amagant-se dins d'un iframe. |
| Service Workers | Service Workers són una funció del navegador que permet que el codi s'executi en segon pla fins i tot quan no esteu connectats a Internet. Malauradament, aquests Service Workers poden filtrar fàcilment informació privada. | Els service workers estan generalment desactivats a tots els llocs, per evitar fuites d'informació privada que no es poden corregir d'altra manera. |
| Shared Storage | Shared Storage és una funció del navegador que permet agregar i recopilar dades sobre la vostra navegació. Tot i que es va presentar com a preservadora de la privadesa, aquesta funció va plantejar fortes preocupacions de privadesa i està previst que s'elimini dels navegadors. | Privacy Magic s'assegura que Shared Storage estigui desactivat a tots els llocs web. |
| Shared Workers | Shared Workers són codi que s'executa en segon pla i es pot compartir entre llocs web. | Privacy Magic injecta les seves proteccions a cada Shared Worker carregat per qualsevol lloc web. |
| Web Workers | Web Workers són codi que s'executa en segon pla en una pàgina web. Com els scripts de la pàgina principal, el codi dels web workers pot filtrar dades privades. | Privacy Magic injecta les seves proteccions a cada Web Worker d'una pàgina, per assegurar-se que els rastrejadors no puguin utilitzar Web Workers per eludir aquestes proteccions. |

## Senyals de privadesa {#privacy-signals}

Estem interessats a millorar la vostra privadesa de totes les maneres possibles. Per això Privacy Magic envia un senyal per exigir polítiques proprivadesa als llocs web que visiteu.

| Senyal | Navegadors web estàndard | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | La Global Privacy Control és un senyal que es pot enviar als llocs web que visiteu per indicar que no voleu que les vostres dades es venguin ni es comparteixin. Malauradament, la majoria dels navegadors web no envien la preferència Global Privacy Control per defecte. | Privacy Magic s'assegura que el vostre navegador enviï la capçalera Global Privacy Control amb cada sol·licitud a cada pàgina web o recurs incrustat. També injecta un senyal JavaScript a cada pàgina i iframe. |

## Proteccions del navegador {#browser-protections}

Els navegadors es comporten malament no només en com renderitzen les pàgines web, sinó també en com envien dades a l'empresa matriu o a empreses publicitàries de tercers. Privacy Magic desactiva una varietat de comportaments dolents del navegador que altrament filtrarien la vostra informació privada.

### Desactivar funcions web amb fuites {#disabling-leaky-web-features}

| Funció | Navegadors web estàndard | Privacy Magic |
| :--- | :--- | :--- |
| Auditoria d'hiperenllaços | Els navegadors estàndard tenen una funció que permet als llocs web «fer ping» a un servidor de rastreig amb els enllaços que cliqueu. | Privacy Magic desactiva aquest ping. |
| Galetes de tercers | La funció de rastreig més famosa de totes. Chrome permet galetes de tercers que us permeten ser rastrejats de lloc a lloc. | Privacy Magic desactiva les galetes de tercers per defecte. |
| WebRTC non-proxied UDP | WebRTC és una capacitat del navegador web que us permet comunicar-vos directament amb altres usuaris web. Malauradament, si utilitzeu un proxy del navegador, els navegadors estàndard basats en Chrome filtraran les comunicacions WebRTC fora del proxy. | Privacy Magic bloqueja les fuites de WebRTC, tot permetent que WebRTC continuï funcionant als llocs web que l'utilitzen. |

### Desactivar serveis al núvol invasius {#disabling-invasive-cloud-services}

| Servei | Navegadors web estàndard | Privacy Magic |
| :--- | :--- | :--- |
| Pàgines d'error alternatives | Per defecte, Chrome mostrarà pàgines d'error alternatives quan es produeixi un error. Per mostrar aquestes pàgines, s'envien dades sobre quines pàgines visiteu als servidors de Google. | Privacy Magic desactiva aquestes pàgines d'error alternatives perquè no s'enviïn dades. |
| Safe Browsing Extended Reporting | Quan Safe Browsing bloqueja una pàgina, Chrome pot enviar el contingut d'una pàgina bloquejada als servidors de Google. | Privacy Magic bloqueja aquesta funció, perquè no s'enviïn dades. |
| Suggeriments de cerca | Per defecte, Chrome envia qualsevol cosa que escriviu a la barra d'adreces al vostre motor de cerca predeterminat (normalment la cerca de Google) mentre escriviu, per fer autosuggestions. | Privacy Magic bloqueja aquest monitoratge continu, de manera que Chrome només envia la vostra cerca quan premeu «enter». |
| Servei d'ortografia | Chrome ofereix una «verificació ortogràfica millorada» que envia el que escriviu als servidors de Google. | Privacy Magic desactiva aquesta opció i permet a Chrome utilitzar només la «verificació ortogràfica bàsica» local. |

### Desactivar les API de segmentació publicitària {#disabling-ad-targeting-apis}

| API | Navegadors web estàndard | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | L'Ad Measurement API (i la relacionada Private Aggregation API) envia dades sobre la vostra navegació, els anuncis que cliqueu i altres dades privades a servidors publicitaris. | Privacy Magic desactiva aquestes API per protegir les vostres dades. |
| Protected Audience API | Per defecte, Chrome posa aquesta API a disposició per executar una subhasta de la vostra atenció en nom dels anunciants. | Privacy Magic desactiva aquesta API perquè les vostres dades de navegació no s'utilitzin d'aquesta manera. |
| Topics API | La Topics API de Chrome dóna als anunciants una llista de temes que suposadament us interessen. | Privacy Magic desactiva la Topics API per mantenir aquestes dades privades. |

### Desactivar la configuració amb fuites de Chrome {#disabling-leaky-chrome-settings}

Chrome conté certes configuracions que són antitètiques a la vostra privadesa: concretament, funcionalitat que recopila dades sobre els vostres hàbits de navegació i les envia als servidors de Google. Aquestes configuracions no poden ser controlades directament per una extensió del navegador, però durant la configuració, Privacy Magic us ajudarà a trobar-les i a desactivar-les vosaltres mateixos.

| Configuració | Navegadors web estàndard | Privacy Magic |
| :--- | :--- | :--- |
| Sincronització de l'historial | Quan esteu connectats a Chrome, sincronitza el vostre historial de navegació entre dispositius. També desa les mateixes dades als servidors de Google. | Privacy Magic us guia a la configuració que desactiva la sincronització de l'historial per mantenir privat el vostre historial de navegació. |
| Mètriques d'experiència d'usuari | Chrome envia silenciosament mètriques sobre el vostre ús del navegador als servidors de Google. | Privacy Magic us ajuda a bloquejar aquesta recopilació de dades oculta. |
| Recopilació de dades per URL | Per a cada URL que visiteu, Chrome recopila dades «anonimitzades» sobre la vostra navegació en aquestes pàgines i les envia a Google. | Privacy Magic us ajuda a desactivar aquesta configuració per evitar que s'enviïn les dades. |
