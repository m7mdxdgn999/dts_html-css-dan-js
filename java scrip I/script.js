// String & Integer

// 2. console.log()
// Cetak "Hello World" ke console
console.log ("Hello World");

// Cetak "Ninja Ken" ke console
console.log ("Ninja Ken");

// Ubah baris dibawah menjadi komentar
//console.log("Ubah baris ini menjadi komentar");

// 3. Kalkulasi (1)
// Cetak hasil 5 tambah 3
console.log (5+3);

// Cetak hasil 20 kurang 8
console.log (20-8);

// Cetak string "4 + 5"
console.log ("4+5");

// 4. Kalkulasi (2)
// Cetak hasil 8 kali 4 di console.
console.log (8*4);

// Cetak hasil 24 bagi 4 di console.
console.log (24/4);

// Cetak sisa setelah membagi 7 dengan 2 di console.
console.log (7%2);

// 5. Menggabungkan String
// Cetak kombinasi dari string "Guru " dan "Domba"
console.log ("Guru"+ "Domba");

// Cetak kombinasi dari "20" dan "15" (dan jadikan sebagai string)

console.log ("20"+ "15");

// Variable & Constant

// 6. Variable
// Deklarasikan nama variable dengan nilai string "Ninja Ken"
let name="Ninja Ken";

// Cetakan nilai nama variable
console.log(name);

// 7. Menggunakan Variable
// Deklarasikan variable length
let length = 5;

// Cetak nilai variable length
console.log (length);

// Gunakan variable length untuk mencetak hasil area lingkaran
console.log (length * length *3);

// 8. Mengupdate Variable (1)
let name = "Ninja Ken";
console.log(name);

// Update nilai variable ke "Birdie"
name="Birdie";

// Cetak nilai dari variable name
console.log(name);

// 9. Mengupdate Variable (2)
let number = 7;
console.log(number);

// Tambahkan 3 ke nilai variable number
number=number+3;

console.log(number);

// Bagi nilai variable number dengan 2
number=number/2;

console.log(number);


// 10. Constant
// Deklarasikan constant language
const language="Prancis";

// Cetak nilai constant language
console.log(language);

// Gunakan constant language untuk mencetak "Saya bisa berbicara bahasa ____"
console.log("Saya bisa berbicara bahasa" + language);

// 11. Template Literal
const name = "Ninja Ken";
const age = 14;

// Cetak string "Nama saya adalah ____"
console.log(`Nama saya adalah ${name}`);

// Cetak string "Hari ini saya berusia ____ tahun"
console.log(`Hari ini saya berusia ${age} tahun`);

// Conditional Statement
// 12. Statement if
const level = 12;

// Tambahkan pernyataan if dengan kondisi: level > 10
if (level > 10){
  console.log("Level Anda lebih tinggi dari 10");
};

// 13. Operator Boolean & Perbandingan (1)
const age = 24;

// Cetak hasil dari age >= 18
console.log(age >= 18);

// Cetak hasil dari age < 18
console.log (age < 18);

/* Ketika nilai dari age lebih besar atau sama dengan 18
dan cetak "Saya berusia lebih dari 18 tahun" */
if(age >= 18){
  console.log("Saya berusia lebih dari 18 tahun");
};

// 14. Operator Boolean & Perbandingan (2)
const password = "ninjaken";

// Ketika nilai password adalah "ninjaken", cetak "Berhasil log in"
if(password==="ninjaken"){
  console.log("Berhasil log in");
};

// Ketika nilai password bukan "ninjaken", cetak "Password salah"
if(password!=="ninjaken"){
  console.log("Password salah");
};

// 15. else
const age = 17;

// Ketika kondisi tidak terpenuhi, cetak "Saya berusia dibawah 18 tahun"
if (age >= 18) {
  console.log("Saya berusia diatas 18 tahun");
} else{
  console.log("Saya berusia dibawah 18 tahun");
};

// 16. else if
const age = 17;

/* Ketika umur diatas 10 tahun tetapi kurang dari 18 tahun, cetak:
"Saya berusia dibawah 18 tahun, namun diatas 9 tahun" */
if (age >= 18) {
  console.log("Saya di atas 18 tahun");
} 

else if (age >= 10) {
  console.log("Saya berusia dibawah 18 tahun, namun diatas 9 tahun");
}

 else {
  console.log("saya dibawah 10 tahun");
}

// 17. Beberapa Kondisi
const age = 24;

// Tambahkan pernyataan if dengan kondisi yang telah ditentukan
if (age>=20 && age<30){
  console.log("Saya di usia 20-an tahun");
}

// 18. Statement switch (1)
const rank = 2;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;

  // Tambahkan case ketika rank adalah 2
  case 2:
    console.log("Anda meraih medali perak!");
    break;
  // Tambahkan case ketika rank adalah 3
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;
  
}

// 19. Statement switch (2)
const rank = 5;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;
  case 2:
    console.log("Anda meraih medali perak!");
    break;
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;
  // Tambahkan default
  default:
  console.log("Semoga sukses dikesempatan berikutnya");
  break;
  
}
