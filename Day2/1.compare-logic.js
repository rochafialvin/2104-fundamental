// Condition

// Data type : Boolean
// true or false

// Comparison
// Proses perbandingan akan menghasilkan boolean

// var result = 5 > 4;
// console.log("result ", result);

// console.log(5 < 4); // false
// console.log(5 < 5); // false

// compare : value
// console.log(7 == 9); // false
// console.log(7 == 7); // true
// console.log(7 == "7"); // true

// compare : value & data type
// console.log(7 === 9); // false
// console.log(7 === 7); // true
// console.log(7 === "7"); // false

// console.log(7 != 9); // true
// console.log(7 != 7); // false
// console.log(7 != "7"); // false
// console.log(7 !== "7"); // true

// 9 lebih besar atau sama dengan 7
// console.log(9 >= 7); //  true
// console.log(9 <= 7); // false
// console.log(9 <= 9); // true

// Logic Gate

// AND --> &&
// Rules : Dapat mengikuti ujian jika membawa pensil DAN pulpen
// Jika keduanya TRUE, maka hasilnya TRUE, sisanya FALSE
/*
   PENSIL    PULPEN   --> BOLEH ( TRUE ) / TDK BOLEH ( FALSE )
   TRUE   && TRUE     --> TRUE
   TRUE   && FALSE    --> FALSE
   FALSE  && FALSE    --> FALSE
*/

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// OR --> ||
// Rules : Dapat mengikuti ujian jika membawa pensil ATAU pulpen
// Jika salah satu TRUE, maka hasilnya TRUE, sisanya FALSE
/*
   PENSIL    PULPEN   --> BOLEH ( TRUE ) / TDK BOLEH ( FALSE )
   TRUE   || TRUE     --> TRUE
   TRUE   || FALSE    --> TRUE
   FALSE   || TRUE    --> TRUE
   FALSE  || FALSE    --> FALSE
*/
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// TRUTHY & FALSY Values

// Value yang akan dianggap sebagai FALSE
// - integer nol --> 0
// - string kosong --> ""
// - undefined --> kosong
// - NaN (Not a Number) --> Muncul dari hasil perhitungan yang tidak valid
// - null --> "kosong"

// 6 * "hello"; --> NaN

// // true && false --> false
// console.log(true && Boolean(0));
// // true && true --> true
// console.log(true && Boolean(23));
// // true && true --> true
// console.log(true && Boolean(-23));

// var x = true;
// var y;

// // true || undefined
// // true || false --> true
// console.log(x || y); // true

// NEGATIVE

console.log(true); //--> true
console.log(!true); //--> false

console.log(false); //--> false
console.log(!false); //--> true

console.log(!(true && false)); // true
