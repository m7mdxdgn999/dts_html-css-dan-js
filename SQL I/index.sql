-- Mendapatkan Data
-- Pelajari dan gunakan dasar-dasar SQL untuk mendapatkan data dari database

-- 1. Apa itu database?
Database adalah tempat untuk menyimpan string dan angka. Contohnya, seluruh data "postingan" media sosial seperti Twitter dan "pelajaran" di Progate akan disimpan didalam database. ("string" adalah sederet karakter)
Database mengelola data didalam tabel seperti gambar dikiri. Secara vertikal, data disusun dalam kolom dan secara horizontal, data disusun dalam baris. Didalam database, kita bisa membuat banyak tabel.
-- 2. Apa itu Kueri?
Dalam SQL, kita menggunakan klausa SELECT untuk mendapatkan data dari database. SELECT digunakan untuk memilih dan mengakses kolom data yang ingin anda olah.
Biasanya setiap database terdiri dari beberapa tabel. Karena inilah, kita harus menggunakan klausa FROM untuk memilih salah satu tabel tersebut. Dengan menggunakan SELECT & FROM, maka kita dapat secara spesifik memilih kolom tertentu dari tabel tertentu untuk diakses dan diolah.
Untuk "mengakhiri" statement SQL, berikan titik koma di akhir statement tersebut. Anda dapat menulis statement SQL dalam satu baris, tapi agar mudah dibaca, gunakan baris baru untuk setiap pernyataan klausa-nya. SQL tidak case-sensitive, Anda bebas untuk menggunakan huruf besar atau kecil, tetapi kami sarankan agar Anda mengikuti format penulisan seperti gambar dibawah.
-- Akses kolom "name" dari tabel "purchases" 
select name
from purchases;

-- 3. Memilih Banyak Kolom
-- Akses kolom "name" dan "price" dari tabel "purchases" 
SELECT name,price
FROM purchases;

-- Akses semua kolom dari tabel "purchases" 
SELECT *
FROM purchases;

-- Mendapatkan Baris Tertentu
-- Pelajari cara mendapatkan baris data spesifik dengan menambahkan "syarat" dalam pernyataan SQL Anda

-- 4. WHERE (1)
Untuk mendapatkan baris tertentu, gunakan klausa WHERE. Sampai disini, kita sudah mempelajari cara untuk mengakses kolom di tabel tertentu untuk mendapatkan baris-barisnya. Dengan menggunakan WHERE kita dapat secara spesifik menunjukkan baris yang memiliki data tertentu.
Gunakan tanda = seperti contoh di bawah ini untuk menunjukkan baris mana yang ingin Anda ambil dari tabel dalam database.
/*
Dibawah "FROM purchases" tambahkan code untuk mengambil baris dengan
nilai "makanan" dikolom "category" 
*/

SELECT *
FROM purchases
WHERE category="makanan";

--5. WHERE (2)
Ada peraturan menyimpan data di dalam database, namanya jenis data. Hal ini digunakan untuk menyatakan berbagai jenis data seperti teks (string), angka (integer/number), dan bahkan tanggal (date).
Mari kita coba menulis kueri untuk menampilkan semua baris yang memenuhi syarat "produk dengan harga $10". Harga dalam kolom "price" disimpan sebagai jenis data integer. Ingatlah, untuk jenis data angka/integer Anda tidak perlu menggunakan tanda petik.
Selanjutnya, kita akan menampilkan baris dengan tanggal "2018-10-10". Data dalam kolom "purchased_at" disimpan sebagai jenis data "tanggal". Untuk jenis data tanggal, diperlukan tanda kutip. Jadi, jangan lupa menulis tanda kutip pada setiap penulisan nilai data tanggal!

/*
dibawah baris "FROM purchases" tambahkan code untuk
mendapatkan baris dengan nilai "10" dikolom "price" 
*/

SELECT *
FROM purchases
WHERE price=10;

/*
dibawah baris "FROM purchases" tambahkan code untuk
mendapatkan baris dengan nilai "2018-10-10" dikolom "purchased_at" 
*/

SELECT *
FROM purchases
WHERE purchased_at="2018-10-10";

-- 6. Operator Perbandingan
Selain tanda =, terdapat simbol lain yang dapat digunakan dalam klausa WHERE. Mereka disebut operator perbandingan. Seperti operator lebih dari dan kurang dari pada gambar dikiri bawah. Dengan ini, Anda dapat membuat kondisi seperti "jika kolom harga lebih dari atau sama dengan $10" untuk menampilkan baris dengan data yang sesuai.
Selain data angka didalam kolom "price", operator perbandingan dapat digunakan pada jenis data "tanggal" seperti pada kolom "purchased_at". Jangan lupa gunakan tanda kutip untuk nilai tanggalnya!

