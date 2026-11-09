---
title: "Privacy Magic hakkında"
description: "Gizliliğinizi koruyan bir Chrome eklentisi"
backToTop: "↑ Başa dön"
---

Sıradan insanlar olarak kitlesel gözetimden kendimizi nasıl koruyabiliriz? Bu sorun üzerinde bir şekilde on yıldan fazla çalışıyorum. Bu sürede gizlilik odaklı üç web tarayıcısı üzerinde çalıştım: Tor Browser, Firefox ve Brave. Milyonlarca insan bu web tarayıcılarını her gün kullanıyor ve en azından bir ölçüde çevrimiçi casusluktan korunuyor.

Ancak gizliliklerini iyileştirmede bazı ilerlemeler olsa da, bu niş tarayıcıların tarayıcı pazarının büyük bir payını ele geçirmesi olası değil. Gerçek şu ki, çoğu insan hâlâ ana akım tarayıcıları kullanmayı tercih ediyor ve bu da onları gözetimden büyük ölçüde korumasız bırakıyor.

Ana akım bir tarayıcı seçmek anlaşılır bir şey! Chrome ve Edge çoğu bilgisayarda önceden yüklü gelir ve güçlü performans sunar. Masaüstünde kullanıcıların yaklaşık %90’ı Chromium tabanlı ana akım tarayıcıları kullanır. Dezavantajı ise bu tarayıcıların bol miktarda özel bilgi sızdırmasıdır.

Sızdıran tarayıcılar (ve diğer sızdıran yazılımlar) şirketlerin ve hükümetlerin herkesi izlemesini kolaylaştırır. Kuruluşlar, internet kullanımınızdan edindikleri verilerle her kişi hakkında ayrıntılı bilgi topluyor. Bana göre bu kitlesel gözetim demokrasiye ve insan hayatına bir tehdittir.

Peki gizliliklerini korumak isteyen ama Chrome tarayıcısında kalmak da isteyen insanlar için ne yapabiliriz? Kolay kurulan, kolay kullanılan ve gizliliğinizi koruyan, ancak gezinme deneyiminizi bozmayan veya Web’i istediğiniz gibi kullanma özgürlüğünüzü kısıtlamayan bir çözüme ihtiyacımız var. Başka bir deyişle, “sihir” gibi çalışması gerekir.

Dikkatle tasarlanmış bir tarayıcı eklentisinin bu ihtiyaca uyabileceğini fark ettim. Chrome Web Store halihazırda reklam engelleme veya belirli özel bilgi sızıntılarını önleme dahil çok çeşitli işler yapan binlerce eklenti sunuyor. Ancak çevrimiçi gizliliğinizin tehlikeye girebileceği çok sayıdaki yolu ele alan *kapsamlı* bir gizlilik koruması paketi sunan hiçbir eklenti yok.

Bu fikri hayata geçirmek için “kur ve unut” tarzı bir tarayıcı gizlilik eklentisi olan Privacy Magic’i oluşturdum. Privacy Magic’i geliştirmek küçük bir çaba değildi: ana akım web tarayıcıları dürüst olmak gerekirse elek gibi sızdırıyor. Bir eleğin batmaması için tüm delikleri tıkamanız gerekir. Privacy Magic, çoğu bu eklenti için sıfırdan oluşturulmuş ve tümü varsayılan olarak etkin olan çok çeşitli korumalar ekleyerek bunu yapmaya çalışır.

Bu korumalar arasında reklamları ve izleyicileri otomatik engelleme (bir reklam engelleyiciye benzer, ancak tüm kullanıcılarda tutarlı), parmak izine direnme (cihazınız hakkında her türlü bilgi sızıntısını engelleme), breadcrumb’ları engelleme (web sitelerinin tarayıcınızı “etiketlemesini” önleme), web tarayıcısı sızıntılarını mühürleme (iframe’ler ve web worker’lar gibi unsurları güçlendirme), üçüncü taraf çerezleri engelleme, tarayıcıdaki gizlilik karşıtı özellikleri devre dışı bırakma (sözde Ad Measurement gibi) ve Global Privacy Control’ü etkinleştirme (web sitelerinden verilerinizi satmamalarını talep eden bir mesaj) yer alır.

Tüm bu gizlilik korumaları gezinmenizi engellemeyecek şekilde tasarlandı. Ancak şans eseri Privacy Magic ile kutudan çıktığı gibi çalışmayan bir web sitesiyle karşılaşırsanız, <span class="post-inline-logo" aria-hidden="true"><img src="/images/logo.svg" alt=""></span> düğmesine tıklayıp kapatarak korumaları yalnızca o web sitesinde devre dışı bırakabilirsiniz.

Privacy Magic’in sunduğu tarayıcı içi korumalara ek olarak, IP adresinizi meraklı gözlerden korumak da şarttır. Kurulum sırasında eklenti, IP adresinizi web sitelerinden ve gömülü izleyicilerden gizleyecek Privacy Guides’ın önerdiği VPN’lere bir bağlantı sunar.

Privacy Magic’in gizlilik korumalarının kapsamlı olduğunu ve bildiğim kadarıyla diğer herhangi bir Chrome eklentisinin sunduğu korumaları önemli ölçüde aştığını söylemekten memnuniyet duyuyorum. “Sadece çalışan” bir çözüm sunmak için gizlilik koruması paketini sıkılaştırmaya ve genişletmeye kararlıyım. Gelecekte hem masaüstü hem de mobil olmak üzere diğer tarayıcıları da desteklemeyi planlıyorum.

Kitlesel gözetim niş araçlarla durdurulamaz: *tüm* insanlara kendilerini korumak için ihtiyaç duydukları araçları vermeliyiz. Kitlesel gözetimin panzehiri kitlesel korumadır. Privacy Magic’in bu çabaya önemli bir katkı olacağını umuyorum.

Lütfen Privacy Magic’i deneyin! Chrome’da kolayca [ücretsiz yükleyebilirsiniz](https://chromewebstore.google.com/detail/privacy-magic/cobojehlalmfnplnblndhofhgeglljkc) (size uymuyorsa kaldırmak da kolaydır). Deneyiminizi bana bildirin; geri bildirim eklentiyi sürekli iyileştirmem için çok önemlidir. Beğenirseniz, aile üyelerinizin ve arkadaşlarınızın bilgisayarlarında denemesine yardımcı olmayı düşünün.

Gizlilik insan hakkının herkes için erişilebilir olduğu bir geleceğe!
