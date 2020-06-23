// Dasar-Dasar Class
// 1.Review Object
// Definisikan constant animal
const animal ={name:"Leo",age:3,greet:() => {
    console.log("Halo");
  }};

// Print property name milik constant animal
console.log (animal.name);

// Panggil greet method property milik animal

animal.greet ();

// 2.Apa yang dimaksud dengan Class?
// Definisikan class Animal
class Animal {}

// 3.Membuat Instance
class Animal {
}

// Tetapkan instance class Animal ke constant animal
const animal = new Animal ();

// Tampilkan nilai milik constant animal
console.log (animal);

// 4.Constructor (1)
class Animal {
    // Tambahkan constructor
    constructor (){
      console.log ("Membuat instance baru") ;
    }
  }
  
  const animal = new Animal();
  
// 6.Constructor (2)
class Animal {
    constructor() {
      // Tetapkan nilai string「Leo」ke property name
      this.name="Leo";
      
      // Tetapkan nilai「3」ke property age
      this.age=3;
    }
  }
  
  const animal = new Animal();
  
  // Print「Nama: ____」
  console.log (`Nama:${animal.name}`);
  
  // Print「Usia: __」
  console.log (`Usia:${animal.age}`);
  
  
// 7.Constructor (3)
class Animal {
    // Tambahkan argument「name」dan「age」
    constructor(name,age) {
      // Gantikan nilai string "Leo" dengan nilai milik argument name
      this.name = name;
      
      // Gantikan「3」dengan nilai milik argument age
      this.age = age;
    }
  }
  
  // Teruskan argument「"Mocha"」「8」ke constant animal dibawah
  const animal = new Animal("Mocha",8);
  
  console.log(`Nama: ${animal.name}`);
  console.log(`Usia: ${animal.age}`);
  
// 8.Method (1)
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    // Tambahkan method greet
    greet(){
      console.log("Halo");
    }
    
  }
  
  const animal = new Animal("Leo", 3);
  
  console.log(`Nama: ${animal.name}`);
  console.log(`Usia: ${animal.age}`);
  
  // Panggil method greet milik animal instance
  animal.greet();
  
// 9.Method (2)
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    // Tambahkan method info
    info(){
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
    
  }
  
  const animal = new Animal("Leo", 3);
  animal.greet();
  
  // Panggil method info menggunakan constant animal
  animal.info();
  
// 10.Memanggil Method di dalam Method
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      // Panggil method greet
      this.greet();
      
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berumur ${this.age} tahun`);
    }
  }
  
  const animal = new Animal("Leo", 3);
  // Hapus baris dibawah
  
  
  animal.info();
  
// Inheritance Class
// 11.Apa yang dimaksud dengan Inheritance?
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berumur ${this.age} tahun`);
    }
  }
  
  // Definisikan class Dog agar dapat menerima warisan dari class Animal
  class Dog extends Animal {}
  
  
  const animal = new Animal("Leo", 3);
  animal.info();
  
// 12.Menggunakan Inheritance Class
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
  }
  
  // Terapkan instance class Dog ke constant dog
  const dog=new Dog ("Leo",4);
  
  // Panggil method info dari constant dog
  dog.info ();
  
// 13.Menambah Method
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
    // Tambahkan method getHumanAge
    getHumanAge () {
      return this.age*7;
    }
    
  }
  
  const dog = new Dog("Leo", 4);
  dog.info();
  
  // Panggil method getHumanAge milik instance dog
  const humanAge=dog.getHumanAge();
  
  // Print 「Saya berusia __ tahun dalam umur manusia」
  console.log (`Saya berusia ${humanAge} tahun dalam umur manusia`);
  
// 14.Overriding (1)
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
    // Tambahkan method info
    info(){
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
      
      const humanAge = this.getHumanAge();
      console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
    }
    
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  const dog = new Dog("Leo", 4);
  dog.info();
  
// 15.Overriding (2)
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
    // Tambahkan constructor
     constructor(name, age, breed) {
    super (name,age);
    this.breed=breed;
    }
    
    
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      // Print 「Saya adalah seekor ____」
      console.log (`Saya adalah seekor ${this.breed}`);
      
      console.log(`Saya berusia ${this.age} tahun`);
      const humanAge = this.getHumanAge();
      console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
    }
    
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  // Tetapkan "Chihuahua" sebagai nilai argument
  const dog = new Dog("Leo", 4, "Chihuahua");
  dog.info();
  