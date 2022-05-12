////////////////////
/* VARIABLE SCOPE */
////////////////////

/*
   Variable Scope : Cakupan wilayah yang dimiliki oleh variabel
*/

/*
  VAR

  1. Function scope : Saat dibuat didalam function, maka hanya dapat diakses dari dalam function itu saja.
*/

// function x() {
//   var firstName = "Goku";
//   var firstName = "Vegeta";
//   console.log(firstName);
// }

// if (true) {
//   var lastName = "Uzumaki";
// }

// while (true) {
//   var lastName = "Uchiha";
//   break;
// }

// console.log(lastName); // aman
// console.log(bestFriend); // aman
// console.log(firstName); // error

/*
  LET

  1. Function scope : Saat dibuat didalam function, maka hanya dapat diakses dari dalam function itu saja.
  2. Block scope : Saat dibuat didalam kurung kurawal (if , swicth, for, while, do while)

  Note :
    - Tidak dapat melakukan deklarasi ulang pada scope yang sama

*/

// function x() {
//   let firstName = "Goku";
//   console.log(firstName);
// }

// if (true) {
//   let lastName = "Uzumaki";
// }

// while (true) {
//   let bestFriend = "Uchiha";
//   break;
// }

// console.log(lastName); // error
// console.log(bestFriend); // error
// console.log(firstName); // error

/*
  CONST

  1. Function scope : Saat dibuat didalam function, maka hanya dapat diakses dari dalam function itu saja.
  2. Block scope : Saat dibuat didalam kurung kurawal (if , swicth, for, while, do while)

  Note :
    - Tidak dapat melakukan deklarasi ulang pada scope yang sama
    - Nilai yang disimpan tidak dapat diubah
*/

function x() {
  let color = "Maroon";
}

function y() {
  let color = "Five";
}

var color = "Purple";
color = "Brown";
console.log(color);
var color = "Aman";

let warna = "Ungu";
warna = "Coklat";
console.log(warna);
let warna = "Problem";

const animal = "Bird";
animal = "Shrimp";
console.log(animal);
const animal = "Fish";

let nama;
const day = "sunday";

// Variable scope
// var : function scope
// let & const : function scope & block scope

// re-declaration
// var : bisa
// let & const : tidak bisa

// re-assignment
// var & let : bisa re-assign value
// const : tidak bisa