/*
dibawah "FROM purchases" tambahkan code untuk
mengambil baris dengan nilai "10" atau lebih dari kolom "price" 
*/

SELECT *
FROM purchases
WHERE price>=10;

/*
dibawah "FROM purchases" tambahkan code untuk mengambil baris dengan
nilai tanggal "2018-11-01" dan sebelumnya dari kolom "purchased_at"
*/

SELECT *
FROM purchases
WHERE purchased_at<="2018-11-01";

-- 7. LIKE (1)
Saat ingin menampilkan baris yang berisi karakter tertentu, gunakan operator LIKE. Sebagaimana ditampilkan di bawah, kamu bisa menetapkan kondisi untuk menampilkan "baris yang berisi string tertentu" di kolom yang diinginkan.
Untuk menggunakan operator LIKE, Anda harus belajar tentang wildcard. Dalam dunia pemrograman, "wildcard" adalah simbol untuk menggantikan satu / beberapa karakter dalam sebuah string. Simbol wildcard (%) dapat digunakan dengan operator LIKE. Berikut ini adalah contoh menggunakan wildcard untuk menampilkan semua baris yang berisi "puding" di kolom "name".

/*
dibawah "FROM purchases" tambahkan code untuk mengambil
baris dimana nilai "name" mengandung kata "puding"
*/

SELECT *
FROM purchases
WHERE name LIKE "%puding%";

-- 8. LIKE (2)
Wildcard bisa digunakan di awal dan akhir sebuah string. Seperti di bawah ini, wildcard "puding%" bisa digunakan untuk mencari "puding" dan semua nilai di database yang diawali dengan "puding" (lihat contoh dibawah). Pencarian ini disebut pencarian prefiks.
Kamu juga bisa mencari nilai-nilai dengan akhir string tertentu, misalnya "%puding" (lihat contoh dibawah ini). Semua nilai yang diakhiri dengan string "puding" akan ditampilkan. Pencarian semacam ini disebut pencarian postfiks.

/*
dibawah "FROM purchases" tambahkan code untuk
mengambil baris dimana nilai "name" dimulai dengan kata "puding"
*/

SELECT *
FROM purchases
WHERE name LIKE  "puding%";

/*
dibawah "FROM purchases" tambahkan code untuk
mengambil baris dimana nilai "name" diakhiri dengan kata "puding"
*/

SELECT *
FROM purchases
WHERE name LIKE "%puding";
-- 9. NOT
Untuk menampilkan baris yang tidak memiliki nilai tertentu, gunakan operator NOT. Sebenarnya, NOT bisa digunakan didepan semua operator yang sudah kita pelajari. Dengan begitu, semua baris yang tidak memenuhi kondisi yang ditentukan akan ditampilkan.

/*
dibawah "FROM purchases" tambahkan code untuk mendapatkan semua baris dimana
kolom "character_name" bukanlah "Ninja Ken"
*/

SELECT *
FROM purchases
WHERE NOT character_name ="Ninja Ken";

/*
dibawah "FROM purchases" tambahkan code untuk mendapatkan semua baris dimana
kolom "name" tidak mengandung kata "puding"
*/

SELECT *
FROM purchases
WHERE NOT name LIKE "%puding%";

-- 10. IS NULL・IS NOT NULL
Untuk memilih baris yang berisi nilai NULL dikolom tertentu, gunakan IS NULL. Sebagai contoh di bawah ini, dengan kondisi misalnya "WHERE column_name IS NULL" kita bisa mencari baris dimana kolomnya bernilai NULL. Ini berguna disituasi dimana kita mau mencari kolom yang kita lewatkan tanpa sengaja.
Sebaliknya, IS NOT NULL dapat digunakan untuk menampilkan baris yang tidak berisi nilai NULL untuk kolom tertentu.
Untuk mendapatkan baris dimana kolom tertentu berisi atau tidak berisi NULL, kamu tidak dapat menggunakan operator =. Hati-hati jangan sampai melakukan kesalahan ini.

/*
dibawah "FROM purchases" tambahkan code untuk mengambil baris
dimana kolom  "price" adalah NULL
*/

SELECT *
FROM purchases
WHERE price IS NULL;

-- 11. AND・OR
Dengan menggunakan AND, kita bisa menentukan beberapa kondisi atau syarat untuk klausa WHERE. Gunakan struktur "WHERE kondisi1 AND kondisi2" untuk mencari baris yang memenuhi kedua kondisi.
Seperti operatorAND, operator OR dapat digunakan di kueri SQL untuk memasukkan beberapa kondisi. Gunakan struktur "WHERE kondisi1 OR kondisi2" untuk mencari baris yang memenuhi salah satu kondisi (atau keduanya).

