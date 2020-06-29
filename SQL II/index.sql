-- Mengolah Hasil Pencarian
-- 1. DISTINCT
Dengan menggunakan DISTINCT, Anda dapat mengecualikan baris yang memiliki data yang sama dari hasil pencarian. Anda dapat menentukan nama kolom untuk mendapatkan baris unik dan mengecualikan duplikatnya. Untuk melakukan hal ini, gunakan syntax berikut: DISTINCT( column_name )
Sebagaimana ditampilkan dibawah, Anda dapat menggunakan DISTINCT dalam pernyataan SELECT untuk mengecualikan baris duplikat. Dalam contoh dibawah, pernyataan memilih kolom name dari tabel purchases dengan mengecualikan duplikat.

-- Jalankan code untuk menampilkan kolom character_name dengan duplikasi
SELECT character_name
FROM purchases;

-- dapatkan baris dari kolom character_name dengan duplikat dihilangkan
SELECT DISTINCT (character_name)
FROM purchases;

-- dapatkan baris dari kolom name tanpa duplikat
SELECT DISTINCT (name)
FROM purchases;

-- 2. Operator Aritmetika

Operator Aritmetika
Penghitungan dapat dilakukan di SQL dengan operator aritmetika. Sebagaimana ditampilkan di bawah, dengan menggunakan operator ini, Anda dapat melakukan penghitungan di baris pada kolom yang Anda tentukan.

/*
ambil data harga setelah pajak penjualan dari kolom price
dengan melanjutkan statement dibawah
*/

SELECT name, price,price * 1.09
FROM purchases;


-- Menggunakan Function Agregat
-- 3. SUM
Untuk menghitung jumlah angka di SQL, gunakan function SUM.
Dengan syntax SUM (column_name), dengan pernyataan ini, penghitungan total semua nilai dalam kolom yang ditentukan bisa dilakukan.
Penggunaan function SUM juga dapat dikombinasikan dengan WHERE. Pada contoh di bawah, keduanya dapat dikombinasikan untuk mendapatkan jumlah total uang yang digunakan oleh Ninja Ken.

-- dapatkan total jumlah dari kolom price
SELECT SUM (price)
FROM purchases;

/*
dapatkan jumlah total dari kolom price dimana
nilai character_name adalah "Ninja Ken"
*/

SELECT SUM (price)
FROM purchases
WHERE character_name="Ninja Ken"
;

-- 4. AVG

Untuk menghitung rata-rata angka di SQL, Anda dapat menggunakan AVG. Menggunakan syntax AVG (column_name), Anda dapat menghitung nilai rata-rata pada kolom yang dinginkan.
Penggunaan function AVG juga dapat dikombinasikan dengan klausa WHERE. Pada contoh dibawah, kita menggunakan WHERE untuk mendapatkan harga rata-rata pembelian yang khususnya dilakukan oleh Ninja Ken.

-- dapatkan nilai rata-rata dari kolom price
SELECT AVG (price)
FROM purchases;

/*
dapatkan nilai rata-rata dari kolom price dimana
nilai character_name adalah "Ninja Ken" 
*/

SELECT AVG (price)
FROM purchases
WHERE character_name="Ninja Ken"
;

-- 5. COUNT

Function COUNT digunakan untuk menghitung jumlah total baris pada kolom yang ditargetkan. Ini dapat dilakukan dengan menggunakan syntax COUNT(column_name) sebagaimana ditampilkan pada contoh di bawah.
Saat menggunakan COUNT, jumlah baris yang terhitung tidak mencakup baris dengan nilai NULL. Oleh karena itu, untuk kasus seperti gambar di sebelah kanan, hasil akhir hitungan COUNT adalah 4.
Jika Anda ingin menghitung semua baris, termasuk baris dengan nilai NULL, Anda harus menggunakan * (tanda bintang) dengan function COUNT. Ketika digunakan, * akan menghitung jumlah total baris secara keseluruhan, termasuk yang nilainya NULL.
Penggunaan function COUNT juga dapat dikombinasikan dengan WHERE. Pada contoh di bawah, kita menggunakan keduanya untuk melihat total pembelian yang dilakukan oleh Ninja Ken.

-- dapatkan jumlah baris dikolom name dari table purchases 
SELECT COUNT (name)
FROM purchases;

-- dapatkan jumlah baris di tabel purchases 
SELECT COUNT (*)
FROM purchases;

-- dapatkan jumlah total baris dimana nilai character_name adalah "Ninja Ken"
SELECT COUNT (*)
FROM purchases
WHERE character_name="Ninja Ken"
;

-- 6. MAX・MIN
Dengan function MAX di SQL, Anda bisa mendapatkan nilai maksimum dari baris milik kolom tertentu. Sebaliknya, dengan menggunakan function MIN, Anda bisa mendapatkan nilai minimum-nya.
Sama dengan function agregat lainnya, MAX dan MIN dapat digunakan setelah SELECT. Seperti contoh dibawah, dengan menetapkan kolom price di function MAX, Anda bisa mendapatkan item dengan harga tertinggi untuk semua baris dikolom price.
Penggunaan MAX dan MIN dapat dikombinasikan dengan WHERE, sama caranya dengan function agregat lainnya. Pada contoh dibawah ini, kita menggunakan MAX dan WHERE untuk mendapatkan pembelian paling mahal yang dilakukan oleh Ninja Ken.

-- dapatkan harga tertinggi di kolom price
SELECT MAX (price)
FROM purchases;

-- dapatkan harga terendah dikolom price
SELECT MIN (price)
FROM purchases;

/*
untuk baris dimana nilai character_name adalah "Ninja Ken"
dapatkan harga tertinggi dari semua nilai dikolom price
*/

