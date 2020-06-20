// iterasi
// 1. Review Variable
// Deklarasikan variable number
let number=1;

// Print nilai dari variable number, dan tambahkan dengan 1
console.log(number);
number+=1;
console.log(number);

// Salin kedua baris diatas dan tempelkan dibaris bawah sebanyak 4 kali
number+=1;
console.log(number);
number+=1;
console.log(number);
number+=1;
console.log(number);
number+=1;
console.log(number);

// 2. Loop while
// Deklarasikan variable number
let number=1;

// Tambahkan while loop dibawah
while(number<=100){
    console.log(number);
    number+=1;
    
}

// 3. Loop for
// Gunakan loop for untuk mem-print angka dari 1 hingga 100
for (let number=1;number<=100;number++){
    console.log (number);
  }

// 4. Menerapkan Iterasi
// Selesikan code loop for dibawah ini
for (let number=1;number<=100 ;number++) {
    // Gunakan statement if untuk mem-print string "Kelipatan 3" ketika angka yang diprint adalah angka kelipatan 3
    if(number % 3 === 0){
      console.log("Kelipatan 3");
    }
    else{
      console.log (number);
    }
  }

//   Array
// 5. Apa yang dimaksud dengan array?
// Tetapkan array yang diberikan sebagai constant animals
const animals =["anjing", "kucing", "domba"];

// Print constant animals
console.log(animals);

// 6. Mendapatkan Element Array
const animals = ["anjing", "kucing", "domba"];

// Print element array pertama
console.log(animals[0]);

// Print element array ketiga
console.log(animals[2]);

// 7. Mengupdate Element Array
const animals = ["anjing", "kucing", "domba"];

// Gantikan element ketiga array menjadi "kelinci"
animals[2]="kelinci";

// Print array ketiga dari constant animal ke console
console.log(animals[2]);

// 8. Iterasi dengan Array (1)
const animals = ["anjing", "kucing", "domba"];

// Gunakan loop for untuk mem-print nilai animals di console secara berurutan
for (let i=0;i<3;i++){
  
  console.log(animals[i]);
}

// 9. Iterasi dengan Array (2)
const animals = ["anjing", "kucing", "domba", "kelinci", "monyet", "harimau", "beruang", "gajah"];

// Gunakan property length untuk mem-print jumlah element di array
console.log(animals.length);

// Gunakan property length untuk mengubah kondisi dibawah
for (let i = 0; i<animals.length; i++) {
  console.log(animals[i]);
}

// Object
// 10. Apa yang dimaksud dengan Object?
// Deklarasikan constant character dan berikan object yang sudah disediakan
const character = {name: "Ninja Ken", age:14};

// Print nilai character
console.log (character);

// 11. Mengakses & Memperbarui Nilai
const character  = {name: "Ninja Ken", age: 14};

// Print nilai property name milik character
console.log (character .name);

// Gantikan nilai age milik character ke 20 
character.age=20;

// Print constant character ke console

console.log (character);

// 12. Array dalam Object (1)
const characters = [
    {name: "Ninja Ken", age: 14},
    {name: "Guru Domba", age: 1000}
  ];
  
  // Print element pertama milik array characters
  console.log(characters[0]);
  
  // Print nilai milik property name dari element array character kedua 
  
  console.log(characters[1].name);

// 13. Array dalam Object (2)
const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
];

// Selesaikan loop for dibawah
for (let i=0;i<characters.length ;i++) {
  console.log("--------------------");
  
  // Tentukan nilai constant character
const character=characters[i];
  
  // Print "Nama saya adalah ____"
  console.log ( `Nama saya adalah ${character.name}`  );
  
  // Print "Saya berusia ____ tahun"
   console.log (`Saya berusia ${character.age }tahun` );
  
}

// undefined (tidak didefinisikan)
// 14. Apa yang dimaksud dengan "undefined"?
const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
  // Tambahkan element dibawah
  {name: "Birdie"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`Nama saya adalah ${character.name}`);
  console.log(`Saya berumur ${character.age} tahun`);
}

// 15. Mencegah Undefined
const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
  {name: "Birdie"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`Nama saya adalah ${character.name}`);
  
  // Tambahkan statement if dibawah
  if(character.age===undefined){
    console.log("Umur saya rahasia!");
  } else {
    console.log (`Saya berumur ${character.age} tahun`);
  }
  
  
}

// Proyek Akhir
// 16. Bagian 1
const cafe = {
  name: "Progate Cafe",
  businessHours: {
    // Tetapkan object yang sudah disediakan untuk businessHours
    opening:"10:00", 
    closing:"20:00"
  },
};

// Print "Nama: ____"
console.log(`Nama: ${cafe.name}`);

// Print "Jam: Dari jam ____ sampai jam ____"
console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);

// 17. Bagian 2
const cafe = {
  name: "Progate Cafe",
  businessHours: { 
    opening: "10:00",
    closing: "20:00"
  },
  // Tambahkan property menu dan berikan array yang sudah disediakan
  menu:["Kopi","Teh","Kue Cokelat"]
  
};

console.log(`Nama: ${cafe.name}`);
console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("Menu Rekomendasi");

// Gunakan loop for untuk mem-print nilai array menu 
for ( let i=0; i<cafe.menu.length ;i++){
  console.log (cafe.menu [i]);
}