/*
dibawah "FROM purchases" tambahkan code untuk mengambil baris
dimana nilai kolom "category" adalah "makanan"
dan nilai kolom "character_name" adalah "Guru Domba"
*/

SELECT *
FROM purchases
WHERE category ="makanan"
AND character_name="Guru Domba";

/*
dibawah "FROM purchases" tambahkan code untuk mengambil baris
dimana nilai kolom "category" adalah "makanan"
atau nilai kolom "character_name" adalah "Ninja Ken"
*/

SELECT *
FROM purchases
WHERE category="makanan"
OR character_name="Ninja Ken";


-- Mengolah Hasil
-- Pelajari cara menyusun, menetapkan batas, dan mengolah data dengan cara lain dengan SQL

-- 12. ORDER BY
Dalam SQL, kamu bisa mengurutkan baris menggunakan ORDER BY. Kamu juga bisa memilih kolom tertentu yang ingin kamu urutkan, seperti contoh berikut ini. Kamu juga harus menentukan bagaimana cara pengurutannya di bagian akhir kueri.
ORDER BY memerlukan method untuk mengurutkan data secara "menurun (DESC)" atau "menaik (ASC)". Urutan naik akan meletakkan nilai terkecil terlebih dahulu. Sedangkan urutan turun akan meletakkan nilai terbesar terlebih dahulu. Dalam code SQL, ASC digunakan untuk "ascending (menaik)" sedangkan DESC digunakan untuk "descending (menurun)".
Jika menuliskan ORDER BY di akhir sebuah statement SQL, hasil akan diurutkan seperti contoh di bawah ini.
karena ORDER BY digunakan diakhir statement SQL, ORDER BY dapat digunakan dengan klausa WHERE seperti gambar dibawah.
/* 
dibawah "FROM purchases" tambahkan code untuk
menampilkan baris dari nilai yang terbesar dikolom "price"
*/

SELECT *
FROM purchases
ORDER BY price DESC;

/*
dibawah WHERE character_name = "Ninja Ken", tambahkan code untuk
menampilkan baris dari nilai terkecil dikolom "price"
*/

SELECT *
FROM purchases
WHERE character_name = "Ninja Ken"
ORDER BY price ASC;

-- 13. LIMIT
Untuk menentukan "jumlah maksimum hasil" tertentu, gunakan LIMIT.
Seperti ORDER BY, LIMIT digunakan di akhir sebuah kueri SQL.

/*
dibawah "FROM purchases" tambahkan code untuk
menampilkan maksimum 5 baris hasil
*/

SELECT *
FROM purchases
LIMIT 5;

/*
dibawah WHERE character_name = "Ninja Ken",
tambahkan code untuk menampilkan hasil maksimum 10 baris
*/

SELECT *
FROM purchases
WHERE character_name = "Ninja Ken"
LIMIT  10;

-- Proyek Akhir
-- 14. Mempraktikkan Hal Yang Sudah Anda Pelajari
/*
Dibawah "FROM purchases" tambahkan code untuk mengambil baris
dengan nilai tanggal "2018-11-01" dan sebelumnya, dari kolom "purchased_at"
*/

SELECT *
FROM purchases
WHERE purchased_at <="2018-11-01";

/*
Dibawah "FROM purchases" tambahkan code untuk baris dimana
kolom "name" mengandung string "puding"
*/

SELECT *
FROM purchases
WHERE name LIKE "%puding%";

/*
dibawah "FROM purchases" gunakan operator NOT untuk menambahkan code untuk
mengambil baris dimana nilai kolom "character_name" adalah bukan "Ninja Ken"
*/

SELECT *
FROM purchases
WHERE NOT character_name="Ninja Ken";

/*
dibawah "FROM purchases" tambahkan code untuk
menambahkan baris dimana kolom "price" adalah NULL
*/

SELECT *
FROM purchases
WHERE price IS NULL;

/*
setelah "FROM purchases" tambahkan code untuk mengambil baris dimana nilai
kolom "category" adalah "makanan" dan kolom "character_name" adalah "Guru Domba"
*/

SELECT *
FROM purchases
WHERE category="makanan"
AND character_name="Guru Domba";

/*
dibawah "FROM purchases" tambahkan code untuk mengambil maksimum 5 baris
dengan urutan terbesar dari kolom "price"
*/

SELECT *
FROM purchases
WHERE ORDER BY price DESC
LIMIT 5;