// String , kumpulan karakter yang diapit oleh kutip satu atau kutip dua
"purwadhika";

// Number
// integer (angka bulat)
30;
4234;

// float (decimal)
3.14;
8.9;
0.5;

// Boolean
// Hanya memiliki dua nilai, true atau false
true; // boolean
("true"); // string
false; // boolean
("false"); // string

// Object { }. dapat menyimpan lebih dari satu data
// Di dalam object akan terdapat "variable"
// "variable" di dalam object, kita sebut "property"
var person = {
  firstName: "Tanjirou",
  lastName: "Kamado",
  age: 20,
  alive: true,
};

// console.log(person);
console.log(person.firstName); // Tanjirou
// console.log(person.age); // 20

// Array [ ]
// index dimulai dari nol

var user = ["Tengen", "Uzui", 27, true];

// console.log(user);
// console.log(user[0]);

var users = [
  { id: 1, firstName: "Hendry", address: "1st Street" },
  { id: 2, firstName: "Max", address: "3rd Street" },
];

// users[0] : { id: 1, firstName: "Hendry", address: "1st Street" }
console.log(users[0].firstName);
// users[1] : { id: 2, firstName: "Max", address: "3rd Street" }
console.log(users[1].firstName);
