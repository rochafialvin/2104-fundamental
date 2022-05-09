/////////////////////
/* RETURN (OUTPUT) */
////////////////////

// var basic = () => {
//   // Function basic akan mengeluarkan nilai 99
//   return 99;
// };

// var input = prompt("Masukkan angka");
// parseInt(input);

// parseInt(prompt("Masukkan angka"));

// var wadah = basic();
// console.log(wadah);

// console.log(basic());

// Function akan selalu melakukan return
// Jika tidak ditentukan apa yang harus di return, maka function akan me return undefined

// var empty = (a, b) => {
//   var result = a * b;
//   console.log(`result : ${result}`);
// };

// var wadah = empty(4, 3);
// console.log(`Isi wadah : ${wadah}`);

var findRandom = (num) => {
  var random = Math.random();
  random = random * num + 1;
  random = Math.floor(random);

  return random;
};

findRandom(10);
findRandom(100);
