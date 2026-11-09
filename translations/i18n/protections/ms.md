---
title: "Perlindungan: menutup kebocoran dalam pelayar anda"
description: Bagaimana Privacy Magic melindungi privasi anda semasa melayari web
backToTop: "↑ Kembali ke atas"
---

Privacy Magic ialah sambungan sumber terbuka untuk Chrome yang melindungi privasi anda secara menyeluruh semasa melayari web. Pelayar sangat bocor, jadi Privacy Magic menyediakan beberapa lapisan perlindungan, termasuk [menyekat iklan dan penjejak](#blocking-ads-and-trackers), [melindungi maklumat sistem](#protecting-system-information-fingerprinting), [membuang kesan penjejakan](#removing-tracking-breadcrumbs), [menghentikan kebocoran web](#stopping-web-leaks), [menghantar isyarat privasi](#privacy-signals), dan [menguatkuasakan perlindungan pelayar](#browser-protections).

## Menyekat iklan dan penjejak {#blocking-ads-and-trackers}

Di seluruh web, iklan, skrip penjejakan, dan piksel penjejakan mengikuti anda tanpa kebenaran anda menggunakan pelbagai kaedah yang tidak kelihatan.

Privacy Magic menggunakan senarai penapis popular untuk menyekat banyak iklan dan penjejak daripada diminta oleh pelayar anda di rangkaian. Senarai penapis juga menyembunyikan kotak kosong yang tinggal apabila iklan disekat pada halaman web. Privacy Magic menggunakan versi tetap senarai penapis ini supaya tingkah laku penyekatan sambungan boleh dihasilkan semula sepenuhnya dan sama untuk setiap pengguna.

| Senarai penapis | Item yang disekat |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Iklan, termasuk sepanduk, skrip iklan, imej, dan iklan video. |
| [EasyPrivacy](https://easylist.to/) | Penjejak, termasuk skrip penjejakan, piksel, web bug, dan pengumpul maklumat lain. |
| [Fanboy's Annoyance List](https://easylist.to/) | Notis kuki, widget media sosial, pop timbul dalam halaman, dan gangguan lain. |
| [senarai sekat oisd kecil](https://oisd.nl/) | Domain pengiklanan tambahan. |

## Melindungi maklumat sistem (fingerprinting) {#protecting-system-information-fingerprinting}

Secara tradisional, pelayar membocorkan sejumlah besar maklumat tentang komputer anda kepada mana-mana laman web atau skrip penjejakan yang meminta! Dan penjejak mengumpulkan data ini untuk menjejaki anda semasa melayari web.

| Cap jari | Pelayar web standard | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Fungsi pemprosesan audio pelayar biasanya membocorkan maklumat tentang kad bunyi anda. | Privacy Magic mengurangkan kebocoran sedemikian dengan memadam bit paling kurang ketara daripada data audio setiap kali ia dibaca oleh skrip. Pemadaman ini tiada kesan yang boleh didengar. |
| Bateri | Pelayar web biasanya memberitahu mana-mana laman web yang bertanya tentang tahap bateri anda, sama ada peranti anda disambungkan kepada sumber kuasa, dan anggaran masa yang tinggal sebelum bateri kosong. | Privacy Magic menghentikan kebocoran maklumat ini dengan mensimulasikan bateri yang sentiasa pada 100% dan bekalan kuasa yang sentiasa disambungkan. |
| Pelayar | Halaman web boleh menyoal pelayar anda untuk mendapatkan maklumat terperinci tentang sistem pengendalian yang dijalankannya. | Privacy Magic memalsukan `navigator.platform` kepada satu nilai untuk setiap sistem pengendalian yang berbeza. |
| Peranti | Pelayar web akan memberitahu mana-mana laman web yang bertanya sama ada anda menggunakan peranti boleh lipat. | Privacy Magic sentiasa melaporkan bahawa peranti anda tidak boleh dilipat. |
| Cakera | Pelayar web biasanya membocorkan jumlah ruang cakera yang tersedia kepada laman web, dan berapa banyak yang digunakan oleh laman tersebut, yang boleh mendedahkan jumlah ruang cakera pada komputer anda dan cara data disimpan. | Privacy Magic memalsukan nilai-nilai ini supaya sama untuk semua orang. |
| Paparan | Secara tradisional pelayar web membocorkan tetapan paparan, termasuk sama ada sistem anda ditetapkan kepada "prefer reduced motion". | Privacy Magic mencegah kebocoran ini. |
| Fon | Pelayar web standard membocorkan fon tersuai yang dipasang pada sistem anda, yang berpotensi menjadikan cap jari anda sangat unik. | Privacy Magic menyembunyikan fon tersuai yang dipasang pada sistem anda daripada semua skrip. Halaman web masih boleh menggunakan fon sistem standard dan fon web yang dimuat turun. |
| Grafik | Canvas dan WebGL ialah dua vektor fingerprinting utama yang membocorkan jenis GPU (cip grafik) yang digunakan komputer anda. | Privacy Magic menggunakan teknik lanjutan untuk menyembunyikan cip grafik sambil membolehkan anda terus bermain permainan dan menggunakan laman web lain yang banyak menggunakan grafik. |
| Papan kekunci | Secara lalai, pelayar membocorkan susun atur papan kekunci yang anda gunakan kepada mana-mana laman web yang bertanya. | Privacy Magic menyekat susun atur papan kekunci anda daripada didedahkan kepada skrip laman web. |
| Bahasa | Biasanya, pelayar web akan membocorkan senarai bahasa yang anda luluskan. Walaupun penting untuk dapat menentukan bahasa yang anda sukai untuk laman web yang dilawati, pelayar biasanya mendedahkan senarai bahasa pilihan pengguna, yang boleh terlalu mendedahkan. | Privacy Magic hanya membenarkan satu bahasa dihantar kepada laman web yang anda lawati. |
| Math | Skrip penjejakan dalam halaman web boleh menggunakan tingkah laku idiosinkratik fungsi Math, seperti kosinus atau tangen hiperbolik, pada peranti anda untuk membezakan anda daripada pengguna web lain. | Privacy Magic menampal fungsi Math JavaScript supaya ia berkelakuan sama merentas semua platform. |
| Memori | Laman web dapat mengetahui daripada kebanyakan pelayar berapa banyak memori yang tidak digunakan pada komputer anda. | Privacy Magic menyembunyikan jumlah memori yang tersedia pada sistem anda daripada halaman web dan penjejak. |
| Rangkaian | Pelayar biasanya membocorkan butiran tentang jenis sambungan rangkaian yang anda ada. | Privacy Magic mencegah butiran ini daripada bocor dengan menjadikannya homogen merentas semua pengguna. |
| Pemproses | Pelayar direka untuk melaporkan bilangan teras pada pemproses komputer anda. | Privacy Magic berpura-pura bahawa semua orang mempunyai tepat `4`. |
| Skrin | Pelayar web akan membocorkan dimensi skrin anda kepada mana-mana laman web yang bertanya, tanpa mengira saiz tetingkap pelayar. | Privacy Magic menyembunyikan saiz skrin sebenar. |
| Zon Waktu | Pelayar web akan membocorkan anggaran lokasi anda apabila skrip meminta zon waktu anda. Contohnya, jika anda berada dalam Central European Time, pelayar akan memberikan pengecam zon waktu yang menunjukkan sama ada anda berada di Paris, Berlin, Luxembourg atau mana-mana daripada berpuluh-puluh bandar lain. | Privacy Magic menggabungkan zon waktu supaya setiap ofset zon waktu mempunyai satu zon waktu wakil. Dengan itu pelayar tidak membocorkan maklumat yang tidak perlu tentang lokasi anda di dunia. |
| Timing | API timing resolusi tinggi membolehkan skrip mencirikan sistem anda dengan mengukur perbezaan kecil dalam masa tingkah laku pelayar. | Privacy Magic membulatkan masa yang disediakan oleh API ini supaya jauh lebih sukar bagi skrip penjejakan untuk menggunakannya membezakan antara pelayar. |
| Sentuh | Touch API membocorkan sama ada peranti anda mempunyai sentuhan dan berapa banyak titik sentuh yang dibenarkan. | Privacy Magic menyembunyikan maklumat ini daripada laman web. |

## Membuang kesan penjejakan {#removing-tracking-breadcrumbs}

Sesetengah ciri pelayar terdedah untuk digunakan bagi berkongsi bahagian sejarah pelayaran anda ("kesan") kepada laman web berbeza yang anda lawati. Privacy Magic mengeraskan ciri-ciri ini supaya kurang bocor.

| Kesan | Pelayar web standard | Privacy Magic |
| :--- | :--- | :--- |
| Kebocoran Cache | Pelayar menyimpan data dalam cache tempatan, supaya apabila anda melawat halaman atau melihatnya kali kedua, data itu tidak perlu dimuat semula. Malangnya, cache tersebut kadangkala bocor dan akan mendedahkan sesuatu tentang sejarah pelayaran anda kepada laman web yang dilawati. | Privacy Magic membersihkan cache yang terdedah supaya kebocoran ini tidak berlaku. |
| Referrer Policy | Secara tradisional, pelayar akan memberitahu setiap halaman web yang anda lawati halaman web mana anda datang! | Privacy Magic memadam halaman (atau laluan) tepat dalam referrer, dan demi keserasian web, hanya membenarkan domain dikongsi. |
| Parameter Penjejakan | Penjejak boleh menambah "parameter penjejakan" tambahan kepada alamat halaman web yang anda lawati, supaya pengiklan dapat menjejaki siapa anda atau di mana anda telah melayari. | Privacy Magic memadam parameter penjejakan yang diketahui daripada alamat web supaya maklumat ini tidak dikongsi dengan laman web yang anda lawati. |
| Window Name | Biasanya, API JavaScript `window.name` membocorkan data jika anda menavigasi antara laman web dalam tab yang sama. | Privacy Magic mencegah kebocoran ini dengan menguatkuasakan `window.name` berasingan untuk setiap laman web. |

## Menghentikan kebocoran web {#stopping-web-leaks}

Pelayar web ialah makhluk yang rumit! Kebocoran maklumat peribadi boleh timbul daripada banyak ciri pelayar yang berbeza. Pendekatan kami dalam Privacy Magic ialah menutup kebocoran di mana sahaja ia ditemui.

| Ciri | Pelayar web standard | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Iframe ialah "halaman web dalam halaman web." Ia ialah kotak di dalam halaman yang anda lawati, di mana halaman web kedua boleh bersembunyi dan menggunakan semua teknik penjejakan yang sama seperti halaman web biasa. | Privacy Magic menyuntik semua perlindungannya ke dalam setiap iframe pada halaman web, untuk memastikan penjejak tidak dapat memintas perlindungan tersebut dengan bersembunyi di dalam iframe. |
| Service Workers | Service Workers ialah ciri pelayar yang membolehkan kod berjalan di latar belakang walaupun anda tidak disambungkan ke internet. Malangnya, Service Workers ini dengan mudah dapat membocorkan maklumat peribadi. | Service workers secara amnya dilumpuhkan pada semua laman, untuk mencegah kebocoran maklumat peribadi yang tidak dapat ditampal sebaliknya. |
| Shared Storage | Shared Storage ialah ciri pelayar yang membolehkan data tentang pelayaran anda digabungkan dan dikumpulkan. Walaupun digambarkan sebagai mengekalkan privasi, ciri ini menimbulkan kebimbangan privasi yang kuat dan dijadualkan untuk dibuang daripada pelayar. | Privacy Magic memastikan Shared Storage dilumpuhkan pada semua laman web. |
| Shared Workers | Shared Workers ialah kod yang berjalan di latar belakang dan boleh dikongsi antara laman web. | Privacy Magic menyuntik perlindungannya ke dalam setiap Shared Worker yang dimuat oleh mana-mana laman web. |
| Web Workers | Web Workers ialah kod yang berjalan di latar belakang pada halaman web. Seperti skrip halaman utama, kod web worker boleh membocorkan data peribadi. | Privacy Magic menyuntik perlindungannya ke dalam setiap Web Worker pada halaman, untuk memastikan penjejak tidak dapat menggunakan Web Workers untuk memintas perlindungan tersebut. |

## Isyarat privasi {#privacy-signals}

Kami berminat untuk meningkatkan privasi anda dengan segala cara yang mungkin. Jadi Privacy Magic menghantar isyarat untuk menuntut dasar pro-privasi daripada laman web yang anda lawati.

| Isyarat | Pelayar web standard | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control ialah isyarat yang boleh dihantar kepada laman web yang anda lawati untuk menunjukkan bahawa anda tidak mahu data anda dijual atau dikongsi. Malangnya, kebanyakan pelayar web tidak menghantar keutamaan Global Privacy Control secara lalai. | Privacy Magic memastikan pelayar anda menghantar pengepala Global Privacy Control dengan setiap permintaan kepada setiap halaman web atau sumber terbenam. Ia juga menyuntik isyarat JavaScript dalam setiap halaman dan iframe. |

## Perlindungan pelayar {#browser-protections}

Pelayar berkelakuan buruk bukan sahaja dalam cara mereka memaparkan halaman web, tetapi juga dalam cara mereka menghantar data kepada syarikat induk atau kepada syarikat pengiklanan pihak ketiga. Privacy Magic melumpuhkan pelbagai tingkah laku pelayar buruk yang sebaliknya akan membocorkan maklumat peribadi anda.

### Melumpuhkan ciri web yang bocor {#disabling-leaky-web-features}

| Ciri | Pelayar web standard | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | Pelayar standard mempunyai ciri yang membolehkan laman web "ping" pelayan penjejakan dengan pautan yang anda klik. | Privacy Magic melumpuhkan ping ini. |
| Kuki Pihak Ketiga | Ciri penjejakan paling terkenal daripada semua. Chrome membenarkan kuki pihak ketiga yang membolehkan anda dijejaki dari laman ke laman. | Privacy Magic melumpuhkan kuki pihak ketiga secara lalai. |
| WebRTC non-proxied UDP | WebRTC ialah keupayaan pelayar web yang membolehkan anda berkomunikasi secara langsung dengan pengguna web lain. Malangnya, jika anda menggunakan proksi pelayar, pelayar berasaskan Chrome standard akan membocorkan komunikasi WebRTC di luar proksi. | Privacy Magic menyekat kebocoran WebRTC, sambil masih membenarkan WebRTC berfungsi pada laman web yang menggunakannya. |

### Melumpuhkan perkhidmatan awan yang invasif {#disabling-invasive-cloud-services}

| Perkhidmatan | Pelayar web standard | Privacy Magic |
| :--- | :--- | :--- |
| Halaman Ralat Alternatif | Secara lalai, Chrome akan memaparkan halaman ralat alternatif apabila ralat berlaku. Untuk memaparkan halaman ini, data tentang halaman yang anda lawati dihantar ke pelayan Google. | Privacy Magic melumpuhkan halaman ralat alternatif ini supaya tiada data dihantar. |
| Safe Browsing Extended Reporting | Apabila Safe Browsing menyekat halaman, Chrome mungkin menghantar kandungan halaman yang disekat ke pelayan Google. | Privacy Magic menyekat ciri ini, supaya tiada data dihantar. |
| Search Suggest | Secara lalai, Chrome menghantar apa sahaja yang anda taip ke dalam bar alamat kepada enjin carian lalai anda (biasanya Google search) semasa anda menaip, untuk membuat cadangan automatik. | Privacy Magic menyekat pemantauan berterusan ini, supaya Chrome hanya menghantar carian anda apabila anda menekan "enter". |
| Perkhidmatan Ejaan | Chrome menawarkan "semakan ejaan yang dipertingkat" yang menghantar apa yang anda taip ke pelayan Google. | Privacy Magic melumpuhkan pilihan ini dan hanya membenarkan Chrome menggunakan "semakan ejaan asas" tempatan. |

### Melumpuhkan API penargetan iklan {#disabling-ad-targeting-apis}

| API | Pelayar web standard | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (dan Private Aggregation API berkaitan) menghantar data tentang pelayaran anda, iklan yang anda klik, dan data peribadi lain ke pelayan pengiklanan. | Privacy Magic melumpuhkan API ini untuk melindungi data anda. |
| Protected Audience API | Secara lalai, API ini disediakan oleh Chrome untuk menjalankan lelongan ke atas perhatian anda bagi pihak pengiklan. | Privacy Magic melumpuhkan API ini supaya data pelayaran anda tidak digunakan dengan cara ini. |
| Topics API | Topics API Chrome memberikan pengiklan senarai topik yang kononnya menarik minat anda. | Privacy Magic melumpuhkan Topics API untuk mengekalkan data itu peribadi. |

### Melumpuhkan tetapan Chrome yang bocor {#disabling-leaky-chrome-settings}

Chrome mengandungi tetapan tertentu yang bertentangan dengan privasi anda: khususnya, fungsi yang mengumpulkan data tentang tabiat pelayaran anda dan menghantarnya ke pelayan Google. Tetapan ini tidak boleh dikawal secara langsung oleh sambungan pelayar, tetapi semasa penyediaan, Privacy Magic akan membantu anda mencari tetapan tersebut dan mematikannya sendiri.

| Tetapan | Pelayar web standard | Privacy Magic |
| :--- | :--- | :--- |
| Penyegerakan sejarah | Apabila anda log masuk ke Chrome, ia menyegerakkan sejarah pelayaran anda antara peranti. Ia juga menyimpan data yang sama di pelayan Google. | Privacy Magic membimbing anda ke tetapan yang melumpuhkan penyegerakan sejarah untuk mengekalkan sejarah pelayaran anda peribadi. |
| Metrik pengalaman pengguna | Chrome secara senyap menghantar metrik tentang penggunaan pelayar anda kembali ke pelayan Google. | Privacy Magic membantu anda menyekat pengumpulan data tersembunyi ini. |
| Pengumpulan data per-URL | Untuk setiap URL yang anda lawati, Chrome mengumpulkan data "dianonimkan" tentang pelayaran anda pada halaman tersebut dan menghantarnya ke Google. | Privacy Magic membantu anda melumpuhkan tetapan ini untuk mencegah data daripada dihantar. |
