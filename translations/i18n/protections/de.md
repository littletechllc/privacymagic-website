---
title: "Schutzmaßnahmen: die Lücken in Ihrem Browser schließen"
description: Wie Privacy Magic Ihre Privatsphäre beim Surfen im Web schützt
backToTop: "↑ Nach oben"
---

Privacy Magic ist eine Open-Source-Erweiterung für Chrome, die Ihre Privatsphäre beim Surfen im Web umfassend schützt. Browser sind sehr undicht, daher bietet Privacy Magic mehrere Schutzebenen, darunter [Werbung und Tracker blockieren](#blocking-ads-and-trackers), [Systeminformationen schützen](#protecting-system-information-fingerprinting), [Tracking-Spuren entfernen](#removing-tracking-breadcrumbs), [Web-Lecks stoppen](#stopping-web-leaks), [Privatsphäre-Signale senden](#privacy-signals) und [Browser-Schutzmaßnahmen durchsetzen](#browser-protections).

## Werbung und Tracker blockieren {#blocking-ads-and-trackers}

Im gesamten Web verfolgen Sie Werbung, Tracking-Skripte und Tracking-Pixel ohne Ihre Zustimmung mit einer Vielzahl unsichtbarer Methoden.

Privacy Magic verwendet beliebte Filterlisten, um zu verhindern, dass Ihr Browser viele Anzeigen und Tracker im Netzwerk anfordert. Die Filterlisten verbergen auch die leeren Kästen, die übrig bleiben, wenn Anzeigen auf einer Webseite blockiert werden. Privacy Magic verwendet eine festgelegte Version dieser Filterlisten, sodass das Blockierverhalten der Erweiterung vollständig reproduzierbar und für jeden Nutzer identisch ist.

| Filterliste | Blockierte Elemente |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Werbung, einschließlich Banner, Anzeigen-Skripte, Bilder und Videoanzeigen. |
| [EasyPrivacy](https://easylist.to/) | Tracker, einschließlich Tracking-Skripte, Pixel, Web-Bugs und andere Informationssammler. |
| [Fanboy's Annoyance List](https://easylist.to/) | Cookie-Hinweise, Social-Media-Widgets, Pop-ups auf der Seite und andere Belästigungen. |
| [small oisd blocklist](https://oisd.nl/) | Zusätzliche Werbedomains. |

## Systeminformationen schützen (Fingerprinting) {#protecting-system-information-fingerprinting}

Traditionell geben Browser riesige Mengen an Informationen über Ihren Computer an jede Website oder jedes Tracking-Skript weiter, das danach fragt! Und Tracker sammeln diese Daten, um Sie beim Surfen im Web zu verfolgen.

| Fingerabdruck | Standard-Webbrowser | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Die Audioverarbeitung von Webbrowsern gibt typischerweise Informationen über Ihre Soundkarte preis. | Privacy Magic verringert solche Lecks, indem das niedrigstwertige Bit aus Audiodaten gelöscht wird, wann immer ein Skript sie liest. Dieses Löschen hat keine hörbaren Auswirkungen. |
| Akku | Webbrowser teilen typischerweise jeder Website mit, die danach fragt, wie hoch Ihr Akkustand ist, ob Ihr Gerät an eine Stromquelle angeschlossen ist, und eine Schätzung, wie viel Zeit verbleibt, bevor der Akku leer ist. | Privacy Magic stoppt dieses Informationsleck, indem ein Akku simuliert wird, der immer bei 100 % ist, und eine Stromversorgung, die immer eingesteckt ist. |
| Browser | Eine Webseite kann Ihren Browser abfragen, um detaillierte Informationen über das Betriebssystem zu erhalten, in dem er läuft. | Privacy Magic spoofed `navigator.platform` auf einen einzigen Wert für jedes unterschiedliche Betriebssystem. |
| Gerät | Webbrowser teilen jeder Website mit, die danach fragt, ob Sie ein faltbares Gerät verwenden. | Privacy Magic meldet immer, dass Ihr Gerät nicht faltbar ist. |
| Festplatte | Webbrowser geben typischerweise preis, wie viel Speicherplatz der Website zur Verfügung steht und wie viel diese Website nutzt, was den gesamten verfügbaren Festplattenspeicher Ihres Computers und die Art der Datenspeicherung offenbaren kann. | Privacy Magic spoofed diese Werte so, dass sie für alle gleich sind. |
| Anzeige | Traditionell geben Webbrowser Anzeigeeinstellungen preis, einschließlich ob Ihr System auf „reduzierte Bewegung bevorzugen“ eingestellt ist. | Privacy Magic verhindert dieses Leck. |
| Schriftarten | Standard-Webbrowser geben preis, welche benutzerdefinierten Schriftarten auf Ihrem System installiert sind, wodurch Ihr Fingerabdruck potenziell sehr einzigartig wird. | Privacy Magic versteckt benutzerdefinierte Schriftarten, die auf Ihrem System installiert sind, vor allen Skripten. Webseiten können weiterhin Standard-Systemschriftarten und heruntergeladene Webschriftarten verwenden. |
| Grafik | Canvas und WebGL sind zwei wichtige Fingerprinting-Vektoren, die die Art der GPU (Grafikchip) preisgeben, die Ihr Computer verwendet. | Privacy Magic verwendet fortschrittliche Techniken, um den Grafikchip zu verbergen und Ihnen dennoch zu ermöglichen, Spiele zu spielen und andere Websites zu nutzen, die stark auf Grafik setzen. |
| Tastatur | Standardmäßig geben Browser das Tastaturlayout, das Sie verwenden, an jede Website weiter, die danach fragt. | Privacy Magic blockiert die Preisgabe Ihres Tastaturlayouts an Website-Skripte. |
| Sprache | Typischerweise geben Webbrowser eine Liste der Sprachen preis, die Sie freigegeben haben. Es ist zwar wichtig, angeben zu können, welche Sprache Sie für die besuchten Websites bevorzugen, aber Browser enthüllen typischerweise eine Liste der bevorzugten Sprachen des Nutzers, die zu viel verraten kann. | Privacy Magic lässt nur eine einzige Sprache an die von Ihnen besuchten Websites weitergeben. |
| Mathematik | Tracking-Skripte auf Webseiten können das idiosynkratische Verhalten von Math-Funktionen, wie Kosinus oder Hyperbeltangens, auf Ihrem Gerät nutzen, um Sie von anderen Webnutzern zu unterscheiden. | Privacy Magic patcht die JavaScript-Math-Funktionen so, dass sie auf allen Plattformen identisch verhalten. |
| Speicher | Websites können bei den meisten Browsern herausfinden, wie viel Speicher auf Ihrem Computer ungenutzt ist. | Privacy Magic versteckt die Menge des verfügbaren Speichers auf Ihrem System vor Webseiten und Trackern. |
| Netzwerk | Browser geben normalerweise Details über die Art Ihrer Netzwerkverbindung preis. | Privacy Magic verhindert das Durchsickern dieser Details, indem sie für alle Nutzer homogen gemacht werden. |
| Prozessor | Browser sind so ausgelegt, dass sie die Anzahl der Kerne auf dem Prozessor Ihres Computers melden. | Privacy Magic tut so, als hätte jeder genau `4`. |
| Bildschirm | Webbrowser geben die Abmessungen Ihres Bildschirms an jede Website weiter, die danach fragt, unabhängig davon, wie groß das Browserfenster ist. | Privacy Magic versteckt die echte Bildschirmgröße. |
| Zeitzone | Webbrowser geben Ihren ungefähren Standort preis, wenn Skripte nach Ihrer Zeitzone fragen. Wenn Sie sich beispielsweise in der mitteleuropäischen Zeit befinden, liefert der Browser eine Zeitzonenkennung, die angibt, ob Sie in Paris, Berlin, Luxemburg oder einer von Dutzenden anderen Städten sind. | Privacy Magic bündelt Zeitzonen so, dass jeder Zeitzonenversatz eine einzige repräsentative Zeitzone hat. So gibt der Browser keine unnötigen Informationen über Ihren Standort auf dem Globus preis. |
| Timing | Hochauflösende Timing-APIs ermöglichen es Skripten, Ihr System zu charakterisieren, indem winzige Unterschiede im Timing von Browserverhalten gemessen werden. | Privacy Magic rundet die von diesen APIs gelieferten Zeiten ab, sodass es für Tracking-Skripte viel schwieriger wird, sie zur Unterscheidung von Browsern zu nutzen. |
| Touch | Die Touch API gibt preis, ob Ihr Gerät über Touch verfügt und wie viele Touchpunkte es zulässt. | Privacy Magic versteckt diese Informationen vor Websites. |

## Tracking-Spuren entfernen {#removing-tracking-breadcrumbs}

Einige Browserfunktionen sind anfällig dafür, Teile Ihres Browserverlaufs („Breadcrumbs“) an verschiedene von Ihnen besuchte Websites weiterzugeben. Privacy Magic härtet diese Funktionen ab, damit sie weniger undicht sind.

| Spur | Standard-Webbrowser | Privacy Magic |
| :--- | :--- | :--- |
| Cache-Lecks | Browser speichern Daten in lokalen Caches, sodass beim erneuten Besuch oder Anzeigen einer Seite diese Daten nicht ein zweites Mal geladen werden müssen. Leider sind diese Caches manchmal undicht und verraten einer besuchten Website etwas über Ihren Browserverlauf. | Privacy Magic löscht anfällige Caches, damit diese Lecks nicht auftreten können. |
| Referrer-Richtlinie | Traditionell teilen Browser jeder von Ihnen besuchten Webseite mit, von welcher Webseite Sie gekommen sind! | Privacy Magic löscht die genaue Seite (oder den Pfad) im Referrer und lässt aus Gründen der Webkompatibilität nur die Domain weitergeben. |
| Tracking-Parameter | Tracker können den Adressen der von Ihnen besuchten Webseiten zusätzliche „Tracking-Parameter“ hinzufügen, damit Werbetreibende nachverfolgen können, wer Sie sind oder wo Sie gesurft haben. | Privacy Magic löscht bekannte Tracking-Parameter aus Webadressen, sodass diese Informationen nicht an die von Ihnen besuchten Websites weitergegeben werden. |
| Window Name | Normalerweise gibt die JavaScript-API `window.name` Daten preis, wenn Sie zwischen Websites im selben Tab navigieren. | Privacy Magic verhindert dieses Leck, indem für jede Website ein separates `window.name` erzwungen wird. |

## Web-Lecks stoppen {#stopping-web-leaks}

Webbrowser sind komplizierte Wesen! Lecks privater Informationen können aus vielen verschiedenen Browserfunktionen entstehen. Unser Ansatz bei Privacy Magic ist es, Lecks überall dort zu stopfen, wo sie gefunden werden.

| Funktion | Standard-Webbrowser | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Ein iframe ist eine „Webseite innerhalb einer Webseite.“ Es ist ein Kasten innerhalb der Seite, die Sie besuchen, in dem sich eine zweite Webseite verstecken und alle derselben Tracking-Techniken nutzen kann, die eine normale Webseite verwenden kann. | Privacy Magic injiziert alle seine Schutzmaßnahmen in jeden iframe auf einer Webseite, um sicherzustellen, dass ein Tracker diese Schutzmaßnahmen nicht umgehen kann, indem er sich in einem iframe versteckt. |
| Service Workers | Service Workers sind eine Browserfunktion, die es Code ermöglicht, im Hintergrund zu laufen, auch wenn Sie nicht mit dem Internet verbunden sind. Leider können diese Service Workers leicht private Informationen preisgeben. | Service workers sind auf allen Seiten grundsätzlich deaktiviert, um Lecks privater Informationen zu verhindern, die anderweitig nicht gepatcht werden können. |
| Shared Storage | Shared Storage ist eine Browserfunktion, die es ermöglicht, Daten über Ihr Surfen zu aggregieren und zu sammeln. Obwohl sie als privatsphärewahrend ausgegeben wurde, warf diese Funktion starke Datenschutzbedenken auf und soll aus Browsern entfernt werden. | Privacy Magic stellt sicher, dass Shared Storage auf allen Websites deaktiviert ist. |
| Shared Workers | Shared Workers sind Code, der im Hintergrund läuft und zwischen Websites geteilt werden kann. | Privacy Magic injiziert seine Schutzmaßnahmen in jeden Shared Worker, der von einer Website geladen wird. |
| Web Workers | Web Workers sind Code, der im Hintergrund auf einer Webseite läuft. Wie die Skripte der Hauptseite kann Web-Worker-Code private Daten preisgeben. | Privacy Magic injiziert seine Schutzmaßnahmen in jeden Web Worker auf einer Seite, um sicherzustellen, dass Tracker Web Workers nicht nutzen können, um diese Schutzmaßnahmen zu umgehen. |

## Privatsphäre-Signale {#privacy-signals}

Wir sind daran interessiert, Ihre Privatsphäre auf jede mögliche Weise zu verbessern. Daher sendet Privacy Magic ein Signal, um von den von Ihnen besuchten Websites datenschutzfreundliche Richtlinien zu verlangen.

| Signal | Standard-Webbrowser | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Die Global Privacy Control ist ein Signal, das an die von Ihnen besuchten Websites gesendet werden kann, um anzuzeigen, dass Sie nicht möchten, dass Ihre Daten verkauft oder geteilt werden. Leider senden die meisten Webbrowser die Global Privacy Control-Einstellung nicht standardmäßig. | Privacy Magic stellt sicher, dass Ihr Browser den Global Privacy Control-Header bei jeder Anfrage an jede Webseite oder eingebettete Ressource sendet. Es injiziert auch ein JavaScript-Signal in jede Seite und jeden iframe. |

## Browser-Schutzmaßnahmen {#browser-protections}

Browser verhalten sich schlecht, nicht nur darin, wie sie Webseiten rendern, sondern auch darin, wie sie Daten an das Mutterunternehmen oder an Drittanbieter-Werbefirmen senden. Privacy Magic deaktiviert eine Vielzahl schlechter Browserverhalten, die sonst Ihre privaten Informationen preisgeben würden.

### Undichte Webfunktionen deaktivieren {#disabling-leaky-web-features}

| Funktion | Standard-Webbrowser | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink-Auditing | Standardbrowser haben eine Funktion, die es Websites ermöglicht, einen Tracking-Server mit den Links zu „pingen“, die Sie anklicken. | Privacy Magic deaktiviert diesen Ping. |
| Drittanbieter-Cookies | Die berühmteste Tracking-Funktion überhaupt. Chrome erlaubt Drittanbieter-Cookies, die es ermöglichen, Sie von Website zu Website zu verfolgen. | Privacy Magic deaktiviert Drittanbieter-Cookies standardmäßig. |
| WebRTC non-proxied UDP | WebRTC ist eine Webbrowser-Fähigkeit, die es Ihnen ermöglicht, direkt mit anderen Webnutzern zu kommunizieren. Wenn Sie einen Browser-Proxy verwenden, geben standardmäßige Chrome-basierte Browser leider WebRTC-Kommunikation außerhalb des Proxys preis. | Privacy Magic blockiert die WebRTC-Lecks und ermöglicht WebRTC dennoch auf den Websites zu funktionieren, die es nutzen. |

### Aufdringliche Cloud-Dienste deaktivieren {#disabling-invasive-cloud-services}

| Dienst | Standard-Webbrowser | Privacy Magic |
| :--- | :--- | :--- |
| Alternative Fehlerseiten | Standardmäßig zeigt Chrome alternative Fehlerseiten an, wenn ein Fehler auftritt. Um diese Seiten anzuzeigen, werden Daten darüber, welche Seiten Sie besuchen, an Googles Server gesendet. | Privacy Magic deaktiviert diese alternativen Fehlerseiten, sodass keine Daten gesendet werden. |
| Safe Browsing Extended Reporting | Wenn Safe Browsing eine Seite blockiert, kann Chrome den Inhalt einer blockierten Seite an Googles Server senden. | Privacy Magic blockiert diese Funktion, sodass keine Daten gesendet werden. |
| Suchvorschläge | Standardmäßig sendet Chrome alles, was Sie in die Adressleiste eingeben, an Ihre Standardsuchmaschine (typischerweise Google-Suche), während Sie tippen, um Autovorschläge zu machen. | Privacy Magic blockiert diese kontinuierliche Überwachung, sodass Chrome Ihre Suche erst sendet, wenn Sie „Enter“ drücken. |
| Rechtschreibdienst | Chrome bietet eine „erweiterte Rechtschreibprüfung“, die das, was Sie tippen, an Googles Server sendet. | Privacy Magic deaktiviert diese Option und erlaubt Chrome, nur die lokale „einfache Rechtschreibprüfung“ zu verwenden. |

### Ad-Targeting-APIs deaktivieren {#disabling-ad-targeting-apis}

| API | Standard-Webbrowser | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Die Ad Measurement API (und die verwandte Private Aggregation API) sendet Daten über Ihr Surfen, die Anzeigen, die Sie anklicken, und andere private Daten an Werbeserver. | Privacy Magic deaktiviert diese APIs, um Ihre Daten zu schützen. |
| Protected Audience API | Standardmäßig stellt Chrome diese API bereit, um eine Auktion um Ihre Aufmerksamkeit im Auftrag von Werbetreibenden durchzuführen. | Privacy Magic deaktiviert diese API, damit Ihre Browserdaten nicht auf diese Weise verwendet werden. |
| Topics API | Die Topics API von Chrome gibt Werbetreibenden eine Liste von Themen, die Sie angeblich interessieren. | Privacy Magic deaktiviert die Topics API, um diese Daten privat zu halten. |

### Undichte Chrome-Einstellungen deaktivieren {#disabling-leaky-chrome-settings}

Chrome enthält bestimmte Einstellungen, die Ihrer Privatsphäre widersprechen: insbesondere Funktionen, die Daten über Ihre Surfgewohnheiten sammeln und an Googles Server senden. Diese Einstellungen können von einer Browsererweiterung nicht direkt gesteuert werden, aber während der Einrichtung hilft Ihnen Privacy Magic, die Einstellungen zu finden und sie selbst auszuschalten.

| Einstellung | Standard-Webbrowser | Privacy Magic |
| :--- | :--- | :--- |
| Verlaufssynchronisierung | Wenn Sie in Chrome angemeldet sind, synchronisiert es Ihren Browserverlauf zwischen Geräten. Es speichert dieselben Daten auch auf Google-Servern. | Privacy Magic führt Sie zu der Einstellung, die die Verlaufssynchronisierung deaktiviert, um Ihren Browserverlauf privat zu halten. |
| Nutzererfahrungsmetriken | Chrome sendet stillschweigend Metriken über Ihre Nutzung des Browsers zurück an Googles Server. | Privacy Magic hilft Ihnen, diese versteckte Datenerfassung zu blockieren. |
| Datenammlung pro URL | Für jede URL, die Sie besuchen, sammelt Chrome „anonymisierte“ Daten über Ihr Surfen auf diesen Seiten und sendet sie an Google. | Privacy Magic hilft Ihnen, diese Einstellung zu deaktivieren, um zu verhindern, dass die Daten gesendet werden. |
