// ARRAY
// const things = ["sunday", "monday", "tuesday"];

// // INDEX , dimulai dari 0
// things[0]; // sunday
// things[1] = "Senin";
// things[5] = "Libur";
// // console.log(things);

// const users = [
//   { id: 1, email: "user1@mail.com", password: "abc123" },
//   { id: 2, email: "user2@mail.com", password: "abc123" },
//   { id: 3, email: "user3@mail.com", password: "abc123" },
// ];

// // MAP
// // Memproses data pada array satu persatu dan mengubahnya menjadi bentuk lain
// const mappedUsers = users.map((user) => {
//   // Apa yang di return, itu yang akan menjadi bentuk baru dan disimpan di array baru
//   return `id : ${user.id}, email: ${user.email}`;
// });

// // SPREAD OPERATOR
// // ...variable

// // function first bisa menerima argumen dengan jumlah berapapun
// // Setiap argumentnya akan dijadikan satu buah array
// const first = (...args) => {
//   return args;
// };

// const resFirst = first(12, true, "tulisan");
// resFirst; // [12, true, "tulisan"]
// resFirst[1]; // true

// const numbers = [37, 79, 100, 121, 33, 98, 76];

// const [x, y, z] = numbers;
// const [i, j, k, ...l] = numbers;
// i; // 37
// l; // [121, 33, 98, 76]
// numbers[5]; // 98
// l[2]; // 98
// const random = [
//   "Chicky",
//   [135, 76, [3.14, 22.7], 909],
//   [true, false, { isTrue: true, isFalse: false }],
//   {
//     person: {
//       name: "Escanor",
//       blessed: "Sun",
//       isAlive: true,
//       friends: [
//         { name: "Meliodas" },
//         { name: "Ban" },
//         { name: "King", pets: ["oslo"] },
//       ],
//     },
//   },
// ];
// ("pic-1.png");

// const menus = [
//   {
//     id: 90,
//     name: "product-1",
//     image: "/pictures/pic-1.png",
//     ingredients: [
//       { id: 1, name: "MSG" },
//       { id: 1, name: "Egg" },
//       { id: 2, name: "Sugar" },
//     ],
//   },
//   {
//     id: 91,
//     name: "product-2",
//     image: "/pictures/picture-2.png",
//     ingredients: [
//       { id: 1, name: "Noodle" },
//       { id: 1, name: "Meat" },
//       { id: 2, name: "Salt" },
//     ],
//   },
// ];

// menus.forEach((menu) => console.log(menu.image.split("/")[2]));
// console.log(menus[0].image.slice(image.length - 9));
// console.log(menus[0].image.substr(10));

// isNaN. Untuk mencari tahu apakah suatu nilai merupakan NaN atau bukan
// const result = "abc" * 9;
// isNaN(result); // true
// console.log(isNaN(result)); // true
// console.log(result == NaN); // false

// ForEach

// for (let i = 0; i < pets.length; i++) {
//   console.log(`${i + 1}. ${pets[i]}`);
// }

// pets.forEach((pet, i) => {
//   console.log(`${i + 1}. ${pet}`);
// });

// Map
// Mereturn value, lalu disimpan value nya
// const mappedUsers = users.map((user) => {
//   // Apa yang di return, itu yang akan menjadi bentuk baru dan disimpan di array baru
//   return `id : ${user.id}, email: ${user.email}`;
// });

// const pets = ["Cat", "Dog", "Bird", "Tiger"];

// // Filter
// // Mereturn boolean, yang disimpan bukan boolean yang di return.
// // Tapi data yang sedang diproses saat meretunrn true
// const filteredPets = pets.filter((pet) => {
//   return pet.includes("i"); // true
// });

// console.log({ filteredPets });

// Class
// Blueprint untuk membuat sebuah object
class Student {
  constructor(name, program, batch) {
    this.name = name;
    this.program = program;
    this.batch = batch;
  }
}

class StudentJKT extends Student {
  constructor(name, program, batch) {
    super(name, program, batch);
    this.location = "Jakarta";
  }
}

class StudentBSD extends Student {
  constructor(name, program, batch) {
    super(name, program, batch);
    this.location = "BSD";
  }
}

const achmad = new StudentJKT("Achmad Kurniansyah", "Data Science", 2100);
const rininta = new StudentBSD("Rininta", "Social Media Specialist", 1980);

const str1 = "Hello guys, ";
const str2 = "David disini ";
const str3 = "Pada video kali ini kita akan membahas handphone baru";
const join1 = `${str1}${str2}`;
const join2 = str1.concat(str2, str3);

// const checkDuplicate = (word) => {
//    word.
// }

const checkDuplicate = (word) => {
  // word : Oktovian
  let check = ""; // "Okt"
  // i = 3
  // word.length = 8
  for (let i = 0; i < word.length; i++) {
    // check.toLowerCase() : "okt"
    // word[3].toLowerCase() : "o"
    if (check.toLowerCase().includes(word[i].toLowerCase())) return true;
    check += word[i];
  }
  return false;
};

const checkDuplicateArr = (words) => words.map((word) => checkDuplicate(word));

console.log(checkDuplicate("Reza"));
console.log(checkDuplicate("Arap"));
console.log(checkDuplicateArr(["Reza", "Arap"]));
