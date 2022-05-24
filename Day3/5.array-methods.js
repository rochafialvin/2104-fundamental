////////////////////////////////////////////////
// PUSH : Menambahkan value pada index terakhir
// POP : Menghapus value pada index terakhir
///////////////////////////////////////////////

// var things = ["book", "pen", "clock"];
// // Menambah data "jacket" pada index terakhir
// // ["book", "pen", "clock", "Jacket"]
// things.push("jacket");

// // Menambah data "apple" dan "banana" pada index terakhir
// // ["book", "pen", "clock", "Jacket", "apple", "banana"]
// things.push("apple", "banana");

// // Menambah data "pencil", 3, dan true pada index terakhir
// // ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil", 3, true]
// things.push("pencil", 3, true);

// // Menampilkan array things dalam bentuk table
// console.table(things);

// // Hapus data pada index terakhir
// things.pop(); // remove true
// things.pop(); // remove 3

// console.table(things);

////////////////////////////////////////////////
// UNSHIFT : Menambahkan value pada index pertama
// SHIFT : Menghapus value pada index pertama
///////////////////////////////////////////////

// var things = ["book", "pen", "clock"];

// // Menambah data "jacket" pada index awal
// // ["Jacket", "book", "pen", "clock"]
// things.unshift("jacket");

// // Menambah data "apple" dan "banana" pada index awal
// // ["apple", "banana", "Jacket", "book", "pen", "clock"]
// things.unshift("apple", "banana");

// // Menambah data "pencil", 3, dan true pada index awal
// // ["pencil", 3, true, "apple", "banana", "Jacket", "book", "pen", "clock"]
// things.unshift("pencil", 3, true);

// // Menampilkan array things dalam bentuk table
// console.table(things);

// // Mengeluarkan satu value ( pencil ) yang ada pada index awal array things
// // [3, true, "apple", "banana", "Jacket", "book", "pen", "clock"]
// things.shift();

// // Mengeluarkan satu value ( 3 ) yang ada pada index awal array things
// // [true, "apple", "banana", "Jacket", "book", "pen", "clock"]
// things.shift();

// console.log(things);

//////////////////////////////////////////
// SPLICE : Menghapus dan Menambahkan data
//////////////////////////////////////////

/*

  Syntax

  array.splice(index, amount, new data)

  index : index awal dimulainya operasi (menghapus / menambah)
  amount : jumlah data yang ingin dihapus mulai dari 'index'
  new data : data baru yang akan ditambahkan ke array

*/

/////////////////////////
// Case : Menghapus data
/////////////////////////

// Membuat array yang menyimpan empat value
// var things = ["book", "pen", "clock", "paper"];
// // Dimulai dari index 1 , hapus 2 buah value
// things.splice(1, 2);
// // Menampilkan array things dalam bentuk table
// console.table(things);

// // Membuat array yang menyimpan empat value
// things = ["book", "pen", "clock", "paper"];
// // Dimulai dari index 0 , hapus 3 buah value
// things.splice(0, 3);
// // Menampilkan array things dalam bentuk table
// console.table(things);

// // Membuat array yang menyimpan empat value
// things = ["book", "pen", "clock", "paper"];
// // Dimulai dari index 1 , hapus 1 buah value
// things.splice(1, 1);
// // Menampilkan array things dalam bentuk table
// console.table(things);

/////////////////////////
// Case : Menambah data
/////////////////////////
// Membuat array yang menyimpan empat value
// Membuat array yang menyimpan empat value
// var things = ["book", "pen", "clock", "paper"];
// // Dimulai dari index 1
// // Hapus 0 buah value
// // Tambahkan value baru yaitu "pencil" pada index 1
// things.splice(1, 0, "pencil");
// // Menampilkan array things dalam bentuk table
// console.table(things);

// // Dimulai dari index 3
// // Hapus 0 buah value
// // Tambahkan value baru yaitu "magazine" pada index 3 dan 1987 pada index 4
// things.splice(3, 0, "magazine", 1987);
// // Menampilkan array things dalam bentuk table
// console.table(things);

//////////////////////////////////////
// Case : Menambah dan Menghapus data
//////////////////////////////////////

// Membuat array yang menyimpan empat value
// var things = ["book", "pen", "clock", "paper"];
// // Menampilkan array things dalam bentuk table
// console.table(things);

// // Dimulai dari index 1
// // Hapus 2 buah value
// // Tambahkan value baru yaitu "door" pada index 1
// things.splice(1, 2, "door");
// // Menampilkan array things dalam bentuk table
// console.table(things);

// // Dimulai dari index 1
// // Hapus 2 buah value
// // Tambahkan value baru yaitu "door" pada index 1
// things.splice(1, 1, "middle", "double");
// // Menampilkan array things dalam bentuk table
// console.table(things);

