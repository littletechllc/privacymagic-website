---
title: "Protections : colmater les fuites de votre navigateur"
description: Comment Privacy Magic protège votre vie privée lorsque vous naviguez sur le web
backToTop: "↑ Retour en haut"
---

Privacy Magic est une extension open source pour Chrome qui protège de manière complète votre vie privée lorsque vous naviguez sur le web. Les navigateurs fuient beaucoup d'informations ; c'est pourquoi Privacy Magic offre plusieurs couches de protection, notamment [le blocage des publicités et des traqueurs](#blocking-ads-and-trackers), [la protection des informations système](#protecting-system-information-fingerprinting), [la suppression des miettes de suivi](#removing-tracking-breadcrumbs), [l'arrêt des fuites web](#stopping-web-leaks), [l'envoi de signaux de confidentialité](#privacy-signals) et [l'application des protections du navigateur](#browser-protections).

## Blocage des publicités et des traqueurs {#blocking-ads-and-trackers}

Sur tout le web, les publicités, les scripts de suivi et les pixels de suivi vous suivent sans votre consentement à l'aide de diverses méthodes invisibles.

Privacy Magic utilise des listes de filtres populaires pour empêcher votre navigateur de demander de nombreuses publicités et de nombreux traqueurs sur le réseau. Les listes de filtres masquent également les cases vides qui restent lorsque des publicités sont bloquées sur une page web. Privacy Magic utilise une version figée de ces listes de filtres afin que le comportement de blocage de l'extension soit entièrement reproductible et identique pour chaque utilisateur.

| Liste de filtres | Éléments bloqués |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Publicités, y compris bannières, scripts publicitaires, images et publicités vidéo. |
| [EasyPrivacy](https://easylist.to/) | Traqueurs, y compris scripts de suivi, pixels, web bugs et autres collecteurs d'informations. |
| [Fanboy's Annoyance List](https://easylist.to/) | Avis de cookies, widgets de réseaux sociaux, pop-ups dans la page et autres nuisances. |
| [small oisd blocklist](https://oisd.nl/) | Domaines publicitaires supplémentaires. |

## Protection des informations système (empreinte numérique) {#protecting-system-information-fingerprinting}

Traditionnellement, les navigateurs divulguent d'énormes quantités d'informations sur votre ordinateur à tout site web ou script de suivi qui les demande ! Et les traqueurs collectent ces données pour vous suivre lorsque vous naviguez sur le web.

| Empreinte | Navigateurs web standard | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Les fonctionnalités de traitement audio des navigateurs web divulguent généralement des informations sur votre carte son. | Privacy Magic réduit ces fuites en effaçant le bit de poids faible des données audio chaque fois qu'un script les lit. Cet effacement n'a aucun effet audible. |
| Batterie | Les navigateurs web indiquent généralement à tout site qui le demande votre niveau de batterie, si votre appareil est branché sur une source d'alimentation, et une estimation du temps restant avant que la batterie ne soit vide. | Privacy Magic stoppe cette fuite d'informations en simulant une batterie toujours à 100 % et une alimentation toujours branchée. |
| Navigateur | Une page web peut interroger votre navigateur pour obtenir des informations détaillées sur le système d'exploitation dans lequel il s'exécute. | Privacy Magic falsifie `navigator.platform` pour qu'il ait une seule valeur pour chaque système d'exploitation différent. |
| Appareil | Les navigateurs web indiquent à tout site qui le demande si vous utilisez un appareil pliable. | Privacy Magic indique toujours que votre appareil n'est pas pliable. |
| Disque | Les navigateurs web divulguent généralement la quantité d'espace disque disponible pour le site, et la quantité utilisée par ce site, ce qui peut révéler l'espace disque total disponible sur votre ordinateur et la façon dont les données sont stockées. | Privacy Magic falsifie ces valeurs pour qu'elles soient les mêmes pour tout le monde. |
| Affichage | Traditionnellement, les navigateurs web divulguent les paramètres d'affichage, notamment si votre système est réglé pour « préférer les mouvements réduits ». | Privacy Magic empêche cette fuite. |
| Polices | Les navigateurs web standard divulguent les polices personnalisées installées sur votre système, ce qui peut rendre votre empreinte très unique. | Privacy Magic masque les polices personnalisées installées sur votre système à tous les scripts. Les pages web peuvent continuer à utiliser les polices système standard et les polices web téléchargées. |
| Graphismes | Canvas et WebGL sont deux vecteurs majeurs d'empreinte numérique qui divulguent le type de GPU (puce graphique) utilisé par votre ordinateur. | Privacy Magic utilise des techniques avancées pour masquer la puce graphique tout en vous permettant de continuer à jouer et à utiliser d'autres sites qui font un usage intensif des graphismes. |
| Clavier | Par défaut, les navigateurs divulguent la disposition du clavier que vous utilisez à tout site qui le demande. | Privacy Magic empêche la révélation de la disposition de votre clavier aux scripts des sites. |
| Langue | Typiquement, les navigateurs web divulguent une liste des langues que vous avez approuvées. S'il est important de pouvoir indiquer la langue que vous préférez pour les sites visités, les navigateurs révèlent généralement une liste des langues préférées de l'utilisateur, ce qui peut en dire trop. | Privacy Magic n'autorise qu'une seule langue à être transmise aux sites que vous visitez. |
| Math | Les scripts de suivi dans les pages web peuvent utiliser le comportement idiosyncratique des fonctions Math, telles que le cosinus ou la tangente hyperbolique, sur votre appareil pour vous distinguer des autres utilisateurs du web. | Privacy Magic corrige les fonctions Math de JavaScript pour qu'elles se comportent de façon identique sur toutes les plateformes. |
| Mémoire | Les sites web peuvent découvrir auprès de la plupart des navigateurs la quantité de mémoire inutilisée sur votre ordinateur. | Privacy Magic masque la quantité de mémoire disponible sur votre système aux pages web et aux traqueurs. |
| Réseau | Les navigateurs divulguent normalement des détails sur le type de connexion réseau dont vous disposez. | Privacy Magic empêche la fuite de ces détails en les rendant homogènes pour tous les utilisateurs. |
| Processeur | Les navigateurs sont conçus pour indiquer le nombre de cœurs du processeur de votre ordinateur. | Privacy Magic fait croire que tout le monde en a exactement `4`. |
| Écran | Les navigateurs web divulguent les dimensions de votre écran à tout site qui le demande, quelle que soit la taille de la fenêtre du navigateur. | Privacy Magic masque la taille réelle de l'écran. |
| Fuseau horaire | Les navigateurs web divulguent votre localisation approximative lorsque des scripts demandent votre fuseau horaire. Par exemple, si vous êtes en heure d'Europe centrale, le navigateur fournit un identifiant de fuseau horaire indiquant si vous êtes à Paris, Berlin, Luxembourg ou dans l'une des dizaines d'autres villes. | Privacy Magic regroupe les fuseaux horaires de sorte que chaque décalage horaire ait un seul fuseau représentatif. Ainsi, le navigateur ne divulgue pas d'informations inutiles sur votre position sur le globe. |
| Temporisation | Les API de temporisation haute résolution permettent aux scripts de caractériser votre système en mesurant de minuscules différences dans le timing des comportements du navigateur. | Privacy Magic arrondit les temps fournis par ces API afin qu'il soit beaucoup plus difficile pour les scripts de suivi de les utiliser pour distinguer les navigateurs. |
| Touch | La Touch API divulgue si votre appareil dispose du tactile et combien de points de contact il autorise. | Privacy Magic masque ces informations aux sites web. |

## Suppression des miettes de suivi {#removing-tracking-breadcrumbs}

Certaines fonctionnalités du navigateur peuvent être détournées pour partager des parties de votre historique de navigation (« miettes ») avec différents sites que vous visitez. Privacy Magic renforce ces fonctionnalités pour qu'elles fuient moins.

| Miettes | Navigateurs web standard | Privacy Magic |
| :--- | :--- | :--- |
| Fuites du cache | Les navigateurs stockent des données dans des caches locaux, afin que lors d'une visite ou d'une seconde consultation d'une page, ces données n'aient pas à être rechargées. Malheureusement, ces caches fuient parfois et révèlent quelque chose de votre historique de navigation à un site que vous visitez. | Privacy Magic vide les caches vulnérables pour que ces fuites ne puissent pas se produire. |
| Politique de référent | Traditionnellement, les navigateurs indiquent à chaque page web que vous visitez de quelle page vous venez ! | Privacy Magic supprime la page exacte (ou le chemin) dans le référent et, pour la compatibilité web, n'autorise que le partage du domaine. |
| Paramètres de suivi | Les traqueurs peuvent ajouter des « paramètres de suivi » supplémentaires aux adresses des pages que vous visitez, afin que les annonceurs puissent suivre qui vous êtes ou où vous avez navigué. | Privacy Magic supprime les paramètres de suivi connus des adresses web afin que ces informations ne soient pas partagées avec les sites que vous visitez. |
| Nom de fenêtre | Normalement, l'API JavaScript `window.name` fuit des données si vous naviguez d'un site à l'autre dans le même onglet. | Privacy Magic empêche cette fuite en imposant un `window.name` distinct pour chaque site. |

## Arrêt des fuites web {#stopping-web-leaks}

Les navigateurs web sont des bêtes complexes ! Les fuites d'informations privées peuvent surgir de nombreuses fonctionnalités différentes. Notre approche avec Privacy Magic consiste à colmater les fuites où qu'elles se trouvent.

| Fonctionnalité | Navigateurs web standard | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Une iframe est une « page web dans une page web ». C'est un cadre à l'intérieur de la page que vous visitez, où une seconde page peut se cacher et utiliser toutes les mêmes techniques de suivi qu'une page web normale. | Privacy Magic injecte toutes ses protections dans chaque iframe d'une page web, pour qu'un traqueur ne puisse pas contourner ces protections en se cachant dans une iframe. |
| Service Workers | Les Service Workers sont une fonctionnalité du navigateur qui permet au code de s'exécuter en arrière-plan même lorsque vous n'êtes pas connecté à Internet. Malheureusement, ces Service Workers peuvent facilement divulguer des informations privées. | Les Service Workers sont généralement désactivés sur tous les sites, pour empêcher des fuites d'informations privées qui ne peuvent pas être corrigées autrement. |
| Shared Storage | Shared Storage est une fonctionnalité du navigateur qui permet d'agréger et de collecter des données sur votre navigation. Bien qu'elle ait été présentée comme préservant la vie privée, cette fonctionnalité a soulevé de fortes préoccupations et doit être retirée des navigateurs. | Privacy Magic s'assure que Shared Storage est désactivé sur tous les sites. |
| Shared Workers | Les Shared Workers sont du code qui s'exécute en arrière-plan et peut être partagé entre des sites web. | Privacy Magic injecte ses protections dans chaque Shared Worker chargé par n'importe quel site. |
| Web Workers | Les Web Workers sont du code qui s'exécute en arrière-plan sur une page web. Comme les scripts de la page principale, le code des Web Workers peut divulguer des données privées. | Privacy Magic injecte ses protections dans chaque Web Worker d'une page, pour que les traqueurs ne puissent pas utiliser les Web Workers pour contourner ces protections. |

## Signaux de confidentialité {#privacy-signals}

Nous souhaitons améliorer votre vie privée de toutes les manières possibles. C'est pourquoi Privacy Magic envoie un signal pour exiger des politiques favorables à la confidentialité de la part des sites que vous visitez.

| Signal | Navigateurs web standard | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Le Global Privacy Control est un signal qui peut être envoyé aux sites que vous visitez pour indiquer que vous ne souhaitez pas que vos données soient vendues ou partagées. Malheureusement, la plupart des navigateurs n'envoient pas la préférence Global Privacy Control par défaut. | Privacy Magic s'assure que votre navigateur envoie l'en-tête Global Privacy Control avec chaque requête vers chaque page web ou ressource intégrée. Il injecte également un signal JavaScript dans chaque page et iframe. |

## Protections du navigateur {#browser-protections}

Les navigateurs se comportent mal non seulement dans la façon dont ils affichent les pages web, mais aussi dans la façon dont ils envoient des données à l'entreprise parente ou à des régies publicitaires tierces. Privacy Magic désactive diverses mauvaises pratiques du navigateur qui, autrement, divulgueraient vos informations privées.

### Désactivation des fonctionnalités web qui fuient {#disabling-leaky-web-features}

| Fonctionnalité | Navigateurs web standard | Privacy Magic |
| :--- | :--- | :--- |
| Audit des hyperliens | Les navigateurs standard ont une fonctionnalité qui permet aux sites de « pinger » un serveur de suivi avec les liens sur lesquels vous cliquez. | Privacy Magic désactive ce ping. |
| Cookies tiers | La fonctionnalité de suivi la plus célèbre de toutes. Chrome autorise les cookies tiers qui permettent de vous suivre d'un site à l'autre. | Privacy Magic désactive les cookies tiers par défaut. |
| WebRTC UDP non proxifié | WebRTC est une capacité du navigateur qui vous permet de communiquer directement avec d'autres utilisateurs du web. Malheureusement, si vous utilisez un proxy de navigateur, les navigateurs standard basés sur Chrome fuient les communications WebRTC en dehors du proxy. | Privacy Magic bloque les fuites WebRTC, tout en permettant à WebRTC de fonctionner sur les sites qui l'utilisent. |

### Désactivation des services cloud invasifs {#disabling-invasive-cloud-services}

| Service | Navigateurs web standard | Privacy Magic |
| :--- | :--- | :--- |
| Pages d'erreur alternatives | Par défaut, Chrome affiche des pages d'erreur alternatives lorsqu'une erreur se produit. Pour afficher ces pages, des données sur les pages que vous visitez sont envoyées aux serveurs de Google. | Privacy Magic désactive ces pages d'erreur alternatives afin qu'aucune donnée ne soit envoyée. |
| Safe Browsing Extended Reporting | Lorsque Safe Browsing bloque une page, Chrome peut envoyer le contenu d'une page bloquée aux serveurs de Google. | Privacy Magic bloque cette fonctionnalité, afin qu'aucune donnée ne soit envoyée. |
| Suggestions de recherche | Par défaut, Chrome envoie tout ce que vous tapez dans la barre d'adresse à votre moteur de recherche par défaut (généralement Google Search) pendant que vous tapez, pour faire des suggestions automatiques. | Privacy Magic bloque cette surveillance continue, afin que Chrome n'envoie votre recherche que lorsque vous appuyez sur « Entrée ». |
| Service d'orthographe | Chrome propose une « vérification orthographique améliorée » qui envoie ce que vous tapez aux serveurs de Google. | Privacy Magic désactive cette option et n'autorise Chrome à utiliser que la « vérification orthographique de base » locale. |

### Désactivation des API de ciblage publicitaire {#disabling-ad-targeting-apis}

| API | Navigateurs web standard | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | L'Ad Measurement API (et la Private Aggregation API associée) envoie des données sur votre navigation, les publicités sur lesquelles vous cliquez et d'autres données privées aux serveurs publicitaires. | Privacy Magic désactive ces API pour protéger vos données. |
| Protected Audience API | Par défaut, cette API est mise à disposition par Chrome pour organiser une enchère sur votre attention au nom des annonceurs. | Privacy Magic désactive cette API afin que vos données de navigation ne soient pas utilisées de cette façon. |
| Topics API | La Topics API de Chrome donne aux annonceurs une liste de sujets qui vous intéresseraient censément. | Privacy Magic désactive la Topics API pour garder ces données privées. |

### Désactivation des paramètres Chrome qui fuient {#disabling-leaky-chrome-settings}

Chrome contient certains paramètres contraires à votre vie privée : en particulier, des fonctionnalités qui collectent des données sur vos habitudes de navigation et les envoient aux serveurs de Google. Ces paramètres ne peuvent pas être contrôlés directement par une extension de navigateur, mais lors de la configuration, Privacy Magic vous aidera à trouver ces paramètres et à les désactiver vous-même.

| Paramètre | Navigateurs web standard | Privacy Magic |
| :--- | :--- | :--- |
| Synchronisation de l'historique | Lorsque vous êtes connecté à Chrome, il synchronise votre historique de navigation entre les appareils. Il enregistre également ces mêmes données sur les serveurs de Google. | Privacy Magic vous guide vers le paramètre qui désactive la synchronisation de l'historique pour garder votre historique de navigation privé. |
| Métriques d'expérience utilisateur | Chrome envoie silencieusement des métriques sur votre utilisation du navigateur aux serveurs de Google. | Privacy Magic vous aide à bloquer cette collecte de données cachée. |
| Collecte de données par URL | Pour chaque URL que vous visitez, Chrome collecte des données « anonymisées » sur votre navigation sur ces pages et les envoie à Google. | Privacy Magic vous aide à désactiver ce paramètre pour empêcher l'envoi des données. |
