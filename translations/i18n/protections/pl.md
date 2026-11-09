---
title: "Ochrona: zatykanie luk w przeglądarce"
description: Jak Privacy Magic chroni Twoją prywatność podczas przeglądania sieci
backToTop: "↑ Do góry"
---

Privacy Magic to otwartoźródłowe rozszerzenie do Chrome, które kompleksowo chroni Twoją prywatność podczas przeglądania sieci. Przeglądarki są bardzo nieszczelne, dlatego Privacy Magic zapewnia wiele warstw ochrony, w tym [blokowanie reklam i trackerów](#blocking-ads-and-trackers), [ochronę informacji o systemie](#protecting-system-information-fingerprinting), [usuwanie śladów śledzenia](#removing-tracking-breadcrumbs), [powstrzymywanie wycieków z sieci](#stopping-web-leaks), [wysyłanie sygnałów prywatności](#privacy-signals) oraz [egzekwowanie zabezpieczeń przeglądarki](#browser-protections).

## Blokowanie reklam i trackerów {#blocking-ads-and-trackers}

W całej sieci reklamy, skrypty śledzące i piksele śledzące podążają za Tobą bez Twojej zgody, używając różnych niewidocznych metod.

Privacy Magic korzysta z popularnych list filtrów, aby blokować wiele reklam i trackerów przed żądaniem ich przez przeglądarkę w sieci. Listy filtrów ukrywają też puste miejsca, które pozostają po zablokowaniu reklam na stronie. Privacy Magic używa przypiętej wersji tych list filtrów, dzięki czemu zachowanie blokowania rozszerzenia jest w pełni odtwarzalne i identyczne dla każdego użytkownika.

| Lista filtrów | Blokowane elementy |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Reklamy, w tym banery, skrypty reklamowe, obrazy i reklamy wideo. |
| [EasyPrivacy](https://easylist.to/) | Trackery, w tym skrypty śledzące, piksele, web bugi i inne zbieracze informacji. |
| [Fanboy's Annoyance List](https://easylist.to/) | Powiadomienia o plikach cookie, widżety mediów społecznościowych, wyskakujące okienka na stronie i inne uciążliwości. |
| [small oisd blocklist](https://oisd.nl/) | Dodatkowe domeny reklamowe. |

## Ochrona informacji o systemie (fingerprinting) {#protecting-system-information-fingerprinting}

Tradycyjnie przeglądarki ujawniają ogromne ilości informacji o Twoim komputerze każdej stronie lub skryptowi śledzącemu, który o nie zapyta! A trackery zbierają te dane, aby śledzić Cię podczas przeglądania sieci.

| Odcisk | Standardowe przeglądarki | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Funkcje przetwarzania dźwięku w przeglądarkach zwykle ujawniają informacje o karcie dźwiękowej. | Privacy Magic ogranicza takie wycieki, wymazując najmniej znaczący bit z danych audio za każdym razem, gdy skrypt je odczytuje. To wymazanie nie ma słyszalnych skutków. |
| Bateria | Przeglądarki zwykle informują każdą stronę, która o to zapyta, o poziomie naładowania baterii, o tym, czy urządzenie jest podłączone do zasilania, oraz o szacowanym czasie do wyczerpania baterii. | Privacy Magic zatrzymuje ten wyciek informacji, symulując baterię zawsze na poziomie 100% i zasilanie zawsze podłączone. |
| Przeglądarka | Strona internetowa może odpytać przeglądarkę, aby uzyskać szczegółowe informacje o systemie operacyjnym, w którym działa. | Privacy Magic podszywa wartość `navigator.platform` do jednej wartości dla każdego innego systemu operacyjnego. |
| Urządzenie | Przeglądarki informują każdą stronę, która o to zapyta, czy używasz urządzenia składanego. | Privacy Magic zawsze zgłasza, że Twoje urządzenie nie jest składane. |
| Dysk | Przeglądarki zwykle ujawniają ilość przestrzeni dyskowej dostępnej dla strony oraz to, ile ta strona zużywa, co może zdradzić całkowitą dostępną przestrzeń dyskową na komputerze i sposób przechowywania danych. | Privacy Magic podszywa te wartości tak, aby były takie same dla wszystkich. |
| Wyświetlacz | Tradycyjnie przeglądarki ujawniają ustawienia wyświetlania, w tym to, czy system ma włączone „preferowanie ograniczonego ruchu”. | Privacy Magic zapobiega temu wyciekowi. |
| Czcionki | Standardowe przeglądarki ujawniają, jakie niestandardowe czcionki masz zainstalowane w systemie, co może sprawić, że Twój odcisk będzie bardzo unikalny. | Privacy Magic ukrywa przed wszystkimi skryptami niestandardowe czcionki zainstalowane w systemie. Strony mogą nadal korzystać ze standardowych czcionek systemowych i pobranych czcionek internetowych. |
| Grafika | Canvas i WebGL to dwa główne wektory fingerprintingu, które ujawniają rodzaj GPU (układu graficznego) używanego przez komputer. | Privacy Magic stosuje zaawansowane techniki, aby ukryć układ graficzny, jednocześnie pozwalając Ci grać w gry i korzystać z innych stron intensywnie używających grafiki. |
| Klawiatura | Domyślnie przeglądarki ujawniają układ klawiatury, którego używasz, każdej stronie, która o to zapyta. | Privacy Magic blokuje ujawnianie układu klawiatury skryptom na stronach. |
| Język | Zazwyczaj przeglądarki ujawniają listę języków, które zatwierdziłeś. Choć ważne jest, aby móc wskazać preferowany język stron, które odwiedzasz, przeglądarki zwykle ujawniają listę preferowanych języków użytkownika, co może być zbyt wymowne. | Privacy Magic pozwala przekazać odwiedzanym stronom tylko jeden język. |
| Matematyka | Skrypty śledzące na stronach mogą wykorzystać idiomatyczne zachowanie funkcji matematycznych, takich jak cosinus czy tangens hiperboliczny, na Twoim urządzeniu, aby odróżnić Cię od innych użytkowników sieci. | Privacy Magic poprawia funkcje Math w JavaScript tak, aby zachowywały się identycznie na wszystkich platformach. |
| Pamięć | Strony mogą dowiedzieć się z większości przeglądarek, ile pamięci jest niewykorzystane na Twoim komputerze. | Privacy Magic ukrywa przed stronami i trackerami ilość dostępnej pamięci w systemie. |
| Sieć | Przeglądarki zwykle ujawniają szczegóły dotyczące rodzaju połączenia sieciowego. | Privacy Magic zapobiega wyciekowi tych szczegółów, ujednolicając je dla wszystkich użytkowników. |
| Procesor | Przeglądarki są zaprojektowane tak, by zgłaszać liczbę rdzeni procesora w komputerze. | Privacy Magic udaje, że wszyscy mają dokładnie `4`. |
| Ekran | Przeglądarki ujawniają wymiary ekranu każdej stronie, która o to zapyta, niezależnie od wielkości okna przeglądarki. | Privacy Magic ukrywa prawdziwy rozmiar ekranu. |
| Strefa czasowa | Przeglądarki ujawniają przybliżoną lokalizację, gdy skrypty pytają o strefę czasową. Na przykład, jeśli jesteś w czasie środkowoeuropejskim, przeglądarka poda identyfikator strefy czasowej wskazujący, czy jesteś w Paryżu, Berlinie, Luksemburgu czy w jednym z dziesiątek innych miast. | Privacy Magic scala strefy czasowe tak, że każde przesunięcie strefy ma jedną reprezentatywną strefę. Dzięki temu przeglądarka nie ujawnia zbędnych informacji o Twojej lokalizacji na globie. |
| Czasowanie | Interfejsy API wysokiej rozdzielczości czasu pozwalają skryptom charakteryzować system poprzez pomiar drobnych różnic w czasie zachowań przeglądarki. | Privacy Magic zaokrągla czasy dostarczane przez te API, co znacznie utrudnia skryptom śledzącym wykorzystanie ich do rozróżniania przeglądarek. |
| Dotyk | Touch API ujawnia, czy urządzenie ma ekran dotykowy i ile punktów dotyku obsługuje. | Privacy Magic ukrywa te informacje przed stronami. |

## Usuwanie śladów śledzenia {#removing-tracking-breadcrumbs}

Niektóre funkcje przeglądarki można wykorzystać do udostępniania części historii przeglądania („okruchów”) różnym odwiedzanym stronom. Privacy Magic utwardza te funkcje, aby były mniej nieszczelne.

| Ślad | Standardowe przeglądarki | Privacy Magic |
| :--- | :--- | :--- |
| Wycieki z pamięci podręcznej | Przeglądarki przechowują dane w lokalnych pamięciach podręcznych, aby przy ponownym odwiedzeniu strony lub jej wyświetleniu nie trzeba było ładować tych danych drugi raz. Niestety te pamięci podręczne bywają nieszczelne i mogą ujawnić coś z historii przeglądania odwiedzanej stronie. | Privacy Magic czyści podatne pamięci podręczne, aby takie wycieki nie mogły wystąpić. |
| Polityka referera | Tradycyjnie przeglądarki informują każdą odwiedzaną stronę, z jakiej strony przyszedłeś! | Privacy Magic usuwa dokładną stronę (lub ścieżkę) z referera i ze względu na kompatybilność pozwala udostępniać tylko domenę. |
| Parametry śledzenia | Trackery mogą dodawać dodatkowe „parametry śledzenia” do adresów odwiedzanych stron, aby reklamodawcy mogli śledzić, kim jesteś lub gdzie przeglądałeś. | Privacy Magic usuwa znane parametry śledzenia z adresów internetowych, aby te informacje nie były udostępniane odwiedzanym stronom. |
| Nazwa okna | Zwykle interfejs JavaScript `window.name` ujawnia dane, gdy przechodzisz między stronami w tej samej karcie. | Privacy Magic zapobiega temu wyciekowi, wymuszając osobne `window.name` dla każdej witryny. |

## Powstrzymywanie wycieków z sieci {#stopping-web-leaks}

Przeglądarki internetowe to skomplikowane bestie! Wycieki prywatnych informacji mogą pochodzić z wielu różnych funkcji przeglądarki. Podejście Privacy Magic polega na zatykaniu wycieków wszędzie tam, gdzie się pojawią.

| Funkcja | Standardowe przeglądarki | Privacy Magic |
| :--- | :--- | :--- |
| Iframe'y | Iframe to „strona w stronie”. To ramka wewnątrz odwiedzanej strony, w której druga strona może się ukryć i używać tych samych technik śledzenia, co zwykła strona. | Privacy Magic wstrzykuje wszystkie swoje zabezpieczenia do każdego iframe'a na stronie, aby tracker nie mógł ich ominąć, chowając się w iframe. |
| Service Workers | Service Workers to funkcja przeglądarki pozwalająca kodowi działać w tle nawet bez połączenia z internetem. Niestety te Service Workers łatwo ujawniają prywatne informacje. | Service Workers są generalnie wyłączone na wszystkich stronach, aby zapobiec wyciekom prywatnych informacji, których inaczej nie da się załatać. |
| Shared Storage | Shared Storage to funkcja przeglądarki pozwalająca agregować i zbierać dane o przeglądaniu. Choć miała być chroniąca prywatność, wzbudziła poważne obawy o prywatność i ma zostać usunięta z przeglądarek. | Privacy Magic dba o to, by Shared Storage było wyłączone na wszystkich stronach. |
| Shared Workers | Shared Workers to kod działający w tle, który może być współdzielony między witrynami. | Privacy Magic wstrzykuje swoje zabezpieczenia do każdego Shared Workera ładowanego przez dowolną witrynę. |
| Web Workers | Web Workers to kod działający w tle na stronie. Podobnie jak skrypty głównej strony, kod web workerów może ujawniać prywatne dane. | Privacy Magic wstrzykuje swoje zabezpieczenia do każdego Web Workera na stronie, aby trackery nie mogły używać Web Workers do ominięcia tych zabezpieczeń. |

## Sygnały prywatności {#privacy-signals}

Chcemy poprawiać Twoją prywatność na wszelkie możliwe sposoby. Dlatego Privacy Magic wysyła sygnał, by domagać się polityk pro-privacy od odwiedzanych stron.

| Sygnał | Standardowe przeglądarki | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control to sygnał, który można wysłać do odwiedzanych stron, aby wskazać, że nie chcesz, by Twoje dane były sprzedawane lub udostępniane. Niestety większość przeglądarek domyślnie nie wysyła preferencji Global Privacy Control. | Privacy Magic zapewnia, że przeglądarka wysyła nagłówek Global Privacy Control z każdym żądaniem do każdej strony lub osadzonego zasobu. Wstrzykuje też sygnał JavaScript na każdej stronie i w każdym iframe. |

## Zabezpieczenia przeglądarki {#browser-protections}

Przeglądarki zachowują się źle nie tylko przy renderowaniu stron, ale też przy wysyłaniu danych do firmy macierzystej lub zewnętrznych firm reklamowych. Privacy Magic wyłącza różne szkodliwe zachowania przeglądarki, które w przeciwnym razie ujawniałyby Twoje prywatne informacje.

### Wyłączanie nieszczelnych funkcji sieciowych {#disabling-leaky-web-features}

| Funkcja | Standardowe przeglądarki | Privacy Magic |
| :--- | :--- | :--- |
| Audyt hiperłączy | Standardowe przeglądarki mają funkcję pozwalającą stronom „pingować” serwer śledzący przy klikanych przez Ciebie linkach. | Privacy Magic wyłącza ten ping. |
| Pliki cookie stron trzecich | Najsłynniejsza funkcja śledzenia ze wszystkich. Chrome zezwala na pliki cookie stron trzecich, które pozwalają śledzić Cię z witryny na witrynę. | Privacy Magic domyślnie wyłącza pliki cookie stron trzecich. |
| WebRTC UDP poza proxy | WebRTC to możliwość przeglądarki pozwalająca komunikować się bezpośrednio z innymi użytkownikami sieci. Niestety, jeśli używasz proxy przeglądarki, standardowe przeglądarki oparte na Chrome ujawniają komunikację WebRTC poza proxy. | Privacy Magic blokuje wycieki WebRTC, jednocześnie pozwalając WebRTC działać na stronach, które z niego korzystają. |

### Wyłączanie inwazyjnych usług chmurowych {#disabling-invasive-cloud-services}

| Usługa | Standardowe przeglądarki | Privacy Magic |
| :--- | :--- | :--- |
| Alternatywne strony błędów | Domyślnie Chrome pokazuje alternatywne strony błędów, gdy wystąpi błąd. Aby je wyświetlić, dane o odwiedzanych stronach są wysyłane na serwery Google. | Privacy Magic wyłącza te alternatywne strony błędów, aby żadne dane nie były wysyłane. |
| Safe Browsing Extended Reporting | Gdy Safe Browsing zablokuje stronę, Chrome może wysłać treść zablokowanej strony na serwery Google. | Privacy Magic blokuje tę funkcję, aby żadne dane nie były wysyłane. |
| Podpowiedzi wyszukiwania | Domyślnie Chrome wysyła wszystko, co wpisujesz w pasek adresu, do domyślnej wyszukiwarki (zazwyczaj Google) podczas pisania, aby tworzyć autosugestie. | Privacy Magic blokuje to ciągłe monitorowanie, więc Chrome wysyła wyszukiwanie dopiero po naciśnięciu „enter”. |
| Usługa sprawdzania pisowni | Chrome oferuje „rozszerzone sprawdzanie pisowni”, które wysyła to, co wpisujesz, na serwery Google. | Privacy Magic wyłącza tę opcję i pozwala Chrome używać tylko lokalnego „podstawowego sprawdzania pisowni”. |

### Wyłączanie API targetowania reklam {#disabling-ad-targeting-apis}

| API | Standardowe przeglądarki | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (oraz powiązane Private Aggregation API) wysyła dane o Twoim przeglądaniu, reklamach, które klikasz, i inne prywatne dane do serwerów reklamowych. | Privacy Magic wyłącza te API, aby chronić Twoje dane. |
| Protected Audience API | Domyślnie to API jest udostępniane przez Chrome do przeprowadzania aukcji o Twoją uwagę na rzecz reklamodawców. | Privacy Magic wyłącza to API, aby dane o przeglądaniu nie były w ten sposób wykorzystywane. |
| Topics API | Topics API w Chrome daje reklamodawcom listę tematów, które rzekomo Cię interesują. | Privacy Magic wyłącza Topics API, aby te dane pozostały prywatne. |

### Wyłączanie nieszczelnych ustawień Chrome {#disabling-leaky-chrome-settings}

Chrome zawiera pewne ustawienia sprzeczne z Twoją prywatnością: konkretnie funkcje zbierające dane o nawykach przeglądania i wysyłające je na serwery Google. Tych ustawień nie może bezpośrednio kontrolować rozszerzenie przeglądarki, ale podczas konfiguracji Privacy Magic pomoże Ci je znaleźć i samodzielnie wyłączyć.

| Ustawienie | Standardowe przeglądarki | Privacy Magic |
| :--- | :--- | :--- |
| Synchronizacja historii | Gdy jesteś zalogowany w Chrome, synchronizuje historię przeglądania między urządzeniami. Zapisuje też te same dane na serwerach Google. | Privacy Magic prowadzi Cię do ustawienia wyłączającego synchronizację historii, aby historia przeglądania pozostała prywatna. |
| Metryki doświadczenia użytkownika | Chrome po cichu wysyła metryki dotyczące korzystania z przeglądarki z powrotem na serwery Google. | Privacy Magic pomaga zablokować to ukryte zbieranie danych. |
| Zbieranie danych per URL | Dla każdego odwiedzanego URL Chrome zbiera „anonimizowane” dane o przeglądaniu tych stron i wysyła je do Google. | Privacy Magic pomaga wyłączyć to ustawienie, aby zapobiec wysyłaniu danych. |