///////////////////////////////////////////////////////////////
// Delete : Menghapus data, dan indexnya akan berisi undefined
///////////////////////////////////////////////////////////////

// console.time();
// // Membuat array yang menyimpan empat value
// var things = ["book", "pen", "clock", "paper"];
// // Menghapus value pada array things index ke 0, dan menggantikannya dengan undefiend
// delete things[0];
// // Menghapus value pada array things index ke 2, dan menggantikannya dengan undefiend
// delete things[2];
// // Menampilkan array things pada console
// console.log(things);
// console.timeEnd();

//////////////////////////////////////////////////////////////////////
// SORT : Mengurutkan data pada array secara ascending (0 - 9 / a - z)
//////////////////////////////////////////////////////////////////////
// var text = "Purwadhika";
// var result = text.toUpperCase();
// console.log(text); // Purwadhika
// console.log(result); // PURWADHIKA

// var animals = ["anoa", "dragon", "cameleon", "bird", "cat"];
// var result = animals.sort(); // merubah nilai asli, me return
// console.log(animals); // [ 'anoa', 'bird', 'cameleon', 'cat', 'dragon' ]
// console.log(result); // [ 'anoa', 'bird', 'cameleon', 'cat', 'dragon' ]

// Check ASCII table : https://www.asciitable.com/
// var animals = ["anoa", "dragon", "cameleon", "Bird", "cat"];
// animals.sort();
// console.log(animals); // [ 'Bird', 'anoa', 'cameleon', 'cat', 'dragon' ]

// var numbers = [32, 101, 12, 41, 2];
// // ["32", "101", "12", "41", "2"];

// numbers.sort();

// console.log(numbers); // [ 101, 12, 2, 32, 41 ]

// USE CALLBACK FUNCTION //
// var numbers = [32, 101, 12, 3];

// // positif : sort number2 before number1
// // negatif : sort number1 before number2
// // zero : keep original order of number1 and number2
// var ascending = (number1, number2) => {
//   // number1 : 32
//   // number2 : 12
//   if (number1 < number2) {
//     return -1;
//   } else if (number1 > number2) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// var descending = (number1, number2) => {
//   // number1 : 32
//   // number2 : 12
//   if (number1 < number2) {
//     return 1;
//   } else if (number1 > number2) {
//     return -1;
//   } else {
//     return 0;
//   }
// };

// // console.log(numbers);
// // numbers.sort(descending);
// // console.log(numbers);

// var salaries = [
//   ["Fedrick", 720],
//   ["John Titor", 360],
//   ["Roschild", 10000],
// ];

// positif : sort person2 before person1
// negatif : sort person1 before person2
// zero : keep original order of person1 and person2
// var sortSalary = (person1, person2) => {
//   // person1 : ["Fedrick", 720]
//   // person2 : ["John Titor", 360]

//   if (person1[1] < person2[1]) {
//     return -1;
//   } else if (person1[1] > person2[1]) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// // console.log(salaries);
// // salaries.sort(sortSalary);
// // console.log(salaries);

// var data = [
//   ["John", 43, "Jakarta"],
//   ["Tony", 34, "Surabaya"],
//   ["Ban", 35, "Jakarta"],
//   ["Dustin Timberlake", 29, "Banjarmasin"],
//   ["Derieri", 34, "Jakarta"],
// ];

// //  ["Dustin Timberlake", 29, "Banjarmasin"]
// //  ["Derieri", 34, "Jakarta"]
// //  ["Tony", 34, "Surabaya"]
// //  ["John", 43, "Jakarta"]

// // positif : sort user2 before user1
// // negatif : sort user1 before user2
// // zero : keep original order of user1 and user2

// sort ?
// callback function yang masuk ke sort ?
var compareAgeAdress = (user1, user2) => {
  // user1 : ["Tony", 34, "Surabaya"]
  // user2 : ["John", 34, "Jakarta"]

  if (user1[1] > user2[1]) {
    return 1;
  } else if (user1[1] < user2[1]) {
    return -1;
  } else {
    // umur mereka sama
    if (user1[2] > user2[2]) {
      return 1;
    } else if (user1[2] < user2[2]) {
      return -1;
    } else {
      return 0;
    }
  }
};

data.sort(compareAgeAdress);
// console.log(data);

/////////////////////////////////////////////////
// REVERSE : Membalikkan urutan data pada array
/////////////////////////////////////////////////

// var days = ["sunday", "monday", "tuesday", "wednesday"];

// console.log(days);

// days.reverse();

// console.log(days);

/////////////////////////////////////////////////////////////////
// JOIN : Menggabungkan data pada array dengan karakter tertentu
/////////////////////////////////////////////////////////////////

var days = ["sunday", "monday", "tuesday", "wednesday"];

var joinDash = days.join(", ");
console.log(joinDash);
