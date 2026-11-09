---
title: "Perlindungan: menutup kebocoran di browser Anda"
description: Bagaimana Privacy Magic melindungi privasi Anda saat menjelajahi web
backToTop: "↑ Kembali ke atas"
---

Privacy Magic adalah ekstensi sumber terbuka untuk Chrome yang melindungi privasi Anda secara menyeluruh saat menjelajahi web. Browser sangat bocor, jadi Privacy Magic menyediakan beberapa lapisan perlindungan, termasuk [memblokir iklan dan pelacak](#blocking-ads-and-trackers), [melindungi informasi sistem](#protecting-system-information-fingerprinting), [menghapus jejak pelacakan](#removing-tracking-breadcrumbs), [menghentikan kebocoran web](#stopping-web-leaks), [mengirim sinyal privasi](#privacy-signals), dan [menerapkan perlindungan browser](#browser-protections).

## Memblokir iklan dan pelacak {#blocking-ads-and-trackers}

Di seluruh web, iklan, skrip pelacakan, dan piksel pelacakan mengikuti Anda tanpa persetujuan dengan berbagai metode yang tidak terlihat.

Privacy Magic menggunakan daftar filter populer untuk memblokir banyak iklan dan pelacak agar tidak diminta oleh browser Anda di jaringan. Daftar filter juga menyembunyikan kotak kosong yang tersisa saat iklan diblokir di halaman web. Privacy Magic menggunakan versi tetap dari daftar filter ini agar perilaku pemblokiran ekstensi sepenuhnya dapat direproduksi dan identik untuk setiap pengguna.

| Daftar filter | Item yang diblokir |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Iklan, termasuk banner, skrip iklan, gambar, dan iklan video. |
| [EasyPrivacy](https://easylist.to/) | Pelacak, termasuk skrip pelacakan, piksel, web bug, dan pengumpul informasi lainnya. |
| [Fanboy's Annoyance List](https://easylist.to/) | Pemberitahuan cookie, widget media sosial, pop-up di halaman, dan gangguan lainnya. |
| [daftar blokir oisd kecil](https://oisd.nl/) | Domain iklan tambahan. |

## Melindungi informasi sistem (fingerprinting) {#protecting-system-information-fingerprinting}

Secara tradisional, browser membocorkan banyak informasi tentang komputer Anda ke situs web atau skrip pelacakan mana pun yang memintanya! Dan pelacak mengumpulkan data ini untuk melacak Anda saat menjelajahi web.

| Sidik jari | Browser web standar | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Fungsi pemrosesan audio browser biasanya membocorkan informasi tentang kartu suara Anda. | Privacy Magic mengurangi kebocoran tersebut dengan menghapus bit paling tidak signifikan dari data audio setiap kali dibaca oleh skrip. Penghapusan ini tidak memiliki efek yang terdengar. |
| Baterai | Browser web biasanya memberi tahu situs web mana pun yang bertanya tentang tingkat baterai Anda, apakah perangkat Anda terpasang ke sumber daya, dan perkiraan berapa lama waktu tersisa sebelum baterai kosong. | Privacy Magic menghentikan kebocoran informasi ini dengan mensimulasikan baterai yang selalu 100% dan sumber daya yang selalu terpasang. |
| Browser | Halaman web dapat menanyai browser Anda untuk mendapatkan informasi detail tentang sistem operasi yang dijalankannya. | Privacy Magic memalsukan `navigator.platform` ke satu nilai untuk setiap sistem operasi yang berbeda. |
| Perangkat | Browser web akan memberi tahu situs web mana pun yang bertanya apakah Anda menggunakan perangkat lipat. | Privacy Magic selalu melaporkan bahwa perangkat Anda tidak dapat dilipat. |
| Disk | Browser web biasanya membocorkan jumlah ruang disk yang tersedia untuk situs web, dan berapa banyak yang digunakan situs tersebut, yang dapat mengungkapkan total ruang disk di komputer Anda dan cara data disimpan. | Privacy Magic memalsukan nilai-nilai ini agar sama untuk semua orang. |
| Tampilan | Secara tradisional browser web membocorkan pengaturan tampilan, termasuk apakah sistem Anda disetel ke "prefer reduced motion". | Privacy Magic mencegah kebocoran ini. |
| Font | Browser web standar membocorkan font khusus yang terpasang di sistem Anda, yang berpotensi membuat sidik jari Anda sangat unik. | Privacy Magic menyembunyikan font khusus yang terpasang di sistem Anda dari semua skrip. Halaman web tetap dapat menggunakan font sistem standar dan font web yang diunduh. |
| Grafis | Canvas dan WebGL adalah dua vektor fingerprinting utama yang membocorkan jenis GPU (chip grafis) yang digunakan komputer Anda. | Privacy Magic menggunakan teknik canggih untuk menyembunyikan chip grafis sambil tetap memungkinkan Anda bermain game dan menggunakan situs web lain yang banyak memakai grafis. |
| Keyboard | Secara default, browser membocorkan tata letak keyboard yang Anda gunakan ke situs web mana pun yang bertanya. | Privacy Magic memblokir tata letak keyboard Anda agar tidak diungkapkan ke skrip situs web. |
| Bahasa | Biasanya, browser web akan membocorkan daftar bahasa yang Anda setujui. Meskipun penting untuk dapat menentukan bahasa yang Anda sukai untuk situs web yang dikunjungi, browser biasanya mengungkapkan daftar bahasa pilihan pengguna, yang bisa terlalu mengungkap. | Privacy Magic hanya mengizinkan satu bahasa yang diteruskan ke situs web yang Anda kunjungi. |
| Math | Skrip pelacakan di halaman web dapat menggunakan perilaku khas fungsi Math, seperti kosinus atau tangen hiperbolik, di perangkat Anda untuk membedakan Anda dari pengguna web lain. | Privacy Magic menambal fungsi Math JavaScript agar berperilaku identik di semua platform. |
| Memori | Situs web dapat mengetahui dari sebagian besar browser berapa banyak memori yang tidak digunakan di komputer Anda. | Privacy Magic menyembunyikan jumlah memori yang tersedia di sistem Anda dari halaman web dan pelacak. |
| Jaringan | Browser biasanya membocorkan detail tentang jenis koneksi jaringan yang Anda miliki. | Privacy Magic mencegah detail ini bocor dengan membuatnya homogen untuk semua pengguna. |
| Prosesor | Browser dirancang untuk melaporkan jumlah inti pada prosesor komputer Anda. | Privacy Magic berpura-pura bahwa semua orang memiliki tepat `4`. |
| Layar | Browser web akan membocorkan dimensi layar Anda ke situs web mana pun yang bertanya, terlepas dari seberapa besar jendela browser. | Privacy Magic menyembunyikan ukuran layar yang sebenarnya. |
| Zona Waktu | Browser web akan membocorkan perkiraan lokasi Anda ketika skrip meminta zona waktu Anda. Misalnya, jika Anda berada di Central European Time, browser akan memberikan pengenal zona waktu yang menunjukkan apakah Anda berada di Paris, Berlin, Luksemburg, atau salah satu dari puluhan kota lainnya. | Privacy Magic menggabungkan zona waktu sehingga setiap offset zona waktu memiliki satu zona waktu perwakilan. Dengan demikian browser tidak membocorkan informasi yang tidak perlu tentang lokasi Anda di dunia. |
| Timing | API timing resolusi tinggi memungkinkan skrip mencirikan sistem Anda dengan mengukur perbedaan kecil dalam waktu perilaku browser. | Privacy Magic membulatkan waktu yang diberikan API ini agar jauh lebih sulit bagi skrip pelacakan untuk menggunakannya membedakan antar browser. |
| Sentuh | Touch API membocorkan apakah perangkat Anda memiliki sentuhan dan berapa banyak titik sentuh yang diizinkan. | Privacy Magic menyembunyikan informasi ini dari situs web. |

## Menghapus jejak pelacakan {#removing-tracking-breadcrumbs}

Beberapa fitur browser rentan digunakan untuk membagikan bagian dari riwayat penjelajahan Anda ("jejak") ke berbagai situs web yang Anda kunjungi. Privacy Magic mengeraskan fitur-fitur ini agar lebih sedikit bocor.

| Jejak | Browser web standar | Privacy Magic |
| :--- | :--- | :--- |
| Kebocoran Cache | Browser menyimpan data di cache lokal, sehingga ketika Anda mengunjungi halaman atau melihatnya untuk kedua kalinya, data itu tidak perlu dimuat ulang. Sayangnya, cache tersebut terkadang bocor dan akan mengungkapkan sesuatu tentang riwayat penjelajahan Anda ke situs web yang dikunjungi. | Privacy Magic membersihkan cache yang rentan agar kebocoran ini tidak terjadi. |
| Referrer Policy | Secara tradisional, browser akan memberi tahu setiap halaman web yang Anda kunjungi dari halaman web mana Anda datang! | Privacy Magic menghapus halaman (atau path) yang tepat di referrer, dan demi kompatibilitas web, hanya mengizinkan domain untuk dibagikan. |
| Parameter Pelacakan | Pelacak dapat menambahkan "parameter pelacakan" ekstra ke alamat halaman web yang Anda kunjungi, sehingga pengiklan dapat melacak siapa Anda atau di mana Anda telah menjelajah. | Privacy Magic menghapus parameter pelacakan yang diketahui dari alamat web agar informasi ini tidak dibagikan ke situs web yang Anda kunjungi. |
| Window Name | Biasanya, API JavaScript `window.name` membocorkan data jika Anda menavigasi antar situs web di tab yang sama. | Privacy Magic mencegah kebocoran ini dengan memberlakukan `window.name` terpisah untuk setiap situs web. |

## Menghentikan kebocoran web {#stopping-web-leaks}

Browser web adalah makhluk yang rumit! Kebocoran informasi pribadi dapat muncul dari banyak fitur browser yang berbeda. Pendekatan kami di Privacy Magic adalah menutup kebocoran di mana pun ditemukan.

| Fitur | Browser web standar | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Iframe adalah "halaman web di dalam halaman web." Itu adalah kotak di dalam halaman yang Anda kunjungi, di mana halaman web kedua dapat bersembunyi dan menggunakan semua teknik pelacakan yang sama seperti halaman web biasa. | Privacy Magic menyuntikkan semua perlindungannya ke setiap iframe di halaman web, untuk memastikan pelacak tidak dapat melewati perlindungan tersebut dengan bersembunyi di dalam iframe. |
| Service Workers | Service Workers adalah fitur browser yang memungkinkan kode berjalan di latar belakang bahkan ketika Anda tidak terhubung ke internet. Sayangnya, Service Workers ini dengan mudah dapat membocorkan informasi pribadi. | Service workers umumnya dinonaktifkan di semua situs, untuk mencegah kebocoran informasi pribadi yang tidak dapat ditambal dengan cara lain. |
| Shared Storage | Shared Storage adalah fitur browser yang memungkinkan data tentang penjelajahan Anda digabungkan dan dikumpulkan. Meskipun diklaim menjaga privasi, fitur ini menimbulkan kekhawatiran privasi yang kuat dan dijadwalkan dihapus dari browser. | Privacy Magic memastikan Shared Storage dinonaktifkan di semua situs web. |
| Shared Workers | Shared Workers adalah kode yang berjalan di latar belakang dan dapat dibagikan antar situs web. | Privacy Magic menyuntikkan perlindungannya ke setiap Shared Worker yang dimuat oleh situs web mana pun. |
| Web Workers | Web Workers adalah kode yang berjalan di latar belakang pada halaman web. Seperti skrip halaman utama, kode web worker dapat membocorkan data pribadi. | Privacy Magic menyuntikkan perlindungannya ke setiap Web Worker di halaman, untuk memastikan pelacak tidak dapat menggunakan Web Workers untuk melewati perlindungan tersebut. |

## Sinyal privasi {#privacy-signals}

Kami ingin meningkatkan privasi Anda dengan segala cara yang mungkin. Jadi Privacy Magic mengirim sinyal untuk menuntut kebijakan pro-privasi dari situs web yang Anda kunjungi.

| Sinyal | Browser web standar | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control adalah sinyal yang dapat dikirim ke situs web yang Anda kunjungi untuk menunjukkan bahwa Anda tidak ingin data Anda dijual atau dibagikan. Sayangnya, sebagian besar browser web tidak mengirim preferensi Global Privacy Control secara default. | Privacy Magic memastikan browser Anda mengirim header Global Privacy Control dengan setiap permintaan ke setiap halaman web atau sumber daya tertanam. Ia juga menyuntikkan sinyal JavaScript di setiap halaman dan iframe. |

## Perlindungan browser {#browser-protections}

Browser berperilaku buruk tidak hanya dalam cara merender halaman web, tetapi juga dalam cara mengirim data ke perusahaan induk atau ke perusahaan iklan pihak ketiga. Privacy Magic menonaktifkan berbagai perilaku browser buruk yang jika tidak akan membocorkan informasi pribadi Anda.

### Menonaktifkan fitur web yang bocor {#disabling-leaky-web-features}

| Fitur | Browser web standar | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | Browser standar memiliki fitur yang memungkinkan situs web "ping" server pelacakan dengan tautan yang Anda klik. | Privacy Magic menonaktifkan ping ini. |
| Cookie Pihak Ketiga | Fitur pelacakan paling terkenal dari semuanya. Chrome mengizinkan cookie pihak ketiga yang memungkinkan Anda dilacak dari situs ke situs. | Privacy Magic menonaktifkan cookie pihak ketiga secara default. |
| WebRTC non-proxied UDP | WebRTC adalah kemampuan browser web yang memungkinkan Anda berkomunikasi langsung dengan pengguna web lain. Sayangnya, jika Anda menggunakan proxy browser, browser berbasis Chrome standar akan membocorkan komunikasi WebRTC di luar proxy. | Privacy Magic memblokir kebocoran WebRTC, sambil tetap mengizinkan WebRTC berfungsi di situs web yang menggunakannya. |

### Menonaktifkan layanan cloud yang invasif {#disabling-invasive-cloud-services}

| Layanan | Browser web standar | Privacy Magic |
| :--- | :--- | :--- |
| Halaman Error Alternatif | Secara default, Chrome akan menampilkan halaman error alternatif ketika terjadi kesalahan. Untuk menampilkan halaman ini, data tentang halaman yang Anda kunjungi dikirim ke server Google. | Privacy Magic menonaktifkan halaman error alternatif ini agar tidak ada data yang dikirim. |
| Safe Browsing Extended Reporting | Ketika Safe Browsing memblokir halaman, Chrome mungkin mengirim konten halaman yang diblokir ke server Google. | Privacy Magic memblokir fitur ini, agar tidak ada data yang dikirim. |
| Search Suggest | Secara default, Chrome mengirim apa pun yang Anda ketik di bilah alamat ke mesin pencari default Anda (biasanya Google search) saat Anda mengetik, untuk membuat saran otomatis. | Privacy Magic memblokir pemantauan berkelanjutan ini, sehingga Chrome hanya mengirim pencarian Anda saat Anda menekan "enter". |
| Layanan Ejaan | Chrome menawarkan "pemeriksaan ejaan yang ditingkatkan" yang mengirim apa yang Anda ketik ke server Google. | Privacy Magic menonaktifkan opsi ini dan hanya mengizinkan Chrome menggunakan "pemeriksaan ejaan dasar" lokal. |

### Menonaktifkan API penargetan iklan {#disabling-ad-targeting-apis}

| API | Browser web standar | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (dan Private Aggregation API terkait) mengirim data tentang penjelajahan Anda, iklan yang Anda klik, dan data pribadi lainnya ke server iklan. | Privacy Magic menonaktifkan API ini untuk melindungi data Anda. |
| Protected Audience API | Secara default, API ini disediakan oleh Chrome untuk menjalankan lelang atas perhatian Anda atas nama pengiklan. | Privacy Magic menonaktifkan API ini agar data penjelajahan Anda tidak digunakan dengan cara ini. |
| Topics API | Topics API Chrome memberi pengiklan daftar topik yang konon menarik minat Anda. | Privacy Magic menonaktifkan Topics API untuk menjaga data tersebut tetap pribadi. |

### Menonaktifkan pengaturan Chrome yang bocor {#disabling-leaky-chrome-settings}

Chrome berisi pengaturan tertentu yang bertentangan dengan privasi Anda: khususnya, fungsi yang mengumpulkan data tentang kebiasaan penjelajahan Anda dan mengirimkannya ke server Google. Pengaturan ini tidak dapat dikontrol langsung oleh ekstensi browser, tetapi selama penyiapan, Privacy Magic akan membantu Anda menemukan pengaturan tersebut dan mematikannya sendiri.

| Pengaturan | Browser web standar | Privacy Magic |
| :--- | :--- | :--- |
| Sinkronisasi riwayat | Saat Anda masuk ke Chrome, riwayat penjelajahan Anda disinkronkan antar perangkat. Data yang sama juga disimpan di server Google. | Privacy Magic memandu Anda ke pengaturan yang menonaktifkan sinkronisasi riwayat agar riwayat penjelajahan Anda tetap pribadi. |
| Metrik pengalaman pengguna | Chrome diam-diam mengirim metrik tentang penggunaan browser Anda kembali ke server Google. | Privacy Magic membantu Anda memblokir pengumpulan data tersembunyi ini. |
| Pengumpulan data per-URL | Untuk setiap URL yang Anda kunjungi, Chrome mengumpulkan data "anonim" tentang penjelajahan Anda di halaman tersebut dan mengirimkannya ke Google. | Privacy Magic membantu Anda menonaktifkan pengaturan ini untuk mencegah data dikirim. |
