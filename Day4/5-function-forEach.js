//////////////
/* FOR EACH */
//////////////

// forEach merupakan method dari array
// forEach akan menerima satu argument berupa function (callback function)
// callback function harus memiliki satu buah parameter
// forEach akan menjalankan callback function sebanyak data pada array
// setiap menjalankan callback, data pada array akan masuk secara bergantian

// var numbers = [1, 3, 5];
// index 0 = 1
// index 1 = 3
// index 2 = 5

// i = 1
// numbers.length =  3
// for (var i = 0; i < numbers.length; i++) {
//   // numbers[2] * 2
//   // result = 5 * 2 = 10
//   var result = numbers[i] * 2;
//   console.log(`Result : ${result}`);
// }

// forEach akan menjalankan callback sebanyak data pada array

var multipleTwo = (angka) => {
  var result = angka * 2;
  console.log(`Result : ${result}`);
};

var oddEven = (x) => {
  if (x % 2 == 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil");
  }
};

var days = (y) => {
  console.log(`Running`);
};

var printData = (value, index, arr) => {
  // value : "Sunday"
  // index : 0
  // arr : numbers
  console.log({ value, index, arr });
};

var numbers = [
  ["Apple", "Banana", "Cherry"],
  [23, 34, 57],
  [true, false, false],
];

var xyz = (value) => {
  console.log({ value });
};

numbers.forEach(xyz);

///////////////////////////////////////////////////////////////////////
// Buat sebuah function yang dapat memisahkan nilai genap dan ganjil //
// data awal = [11, 22, 34, 41, 52, 63, 71, 86,]                     //
// hasil = [ [11, 41, 63 ,71], [22, 34, 52, 86] ]                    //
//////////////////////////////////////////////////////////////////////

var oddEvenSeparator = (arr) => {
  var odd = [11, 41, 63]; // ganjil
  var even = [22, 34, 52]; // genap

  var separator = (value) => {
    // value : 34
    if (value % 2 == 0) {
      even.push(value);
    } else {
      odd.push(value);
    }
  };
  // arr : [11, 22, 34, 41, 52, 63, 71, 86]
  arr.forEach(separator);

  return [odd, even];
};

var numbers = [11, 22, 34, 41, 52, 63, 71, 86];
var result = oddEvenSeparator(numbers);
console.log(result);
