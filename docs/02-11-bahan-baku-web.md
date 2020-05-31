---
id: 02-11-bahan-baku-web
title: Bahan Baku Web
sidebar_label: Bahan Baku Web
---

Sebelum belajar lebih lanjut, kita perlu sama-sama mengetahui sebenarnya hal apa saja yang terdapat dalam sebuah web. Hal ini agar pada materi selanjutnya diharapkan kita semua bisa memahami berbagai istilah yang mungkin disebutkan. Dengan mengerti dasar dan bagaimana web itu bekerja, akan memudahkan kita mengerti topik turunannya.

## Klien - Server pada Web

Sebuah web tidak dapat terlepas dari komunikasi Klien - Server. Ada beberapa web yang bisa hidup tanpa Server, tapi sebagian besar website yang mendukung sebuah bisnis yang dikelola secara profesional sebagian besar masih membutuhkan Server untuk bisa digunakan. Jadi apa sebenarnya Klien - Server ini, apa bedanya? Kenapa ada kode yang berjalan di Server dan ada kode lain yang berjalan di Server? Kita akan coba kenalkan agar sebelum memulai belajar lebih jauh kita bisa mengerti gambaran besar bagaimana Klien - Server dibutuhkan oleh sebuah web.

Secara ilustrasi sederhana, hubungan antara Klien dan Server bisa dilihat pada gambar di bawah ini:

<figure>
    <img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-11-client-server.jpg" alt="Gambar Hubungan Klien - Server"/>
    <figcaption>Gambar Hubungan Klien - Server</figcaption>
</figure>

Klien adalah perangkat yang secara langsung digunakan oleh pengguna untuk mengakses web yang kita sajikan, kalau dalam spesifik dunia web berarti sebuah browser yang terpasang pada perangkat seperti handphone, komputer desktop maupun komputer jinjing. Pengguna yang berinteraksi dengan browser akan melihat Klien web kita, sehingga bisa dijelaskan bahwa kode-kode Klien pada sebuah web adalah kode yang membentuk tampilan dan berbagai interaksi yang langsung dilihat dan diakses oleh pengguna. Kode Klien terdiri dari 3 komponen yang saling berkaitan yakni HTML (*Hyper Text Markup Language*), CSS (*Cascading Style Sheet*) dan JavaScript. Ketiganya adalah fokus materi yang akan kita bahas pada buku ini.

Sedangkan Server mungkin tidak dilihat oleh pengguna kita, tapi dibalik layar melalui Internet kode-kode Klien akan memanggil kode yang berada di Server kita setiap kali dibutuhkan untuk mendapatkan informasi valid yang sebelumnya sudah disimpan dalam basis data seperti data-data produk yang tersedia, data pengguna yang sudah kita isikan pada layanan tersebut maupun data-data lainnya yang hanya bisa didapatkan setelah kode klien bertanya pada kode Server. Data yang berasal dari Server inilah yang membuat sebuah website menjadi dinamis, karena tidak lagi menyimpan data di Klien melainkan bertanya pada Server untuk menyimpan data beru maupun meminta data yang ada. Kode yang hidup di Server bisa sangat beragam dan bisa dibangun diatas bahasa pemrograman dan tumpukan teknologi yang berbeda antara satu website dengan lainnya. Bahasa-bahasa pemrograman yang umumnya digunakan untuk kode Server seperti halnya PHP, Java, Go Lang, Ruby, Python, Pascal, Perl, Elixir maupun banyak bahasa lainnya. Secara umum kode di Server memiliki kemampuan untuk menangani pengolahan data ke dalam atau dari sebuah basis data, manipulasi berkas di dalam suatu sistem file, memanggil dan berkomunikasi antar Server, menjalankan tugas berat secara berkala serta berbagai tugas di balik layar lainnya.

## Sekilas Mengenai HTML, CSS dan JavaScript

Pada bahasan mengenai web terutama mengenai tampilan antarmuka, komposisi utama yang membangun adalah HTML (*Hyper Text Markup Language*), CSS (*Cascading Style Sheet*) dan JavaScript. Kita akan belajar ketiga hal tersebut secara komprehensif pada bagian berikutnya, tapi secara singkat kita akan berkenalan dengan ketiga teknologi yang berada dibalik asiknya sebuah web yang sehari-hari kita akses. Saya akan menjelaskan kombinasi ketiganya dengan sembari menganalogikan pada hal yang mungkin lebih mudah dipahami.

Gambar di bawah ini menunjukkan hubungan antara ketiga teknologi diatas secara sederhana:

<figure>
    <img loading="lazy" src="/ebook-belajar-frontend/img/contents/02-11-html-css-js.png" alt="Ilustrasi HTML, CSS dan JavaScript"/>
    <figcaption>Ilustrasi HTML, CSS dan JavaScript</figcaption>
</figure>

**HTML** merupakan bagian paling dasar dalam sebuah web, bertugas memberikan struktur informasi mengenai isi konten dari sebuah web. HTML bila dianalogikan pada tubuh manusia bisa disamakan dengan kerangka tulang pada tubuh yang memberikan bentuk manusia kita.

**CSS** disamping itu merupakan pendukung dari HTML, dimana HTML hanya memberikan bentuk dasar tanpa menjelaskan bagaimana suatu konten itu akan ditampilkan secara rapi dengan memperbaiki peletakkan, pewarnaan, dan pemberian gaya lain yang mendukung sebuah konten HTML bisa lebih nyaman dipandang dan digunakan oleh pengguna. CSS bila dianalogikan pada tubuh kita mungkin seperti kulit, rambut, dan berbagai bagian tubuh yang memperindah keberadaan kita sebagai manusia.

**JavaScript** memiliki peran yang cukup vital pada banyak website modern saat ini. HTML dan CSS saja tidak cukup untuk membuat website yang menarik, dibutuhkan JavaScript untuk memberikan secara instan tanpa perlu bertanya dulu pada bagian Server. Bayangkan kita punya form isian untuk sebuah alamat, namun setelah ditelisik ternyata Basis Data kita hanya mampu memuat karakter tidak lebih dari 200 huruf, dengan JavaScript kita bisa menghindari pengguna mengirim data dengan lebih dari 200 karakter. JavaScript bila diibaratkan pada tubuh kita seperti darah, otot dan berbagai sel di dalam tubuh yang memberikan kita hidup yang interaktif, membuat kita mampu berjalan, dan melakukan pekerjaan sehari-hari. Hal-hal yang seringkali tidak terlihat secara langsung namun kehadirannya sangat memperngaruhi keberadaan kita.





