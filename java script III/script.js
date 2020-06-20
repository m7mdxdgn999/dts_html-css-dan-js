// Mempelajari Function
// 1. Apa yang dimaksud dengan Function? (1)
const greet = function() {
    console.log("Halo!");
    console.log("Ayo belajar function!");
  };
  
  // Panggil function greet dibawah
  greet();

// 2. Apa yang dimaksud dengan Function? (2)
// Tetapkan function ke constant hello
const hello=function () {
    // body...
    console.log ("Halo!");
    console.log("Saya ____");
  }
  
  
  // Panggil function yang ditetapkan di constant hello
  
  hello();

// 3. Arrow Function
// Tetapkan arrow function ke constant greet
const greet = ()=> {
    console.log ("Halo!");
  }
  
  
  // Panggil function greet
  greet ();
  
// 4. Argument
// Tambahkan parameter name ke function
const greet = (name) => {
    // Print pesan "Halo, ____"
    console.log(`Halo, ${name}`);
  };
  
  // Panggil function greet dengan "Guru Domba" sebagai argument
  greet ("Guru Domba");
  
// 5. Menggunakan Beberapa Argument
// Tambahkan parameter number1 dan number2 kedalam function 
const add = (number1,number2) => {
    // Print penjumlahaan number1 dan number2
    console.log (number1+number2);
  };
  
  // Panggil function dengan 5 dan 7 sebagai argument
  add (5,7);
  
// 6. Nilai Return
const half = (number) => {
    // Return nilai dari variable number dibagi 2
    return number/2;
  };
  
  // Defenisikan constant result
  const result  =  half(130);
  
  // Print pesan "Separuh dari 130 adalah ____"
  console.log(`Separuh dari 130 adalah ${result}` );
  
// 7. Menggunakan Nilai Return
const check = (number) => {
    // periksa apakah number adalah kelipatan dari 3 dan return-kan hasilnya
     return  number % 3 === 0;
  };
  
  // Panggil function check dalam kondisi statement if
  if ( check (123)) {
    console.log("Multiple of 3");
  } else {
    console.log("Not a multiple of 3");
  }
  
// 8. Scope (Cakupan)
// Definisikan constant name
const name ="Ninja Ken";

const introduce = () => {
  // Print "Saya ____" diconsole
  console.log (`Saya ${name}`);
  
 
};

// Panggil function introduce
 introduce ("Guru Domba");

// Print nilai dari constant name
console.log (name);

// 9. Latihan Akhir
const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum
 const getMax = (a,b,c)=> {
   let max =a;
   if (b>max){
     max=b;
   }
   
 if (c>max) {
   max=c;
 }
 
 return max
 };



// Print "Nilai maksimum adalah __"
const max = getMax(number1, number2, number3);
console.log(`Nilai maksimum adalah ${max}`);

