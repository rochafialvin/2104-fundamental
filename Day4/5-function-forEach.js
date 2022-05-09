//////////////
/* FOR EACH */
//////////////

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

numbers[1].forEach(xyz);

///////////////////////////////////////////////////////////////////////
// Buat sebuah function yang dapat memisahkan nilai genap dan ganjil //
// data awal = [11, 22, 34, 41, 52, 63, 71, 86,]                     //
// hasil = [ [11, 41, 63 ,71], [22, 34, 52, 86] ]                    //
//////////////////////////////////////////////////////////////////////

var oddEvenSeparator = (arr) => {
  // Gimana nih ?
};

// result = [ [11, 41, 63 ,71], [22, 34, 52, 86] ]
var result = oddEvenSeparator([11, 22, 34, 41, 52, 63, 71, 86]);
console.log(result);
