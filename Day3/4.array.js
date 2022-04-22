////////////////////
// Syntax Array [ ]
///////////////////

// Tipe data yang memungkinkan untuk menyimpan banyak data
// var things = ["book", "pen", "clock"];

// console.log(things);
// Array dapat digunakan untuk menyimpan beragam tipe data
var random = [23, "Michael", "John", true, 3.14];

//////////////
// Access Data
//////////////

// var things = ["book", "pen", "clock"];
// Index dapat dikatakan sebagai sistem penomoran data pada array yang dimulai dari nol
// console.log(things[1]); // pen
// console.log(things[2]); // clock

// output -> Name : Michael, age: 23
// console.log(`Name : ${random[1]} $, age: ${random[0]}`);

///////////////
// Change Data
///////////////

// var things = ["book", "pen", "clock"];
// Simpan 'paper' pada index 0
// things[0] = "paper";
// Simpan 'shoes' pada index 2
// things[2] = "shoes";
// console.log(things);

///////////////////
// Create New Index
///////////////////

// var things = ["book", "pen", "clock"];
// Menambahkan data baru pada index ke 3
// things[3] = "shoes";
// things[5] = "glass";

// console.log(things[4]); // undefiend

///////////////////
// Length of Array
///////////////////
// Menampilkan banyaknya data
var things = ["book", "pen", "clock"];

console.log(things.length); // 3
