// LOOP
// Mengulang task selama condition true

// WHILE
// while (condition) {
//   task;
// }
// let number = 0;

// while (number < 5) {
//   console.log(number);
//   number++;
// }

// DO WHILE

// let number = 0; // init
// do {
//   console.log(number); // task
//   number++; // modificator
// } while (number < 5); //condition

// FOR
// for (let number = 0; number < 5; number++) {
//   console.log(number);
// }

// FUNCTION
// Block code yang memiliki nama dan dapat dirunning berulang
// Parameter adalah variable yang hanya dapat diakses dari dalam functionnya

// Declaration
// function fnFirst(num1, num2) {
//   const result = num1 + num2;
//   console.log(`Hasil penjumlahan : ${result}`);
// }

// Expression

const fnReturn10 = function () {
  return 10;
};

const fnThird = (angka1) => {
  const result = angka1 * 10;
  return result;
};

const baby = fnThird(fnReturn10);
console.log(baby);
