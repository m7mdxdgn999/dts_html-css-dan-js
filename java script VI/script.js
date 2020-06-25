// Method untuk Array
// 1.Push
const characters = ["Ninja Ken", "Baby Ben", "Guru Domba"];

console.log(characters);

// Tambahkan string "Birdie" ke array characters dengan method push
characters.push("Birdie");

// Print array characters
console.log(characters);

// 2.forEach
const characters = ["Ninja Ken", "Baby Ben", "Guru Domba", "Birdie"];

// Cetak semua element didalam array characters dengan menggunakan method forEach
characters.forEach((character)=>{console.log(character)});

// 3.Find
const numbers = [1, 3, 5, 7, 9];

// Temukan kelipatan 3 dari array numbers dengan menggunakan method find
// dan tetapkan hasilnya ke constant foundNumber 
const foundNumber=numbers.find((number)=>{
  return number % 3 === 0;
});


// Print foundNumber
console.log(foundNumber);


const characters = [
  {id: 1, name: "Ninja Ken", age: 6},
  {id: 2, name: "Baby Ben", age: 2},
  {id: 3, name: "Guru Domba", age: 100},
  {id: 4, name: "Birdie", age: 21}
];

// Temukan object dengan id = 3 dari constant characters,
// dan tetapkan nilainya ke constant foundCharacter
const foundCharacter=characters.find((character)=>{
  return character.id===3;
});

// Print foundCharacter
console.log(foundCharacter);

// 4.Filter
const numbers = [1, 2, 3, 4];

// Dapatkan semua nomor genap dari array numbers dengan menggunakan method filter,
// dan tetapkan hasilnya ke constant evenNumbers 
const evenNumbers=numbers.filter((number)=>{
  return number % 2 === 0;
});

// Print nilai evenNumbers
console.log(evenNumbers);


const characters = [
  {id: 1, name:"Ninja Ken", age: 14},
  {id: 2, name:"Baby Ben", age: 5},
  {id: 3, name:"Guru Domba", age: 100}
];

// Dapatkan characters berumur lebih muda dari 20,
// dan tetapkan hasilnya ke constant underTwenty 
const underTwenty=characters.filter ((character)=>{
  return character.age < 20;
});
// Print nilai underTwenty
console.log(underTwenty);

// 5.Map
const numbers = [1, 2, 3, 4];

// Buatlah array baru di constant numbers dengan menggunakan method map,
// dan tetapkan hasilnya ke constant doubledNumbers 
const doubledNumbers=numbers.map((number)=>{
  return number * 2;
});

// Print constant doubledNumbers
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Dennis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// Buatlah array baru didalam constant names dengan menggunakan method map,
// dan tetapkan sebagai constant fullNames
const fullNames=names.map((name)=>{
  return name.firstName +""+ name.lastName;
});
// Print constant fullNames
console.log(fullNames);
