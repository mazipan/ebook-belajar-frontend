---
id: 02-13-belajar-html
title: Belajar HTML
sidebar_label: Belajar HTML
---

## Mengenal HTML

HTML secara bahasa merupakan kependekan dari *Hypertext Markup Language* atau sebuah markup yang berisikan standard yang telah ditentukan bersama oleh [World Wide Web Consortiumm (W3C)](https://www.w3.org/) untuk membentuk suatu kerangka website.

Bagaimana sih HTML sebenarnya? Untuk lebih mengerti perannya pada dunia nyata kita akan coba kunjungi website [https://www.baca-quran.id/](https://www.baca-quran.id/) menggunakan peramban (saya menggunakan Firefox), setelah terbuka halamannya kemudian kita klik kanan kanan dan pilih "Inspect Element"

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-01-right-click.png" alt="Klik kanan pada sebuah website"/>
	<figcaption>Gambar contoh klik kanan pada website</figcaption>
</figure>

Dari hasil klik kanan ini kita akan diarahkan pada **Developer Tools** pada tab "Inspector" dengan tampilan seperti berikut:

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-01-inspect.png" alt="Tampilan inspect element"/>
	<figcaption>Gambar hasil inspect element</figcaption>
</figure>

Gambar yang terlihat diatas adalah kode markup HTML. Terlihat rumit? Iya, karena sekarang kita belum mempelajarinya. Seperti anak-anak yang dihadapkan pada huruf dan bilangan yang belum merela pelajari. Setelah ini kita akan coba kupas mengenai bagaimana membuat kode markup HTML bersama-sama.

## Struktur HTML

HTML pada dasarnya terdiri dari berbagai kumpulan *tag* yang memiliki fungsi masing-masing. Setiap *tag* tersebut hampir selalu berpasangan dengan diawali dengan sebuah *tag* pembuka dan diakhiri dengan tag penutup, seperti terlihat pada contoh berikut ini:

```html
<!-- Berikut adalah contoh sebuah tag pembuka -->
<tag>

<!-- Berikut adalah contoh sebuah tag penutup -->
</tag>
```

Semua *tag* seperti di atas biasa kita kenal dengan *HTML Element* (Elemen HTML) sehingga kita bisa menyebut contoh kode sebelumnya sebagai elemen *tag*, sedangkan di masing-masing elemen tersebut juga biasanya akan membawa informasi tambahan yang menempel pada tag pembukanya. Informasi tambahan ini disebut *HTML Attribute* (Atribut HTML). Contoh kita akan menambahkan informasi lebar dan tinggi dari elemen *tag*, maka kita bisa menambahkan atribut berikut:

```html
<tag width="100" height="100"></tag>
```

Ketersediaan atribut untuk masing-masing elemen bisa berbeda-beda, tidak semua atribut bisa dipasangkan pada sembarangan elemen. Cara terbaik mempelajarinya tetap dengan memahami fungsi elemen itu sendiri dan membaca atribut-atribut apa yang bisa digunakan pada elemen tersebut.

Struktur dasar dari sebuah HTML terdiri dari 3 elemen terluar yakni html, head dan body yang bisa dilihat dari contoh berikut:

```html
<!DOCTYPE html>
<html>
 <head></head>
 <body></body>
</html>
```

Kode `<!DOCTYPE html>` dibuat tanpa dan *tag* penutup dan digunakan sebagai penanda bahwa kita akan membuat sebuah berkas HTML, pada jaman dahulu tidak sesederhana seperti diatas untuk mendefinisikan sebuah berkas HTML. Semua kode HTML yang akan kita tulis nantinya berada di dalam elemen `html`.

Elemen `head` nantinya akan berisi berbagai informasi dasar mengenai halaman HTML yang akan kita buat seperti judul, deskripsi, logo, serta berbagai tautan ke sumber daya yang memang dibutuhkan oleh HTML kita. Sedikit contoh beberapa informasi yang bisa kita letakkan di dalam elemen `head` bisa terlihat pada penggalan kode berikut:

```html
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Belajar HTML</title>
	<meta name="description" content="Hanya sebuah berkas untuk belajar HTML">
</head>
```

Elemen `body` nantinya akan diisi dengan konten yang memang akan secara langsung dilihat oleh pengguna yang mengakses berkas HTML kita, seperti teks, tabel, form dan berbagai elemen lainnya. Contoh kita akan menambahkan sebuah teks pada berkas HTML yang sudah kita buat, kalian bisa melihat caranya seperti kode berikut:

```html
<body>
	<h1>Belajar HTML</h1>
</body>
```

Keseluruhan kode HTML dasar tersebut yang bila dikombinasikan dan disimpan ke dalam berkas yang kita beri nama `02-13-01-basic-html.html`, perlu dikaetahui bahwa kode HTML yang kita buat harus disimpan dalam ekstensi `.html` agar dikenal bahwa ini adalah berkas HTML, setelahnya kita bisa membuka berkas HTML yang sudah kita buat menggunakan peramban di komputer kita.

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-01-open-in-browser.png" alt="Membuka berkas HTML dengan peramban"/>
	<figcaption>Gambar contoh membuka berkas HTML dengan peramban</figcaption>
</figure>

Setelah kita buka di peramban maka akan menampilkan hasil seperti berikut:

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-01-basic-html.png" alt="Hasil dari contoh kode HTML dasar"/>
	<figcaption>Gambar hasil dari contoh kode HTML dasar</figcaption>
</figure>

## Heading dan Teks

### Heading

**Heading** merupakan elemen yang kita gunakan untuk membuat judul dan sub judul pada sebuah konten HTML. Meskipun secara tampilan kita bisa saja membuat judul dan sub judul tanpa menggunakan `heading`, tapi secara semantik disarankan menggunakan elemen yang tepat dimana `heading` merupakan pilihan terbaik untuk membuat judul dan sub judul. Elemen heading yang bisa kita gunakan adalah `h1`, `h2` sampai `h6` seperti pada contoh potongan kode berikut:

```html
<h1>Judul dengan H1</h1>
<h2>Sub judul dengan H2</h2>
<h3>Sub judul dengan H3</h3>
<h4>Sub judul dengan H4</h4>
<h5>Sub judul dengan H5</h5>
<h6>Sub judul dengan H6</h6>
```

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-02-heading.png" alt="Hasil dari contoh kode elemen Heading"/>
	<figcaption>Gambar hasil dari contoh kode elemen Heading</figcaption>
</figure>

### Paragraf

Membuat paragraf di sebuah HTML bisa menggunakan element `p`, di setiap elemen `p` nantinya akan terlihat sedikit jarak yang memisahkan antara satu paragraf dengan paragraf berikutnya. Silakan lihat contoh kode serta hasil dari kode tersebut di bawah ini:

```html
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eos numquam quas deserunt porro doloremque perferendis illo sunt repudiandae ipsum facere, perspiciatis error quod accusamus delectus blanditiis asperiores cum pariatur!</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum illum obcaecati perspiciatis quam architecto odio excepturi temporibus aliquam quas saepe, esse molestias ad perferendis voluptatum unde nostrum distinctio dolorem accusantium?</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolore aspernatur delectus harum sequi molestiae nisi quis dolorum suscipit molestias quod a voluptatum ad itaque, veniam alias architecto eaque. Tenetur.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati possimus ducimus ipsum voluptate quibusdam error nihil exercitationem, quas incidunt earum consequatur non consequuntur quidem. Repellendus itaque similique ducimus pariatur.</p>
```

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-03-paragraf.png" alt="Hasil dari contoh kode elemen paragraf"/>
	<figcaption>Gambar hasil dari contoh kode elemen paragraf</figcaption>
</figure>

### Teks

Menambahkan sebuah tulisan biasa pada HTML bisa dicapai menggunakan elemen `span` yang menghasilkan tulisan biasa tanpa ada tambahan gaya apapun.

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-04-text.png" alt="Hasil dari contoh kode elemen span"/>
	<figcaption>Gambar hasil dari contoh kode elemen span</figcaption>
</figure>

Melihat dari gambar di atas, kita mungkin tidak mengetahui bahwa sebenarnya kalimat tersebut terdiri dari beberapa elemen `span` karena memang secara kasat mata tidak terdapat jarak yang memisahkan antara satu elemen `span` dengan elemen `span` berikutnya. Berikut ini adalah kode dari tampilan yang terlihat pada gambar sebelumnya:

```html
<span>Lorem ipsum dolor sit amet consectetur,</span>
<span> adipisicing elit.</span>
<span> Quidem eos numquam quas deserunt porro doloremque perferendis illo sunt repudiandae ipsum facere,</span>
<span> perspiciatis error quod accusamus delectus blanditiis asperiores cum pariatur!</span>
```

### Cetak Tebal dan Miring

Dalam sebuah kalimat atau paragraf sudah lazim bila ada satu atau lebih kata yang ingin kita tambahkan gaya tambahan untuk memperjelas maknanya atau sekadar mengikuti kaidah penulisan yang benar seperti menambahkan cetak tebal maupun membuat cetak miring pada sebuah kata. Hal ini bisa dicapai dengan menggunakan elemen `b` untuk cetak tebal dan elemen `i` untuk cetak miring, seperti bisa kita lihat pada contoh kode berikut:

```html
<span>Lorem <b>ipsum dolor</b> sit amet <i>consectetur</i></span>
```

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-05-cetak-tebal-miring.png" alt="Hasil dari contoh kode cetak tebal dan miring"/>
	<figcaption>Gambar hasil dari contoh kode cetak tebal dan miring</figcaption>
</figure>

### Penekanan

Memberikan penekanan makna pada sebuah kata dalam kalimat dibutuhkan untuk memperjelas makna dan memberikan pemahaman lebih baik utamanya buat robot yang melakukan penelusuran terhadap website kita nantinya. Membuat kata dengan cetak tebal dan miring saja tidak cukup membuat robot tersebut mengerti kebutuhan kita akan penekanan kata. HTML melakukan ini dengan menyediakan elemen terpisah dari sekadar memberi gaya pada sebuah kata. Kita bisa menggunakan elemen `strong` dan `em` untuk memberikan penekanan ini. Secara kasat mata hasilnya tidak akan terlihat berbeda dengan kita menggunakan elemen `b` maupun `i` yang sudah kita pelajari sebelumnya. Mari kita lihat contoh kode dan tampilan yang dihasilkan dari kedua elemen berikut:

```html
<span>Lorem <strong>ipsum dolor</strong> sit amet <em>consectetur</em></span>
```

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-06-penekanan.png" alt="Hasil dari contoh kode penekanan"/>
	<figcaption>Gambar hasil dari contoh kode penekanan</figcaption>
</figure>

### Hyperlink atau Tautan

Hyperlink atau tautan digunakan untuk mengarahkan satu elemen ke halaman lain, eleman tersebut bisa jadi bermacam-macam mulai dari teks, tombol, maupun berbagai elemen lain di dalam tautan ini. Untuk membuat sebuah tautan di HTML kita bisa menggunakan elemen `a` yang diiringi dengan atribut `href` sebagai letak halaman yang ingin dituju dan `title` sebagai pembantu bagi teman-teman yang menyandang disabilitas untuk memahami fungsi dari tautan tersebut. Mari kita lihat contoh sederhana menggunakan tautan biasa dengan sebuah teks di dalamnya:

```html
<span>Jika kalian klik kata <a href="tautan.html" title="sebuah tautan">tautan</a> ini, maka akan mengarah ke halaman lain.</span>
```

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-07-tautan.png" alt="Hasil dari contoh kode tautan sederhana"/>
	<figcaption>Gambar hasil dari contoh kode tautan sederhana</figcaption>
</figure>

#### Alamat pada tautan

Kalau kita lihat pada kode sebelumnya, kita menambahkan atribut `href="tautan.html"`. Dengan cara ini berarti kita akan bisa tautan ke halaman yang relatif dengan posisi halaman sekarang. Ini bukanlah cara satu-satunya untuk menambahkan sebuah alamat pada sebuah tautan, ada beberapa alternatif cara, untuk lebih memahami berikut kita akan coba kupas lebih jauh mengenai cara yang bisa kita gunakan dalam menambahkan alamat pada tautan.

Bila kita anggap alamat website sebagai sebuah direktori atau bisa disimulasikan sebagai berikut:

```sh
www.belajar.com/
├── index.html
├── tautan.html
├── gawai/
      ├── index.html
      ├── samsung.html
      └── iphone.html
      └── xiaomi.html
├── motor/
      ├── index.html
      ├── honda.html
      └── yamaha.html
      └── suzuki.html
```

Paling tidak ada dua cara untuk mengarahkan alamat dari sebuah tautan, diantara:

**1. Alamat Absolut**

Ini cara yang mudah karena kita cukup menambahkan alamat penuh sehingga tidak perlu mengetahui posisi kita saat ini ada di halaman atau direktori mana. dari contoh direktori diatas, katakanlah saya sekarang berada di `https://www.belajar.com/` dan ingin menambahkan tautan ke arah `honda.html` maka saya bisa menambahkan atribut `href="https://www.belajar.com/motor/honda.html"`. Tapi cara ini juga sangat tergantung pada domain atau direktori utama yang kita gunakan, sekali kita ganti nama direktori maka tautan ini tidak akan berjalan. Katakan saja kita menggunakan alamat yang berbeda ketika proses pembangunan di lokal dan ketika sudah dikirimkan ke lingkungan produksi, tautan dengan alamat absolut tidak akan bekerja sesuai harapan kita.

**2. Alamat Relatif**

Untuk menyelesaikan masalah yang ditemui saat menggunakan alamat absolut, kita bisa menggunakan alamat relatif. Alamat relatif ini juga bisa bermacam-macam, tergantung mau relatif kemana. Beberapa diantaranya yang bisa kita gunakan adalah:

- **Relatif terhadap alamat utama**

Alamat ini memastikan kita akan selalu mengarah ke alamat atau direktori paling atas. Caranya menggunakan awalan `/`. Contoh yang sama, saya ingin menambahkan tautan ke halaman `honda.html` maka saya bisa menambahkan atribut `href="/motor/honda.html"`. Dengan cara ini, meskipun kita sedang menggunakan alamat utama yang berbeda misal `https://www.bukan-belajar.com/` maka tautan tersebut tetap akan mengarah sesuai dengan domain yang sedang aktif kita gunakan pada saat itu, dalam kasus ini berarti akan mengarah ke `https://www.bukan-belajar.com/motor/honda.html`.

- **Relatif terhadap posisi saat ini**

Alamat ini bergantung pada posisi kita saat ini berada, misal saya ingin mengarahkan ke `honda.html` dan posisi sekarang berada di `https://www.belajar.com/`, maka saya bisa menggunakan atribut `href="./motor/honda.html"`. Cara ini tidak akan berjalan bila posisi kita berada di direktori yang berbeda, misalkan posisi saat ini sedang berada di `https://www.belajar.com/gawai/samsung.html` maka untuk mencapai `honda.html` kita harus memundurkan direktori dulu sebelum mencari `honda.html` atau bisa ditulis dengan atribut `href="../motor/honda.html"`. Bila kita cermati ada dua tanda yang digunakan, pertama titik satu `.` untuk mengarah pada direktori saat ini dan dua titik `..` untuk mengarah pada direktori sebelumnya.

#### Membuka tautan pada tab baru

Bila kita buka kode yang telah kita buat diatas dan coba kita klik tautan tersebut, maka kita akan diarahkan ke alamat baru yakni `tautan.html` tapi tanpa membuka tab baru. Ini artinya kita akan menambahkan sejarah navigasi baru pada tab yang sedang kita buka. Ini cara yang normal, tapi pada beberapa kasus cara ini menjadikan pengguna kita malah pergi dari website kita saat ini. Contohnya saja ketika kita ingin membuaut sebuah tautan yang mengarah ke halaman website orang lain misalkan kita arahkan tautan tersebut ke `facebook.com`, maka sebaiknya kita tetap mempertahankan website kita terbuka pada tab saat ini dan mengarahkan pengguna untuk membuka tautan tersebut pada tab baru. Dari contoh tersebut, kita bisa simpulkan bahwa cara ini memang paling cocok dan paling sering digunakan untuk mengarahkan tautan ke alamat di luar halaman kita.

Untuk mencapai interaksi yang seperti ini pada sebuah tautan kita harus menambahkan atribut tambahan pada tautan kita yakni `target` dengan nilai `_blank`. Jadi kita bisa menambahkan tautan seperti contoh berikut:

```html
<span>Ayo pergi ke <a href="https://www.facebook.com/" title="Facebook" target="_blank">Facebook</a>.</span>
```

Nilai dari atribut `target` itu sendiri bukan hanya `_blank` tapi ada juga `_self`, `_parent` dan `_top`. Nilai `_self` adalah bawaan, sama saja saat kita tidak membubuhkan atribut ini, nilai `_parent` dan `_top` digunakan bila website kita akan diakses di dalam sebuah iFrame. Tapi berdasarkan pengalaman saya, dari ketiga nilai diatas hanya `_blank` yang akan sering digunakan pada sebagian besar kasus.

Catatan tambahan ketika kita menggunakan atribut `target="_blank"`, diharapkan selalu menambahkan atribut `rel="noopener"` dikarenakan ada alasan keamanan dimana halaman tujuan bisa memiliki akses untuk memanipulasi halaman sumber tautan tersebut. Bila kita contohkan pada kode kita sebelumnya maka menjadi seperti berikut ini:

```html
<span>Ayo pergi ke <a href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noopener">Facebook</a>.</span>
```

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-08-tautan-eksternal.png" alt="Hasil dari contoh kode tautan yang membuka tab baru"/>
	<figcaption>Gambar hasil dari contoh kode tautan yang membuka tab baru</figcaption>
</figure>

#### Membuat tautan dengan elemen berbeda

Seperti sudah saya singgung sebelumnya, tautan bisa juga ditempatkan pada elemen lain selain teks seperti menggunakan elemen gambar ataupun tombol. Kita akan melihat bagaimana contoh kode yang menggunakan gambar dan tombol sebagai sebuah tautan berikut ini:

```html
<span>Klik tombol dan gambar berikut:</span>
<br/>
<a href="tautan.html" title="Sebuah tautan dengan tombol"><button>tombol ini</button></a>
<a href="tautan.html" title="Sebuah tautan dengan gambar"><img src="logo.png" alt="Belajar Frontend" /></a>
```

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-09-tautan-dengan-tombol-dan-gambar.png" alt="Hasil dari contoh kode tautan dengan tombol dan gambar"/>
	<figcaption>Gambar hasil dari contoh kode tautan dengan tombol dan gambar</figcaption>
</figure>

### Tautan menuju Email

Ada beberapa tautan spesial dalam HTML yang bisa mengarah langsung ke suatu tujuan, misalnya langsung ke email, aplikasi atau tujuan spesial lainnya. Kita akan membahas salah satunya yakni tautan yang mengarah langsung ke suatu email.

Jika pada tautan biasa kita membuat dengan:

```html
<a href="tautan.html" title="Sebuah tautan">Klik saya</a>
```

Maka kita bisa membuat tautan untuk mengirim email dengan menambahkan prefix `mailto:` dan diikuti dengan keterangan lainya, seperti alamat email seperti berikut:

```html
<a href="mailto:someone@yoursite.com">Email Us</a>
```

Tautan ini akan membuka aplikasi email client yang ada di komputer kalian dan membuat email baru diperuntukkan `someone@yoursite.com`.

Kita bisa juga menambahkan informasi lainnya seperti subjek, tembusan baik cc ataupun bcc dan isi pesan itu sendiri, bisa dilihat pada contoh kode berikut:

```html
<a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here">Email Us</a>
```

## Blok Kontainer

Blok kontainer bisa diibaratkan sebagai wadah bagi komponen lain sehingga mudah bagi kita untuk mengelompokkan beberapa elemen kedalam satu grup. Blok kontainer yang paling umum dan akan sering kita gunakan adalah elemen `div` (*division*). Elemen `div` dikenal sebagai elemen yang murni dan tidak membawa gaya bawaan yang biasanya disematkan oleh masing-masing peramban yang biasanya penampakannya berbeda antara satu peramban dengan peramban lain. Satu-satunya yang mungkin menjadi bawaan adalah bahwa elemen `div` memiliki properti CSS (akan dipelajari pada bagain berikutnya) `display` dengan nilai `block`. Ini artinya `div` akan mengalir ke bawah bukan ke samping seperti kita menambahkan elemen `span` yang akan selalu mengalir ke samping. Mengalir ke bawah berarti `div` akan selalu membuat baris baru di bawah dari elemen sebelumnya. Untuk membuat sebuah elemen `div` bisa mengalir ke samping dibutuhkan bantuan CSS yang bisa mengatur posisi dari elemen `div` dalam sebuah halaman HTML.

Berikut contoh bagaimana kita menggunakan elemen `div` untuk membungkus elemen lain, sehingga kita bisa membedakan ketika kita menambahkan sebuah blok kontainer dan ketika kita tidak menambahkannya:

```html
<h1>Dua elemen dengan dan tanpa blok kontainer</h1>

<h2>Tanpa blok kontainer</h2>
<a href="tautan.html" title="Sebuah tautan"><img src="logo.png" alt="Belajar Frontend" /></a>
<a href="tautan.html" title="Sebuah tautan dengan gambar"><img src="logo.png" alt="Belajar Frontend" /></a>

<h2>Dengan blok kontainer</h2>
<div>
	<a href="tautan.html" title="Sebuah tautan"><img src="logo.png" alt="Belajar Frontend" /></a>
</div>
<div>
	<a href="tautan.html" title="Sebuah tautan dengan gambar"><img src="logo.png" alt="Belajar Frontend" /></a>
</div>
```

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-10-blok-kontainer.png" alt="Hasil dari contoh kode blok kontainer"/>
	<figcaption>Gambar hasil dari contoh kode blok kontainer</figcaption>
</figure>

Meskipun elemen `div` menjadi satu yang paling populer, tapi sebenarnya kita disarankan untuk tidak menggunakan elemen `div` di semua bagian HTML kita. Hal ini karena sebenarnya tersedia juga beberapa blok kontainer lain yang memiliki sifat yang sama dengen elemen `div` namun lebih tepat digunakan pada satu kasus karena alasan semantik. Beberapa komponen lain yang tersedia di HTML yang bisa digunakan sebagai blok kontainer adalah elemen `header`, `nav`, `aside`, `article`, `section`, `footer` dan beberapa komponen lain yang mungkin terlewat.

## Tabel

Seperti namanya, elemen tabel digunakan untuk membuat tabel pada sebuah HTML. Tabel merupakan salah satu elemen penting terutama bila kita bertugas untuk menampilkan data yang mana tabel menjadi solusi paling mudah digunakan untuk mengolah dan menampilkan berbagai data dalam bentuk baris dan kolomnya. Hal ini mungkin juga ditunjang dengan terbiasanya para pengguna kita dalam mengolah dan melihat berbagai data lewat aplikasi pengolah data layaknya Microsoft Excel, Google Sheets maupun aplikasi sejenisnya.

### Dasar-dasar Tabel

Sebuah tabel pada HTML biasa kita pecah ke dalam beberapa bagian yang membentuknya, yakni `header` yang berisikan kolom-kolom judul dan sebagainya, `body` yang berisikan baris dan kolom dengan nilai dari data yang ditampilkan serta `footer` yang biasanya berisikan informasi tambahan ataupun hasil berbagai kalkulasi dari masing-masing kolom.

Berikut adalah contoh kode dasar sebuah tabel:

```html
<table>
	<thead>
		<tr>
			<th>Judul Kolom 1</th>
			<th>Judul Kolom 2</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Baris 1 Kolom 1</td>
			<td>Baris 1 Kolom 2</td>
		</tr>
		<tr>
			<td>Baris 2 Kolom 1</td>
			<td>Baris 2 Kolom 2</td>
		</tr>
	</tbody>
</table>
```

Kode diatas bila dibuka di peramban akan menghasilkan tampilan:

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-11-basic-table.png" alt="Hasil dari contoh kode dasar sebuah tabel"/>
	<figcaption>Gambar hasil dari contoh kode dasar sebuah tabel</figcaption>
</figure>

Tampilan tersebut masih lumayan susah dimengerti karena tidak ada batas antara kolom dan barisnya, untuk mengatasinya kita cukup menambahkan attribut `border=1` pada tag `table` sehingga menghasilkan tampilan:

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-11-basic-table-border.png" alt="Hasil dari kode tabel dengan border"/>
	<figcaption>Gambar hasil dari kode tabel dengan border</figcaption>
</figure>

### Kolom dan Baris

Kolom dan baris merupakan bagian utama ketika kita ingin membuat sebuah table. Berikut saya contohkan bagaimana kita melihat sebuah kolom maupun baris pada aplikasi pengolah data Google Sheets pada gambar berikut:

<figure>
	<img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-13-11-basic-table-on-gsheet.png" alt="Contoh tabel pada Google Sheet"/>
	<figcaption>Gambar tabel pada Google Sheet</figcaption>
</figure>

**A** dan **B** serta semua urutan menurun kita bisa sebut satu kolom, sedangkan **1**, **2**, **3** dan urutan kesampingnya kita sebut satu baris. Kita bisa menentukan satu lokasi **Cell** dengan menyebut lokasi kolom serta barisnya, misalkan saya ingin mengambil nilai baris ke 1 dan kolom 1 maka saya bisa menyebut nilai dari **A2**.

Memahami kolom maupun baris di HTML akan lebih mudah bila kita terbiasa dengan aplikasi pengolah data seperti diatas. Pada HTML baris direpresentasikan dengan menggunakan tag `<tr>` sedangkan kolomnya menggunakan tag `<td>` atau `<th>` bila posisinya sebagai judul.

Untuk membuat sebuah tabel dengan baris dan kolom kita perlu membuat barisnya terlebih dahulu baru diikuti dengan berapa jumlah kolom yang ada pada baris tersebut, ini berarti kita menambahkan tag `<tr>` dimana di dalamnya terdapat beberapa `<td>`, seperti pada contoh kode berikut:

```html
<tr>
	<td>Baris 1 Kolom 1</td>
	<td>Baris 1 Kolom 2</td>
	<td>Baris 1 Kolom 3</td>
	<td>Baris 1 Kolom 4</td>
	<td>Baris 1 Kolom 5</td>
</tr>
```

Bila kita ingin menambahkan baris baru, maka kita hanya perlu membuat satu lagi `<tr>` yang sejajar dengan baris sebelumnya, seperti pada contoh berikut:

```html
<tr>
	<td>Baris 1 Kolom 1</td>
	<td>Baris 1 Kolom 2</td>
	<td>Baris 1 Kolom 3</td>
	<td>Baris 1 Kolom 4</td>
	<td>Baris 1 Kolom 5</td>
</tr>
<tr>
	<td>Baris 2 Kolom 1</td>
	<td>Baris 2 Kolom 2</td>
	<td>Baris 2 Kolom 3</td>
	<td>Baris 2 Kolom 4</td>
	<td>Baris 2 Kolom 5</td>
</tr>
```

### Penggabungan Kolom atau Baris

Pada aplikasi pengolah data, terdapat fitur yang digunakan untuk menggabungkan beberapa **Cell** menjadi satu, fitur ini disebut *merge cell*. *Merge cell* Bisa diaplikasikan baik untuk baris maupun kolom.

// TODO -- gambar merce cell di Google Sheet

Pada tabel di HTML fitur merge cell juga bisa diaplikasikan, hanya saja implementasinya sedikit berbeda ketika kita ingin menggabungkan beberapa baris dengan saat kita menggabungkan beberapa kolom.
Saat kita ingin menambahkan beberapa kolom kita bisa menambahkan atribut `colspan=JUMLAH_KOLOM` pada tag `<td>`, sedangkan untuk menggabungkan baris kita perlu menambahkan atribut `rowspan=JUMLAH_BARIS`.
Berikut contoh kode penggunaan `colspan` dan `rowspan` pada sebuah tabel:

// TODO -- kode html colspan & rowspan

Hal yang perlu diperhatikan ketika menggunakan `colspan` maupun `rowspan` adalah jumlah tag `<td>` yang menjadi tidak lagi seimbang dengan baris atau kolom lainnya.
Ini dikarenakan penggunaan `colspan` ataupun `rowspan` membuat kita mesti mengibaratkan bahwa kita mempunyai sejumlah tag `<td>` yang digabungkan, sehingga jumlah tag `<td>` berkurang sejumlah baris ataupun kolom yang digabungkan.

## Daftar (*List*)

Daftar digunakan ketika kita membutuhkan untuk mengelompokkan sekumpulan informasi yang saling berkaitan baik yang harus berurutan ataupun yang tidak harus berurutan.
Pada HTML memang dibedakan ketika kita ingin membuat daftar yang berurutan dengan daftar yang tidak berurutan. Tapi keduanya pada dasarnya berbagi hal yang sama, yakni cara membuat elemen dibawahnya.

### Daftar Berurut

Untuk membuat daftar berurutan kita bisa menggunakan tag `<ol>` diikuti dengan tag `<li>` sebagai anggota dari setiap elemen.
Secara bawaan setiap anggota dalam daftar berurut akan memiliki angka (*numbering*) yang berurutan. Hal ini tentu memudahkan kita dalam membuat daftar karena tidak perlu lagi manual menambahkan angka di depannya.
Berikut contoh kode untuk membuat daftar berurut:

// TODO -- kode list berurut

Kode di atas akan menghasilkan tampilan sebagai berikut:

// TODO -- gambar hasil

### Daftar Tidak Berurut

Mirip dengan daftar berurut, daftar tidak berurut juga menggunakan tag `<li>` pada setiap anggotanya. Hal yang berbeda adalah untuk membuat daftar tidak berurutan kita bisa menggunakan tag `<ul>` sebagai pembungkusnya.
Berikut contoh kode daftar tidak berurut:

// TODO -- kode list

Kode di atas akan menghasilkan tampilan sebagai berikut:

// TODO -- gambar hasil

### Daftar Bersarang

Daftar bersarang adalah daftar di dalam daftar. Ini sering kita lihat pada sebuah daftar isi misalnya. Kita bisa mengkombinasikan baik daftar berurut maupun daftar tidak berurut dalam membuat daftar bersarang.
Tergantung pada kebutuhan dan hal yang memang ingin dicapai.

// TODO -- kode

Kode di atas menghasilkan tampilan:

// TODO -- gambar hasil

### Daftar dengan Deskripsi

Sedikit berbeda dengan membuat dua daftar diatas, membuat daftar dengan deskripsi bisa diawali dengan tag `<dl>` dan diikuti dengan tag `<dt>` sebagai anggota yang befungsi sebagai judul dan `<dd>` sebagai anggota yang berfungsi sebagai penjelas atau deskripsi dari judul.
Berikut contoh kode daftar dengan deskripsi:

// TODO -- kode

Kode di atas menghasilkan tampilan:

// TODO -- gambar hasil

## Form

### Dasar Form

### Inputan Teks dan Variasinya

#### Input Teks

#### Input Password

#### Input Date

#### Input Number

#### Input Telepon

#### Text Area

#### Input Hidden

### Inputan Pilihan

#### Radio Button

#### Checkbox

#### Dropdown

### Tombol

#### Submit

#### Reset

#### Tombol Biasa

### Pengelompokkan Form

### Validasi

## Media

### Gambar

### Audio

### Video

## Elemen Lain

### Collapsible
