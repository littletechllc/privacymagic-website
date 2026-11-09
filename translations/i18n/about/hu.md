---
title: "A Privacy Magic bemutatása"
description: "Egy Chrome-bővítmény az adatvédelem védelmére"
backToTop: "↑ Vissza a tetejére"
---

Hogyan védhetjük meg magunkat, hétköznapi emberek, a tömeges megfigyeléstől? Több mint egy évtizede dolgozom ezen a problémán valamilyen formában. Ez idő alatt három adatvédelem-központú webböngészőn dolgoztam: a Tor Browseren, a Firefoxon és a Brave-en. Több millió ember használja ezeket a webböngészőket minden nap, és legalább bizonyos mértékben védve vannak az online kémkedéstől.

Ám az adatvédelmük javításában elért némi előrelépés ellenére ezek a niche böngészők valószínűleg nem fognak nagy részesedést szerezni a böngészőpiacon. A valóság az, hogy a legtöbb ember továbbra is a mainstream böngészőket választja, így nagyrészt védtelenek maradnak a megfigyeléssel szemben.

A mainstream böngésző választása érthető! A Chrome és az Edge a legtöbb számítógépre előre telepítve érkezik, és erős teljesítményt kínál. Asztali gépen a felhasználók közel 90%-a Chromium-alapú mainstream böngészőket használ. A hátránya, hogy ezek a böngészők bőséges magáninformációt szivárogtatnak.

A szivárgó böngészők (és más szivárgó szoftverek) megkönnyítik a vállalatok és kormányok számára, hogy mindenkit megfigyeljenek. A szervezetek részletes információkat gyűjtenek minden személyről az internetes használatodból szerzett adatok alapján. Véleményem szerint ez a tömeges megfigyelés fenyegetést jelent a demokráciára és az emberi életre.

Szóval mit tehetünk azokért, akik szeretnék megvédeni az adatvédelmüket, de a Chrome böngészőnél is szeretnének maradni? Olyan megoldásra van szükségünk, amely könnyen telepíthető, könnyen használható, és védi az adatvédelmedet, de nem rontja a böngészési élményedet, és nem korlátozza a szabadságodat, hogy a webet úgy használd, ahogy szeretnéd. Más szóval: „varázslatként” kell működnie.

Rájöttem, hogy egy gondosan megtervezett böngészőbővítmény megfelelhet. A Chrome Web Store már több ezer bővítményt kínál, amelyek rengetegféle dolgot csinálnak, beleértve a hirdetések blokkolását vagy bizonyos magáninformáció-szivárgások megakadályozását. De egyetlen bővítmény sem kínál *átfogó* adatvédelmi csomagot, amely azokat a számos módot kezeli, ahogyan az adatvédelmed online veszélybe kerülhet.

Az ötlet megvalósításához létrehoztam a Privacy Magicet, egy „állítsd be és felejtsd el” böngésző-adatvédelmi bővítményt. A Privacy Magic felépítése nem kis erőfeszítés volt: a mainstream webböngészők őszintén szólva úgy szivárognak, mint egy szita. Ahhoz, hogy a szita ne süllyedjen el, minden lyukat be kell dugni. A Privacy Magic ezt próbálja megtenni azzal, hogy sokféle védelmet tartalmaz, amelyek nagy részét erre a bővítményre építették a nulláról, és mindegyik alapértelmezetten be van kapcsolva.

Ezek a védelmek magukban foglalják a hirdetések és trackerek automatikus blokkolását (hasonlóan egy adblockerhez, de minden felhasználónál egységesen), a fingerprinting elleni védelmet (az eszközödről szóló információk mindenféle szivárgásának blokkolását), a breadcrumbök blokkolását (hogy a webhelyek ne „címkézhessék” a böngésződet), a webböngésző-szivárgások lezárását (például az iframe-ek és a web workerek megerősítését), a harmadik féltől származó sütik blokkolását, a böngésző adatvédelem-ellenes funkcióinak kikapcsolását (például az úgynevezett Ad Measurementet), valamint a Global Privacy Control engedélyezését (egy üzenetet, amely azt követeli a webhelyektől, hogy ne adják el az adataidat).

Mindezeket az adatvédelmi védelmeket úgy tervezték, hogy ne zavarják a böngészésedet. De ha véletlenül olyan webhelyre bukkansz, amely a Privacy Magiccsel nem működik azonnal, a védelmeket csak azon a webhelyen kikapcsolhatod a <span class="post-inline-logo" aria-hidden="true"><img src="/images/logo.svg" alt=""></span> gombra kattintva és kikapcsolva.

A Privacy Magic által kínált böngészőn belüli védelmek mellett elengedhetetlen, hogy az IP-címedet is távol tartsd a kíváncsi szemektől. A telepítés során a bővítmény linket ad a Privacy Guides által ajánlott VPN-ekhez, amelyek elrejtik az IP-címedet a webhelyek és a beágyazott trackerek elől.

Örömmel mondhatom, hogy a Privacy Magic adatvédelmi védelmei alaposak, és tudomásom szerint jelentősen meghaladják bármely más Chrome-bővítmény által kínált védelmeket. Eltökélt szándékom, hogy tovább szigorítsam és bővítsem az adatvédelmi védelmek csomagját, hogy olyan megoldást nyújtsak, amely „egyszerűen működik”. És a jövőben más böngészőket is támogatni tervezek, asztali és mobilplatformon egyaránt.

A tömeges megfigyelést nem fogják megállítani a niche eszközök: *minden* embernek meg kell adnunk azokat az eszközöket, amelyekre szükségük van az önvédelemhez. A tömeges megfigyelés ellenszere a tömeges védelem. Remélem, a Privacy Magic jelentős hozzájárulás lesz ehhez az erőfeszítéshez.

Kérlek, próbáld ki a Privacy Magicet! Könnyen [ingyen telepítheted](https://chromewebstore.google.com/detail/privacy-magic/cobojehlalmfnplnblndhofhgeglljkc) Chrome-ban (és ugyanilyen könnyen el is távolíthatod, ha nem neked való). Írd meg az élményedet; a visszajelzés elengedhetetlen ahhoz, hogy folyamatosan fejlesszem a bővítményt. Ha tetszik, fontold meg, hogy segítesz családtagoknak és barátoknak kipróbálni a saját számítógépükön.

Egy olyan jövőért, ahol az adatvédelem emberi joga mindenki számára elérhető!
