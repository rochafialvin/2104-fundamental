// VARIABLE
// Tempat menyimpan data

// VAR
// Kita dapat membuat variable tanpa nilai, akan terisi undefined
// Jika variable dibuat didalam function maka hanya akan dapat diakses di dalam function
// Dapat melakukan re-declaration
var a = "web development";
a = "Data Science";

// LET
// Kita dapat membuat variable tanpa nilai, akan terisi undefined
// Scope : kurung kurawal. Ketika dibuat di dalam kurung kurawal maka hanya dapat diakses didalam kurung kurawal saja
// Tidak dapat melakukan re-declaration pada scope yang sama
let b = 1;
b = 23;
if (true) {
  let b = 2;
  //   console.log(b); // 2
}
// console.log(b); // 23

// CONST
// Kita dapat membuat variable tanpa nilai, akan terisi undefined
// Scope : kurung kurawal. Ketika dibuat di dalam kurung kurawal maka hanya dapat diakses didalam kurung kurawal saja
// Tidak dapat melakukan re-declaration pada scope yang sama
// nilai pada variable tidak dapat
// const pi = 3.14;
// pi = 99.8; // error

// RULES --> jika tidak diikuti, error
// Hanya dapat diawali dengan huruf, underscore, dan dollar sign
// let 123Days error
// let !dont error
// oneDirection success
// _underground success
// $money success

// STYLE --> camelCase --> gpp ga diikuti
let sundayMorning;
let sundaymorning;
let SUNDAYMORNING;

// STRING
const brand = "Bear Brand";
const city = "Jakarta";
const street = "Jendral Sudirman";
const address = "Jalan " + street + ", kota " + city;
const address2 = `Jalan ${street}, kota ${city}`;

street[2]; // n
street.length; // 16
// Tidak merubah nilai asli
const uppercaseStreet = street.toUpperCase();
const lowercaseStreet = street.toLowerCase();
// Ganti huruf a yang pertamakali ditemukan menjadi i
const replacedCity = city.replace("a", "i");
// Ganti semua huruf a menjadi i
// Regex
const replacedAllCity = city.replace(/a/g, "i");
// [ 'Jendral', 'Sudirman' ]
const splittedStreet = street.split(" ");
// [ 'J', 'k', 'rt', '' ]
const splittedCity = city.split("a");

// CHECKING DATA TYPE

const melinda = "Tak terlupakan";
const isStillTogether = false;
const heart = typeof melinda; // string
const together = typeof isStillTogether; // boolean

// NUMBER
const date = 29;
const pi = 3.14;
const piMinus = -3.14;
const salary = 20000000;

Math.abs(piMinus); // 3.14
Math.round(pi); // 3
Math.ceil(pi); // 4
Math.floor(pi); // 3
Math.pow(date, 2); // 841
Math.sqrt(16); // 4
Math.cbrt(8); // 2
Math.pow(36, 0.5); // akar dua
salary.toLocaleString("id"); // 20.000.000
date + "10"; // '2910'
date * "10"; // 290

let number = 10;

number = number + 2; // number --> 12

number + 4; // number --> 12

number -= 2; // number --> 10

number += 1; // number --> 11

number++;
number++; // number --> 13

number--; // number --> 12

parseInt("123"); // 123
parseInt("123.5"); // 123
parseInt(23.9); // 23
parseFloat("23.89"); // 23.89
+"123"; // 123
+"123.45"; // 123.45

// BOOLEAN

const benar = true;
const salah = false;

// PERBANDINGAN
const evaluate = 5 < 7; // true
5 < 5; // false
5 < 4; // false

5 >= 4; // true
5 >= 5; // true

// const age = 18;
// 30 <= age <= 20;
false <= 20; // 0 <= 20 --> true

// GERBANG LOGIKA

// AND
false & false; // false
true && false; // false
true && true; // true

const age = 20;
// age > 18 && age < 45;
false && true; // false

// age > 18 && age < 45;
true && true; // true

// OR
false || false; // false
false || true; // true
true || true; // false

// Truthy & Falsy Values

// Falsy
0, "", undefined, null, NaN;

// Truthy
// console.log({ arr: Boolean([]), obj: Boolean({}) });

// CONDITIONAL
// if (7 > 9) {
//   console.log("Condition 1");
// } else if (5 === "5") {
//   console.log("Condition 2");
// } else {
//   console.log("All Conditions are wrong");
// }

// Switch Case

const color = true;
// Menyamakan yang ada didalam kurung dengan setaip value pada case
switch (color) {
  case 32 < 10:
    console.log("Stop");
    break;
  case 32 > 9:
    console.log("Ready");
    break;
  case 10 < 7:
    console.log("Go");
    break;
  default:
    console.log("Error");
}
