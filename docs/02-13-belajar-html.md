---
id: 02-13-belajar-html
title: Belajar HTML
sidebar_label: Belajar HTML
---

## Sejarah HTML

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

Elemen `body` nantinya akan diisi dengan konten yang memang akan secara langsung dilihat oleh pengguna yang mengakses berkas HTML kita, seperti text, tabel, form dan berbagai elemen lainnya. Contoh kita akan menambahkan sebuah text pada berkas HTML yang sudah kita buat, kalian bisa melihat caranya seperti kode berikut:

```html
<body>
	<h1>Belajar HTML</h1>
</body>
```

Keseluruhan kode HTML dasar tersebut yang bila dikombinasikan dan disimpan ke dalam berkas yang kita beri nama `index.html` dan dibuka dengan peramban di komputer kita akan menampilkan hasil seperti berikut:

<figure>
	<img src="/img/contents/02-13-01-basic-html.png" alt="Hasil dari kode HTML dasar"/>
	<figcaption>Gambar hasil dari kode HTML dasar</figcaption>
</figure>

## Heading dan Text

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
	<img src="/img/contents/02-13-02-heading.png" alt="Hasil dari kode elemen Heading"/>
	<figcaption>Gambar hasil dari kode elemen Heading</figcaption>
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
	<img src="/img/contents/02-13-03-paragraf.png" alt="Hasil dari kode elemen paragraf"/>
	<figcaption>Gambar hasil dari kode elemen paragraf</figcaption>
</figure>


### Text

Menambahkan sebuah tulisan biasa pada HTML bisa dicapai menggunakan elemen `span` yang menghasilkan tulisan biasa tanpa ada tambahan gaya apapun.

<figure>
	<img src="/img/contents/02-13-04-text.png" alt="Hasil dari kode elemen span"/>
	<figcaption>Gambar hasil dari kode elemen span</figcaption>
</figure>

Melihat dari gambar di atas, kita mungkin tidak mengetahui bahwa sebenarnya kalimat tersebut terdiri dari beberapa elemen `span` karena memang secara kasat mata tidak terdapat jarak yang memisahkan antara satu elemen `span` dengan elemen `span` berikutnya. Berikut ini adalah kode dari tampilan yang terlihat pada gambar sebelumnya:

```html
<span>Lorem ipsum dolor sit amet consectetur,</span>
<span> adipisicing elit.</span>
<span> Quidem eos numquam quas deserunt porro doloremque perferendis illo sunt repudiandae ipsum facere,</span>
<span> perspiciatis error quod accusamus delectus blanditiis asperiores cum pariatur!</span>
```

### Cetak Tebal dan Miring

Dalam sebuah kalimat atau paragraf sudah lazim bila ada satu atau lebih kata yang ingin kita tambahkan gaya tambahan untuk memperjelas maknanya atau mengikuti kaidah penulisan yang benar seperti menambahkan cetak tebal maupun membuat cetak miring pada sebuah kata. Hal ini bisa dicapai dengan menggunakan elemen `b` untuk cetak tebal dan elemen `i` untuk cetak miring.

### Penekanan

### Hyperlink atau Tautan

## Blok Kontainer

### Div

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

### Inputan Text dan Variasinya

#### Input Text

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