SELECT MAX (price)
FROM purchases
WHERE character_name="Ninja Ken"
;

-- Mengelompokkan Data
-- 7. GROUP BY
Dengan GROUP BY, Anda dapat mengelompokkan baris. Misalnya, menggunakan syntax GROUP BY column_name, sebagaimana ditampilkan di bawah ini, baris dengan nilai yang sama akan dikelompokkan untuk kolom yang Anda tentukan.
Untuk menggunakan pengelompokan dengan data agregat, Anda dapat menambahkan GROUP BY column_name pada akhir statement SQL seperti gambar disisi kiri. Dalam kasus seperti gambar dibawah, code ini akan menerapkan function agregat untuk menampilkan jumlah harga bagi setiap data tanggal unik dikolom "purchased_at".
Saat menggunakan GROUP BY, kolom yang ditentukan untuk mengelompokkan item atau function agregat sering digunakan didalam SELECT. Seperti contoh di bawah ini, karena function agregat SUM() tidak diberikan nama kolom, tidak ada yang dapat dikelompokkan oleh GROUP BY dan pada akhirnya yang ditampilkan adalah instance untuk setiap nilai "purchased_at".

-- dapatkan jumlah total uang yang dikeluarkan untuk setiap grup purchased_at 
SELECT SUM (price),purchased_at
FROM purchases
GROUP BY purchased_at;

-- dapatkan jumlah baris untuk setiap grup purchased_at 
SELECT COUNT (*),  purchased_at
FROM purchases
GROUP BY purchased_at;

-- 8. GROUP BY (lebih dari satu)
Anda dapat menggunakan GROUP BY untuk banyak kolom dengan memasukkan nama kolom-kolom tersebut dan memisahkannya dengan koma (,). Kita akan lihat apa saja jenis pengelompokan dan agregat yang dapat dibuat dislide berikutnya.
Menggunakan function agregat pada grup tertentu akan lebih efektif daripada menggunakannya pada semua hasil. Dibawah ini adalah contoh penggunaan function SUM dan COUNT pada hasil yang telah dikelompokkan.

-- dapatkan total harga purchases berdasarkan purchased_at dan character_name
SELECT SUM (price),purchased_at,character_name
FROM purchases
GROUP BY purchased_at,character_name
;

/*
dapatkan total berapa kali purchases terjadi berdasarkan
purchased_at and character_name
*/

SELECT COUNT (*),purchased_at,character_name
FROM purchases
GROUP BY purchased_at,character_name
;

--9. GROUP BY (WHERE)
GROUP BY juga dapat digunakan dengan klausa WHERE. Untuk melakukan hal ini, letakkan GROUP BY setelah WHERE dalam statement SQL. Sebagaimana ditampilkan dibawah, function ini memiliki urutannya sendiri: WHERE diletakkan pertama, lalu GROUP BY, diikuti dengan function agregat.

/*
tambahkan aturan di klausa WHERE untuk mengelompokkan
baris, dimana character_name adalah "Ninja Ken"
*/

SELECT SUM (price),purchased_at
FROM purchases
WHERE character_name="Ninja Ken"
GROUP BY  purchased_at
;

/*
Tambahkan klausa WHERE untuk mendapatkan baris dengan category "makanan"
setelah itu, kelompokkan hasilnya berdasarkan kolom
purchased_at dan character_name 
*/

SELECT SUM (price),purchased_at,character_name
FROM purchases
WHERE category="makanan"
GROUP BY purchased_at,character_name
;

-- 10. HAVING
Jika Anda ingin mempersempit penyaringan hasil data yang dikelompokkan menggunakan GROUP BY, Anda dapat menggunakan HAVING. Sebagaimana ditampilkan pada contoh dibawah, kita bisa mendapatkan grup dengan kondisi tertentu dengan menggunakan syntax: GROUP BY column_name HAVING kondisi.
Untuk mempersempit data setelah pengelompokan, gunakanlah HAVING, bukan WHERE, karena SQL memiliki urutan specific dalam menjalankan kueri-nya. Sebagaimana ditampilkan pada gambar di bawah, WHERE dijalankan pertama, lalu GROUP BY, lalu function, dan HAVING dijalankan terakhir.
Bergantung pada urutannya, WHERE dan HAVING mencari target yang berbeda. WHERE mencari seluruh tabel sebelum pengelompokan, sementara HAVING mencari grup yang dibuat dengan GROUP BY.
Karena HAVING mencari dari tabel setelah pengelompokan, kolom yang digunakan dalam pernyataan kondisional selalu menggunakan kolom dari tabel yang dikelompokkan.

/*
dapatkan total harga, lalu kelompokkan hasilnya berdasarkan tanggal,
hanya untuk grup yang memiliki total harga lebih dari 20
*/

SELECT SUM (price),purchased_at
FROM purchases
GROUP BY purchased_at
HAVING SUM (price)>20
;

-- dapatkan total berdasarkan tanggal dan karakter dimana totalnya lebih dari 30
SELECT SUM (price),purchased_at,character_name
FROM purchases
GROUP BY purchased_at,character_name
HAVING SUM (price) >30
;

-- Proyek Akhir
-- 11. Mempraktikkan Hal Yang Sudah Anda Pelajari
/*
grup berdasarkan categori, setelah itu dapatkan total jumlah kolom price
dan kolom category untuk setiap grup
*/

SELECT SUM (price),category
FROM purchases
GROUP BY category
;

/*
buatlah sebuah grup untuk setiap karakter,
dan dapatkan total jumlah dari kolom price dan character_name 
tetapi, aggregatkan hasil hanya untuk kolom category dengan nilai "lainnya"
*/

SELECT SUM (price),character_name
FROM purchases
WHERE category="lainnya"
GROUP BY character_name
;

