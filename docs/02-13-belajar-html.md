---
id: 02-13-belajar-html
title: Belajar HTML
sidebar_label: Belajar HTML
---

## Sejarah HTML

-- TODO

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

Keseluruhan kode HTML dasar tersebut yang bila dikombinasikan dan disimpan ke dalam berkas yang kita beri nama `index.html` dan dibuka dengan peramban di komputer kita akan menampilkan hasil seperti berikut:

<figure>
	<img src="/img/contents/02-13-01-basic-html.png" alt="Hasil dari contoh kode HTML dasar"/>
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
	<img src="/img/contents/02-13-02-heading.png" alt="Hasil dari contoh kode elemen Heading"/>
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
	<img src="/img/contents/02-13-03-paragraf.png" alt="Hasil dari contoh kode elemen paragraf"/>
	<figcaption>Gambar hasil dari contoh kode elemen paragraf</figcaption>
</figure>


### Teks

Menambahkan sebuah tulisan biasa pada HTML bisa dicapai menggunakan elemen `span` yang menghasilkan tulisan biasa tanpa ada tambahan gaya apapun.

<figure>
	<img src="/img/contents/02-13-04-text.png" alt="Hasil dari contoh kode elemen span"/>
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
	<img src="/img/contents/02-13-05-cetak-tebal-miring.png" alt="Hasil dari contoh kode cetak tebal dan miring"/>
	<figcaption>Gambar hasil dari contoh kode cetak tebal dan miring</figcaption>
</figure>

### Penekanan

Memberikan penekanan makna pada sebuah kata dalam kalimat dibutuhkan untuk memperjelas makna dan memberikan pemahaman lebih baik utamanya buat robot yang melakukan penelusuran terhadap website kita nantinya. Membuat kata dengan cetak tebal dan miring saja tidak cukup membuat robot tersebut mengerti kebutuhan kita akan penekanan kata. HTML melakukan ini dengan menyediakan elemen terpisah dari sekadar memberi gaya pada sebuah kata. Kita bisa menggunakan elemen `strong` dan `em` untuk memberikan penekanan ini. Secara kasat mata hasilnya tidak akan terlihat berbeda dengan kita menggunakan elemen `b` maupun `i` yang sudah kita pelajari sebelumnya. Mari kita lihat contoh kode dan tampilan yang dihasilkan dari kedua elemen berikut:

```html
<span>Lorem <strong>ipsum dolor</strong> sit amet <em>consectetur</em></span>
```

<figure>
	<img src="/img/contents/02-13-06-penekanan.png" alt="Hasil dari contoh kode penekanan"/>
	<figcaption>Gambar hasil dari contoh kode penekanan</figcaption>
</figure>

### Hyperlink atau Tautan

Hyperlink atau tautan digunakan untuk mengarahkan satu elemen ke halaman lain, eleman tersebut bisa jadi bermacam-macam mulai dari teks, tombol, maupun berbagai elemen lain di dalam tautan ini. Untuk membuat sebuah tautan di HTML kita bisa menggunakan elemen `a` yang diiringi dengan atribut `href` sebagai letak halaman yang ingin dituju dan `title` sebagai pembantu bagi teman-teman yang menyandang disabilitas untuk memahami fungsi dari tautan tersebut. Mari kita lihat contoh sederhana menggunakan tautan biasa dengan sebuah teks di dalamnya:

```html
<span>Jika kalian klik kata <a href="tautan.html" title="sebuah tautan">tautan</a> ini, maka akan mengarah ke halaman lain.</span>
```

<figure>
	<img src="/img/contents/02-13-07-tautan.png" alt="Hasil dari contoh kode tautan sederhana"/>
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
	<img src="/img/contents/02-13-08-tautan-eksternal.png" alt="Hasil dari contoh kode tautan yang membuka tab baru"/>
	<figcaption>Gambar hasil dari contoh kode tautan yang membuka tab baru</figcaption>
</figure>

#### Membuat tautan dengan elemen lain

Seperti sudah saya singgung sebelumnya, tautan bisa juga ditempatkan pada elemen lain selain teks seperti menggunakan elemen gambar ataupun tombol. Kita akan melihat bagaimana contoh kode yang menggunakan gambar dan tombol sebagai sebuah tautan berikut ini:

```html
<span>Klik tombol dan gambar berikut:</span>
<br/>
<a href="tautan.html" title="Sebuah tautan dengan tombol"><button>tombol ini</button></a>
<a href="tautan.html" title="Sebuah tautan dengan gambar"><img src="logo.png" alt="Belajar Frontend" /></a>
```

<figure>
	<img src="/img/contents/02-13-09-tautan-dengan-tombol-dan-gambar.png" alt="Hasil dari contoh kode tautan dengan tombol dan gambar"/>
	<figcaption>Gambar hasil dari contoh kode tautan dengan tombol dan gambar</figcaption>
</figure>

## Blok Kontainer

Blok kontainer bisa diibaratkan sebagai wadah bagi komponen lain sehingga mudah bagi kita untuk mengelompokkan beberapa elemen kedalam satu grup. Blok kontainer yang paling umum dan akan sering kita gunakan adalah elemen `div`. Elemen `div` dikenal sebagai elemen yang murni dan tidak membawa gaya bawaan yang biasanya disematkan oleh masing-masing peramban yang biasanya penampakannya berbeda antara satu peramban dengan peramban lain. Satu-satunya yang mungkin menjadi bawaan adalah bahwa elemen `div` memiliki properti CSS (akan dipelajari pada bagain berikutnya) `display` dengan nilai `block`. Ini artinya `div` akan mengalir ke bawah bukan ke samping seperti kita menambahkan elemen `span` yang akan selalu mengalir ke samping. Mengalir ke bawah berarti `div` akan selalu membuat baris baru di bawah dari elemen sebelumnya. Untuk membuat sebuah elemen `div` bisa mengalir ke samping dibutuhkan bantuan CSS yang bisa mengatur posisi dari elemen `div` dalam sebuah halaman HTML.

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
	<img src="/img/contents/02-13-10-blok-kontainer.png" alt="Hasil dari contoh kode blok kontainer"/>
	<figcaption>Gambar hasil dari contoh kode blok kontainer</figcaption>
</figure>

Meskipun elemen `div` menjadi satu yang paling populer, tapi sebenarnya kita disarankan untuk tidak menggunakan elemen `div` di semua bagian HTML kita. Hal ini karena sebenarnya tersedia juga beberapa blok kontainer lain yang memiliki sifat yang sama dengen elemen `div` namun lebih tepat digunakan pada satu kasus karena alasan semantik. Beberapa komponen lain yang tersedia di HTML yang bisa digunakan sebagai blok kontainer adalah elemen `header`, `nav`, `aside`, `article`, `section`, `footer` dan beberapa komponen lain yang mungkin terlewat.

## Tabel

### Dasar Tabel

### Kolom dan Baris

### Penggabungan Kolom atau Baris

## List

### Unordered List

### Ordered List

### Definition List

### Nested List

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
