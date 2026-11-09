---
title: "Koruma önlemleri: tarayıcınızdaki sızıntıları tıkamak"
description: Privacy Magic’in web’de gezinirken gizliliğinizi nasıl koruduğu
backToTop: "↑ Başa dön"
---

Privacy Magic, web’de gezinirken gizliliğinizi kapsamlı şekilde koruyan, Chrome için açık kaynaklı bir eklentidir. Tarayıcılar oldukça sızıntılıdır; bu nedenle Privacy Magic birden fazla koruma katmanı sunar: [reklamları ve izleyicileri engelleme](#blocking-ads-and-trackers), [sistem bilgilerini koruma](#protecting-system-information-fingerprinting), [izleme izlerini kaldırma](#removing-tracking-breadcrumbs), [web sızıntılarını durdurma](#stopping-web-leaks), [gizlilik sinyalleri gönderme](#privacy-signals) ve [tarayıcı korumalarını uygulama](#browser-protections).

## Reklamları ve izleyicileri engelleme {#blocking-ads-and-trackers}

Web genelinde reklamlar, izleme betikleri ve izleme pikselleri, rızanız olmadan çeşitli görünmez yöntemlerle sizi takip eder.

Privacy Magic, tarayıcınızın ağ üzerinden birçok reklam ve izleyici istemesini engellemek için popüler filtre listelerini kullanır. Filtre listeleri ayrıca bir web sayfasında reklamlar engellendiğinde kalan boş kutuları da gizler. Privacy Magic bu filtre listelerinin sabitlenmiş bir sürümünü kullanır; böylece eklentinin engelleme davranışı tamamen yeniden üretilebilir ve her kullanıcı için aynıdır.

| Filtre listesi | Engellenen öğeler |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Banner’lar, reklam betikleri, görseller ve video reklamları dahil reklamlar. |
| [EasyPrivacy](https://easylist.to/) | İzleme betikleri, pikseller, web böcekleri ve diğer bilgi toplayıcılar dahil izleyiciler. |
| [Fanboy's Annoyance List](https://easylist.to/) | Çerez bildirimleri, sosyal medya widget’ları, sayfa içi açılır pencereler ve diğer rahatsız edici öğeler. |
| [small oisd blocklist](https://oisd.nl/) | Ek reklam alan adları. |

## Sistem bilgilerini koruma (parmak izi alma) {#protecting-system-information-fingerprinting}

Geleneksel olarak tarayıcılar, bilgisayarınız hakkında bol miktarda bilgiyi soran her web sitesine veya izleme betiğine sızdırır! İzleyiciler de web’de gezinirken sizi takip etmek için bu verileri toplar.

| Parmak izi | Standart web tarayıcıları | Privacy Magic |
| :--- | :--- | :--- |
| Ses | Web tarayıcılarının ses işleme işlevi genellikle ses kartınız hakkında bilgi sızdırır. | Privacy Magic, bir betik ses verisini her okuduğunda en düşük anlamlı biti silerek bu tür sızıntıları azaltır. Bu silmenin duyulabilir bir etkisi yoktur. |
| Pil | Web tarayıcıları genellikle soran her web sitesine pil seviyenizi, cihazınızın bir güç kaynağına takılı olup olmadığını ve pilinizin bitmesine ne kadar süre kaldığına dair bir tahmin söyler. | Privacy Magic, her zaman %100’de olan bir pil ve her zaman takılı olan bir güç kaynağı simüle ederek bu bilgi sızıntısını durdurur. |
| Tarayıcı | Bir web sayfası, çalıştığı işletim sistemi hakkında ayrıntılı bilgi almak için tarayıcınızı sorgulayabilir. | Privacy Magic, `navigator.platform` değerini her farklı işletim sistemi için tek bir değere spoof eder. |
| Cihaz | Web tarayıcıları, soran her web sitesine katlanabilir bir cihaz kullanıp kullanmadığınızı söyler. | Privacy Magic her zaman cihazınızın katlanabilir olmadığını bildirir. |
| Disk | Web tarayıcıları genellikle web sitesine kullanılabilir disk alanı miktarını ve sitenin ne kadar kullandığını sızdırır; bu da bilgisayarınızdaki toplam disk alanını ve verilerin nasıl depolandığını ortaya çıkarabilir. | Privacy Magic bu değerleri herkes için aynı olacak şekilde spoof eder. |
| Ekran | Geleneksel olarak web tarayıcıları, sisteminizin “azaltılmış hareket tercih ediyor” olarak ayarlanıp ayarlanmadığı dahil olmak üzere ekran ayarlarını sızdırır. | Privacy Magic bu sızıntıyı engeller. |
| Yazı tipleri | Standart web tarayıcıları, sisteminizde yüklü özel yazı tiplerini sızdırır; bu da parmak izinizi oldukça benzersiz kılabilir. | Privacy Magic, sisteminizde yüklü özel yazı tiplerini tüm betiklerden gizler. Web sayfaları standart sistem yazı tiplerini ve indirilen web yazı tiplerini kullanmaya devam edebilir. |
| Grafik | Canvas ve WebGL, bilgisayarınızın kullandığı GPU (grafik çipi) türünü sızdıran iki ana parmak izi alma vektörüdür. | Privacy Magic, grafik çipini gizlerken oyun oynamaya ve grafikleri yoğun kullanan diğer web sitelerini kullanmaya devam etmenizi sağlayan gelişmiş teknikler kullanır. |
| Klavye | Varsayılan olarak tarayıcılar, kullandığınız klavye düzenini soran her web sitesine sızdırır. | Privacy Magic, klavye düzeninizin web sitesi betiklerine açıklanmasını engeller. |
| Dil | Tipik olarak web tarayıcıları onayladığınız dillerin bir listesini sızdırır. Ziyaret ettiğiniz web siteleri için hangi dili tercih ettiğinizi belirtebilmek önemli olsa da, tarayıcılar genellikle kullanıcının tercih ettiği dillerin listesini ortaya çıkarır; bu da fazla açıklayıcı olabilir. | Privacy Magic, ziyaret ettiğiniz web sitelerine yalnızca tek bir dilin iletilmesine izin verir. |
| Matematik | Web sayfalarındaki izleme betikleri, cihazınızdaki kosinüs veya hiperbolik tanjant gibi Math işlevlerinin kendine özgü davranışını kullanarak sizi diğer web kullanıcılarından ayırt edebilir. | Privacy Magic, JavaScript Math işlevlerini tüm platformlarda aynı şekilde davranacak şekilde yamar. |
| Bellek | Web siteleri çoğu tarayıcıdan bilgisayarınızda ne kadar belleğin kullanılmadığını öğrenebilir. | Privacy Magic, sisteminizde kullanılabilir bellek miktarını web sayfalarından ve izleyicilerden gizler. |
| Ağ | Tarayıcılar normalde sahip olduğunuz ağ bağlantısı türü hakkında ayrıntıları sızdırır. | Privacy Magic, bu ayrıntıları tüm kullanıcılar arasında homojen hale getirerek sızmalarını engeller. |
| İşlemci | Tarayıcılar, bilgisayarınızın işlemcisindeki çekirdek sayısını bildirecek şekilde tasarlanmıştır. | Privacy Magic herkesin tam olarak `4` çekirdeğe sahipmiş gibi davranır. |
| Ekran boyutu | Web tarayıcıları, tarayıcı penceresi ne kadar büyük olursa olsun, soran her web sitesine ekranınızın boyutlarını sızdırır. | Privacy Magic gerçek ekran boyutunu gizler. |
| Saat dilimi | Web tarayıcıları, betikler saat diliminizi sorduğunda yaklaşık konumunuzu sızdırır. Örneğin Orta Avrupa Saati’ndeyseniz tarayıcı, Paris, Berlin, Lüksemburg veya düzinelerce başka şehirden birinde olduğunuzu gösteren bir saat dilimi tanımlayıcısı sağlar. | Privacy Magic saat dilimlerini birleştirerek her saat dilimi ofsetinin tek bir temsilci saat dilimine sahip olmasını sağlar. Böylece tarayıcı, dünyadaki konumunuz hakkında gereksiz bilgi sızdırmaz. |
| Zamanlama | Yüksek çözünürlüklü zamanlama API’leri, betiklerin tarayıcı davranışlarının zamanlamasındaki küçük farkları ölçerek sisteminizi karakterize etmesine olanak tanır. | Privacy Magic, bu API’lerin sağladığı süreleri yuvarlayarak izleme betiklerinin bunları tarayıcıları ayırt etmek için kullanmasını çok daha zor hale getirir. |
| Dokunma | Touch API, cihazınızın dokunmatik olup olmadığını ve kaç dokunma noktasına izin verdiğini sızdırır. | Privacy Magic bu bilgiyi web sitelerinden gizler. |

## İzleme izlerini kaldırma {#removing-tracking-breadcrumbs}

Bazı tarayıcı özellikleri, tarama geçmişinizin parçalarını (“ekmek kırıntıları”) ziyaret ettiğiniz farklı web siteleriyle paylaşmak için kullanılmaya açıktır. Privacy Magic bu özellikleri daha az sızıntılı hale getirmek için güçlendirir.

| İz | Standart web tarayıcıları | Privacy Magic |
| :--- | :--- | :--- |
| Önbellek sızıntıları | Tarayıcılar verileri yerel önbelleklerde saklar; böylece bir sayfayı ziyaret ettiğinizde veya ikinci kez görüntülediğinizde bu verilerin yeniden yüklenmesi gerekmez. Ne yazık ki bu önbellekler bazen sızıntılıdır ve ziyaret ettiğiniz bir web sitesine tarama geçmişiniz hakkında bir şeyler açıklayabilir. | Privacy Magic, savunmasız önbellekleri temizleyerek bu sızıntıların gerçekleşmesini engeller. |
| Referrer Policy | Geleneksel olarak tarayıcılar, ziyaret ettiğiniz her web sayfasına hangi web sayfasından geldiğinizi söyler! | Privacy Magic referrer’daki tam sayfayı (veya yolu) siler ve web uyumluluğu için yalnızca alan adının paylaşılmasına izin verir. |
| İzleme parametreleri | İzleyiciler, ziyaret ettiğiniz web sayfalarının adreslerine ekstra “izleme parametreleri” ekleyebilir; böylece reklamverenler kim olduğunuzu veya nerelerde gezindiğinizi takip edebilir. | Privacy Magic bilinen izleme parametrelerini web adreslerinden silerek bu bilginin ziyaret ettiğiniz web siteleriyle paylaşılmamasını sağlar. |
| Pencere adı | Normalde, aynı sekmede web siteleri arasında gezinirseniz `window.name` JavaScript API’si veri sızdırır. | Privacy Magic, her web sitesi için ayrı bir `window.name` zorunlu kılarak bu sızıntıyı engeller. |

## Web sızıntılarını durdurma {#stopping-web-leaks}

Web tarayıcıları karmaşık yapılardır! Özel bilgilerin sızıntıları birçok farklı tarayıcı özelliğinden kaynaklanabilir. Privacy Magic’teki yaklaşımımız, sızıntıları nerede bulunursa bulunsun tıkamaktır.

| Özellik | Standart web tarayıcıları | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Bir iframe, “web sayfası içindeki bir web sayfasıdır.” Ziyaret ettiğiniz sayfanın içindeki bir kutudur; ikinci bir web sayfası burada gizlenerek normal bir web sayfasının kullanabileceği tüm izleme tekniklerini kullanabilir. | Privacy Magic, bir izleyicinin bir iframe’e gizlenerek bu korumaları atlatamaması için tüm korumalarını bir web sayfasındaki her iframe’e enjekte eder. |
| Service Workers | Service Workers, internete bağlı olmasanız bile kodun arka planda çalışmasına olanak tanıyan bir tarayıcı özelliğidir. Ne yazık ki bu Service Workers özel bilgileri kolayca sızdırabilir. | Service Workers, başka türlü yamanamayan özel bilgi sızıntılarını önlemek için tüm sitelerde genel olarak devre dışı bırakılır. |
| Shared Storage | Shared Storage, taramanız hakkındaki verilerin toplanmasına ve birleştirilmesine olanak tanıyan bir tarayıcı özelliğidir. Gizlilik koruyucu olduğu iddia edilse de bu özellik güçlü gizlilik endişeleri doğurmuştur ve tarayıcılardan kaldırılması beklenmektedir. | Privacy Magic, Shared Storage’ın tüm web sitelerinde devre dışı bırakılmasını sağlar. |
| Shared Workers | Shared Workers, arka planda çalışan ve web siteleri arasında paylaşılabilen kodlardır. | Privacy Magic, herhangi bir web sitesinin yüklediği her Shared Worker’a korumalarını enjekte eder. |
| Web Workers | Web Workers, bir web sayfasında arka planda çalışan kodlardır. Ana sayfanın betikleri gibi, web worker kodu da özel veri sızdırabilir. | Privacy Magic, izleyicilerin Web Workers’ı kullanarak bu korumaları atlatamaması için sayfadaki her Web Worker’a korumalarını enjekte eder. |

## Gizlilik sinyalleri {#privacy-signals}

Gizliliğinizi mümkün olan her şekilde iyileştirmek istiyoruz. Bu nedenle Privacy Magic, ziyaret ettiğiniz web sitelerinden gizlilik yanlısı politikalar talep etmek için bir sinyal gönderir.

| Sinyal | Standart web tarayıcıları | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control, ziyaret ettiğiniz web sitelerine verilerinizin satılmasını veya paylaşılmasını istemediğinizi bildirmek için gönderilebilen bir sinyaldir. Ne yazık ki çoğu web tarayıcısı varsayılan olarak Global Privacy Control tercihini göndermez. | Privacy Magic, tarayıcınızın her web sayfasına veya gömülü kaynağa yapılan her istekte Global Privacy Control başlığını göndermesini sağlar. Ayrıca her sayfaya ve iframe’e bir JavaScript sinyali enjekte eder. |

## Tarayıcı korumaları {#browser-protections}

Tarayıcılar yalnızca web sayfalarını nasıl oluşturdukları açısından değil, aynı zamanda ana şirkete veya üçüncü taraf reklam şirketlerine nasıl veri gönderdikleri açısından da kötü davranır. Privacy Magic, aksi halde özel bilgilerinizi sızdıracak çeşitli kötü tarayıcı davranışlarını devre dışı bırakır.

### Sızıntılı web özelliklerini devre dışı bırakma {#disabling-leaky-web-features}

| Özellik | Standart web tarayıcıları | Privacy Magic |
| :--- | :--- | :--- |
| Köprü denetimi | Standart tarayıcılarda, web sitelerinin tıkladığınız bağlantılarla bir izleme sunucusuna “ping” göndermesine olanak tanıyan bir özellik vardır. | Privacy Magic bu ping’i devre dışı bırakır. |
| Üçüncü taraf çerezler | Hepsinin en ünlü izleme özelliği. Chrome, siteden siteye izlenmenize olanak tanıyan üçüncü taraf çerezlere izin verir. | Privacy Magic üçüncü taraf çerezleri varsayılan olarak devre dışı bırakır. |
| WebRTC proxy’siz UDP | WebRTC, diğer web kullanıcılarıyla doğrudan iletişim kurmanıza olanak tanıyan bir web tarayıcısı yeteneğidir. Ne yazık ki bir tarayıcı proxy’si kullanıyorsanız, standart Chrome tabanlı tarayıcılar WebRTC iletişimlerini proxy dışına sızdırır. | Privacy Magic, WebRTC’yi kullanan web sitelerinde çalışmaya devam etmesine izin verirken WebRTC sızıntılarını engeller. |

### Müdahaleci bulut hizmetlerini devre dışı bırakma {#disabling-invasive-cloud-services}

| Hizmet | Standart web tarayıcıları | Privacy Magic |
| :--- | :--- | :--- |
| Alternatif hata sayfaları | Varsayılan olarak Chrome, bir hata oluştuğunda alternatif hata sayfaları gösterir. Bu sayfaları göstermek için ziyaret ettiğiniz sayfalar hakkındaki veriler Google’ın sunucularına gönderilir. | Privacy Magic bu alternatif hata sayfalarını devre dışı bırakır; böylece hiçbir veri gönderilmez. |
| Safe Browsing Extended Reporting | Safe Browsing bir sayfayı engellediğinde Chrome, engellenen sayfanın içeriğini Google’ın sunucularına gönderebilir. | Privacy Magic bu özelliği engeller; böylece hiçbir veri gönderilmez. |
| Arama önerileri | Varsayılan olarak Chrome, otomatik öneriler yapmak için adres çubuğuna yazdığınız her şeyi siz yazarken varsayılan arama motorunuza (genellikle Google arama) gönderir. | Privacy Magic bu sürekli izlemeyi engeller; böylece Chrome aramanızı yalnızca “enter” tuşuna bastığınızda gönderir. |
| Yazım hizmeti | Chrome, yazdıklarınızı Google’ın sunucularına gönderen bir “gelişmiş yazım denetimi” sunar. | Privacy Magic bu seçeneği devre dışı bırakır ve Chrome’un yalnızca yerel “temel yazım denetimini” kullanmasına izin verir. |

### Reklam hedefleme API’lerini devre dışı bırakma {#disabling-ad-targeting-apis}

| API | Standart web tarayıcıları | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (ve ilgili Private Aggregation API), taramanız, tıkladığınız reklamlar ve diğer özel veriler hakkında verileri reklam sunucularına gönderir. | Privacy Magic verilerinizi korumak için bu API’leri devre dışı bırakır. |
| Protected Audience API | Varsayılan olarak bu API, reklamverenler adına dikkatiniz üzerinde bir açık artırma yürütmek için Chrome tarafından sunulur. | Privacy Magic bu API’yi devre dışı bırakır; böylece tarama verileriniz bu şekilde kullanılmaz. |
| Topics API | Chrome’un Topics API’si reklamverenlere sözde ilgilendiğiniz konuların bir listesini verir. | Privacy Magic, bu veriyi gizli tutmak için Topics API’yi devre dışı bırakır. |

### Sızıntılı Chrome ayarlarını devre dışı bırakma {#disabling-leaky-chrome-settings}

Chrome, gizliliğinize aykırı belirli ayarlar içerir: özellikle tarama alışkanlıklarınız hakkında veri toplayıp bunları Google’ın sunucularına gönderen işlevler. Bu ayarlar bir tarayıcı eklentisi tarafından doğrudan kontrol edilemez; ancak kurulum sırasında Privacy Magic ayarları bulmanıza ve kendiniz kapatmanıza yardımcı olur.

| Ayar | Standart web tarayıcıları | Privacy Magic |
| :--- | :--- | :--- |
| Geçmiş senkronizasyonu | Chrome’a giriş yaptığınızda tarama geçmişinizi cihazlar arasında senkronize eder. Aynı veriyi Google sunucularına da kaydeder. | Privacy Magic, tarama geçmişinizi gizli tutmak için geçmiş senkronizasyonunu kapatan ayara yönlendirir. |
| Kullanıcı deneyimi metrikleri | Chrome, tarayıcı kullanımınız hakkındaki metrikleri sessizce Google’ın sunucularına geri gönderir. | Privacy Magic bu gizli veri toplamayı engellemenize yardımcı olur. |
| URL başına veri toplama | Ziyaret ettiğiniz her URL için Chrome, bu sayfalardaki taramanız hakkında “anonimleştirilmiş” veri toplar ve Google’a gönderir. | Privacy Magic, verinin gönderilmesini önlemek için bu ayarı devre dışı bırakmanıza yardımcı olur. |
