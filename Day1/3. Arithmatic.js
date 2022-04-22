// var a = 23;
// var b = 3;
// var c = 3.14;

// // Penjumlahan
// // 23 + 3 + 3.14 --> 29.14 akan disimpan di variable sumOne
// var sumOne = a + b + c; // 29.14
// // 29.14 + 1 --> 30.14
// sumOne = sumOne + 1; // 30.14
// console.log(sumOne);

// // 23 - 3 - 3.14 = 16.86
// var subOne = a - b - c; // 18.86
// // 16.86 - 1 --> 15.86
// subOne = subOne - 1; // 15.86
// console.log(subOne);

// // 23 - (2 * 3)
// var result = a - 2 * b;
// // (23 - 2) * 3
// var result2 = (a - 2) * b;
// console.log("result : ", result);
// console.log("result2 : ", result2);

// var x = 23 * -2;
// console.log("x", x);

// var y = -23 * -2;
// console.log("y", y);

// var z = 10 / 3;
// console.log("z: ", z);

// Modulus (Sisa bagi)
// 7 / 3 = 2.3
// 7 % 3 = 1
// iii iii i
// 5 % 2 = 1
// ii ii i
// 10 % 2 = 0
// ii ii ii ii ii
// 6 % 2 = 0
// ii ii ii

// var a = 23;
// var b = 3;
// var c = 3.14;

// var number1 = a % 3; // 2
// var number2 = b % 1; // 0
// var number3 = c % 2; // 1.14
// // ii i.14

// console.log("number1 :", number1);
// console.log("number2 :", number2);
// console.log("number3 :", number3);

// Ganjil, akan menghasilkan 1 jika di moduluskan dengan 2
var oddSeven = 7 % 2;
// console.log(oddSeven);

// Genap, akan menghasilkan 0 jika di moduluskan dengan 2
var evenTen = 10 % 2;
// console.log(evenTen);

// Increment, menjumlahkan nilai saat ini dengan satu
var num = 10;
num++; // nilai num ditambah 1, hasilnya disimpan kembali
num++; // nilai num ditambah 1, hasilnya disimpan kembali
num + 1; // nilai num ditambah 1
num = num + 1; // nilai num ditambah 1, hasilnya disimpan kembali
// console.log(num);

// Decrement,  mengurangi nilai saat ini dengan 1

var angka = 10;
angka--;
angka--;
angka - 1;
// console.log(angka);

// Shorthand
var lorem = 10;
lorem = lorem + 2; // lorem = 12
// Menjumlahkan nilai saat ini dengan nilai lain lalu hasilnya disimpan di variable yang sama
lorem += 2; // 12 _ 2 --> 14 lalu disimpan di lorem
// console.log("lorem", lorem); // 14

var x = 10;
x += 2;
// x --> 12

var temporary = 3;
temporary += 1;
// console.log("temporary", temporary);

// RAM --> menyimpan data sementara
// Ketika sebuah app berjalan, dia akan menggunakan sebagian RAM
// Untuk digunakan menyimpan suatu data dari sebuah variable
var a = 28;
// Solve it 1
a++;
a + 1;
console.log(a); // 29
// Solve it 2
a++;
a = a + 1;
console.log(a); // 31
a++;
a++;
console.log(a); // 33
a++;
console.log(a + 1); // 35
console.log(a % 2); // 0
