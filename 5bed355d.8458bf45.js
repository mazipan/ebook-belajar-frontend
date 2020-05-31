(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{133:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return m})),n.d(e,"default",(function(){return d}));var t=n(1),i=n(9),b=(n(0),n(145)),r={id:"02-13-belajar-html",title:"Belajar HTML",sidebar_label:"Belajar HTML"},l={id:"02-13-belajar-html",title:"Belajar HTML",description:"## Mengenal HTML",source:"@site/docs/02-13-belajar-html.md",permalink:"/ebook-belajar-frontend/docs/02-13-belajar-html",editUrl:"https://github.com/mazipan/ebook-belajar-frontend/edit/master/docs/02-13-belajar-html.md",sidebar_label:"Belajar HTML",sidebar:"someSidebar",previous:{title:"Persiapan Lingkungan Kerja",permalink:"/ebook-belajar-frontend/docs/02-12-persiapan-lingkungan-kerja"},next:{title:"Belajar CSS",permalink:"/ebook-belajar-frontend/docs/02-14-belajar-css"}},m=[{value:"Mengenal HTML",id:"mengenal-html",children:[]},{value:"Struktur HTML",id:"struktur-html",children:[]},{value:"Heading dan Teks",id:"heading-dan-teks",children:[{value:"Heading",id:"heading",children:[]},{value:"Paragraf",id:"paragraf",children:[]},{value:"Teks",id:"teks",children:[]},{value:"Cetak Tebal dan Miring",id:"cetak-tebal-dan-miring",children:[]},{value:"Penekanan",id:"penekanan",children:[]},{value:"Hyperlink atau Tautan",id:"hyperlink-atau-tautan",children:[]}]},{value:"Blok Kontainer",id:"blok-kontainer",children:[]},{value:"Tabel",id:"tabel",children:[{value:"Dasar-dasar Tabel",id:"dasar-dasar-tabel",children:[]},{value:"Kolom dan Baris",id:"kolom-dan-baris",children:[]},{value:"Penggabungan Kolom atau Baris",id:"penggabungan-kolom-atau-baris",children:[]}]},{value:"Daftar",id:"daftar",children:[{value:"Daftar Berurut",id:"daftar-berurut",children:[]},{value:"Daftar Tidak Berurut",id:"daftar-tidak-berurut",children:[]},{value:"Daftar Bersarang",id:"daftar-bersarang",children:[]}]},{value:"Form",id:"form",children:[{value:"Dasar Form",id:"dasar-form",children:[]},{value:"Inputan Teks dan Variasinya",id:"inputan-teks-dan-variasinya",children:[]},{value:"Inputan Pilihan",id:"inputan-pilihan",children:[]},{value:"Tombol",id:"tombol",children:[]},{value:"Pengelompokkan Form",id:"pengelompokkan-form",children:[]},{value:"Validasi",id:"validasi",children:[]}]},{value:"Media",id:"media",children:[{value:"Gambar",id:"gambar",children:[]},{value:"Audio",id:"audio",children:[]},{value:"Video",id:"video",children:[]}]},{value:"Elemen Lain",id:"elemen-lain",children:[]}],u={rightToc:m};function d(a){var e=a.components,n=Object(i.a)(a,["components"]);return Object(b.b)("wrapper",Object(t.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"mengenal-html"},"Mengenal HTML"),Object(b.b)("p",null,"-- TODO"),Object(b.b)("h2",{id:"struktur-html"},"Struktur HTML"),Object(b.b)("p",null,"HTML pada dasarnya terdiri dari berbagai kumpulan ",Object(b.b)("em",{parentName:"p"},"tag")," yang memiliki fungsi masing-masing. Setiap ",Object(b.b)("em",{parentName:"p"},"tag")," tersebut hampir selalu berpasangan dengan diawali dengan sebuah ",Object(b.b)("em",{parentName:"p"},"tag")," pembuka dan diakhiri dengan tag penutup, seperti terlihat pada contoh berikut ini:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),"\x3c!-- Berikut adalah contoh sebuah tag pembuka --\x3e\n<tag>\n\n\x3c!-- Berikut adalah contoh sebuah tag penutup --\x3e\n</tag>\n")),Object(b.b)("p",null,"Semua ",Object(b.b)("em",{parentName:"p"},"tag")," seperti di atas biasa kita kenal dengan ",Object(b.b)("em",{parentName:"p"},"HTML Element")," (Elemen HTML) sehingga kita bisa menyebut contoh kode sebelumnya sebagai elemen ",Object(b.b)("em",{parentName:"p"},"tag"),", sedangkan di masing-masing elemen tersebut juga biasanya akan membawa informasi tambahan yang menempel pada tag pembukanya. Informasi tambahan ini disebut ",Object(b.b)("em",{parentName:"p"},"HTML Attribute")," (Atribut HTML). Contoh kita akan menambahkan informasi lebar dan tinggi dari elemen ",Object(b.b)("em",{parentName:"p"},"tag"),", maka kita bisa menambahkan atribut berikut:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),'<tag width="100" height="100"></tag>\n')),Object(b.b)("p",null,"Ketersediaan atribut untuk masing-masing elemen bisa berbeda-beda, tidak semua atribut bisa dipasangkan pada sembarangan elemen. Cara terbaik mempelajarinya tetap dengan memahami fungsi elemen itu sendiri dan membaca atribut-atribut apa yang bisa digunakan pada elemen tersebut."),Object(b.b)("p",null,"Struktur dasar dari sebuah HTML terdiri dari 3 elemen terluar yakni html, head dan body yang bisa dilihat dari contoh berikut:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),"<!DOCTYPE html>\n<html>\n <head></head>\n <body></body>\n</html>\n")),Object(b.b)("p",null,"Kode ",Object(b.b)("inlineCode",{parentName:"p"},"<!DOCTYPE html>")," dibuat tanpa dan ",Object(b.b)("em",{parentName:"p"},"tag")," penutup dan digunakan sebagai penanda bahwa kita akan membuat sebuah berkas HTML, pada jaman dahulu tidak sesederhana seperti diatas untuk mendefinisikan sebuah berkas HTML. Semua kode HTML yang akan kita tulis nantinya berada di dalam elemen ",Object(b.b)("inlineCode",{parentName:"p"},"html"),"."),Object(b.b)("p",null,"Elemen ",Object(b.b)("inlineCode",{parentName:"p"},"head")," nantinya akan berisi berbagai informasi dasar mengenai halaman HTML yang akan kita buat seperti judul, deskripsi, logo, serta berbagai tautan ke sumber daya yang memang dibutuhkan oleh HTML kita. Sedikit contoh beberapa informasi yang bisa kita letakkan di dalam elemen ",Object(b.b)("inlineCode",{parentName:"p"},"head")," bisa terlihat pada penggalan kode berikut:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),'<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Belajar HTML</title>\n    <meta name="description" content="Hanya sebuah berkas untuk belajar HTML">\n</head>\n')),Object(b.b)("p",null,"Elemen ",Object(b.b)("inlineCode",{parentName:"p"},"body")," nantinya akan diisi dengan konten yang memang akan secara langsung dilihat oleh pengguna yang mengakses berkas HTML kita, seperti teks, tabel, form dan berbagai elemen lainnya. Contoh kita akan menambahkan sebuah teks pada berkas HTML yang sudah kita buat, kalian bisa melihat caranya seperti kode berikut:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),"<body>\n    <h1>Belajar HTML</h1>\n</body>\n")),Object(b.b)("p",null,"Keseluruhan kode HTML dasar tersebut yang bila dikombinasikan dan disimpan ke dalam berkas yang kita beri nama ",Object(b.b)("inlineCode",{parentName:"p"},"index.html")," dan dibuka dengan peramban di komputer kita akan menampilkan hasil seperti berikut:"),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/contents/02-13-01-basic-html.png",alt:"Hasil dari contoh kode HTML dasar"}),Object(b.b)("figcaption",null,"Gambar hasil dari contoh kode HTML dasar")),Object(b.b)("h2",{id:"heading-dan-teks"},"Heading dan Teks"),Object(b.b)("h3",{id:"heading"},"Heading"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Heading")," merupakan elemen yang kita gunakan untuk membuat judul dan sub judul pada sebuah konten HTML. Meskipun secara tampilan kita bisa saja membuat judul dan sub judul tanpa menggunakan ",Object(b.b)("inlineCode",{parentName:"p"},"heading"),", tapi secara semantik disarankan menggunakan elemen yang tepat dimana ",Object(b.b)("inlineCode",{parentName:"p"},"heading")," merupakan pilihan terbaik untuk membuat judul dan sub judul. Elemen heading yang bisa kita gunakan adalah ",Object(b.b)("inlineCode",{parentName:"p"},"h1"),", ",Object(b.b)("inlineCode",{parentName:"p"},"h2")," sampai ",Object(b.b)("inlineCode",{parentName:"p"},"h6")," seperti pada contoh potongan kode berikut:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),"<h1>Judul dengan H1</h1>\n<h2>Sub judul dengan H2</h2>\n<h3>Sub judul dengan H3</h3>\n<h4>Sub judul dengan H4</h4>\n<h5>Sub judul dengan H5</h5>\n<h6>Sub judul dengan H6</h6>\n")),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/contents/02-13-02-heading.png",alt:"Hasil dari contoh kode elemen Heading"}),Object(b.b)("figcaption",null,"Gambar hasil dari contoh kode elemen Heading")),Object(b.b)("h3",{id:"paragraf"},"Paragraf"),Object(b.b)("p",null,"Membuat paragraf di sebuah HTML bisa menggunakan element ",Object(b.b)("inlineCode",{parentName:"p"},"p"),", di setiap elemen ",Object(b.b)("inlineCode",{parentName:"p"},"p")," nantinya akan terlihat sedikit jarak yang memisahkan antara satu paragraf dengan paragraf berikutnya. Silakan lihat contoh kode serta hasil dari kode tersebut di bawah ini:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),"<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eos numquam quas deserunt porro doloremque perferendis illo sunt repudiandae ipsum facere, perspiciatis error quod accusamus delectus blanditiis asperiores cum pariatur!</p>\n<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum illum obcaecati perspiciatis quam architecto odio excepturi temporibus aliquam quas saepe, esse molestias ad perferendis voluptatum unde nostrum distinctio dolorem accusantium?</p>\n<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolore aspernatur delectus harum sequi molestiae nisi quis dolorum suscipit molestias quod a voluptatum ad itaque, veniam alias architecto eaque. Tenetur.</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati possimus ducimus ipsum voluptate quibusdam error nihil exercitationem, quas incidunt earum consequatur non consequuntur quidem. Repellendus itaque similique ducimus pariatur.</p>\n")),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/contents/02-13-03-paragraf.png",alt:"Hasil dari contoh kode elemen paragraf"}),Object(b.b)("figcaption",null,"Gambar hasil dari contoh kode elemen paragraf")),Object(b.b)("h3",{id:"teks"},"Teks"),Object(b.b)("p",null,"Menambahkan sebuah tulisan biasa pada HTML bisa dicapai menggunakan elemen ",Object(b.b)("inlineCode",{parentName:"p"},"span")," yang menghasilkan tulisan biasa tanpa ada tambahan gaya apapun."),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/contents/02-13-04-text.png",alt:"Hasil dari contoh kode elemen span"}),Object(b.b)("figcaption",null,"Gambar hasil dari contoh kode elemen span")),Object(b.b)("p",null,"Melihat dari gambar di atas, kita mungkin tidak mengetahui bahwa sebenarnya kalimat tersebut terdiri dari beberapa elemen ",Object(b.b)("inlineCode",{parentName:"p"},"span")," karena memang secara kasat mata tidak terdapat jarak yang memisahkan antara satu elemen ",Object(b.b)("inlineCode",{parentName:"p"},"span")," dengan elemen ",Object(b.b)("inlineCode",{parentName:"p"},"span")," berikutnya. Berikut ini adalah kode dari tampilan yang terlihat pada gambar sebelumnya:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),"<span>Lorem ipsum dolor sit amet consectetur,</span>\n<span> adipisicing elit.</span>\n<span> Quidem eos numquam quas deserunt porro doloremque perferendis illo sunt repudiandae ipsum facere,</span>\n<span> perspiciatis error quod accusamus delectus blanditiis asperiores cum pariatur!</span>\n")),Object(b.b)("h3",{id:"cetak-tebal-dan-miring"},"Cetak Tebal dan Miring"),Object(b.b)("p",null,"Dalam sebuah kalimat atau paragraf sudah lazim bila ada satu atau lebih kata yang ingin kita tambahkan gaya tambahan untuk memperjelas maknanya atau sekadar mengikuti kaidah penulisan yang benar seperti menambahkan cetak tebal maupun membuat cetak miring pada sebuah kata. Hal ini bisa dicapai dengan menggunakan elemen ",Object(b.b)("inlineCode",{parentName:"p"},"b")," untuk cetak tebal dan elemen ",Object(b.b)("inlineCode",{parentName:"p"},"i")," untuk cetak miring, seperti bisa kita lihat pada contoh kode berikut:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),"<span>Lorem <b>ipsum dolor</b> sit amet <i>consectetur</i></span>\n")),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/contents/02-13-05-cetak-tebal-miring.png",alt:"Hasil dari contoh kode cetak tebal dan miring"}),Object(b.b)("figcaption",null,"Gambar hasil dari contoh kode cetak tebal dan miring")),Object(b.b)("h3",{id:"penekanan"},"Penekanan"),Object(b.b)("p",null,"Memberikan penekanan makna pada sebuah kata dalam kalimat dibutuhkan untuk memperjelas makna dan memberikan pemahaman lebih baik utamanya buat robot yang melakukan penelusuran terhadap website kita nantinya. Membuat kata dengan cetak tebal dan miring saja tidak cukup membuat robot tersebut mengerti kebutuhan kita akan penekanan kata. HTML melakukan ini dengan menyediakan elemen terpisah dari sekadar memberi gaya pada sebuah kata. Kita bisa menggunakan elemen ",Object(b.b)("inlineCode",{parentName:"p"},"strong")," dan ",Object(b.b)("inlineCode",{parentName:"p"},"em")," untuk memberikan penekanan ini. Secara kasat mata hasilnya tidak akan terlihat berbeda dengan kita menggunakan elemen ",Object(b.b)("inlineCode",{parentName:"p"},"b")," maupun ",Object(b.b)("inlineCode",{parentName:"p"},"i")," yang sudah kita pelajari sebelumnya. Mari kita lihat contoh kode dan tampilan yang dihasilkan dari kedua elemen berikut:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),"<span>Lorem <strong>ipsum dolor</strong> sit amet <em>consectetur</em></span>\n")),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/contents/02-13-06-penekanan.png",alt:"Hasil dari contoh kode penekanan"}),Object(b.b)("figcaption",null,"Gambar hasil dari contoh kode penekanan")),Object(b.b)("h3",{id:"hyperlink-atau-tautan"},"Hyperlink atau Tautan"),Object(b.b)("p",null,"Hyperlink atau tautan digunakan untuk mengarahkan satu elemen ke halaman lain, eleman tersebut bisa jadi bermacam-macam mulai dari teks, tombol, maupun berbagai elemen lain di dalam tautan ini. Untuk membuat sebuah tautan di HTML kita bisa menggunakan elemen ",Object(b.b)("inlineCode",{parentName:"p"},"a")," yang diiringi dengan atribut ",Object(b.b)("inlineCode",{parentName:"p"},"href")," sebagai letak halaman yang ingin dituju dan ",Object(b.b)("inlineCode",{parentName:"p"},"title")," sebagai pembantu bagi teman-teman yang menyandang disabilitas untuk memahami fungsi dari tautan tersebut. Mari kita lihat contoh sederhana menggunakan tautan biasa dengan sebuah teks di dalamnya:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),'<span>Jika kalian klik kata <a href="tautan.html" title="sebuah tautan">tautan</a> ini, maka akan mengarah ke halaman lain.</span>\n')),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/contents/02-13-07-tautan.png",alt:"Hasil dari contoh kode tautan sederhana"}),Object(b.b)("figcaption",null,"Gambar hasil dari contoh kode tautan sederhana")),Object(b.b)("h4",{id:"alamat-pada-tautan"},"Alamat pada tautan"),Object(b.b)("p",null,"Kalau kita lihat pada kode sebelumnya, kita menambahkan atribut ",Object(b.b)("inlineCode",{parentName:"p"},'href="tautan.html"'),". Dengan cara ini berarti kita akan bisa tautan ke halaman yang relatif dengan posisi halaman sekarang. Ini bukanlah cara satu-satunya untuk menambahkan sebuah alamat pada sebuah tautan, ada beberapa alternatif cara, untuk lebih memahami berikut kita akan coba kupas lebih jauh mengenai cara yang bisa kita gunakan dalam menambahkan alamat pada tautan."),Object(b.b)("p",null,"Bila kita anggap alamat website sebagai sebuah direktori atau bisa disimulasikan sebagai berikut:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"www.belajar.com/\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 tautan.html\n\u251c\u2500\u2500 gawai/\n      \u251c\u2500\u2500 index.html\n      \u251c\u2500\u2500 samsung.html\n      \u2514\u2500\u2500 iphone.html\n      \u2514\u2500\u2500 xiaomi.html\n\u251c\u2500\u2500 motor/\n      \u251c\u2500\u2500 index.html\n      \u251c\u2500\u2500 honda.html\n      \u2514\u2500\u2500 yamaha.html\n      \u2514\u2500\u2500 suzuki.html\n")),Object(b.b)("p",null,"Paling tidak ada dua cara untuk mengarahkan alamat dari sebuah tautan, diantara:"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"1. Alamat Absolut")),Object(b.b)("p",null,"Ini cara yang mudah karena kita cukup menambahkan alamat penuh sehingga tidak perlu mengetahui posisi kita saat ini ada di halaman atau direktori mana. dari contoh direktori diatas, katakanlah saya sekarang berada di ",Object(b.b)("inlineCode",{parentName:"p"},"https://www.belajar.com/")," dan ingin menambahkan tautan ke arah ",Object(b.b)("inlineCode",{parentName:"p"},"honda.html")," maka saya bisa menambahkan atribut ",Object(b.b)("inlineCode",{parentName:"p"},'href="https://www.belajar.com/motor/honda.html"'),". Tapi cara ini juga sangat tergantung pada domain atau direktori utama yang kita gunakan, sekali kita ganti nama direktori maka tautan ini tidak akan berjalan. Katakan saja kita menggunakan alamat yang berbeda ketika proses pembangunan di lokal dan ketika sudah dikirimkan ke lingkungan produksi, tautan dengan alamat absolut tidak akan bekerja sesuai harapan kita."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"2. Alamat Relatif")),Object(b.b)("p",null,"Untuk menyelesaikan masalah yang ditemui saat menggunakan alamat absolut, kita bisa menggunakan alamat relatif. Alamat relatif ini juga bisa bermacam-macam, tergantung mau relatif kemana. Beberapa diantaranya yang bisa kita gunakan adalah:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Relatif terhadap alamat utama"))),Object(b.b)("p",null,"Alamat ini memastikan kita akan selalu mengarah ke alamat atau direktori paling atas. Caranya menggunakan awalan ",Object(b.b)("inlineCode",{parentName:"p"},"/"),". Contoh yang sama, saya ingin menambahkan tautan ke halaman ",Object(b.b)("inlineCode",{parentName:"p"},"honda.html")," maka saya bisa menambahkan atribut ",Object(b.b)("inlineCode",{parentName:"p"},'href="/motor/honda.html"'),". Dengan cara ini, meskipun kita sedang menggunakan alamat utama yang berbeda misal ",Object(b.b)("inlineCode",{parentName:"p"},"https://www.bukan-belajar.com/")," maka tautan tersebut tetap akan mengarah sesuai dengan domain yang sedang aktif kita gunakan pada saat itu, dalam kasus ini berarti akan mengarah ke ",Object(b.b)("inlineCode",{parentName:"p"},"https://www.bukan-belajar.com/motor/honda.html"),"."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Relatif terhadap posisi saat ini"))),Object(b.b)("p",null,"Alamat ini bergantung pada posisi kita saat ini berada, misal saya ingin mengarahkan ke ",Object(b.b)("inlineCode",{parentName:"p"},"honda.html")," dan posisi sekarang berada di ",Object(b.b)("inlineCode",{parentName:"p"},"https://www.belajar.com/"),", maka saya bisa menggunakan atribut ",Object(b.b)("inlineCode",{parentName:"p"},'href="./motor/honda.html"'),". Cara ini tidak akan berjalan bila posisi kita berada di direktori yang berbeda, misalkan posisi saat ini sedang berada di ",Object(b.b)("inlineCode",{parentName:"p"},"https://www.belajar.com/gawai/samsung.html")," maka untuk mencapai ",Object(b.b)("inlineCode",{parentName:"p"},"honda.html")," kita harus memundurkan direktori dulu sebelum mencari ",Object(b.b)("inlineCode",{parentName:"p"},"honda.html")," atau bisa ditulis dengan atribut ",Object(b.b)("inlineCode",{parentName:"p"},'href="../motor/honda.html"'),". Bila kita cermati ada dua tanda yang digunakan, pertama titik satu ",Object(b.b)("inlineCode",{parentName:"p"},".")," untuk mengarah pada direktori saat ini dan dua titik ",Object(b.b)("inlineCode",{parentName:"p"},"..")," untuk mengarah pada direktori sebelumnya."),Object(b.b)("h4",{id:"membuka-tautan-pada-tab-baru"},"Membuka tautan pada tab baru"),Object(b.b)("p",null,"Bila kita buka kode yang telah kita buat diatas dan coba kita klik tautan tersebut, maka kita akan diarahkan ke alamat baru yakni ",Object(b.b)("inlineCode",{parentName:"p"},"tautan.html")," tapi tanpa membuka tab baru. Ini artinya kita akan menambahkan sejarah navigasi baru pada tab yang sedang kita buka. Ini cara yang normal, tapi pada beberapa kasus cara ini menjadikan pengguna kita malah pergi dari website kita saat ini. Contohnya saja ketika kita ingin membuaut sebuah tautan yang mengarah ke halaman website orang lain misalkan kita arahkan tautan tersebut ke ",Object(b.b)("inlineCode",{parentName:"p"},"facebook.com"),", maka sebaiknya kita tetap mempertahankan website kita terbuka pada tab saat ini dan mengarahkan pengguna untuk membuka tautan tersebut pada tab baru. Dari contoh tersebut, kita bisa simpulkan bahwa cara ini memang paling cocok dan paling sering digunakan untuk mengarahkan tautan ke alamat di luar halaman kita."),Object(b.b)("p",null,"Untuk mencapai interaksi yang seperti ini pada sebuah tautan kita harus menambahkan atribut tambahan pada tautan kita yakni ",Object(b.b)("inlineCode",{parentName:"p"},"target")," dengan nilai ",Object(b.b)("inlineCode",{parentName:"p"},"_blank"),". Jadi kita bisa menambahkan tautan seperti contoh berikut:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),'<span>Ayo pergi ke <a href="https://www.facebook.com/" title="Facebook" target="_blank">Facebook</a>.</span>\n')),Object(b.b)("p",null,"Nilai dari atribut ",Object(b.b)("inlineCode",{parentName:"p"},"target")," itu sendiri bukan hanya ",Object(b.b)("inlineCode",{parentName:"p"},"_blank")," tapi ada juga ",Object(b.b)("inlineCode",{parentName:"p"},"_self"),", ",Object(b.b)("inlineCode",{parentName:"p"},"_parent")," dan ",Object(b.b)("inlineCode",{parentName:"p"},"_top"),". Nilai ",Object(b.b)("inlineCode",{parentName:"p"},"_self")," adalah bawaan, sama saja saat kita tidak membubuhkan atribut ini, nilai ",Object(b.b)("inlineCode",{parentName:"p"},"_parent")," dan ",Object(b.b)("inlineCode",{parentName:"p"},"_top")," digunakan bila website kita akan diakses di dalam sebuah iFrame. Tapi berdasarkan pengalaman saya, dari ketiga nilai diatas hanya ",Object(b.b)("inlineCode",{parentName:"p"},"_blank")," yang akan sering digunakan pada sebagian besar kasus."),Object(b.b)("p",null,"Catatan tambahan ketika kita menggunakan atribut ",Object(b.b)("inlineCode",{parentName:"p"},'target="_blank"'),", diharapkan selalu menambahkan atribut ",Object(b.b)("inlineCode",{parentName:"p"},'rel="noopener"')," dikarenakan ada alasan keamanan dimana halaman tujuan bisa memiliki akses untuk memanipulasi halaman sumber tautan tersebut. Bila kita contohkan pada kode kita sebelumnya maka menjadi seperti berikut ini:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),'<span>Ayo pergi ke <a href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noopener">Facebook</a>.</span>\n')),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/contents/02-13-08-tautan-eksternal.png",alt:"Hasil dari contoh kode tautan yang membuka tab baru"}),Object(b.b)("figcaption",null,"Gambar hasil dari contoh kode tautan yang membuka tab baru")),Object(b.b)("h4",{id:"membuat-tautan-dengan-elemen-berbeda"},"Membuat tautan dengan elemen berbeda"),Object(b.b)("p",null,"Seperti sudah saya singgung sebelumnya, tautan bisa juga ditempatkan pada elemen lain selain teks seperti menggunakan elemen gambar ataupun tombol. Kita akan melihat bagaimana contoh kode yang menggunakan gambar dan tombol sebagai sebuah tautan berikut ini:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),'<span>Klik tombol dan gambar berikut:</span>\n<br/>\n<a href="tautan.html" title="Sebuah tautan dengan tombol"><button>tombol ini</button></a>\n<a href="tautan.html" title="Sebuah tautan dengan gambar"><img src="logo.png" alt="Belajar Frontend" /></a>\n')),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/contents/02-13-09-tautan-dengan-tombol-dan-gambar.png",alt:"Hasil dari contoh kode tautan dengan tombol dan gambar"}),Object(b.b)("figcaption",null,"Gambar hasil dari contoh kode tautan dengan tombol dan gambar")),Object(b.b)("h2",{id:"blok-kontainer"},"Blok Kontainer"),Object(b.b)("p",null,"Blok kontainer bisa diibaratkan sebagai wadah bagi komponen lain sehingga mudah bagi kita untuk mengelompokkan beberapa elemen kedalam satu grup. Blok kontainer yang paling umum dan akan sering kita gunakan adalah elemen ",Object(b.b)("inlineCode",{parentName:"p"},"div"),". Elemen ",Object(b.b)("inlineCode",{parentName:"p"},"div")," dikenal sebagai elemen yang murni dan tidak membawa gaya bawaan yang biasanya disematkan oleh masing-masing peramban yang biasanya penampakannya berbeda antara satu peramban dengan peramban lain. Satu-satunya yang mungkin menjadi bawaan adalah bahwa elemen ",Object(b.b)("inlineCode",{parentName:"p"},"div")," memiliki properti CSS (akan dipelajari pada bagain berikutnya) ",Object(b.b)("inlineCode",{parentName:"p"},"display")," dengan nilai ",Object(b.b)("inlineCode",{parentName:"p"},"block"),". Ini artinya ",Object(b.b)("inlineCode",{parentName:"p"},"div")," akan mengalir ke bawah bukan ke samping seperti kita menambahkan elemen ",Object(b.b)("inlineCode",{parentName:"p"},"span")," yang akan selalu mengalir ke samping. Mengalir ke bawah berarti ",Object(b.b)("inlineCode",{parentName:"p"},"div")," akan selalu membuat baris baru di bawah dari elemen sebelumnya. Untuk membuat sebuah elemen ",Object(b.b)("inlineCode",{parentName:"p"},"div")," bisa mengalir ke samping dibutuhkan bantuan CSS yang bisa mengatur posisi dari elemen ",Object(b.b)("inlineCode",{parentName:"p"},"div")," dalam sebuah halaman HTML."),Object(b.b)("p",null,"Berikut contoh bagaimana kita menggunakan elemen ",Object(b.b)("inlineCode",{parentName:"p"},"div")," untuk membungkus elemen lain, sehingga kita bisa membedakan ketika kita menambahkan sebuah blok kontainer dan ketika kita tidak menambahkannya:"),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),'<h1>Dua elemen dengan dan tanpa blok kontainer</h1>\n\n<h2>Tanpa blok kontainer</h2>\n<a href="tautan.html" title="Sebuah tautan"><img src="logo.png" alt="Belajar Frontend" /></a>\n<a href="tautan.html" title="Sebuah tautan dengan gambar"><img src="logo.png" alt="Belajar Frontend" /></a>\n\n<h2>Dengan blok kontainer</h2>\n<div>\n    <a href="tautan.html" title="Sebuah tautan"><img src="logo.png" alt="Belajar Frontend" /></a>\n</div>\n<div>\n    <a href="tautan.html" title="Sebuah tautan dengan gambar"><img src="logo.png" alt="Belajar Frontend" /></a>\n</div>\n')),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/contents/02-13-10-blok-kontainer.png",alt:"Hasil dari contoh kode blok kontainer"}),Object(b.b)("figcaption",null,"Gambar hasil dari contoh kode blok kontainer")),Object(b.b)("p",null,"Meskipun elemen ",Object(b.b)("inlineCode",{parentName:"p"},"div")," menjadi satu yang paling populer, tapi sebenarnya kita disarankan untuk tidak menggunakan elemen ",Object(b.b)("inlineCode",{parentName:"p"},"div")," di semua bagian HTML kita. Hal ini karena sebenarnya tersedia juga beberapa blok kontainer lain yang memiliki sifat yang sama dengen elemen ",Object(b.b)("inlineCode",{parentName:"p"},"div")," namun lebih tepat digunakan pada satu kasus karena alasan semantik. Beberapa komponen lain yang tersedia di HTML yang bisa digunakan sebagai blok kontainer adalah elemen ",Object(b.b)("inlineCode",{parentName:"p"},"header"),", ",Object(b.b)("inlineCode",{parentName:"p"},"nav"),", ",Object(b.b)("inlineCode",{parentName:"p"},"aside"),", ",Object(b.b)("inlineCode",{parentName:"p"},"article"),", ",Object(b.b)("inlineCode",{parentName:"p"},"section"),", ",Object(b.b)("inlineCode",{parentName:"p"},"footer")," dan beberapa komponen lain yang mungkin terlewat."),Object(b.b)("h2",{id:"tabel"},"Tabel"),Object(b.b)("p",null,"Seperti namanya, elemen tabel digunakan untuk membuat tabel pada sebuah HTML. Tabel merupakan salah satu elemen penting terutama bila kita bertugas untuk menampilkan data yang mana tabel menjadi solusi paling mudah digunakan untuk mengolah dan menampilkan berbagai data dalam bentuk baris dan kolomnya. Hal ini mungkin juga ditunjang dengan terbiasanya para pengguna kita dalam mengolah dan melihat berbagai data lewat aplikasi pengolah data layaknya Microsoft Excel, Google Sheets maupun aplikasi sejenisnya."),Object(b.b)("h3",{id:"dasar-dasar-tabel"},"Dasar-dasar Tabel"),Object(b.b)("p",null,"Sebuah tabel pada HTML biasa kita pecah ke dalam beberapa bagian yang membentuknya, yakni ",Object(b.b)("inlineCode",{parentName:"p"},"header")," yang berisikan kolom-kolom judul dan sebagainya, ",Object(b.b)("inlineCode",{parentName:"p"},"body")," yang berisikan baris dan kolom dengan nilai dari data yang ditampilkan serta ",Object(b.b)("inlineCode",{parentName:"p"},"footer")," yang biasanya berisikan informasi tambahan ataupun hasil berbagai kalkulasi dari masing-masing kolom."),Object(b.b)("h3",{id:"kolom-dan-baris"},"Kolom dan Baris"),Object(b.b)("h3",{id:"penggabungan-kolom-atau-baris"},"Penggabungan Kolom atau Baris"),Object(b.b)("h2",{id:"daftar"},"Daftar"),Object(b.b)("h3",{id:"daftar-berurut"},"Daftar Berurut"),Object(b.b)("h3",{id:"daftar-tidak-berurut"},"Daftar Tidak Berurut"),Object(b.b)("h3",{id:"daftar-bersarang"},"Daftar Bersarang"),Object(b.b)("h2",{id:"form"},"Form"),Object(b.b)("h3",{id:"dasar-form"},"Dasar Form"),Object(b.b)("h3",{id:"inputan-teks-dan-variasinya"},"Inputan Teks dan Variasinya"),Object(b.b)("h4",{id:"input-teks"},"Input Teks"),Object(b.b)("h4",{id:"input-password"},"Input Password"),Object(b.b)("h4",{id:"input-date"},"Input Date"),Object(b.b)("h4",{id:"input-number"},"Input Number"),Object(b.b)("h4",{id:"input-telepon"},"Input Telepon"),Object(b.b)("h4",{id:"text-area"},"Text Area"),Object(b.b)("h4",{id:"input-hidden"},"Input Hidden"),Object(b.b)("h3",{id:"inputan-pilihan"},"Inputan Pilihan"),Object(b.b)("h4",{id:"radio-button"},"Radio Button"),Object(b.b)("h4",{id:"checkbox"},"Checkbox"),Object(b.b)("h4",{id:"dropdown"},"Dropdown"),Object(b.b)("h3",{id:"tombol"},"Tombol"),Object(b.b)("h4",{id:"submit"},"Submit"),Object(b.b)("h4",{id:"reset"},"Reset"),Object(b.b)("h4",{id:"tombol-biasa"},"Tombol Biasa"),Object(b.b)("h3",{id:"pengelompokkan-form"},"Pengelompokkan Form"),Object(b.b)("h3",{id:"validasi"},"Validasi"),Object(b.b)("h2",{id:"media"},"Media"),Object(b.b)("h3",{id:"gambar"},"Gambar"),Object(b.b)("h3",{id:"audio"},"Audio"),Object(b.b)("h3",{id:"video"},"Video"),Object(b.b)("h2",{id:"elemen-lain"},"Elemen Lain"))}d.isMDXComponent=!0},145:function(a,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return k}));var t=n(0),i=n.n(t);function b(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){b(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function m(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},b=Object.keys(a);for(t=0;t<b.length;t++)n=b[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(a);for(t=0;t<b.length;t++)n=b[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var u=i.a.createContext({}),d=function(a){var e=i.a.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):l({},e,{},a)),n},s=function(a){var e=d(a.components);return i.a.createElement(u.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return i.a.createElement(i.a.Fragment,{},e)}},o=Object(t.forwardRef)((function(a,e){var n=a.components,t=a.mdxType,b=a.originalType,r=a.parentName,u=m(a,["components","mdxType","originalType","parentName"]),s=d(n),o=t,k=s["".concat(r,".").concat(o)]||s[o]||p[o]||b;return n?i.a.createElement(k,l({ref:e},u,{components:n})):i.a.createElement(k,l({ref:e},u))}));function k(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var b=n.length,r=new Array(b);r[0]=o;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=a,l.mdxType="string"==typeof a?a:t,r[1]=l;for(var u=2;u<b;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);