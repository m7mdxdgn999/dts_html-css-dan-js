// Mempelajari tentang Callback Function
// 1. Mempelajari tentang Callback Function
const printKen = () => {
    console.log("Ninja Ken");
  };
  
  const printMaster = () => {
    console.log("Guru Domba");
  };
  
  const call = (callback) => {
    console.log("Memanggil function callback.");
    callback();
  };
  
  // Ketik ulang argument ini sebagai printMaster dan konfirmasikan output-nya
  call(printMaster);
  
// 2. Apa yang dimaksud dengan Callback Function?
const printKen = () => {
    console.log("Ninja Ken");
  };
  
  // Tambahkan parameter callback ke function call
  const call = (callback) => {
    console.log("Memanggil function callback.");
    // Panggil callback function
    callback();
  };
  
  // Teruskan printKen sebagai argument dan jalankan function call
  call (printKen);
  
// 3. Mendeklarasikan Callback Function secara Langsung
const printKen = () => {
    console.log("Ninja Ken");
  };
  
  const call = (callback) => {
    console.log("Memanggil callback function.");
    callback();
  };
  
  call(printKen);
  
  // Deklarasikan function didalam argument dan teruskan
  call(() => {
    console.log("Guru Domba");
  });
  
// 4. Argument Callback Function
const call = (callback) => {
    callback("Ninja Ken", 14);
  };
  
  // Tambahkan sebuah function yang menerima dua argument didalam argument call
  call((name,age) => {
    console.log(`${name} berusia ${age} tahun.`);
  });
  
