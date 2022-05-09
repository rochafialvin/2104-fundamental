// Loop : Mengulai task selama condition true

// Task akan terus dijalankan selama i kurang dari 5
// var i = 0;
// while (i < 5) {
//   console.log("i Running");
//   i++;
// }

// Task akan terus dijalankan selama j kurang dari 3
// var j = 0;
// do {
//   console.log("j Running");
//   j++;
// } while (j < 3);

// Task akan terus dijalankan selama k lebih dari 0
// for (var k = 5; k > 0; k--) {
//   console.log("Running", k);
// }

// Array [] : Menyimpan value lebih dari satu dalam sebuah "wadah"
// index : sebuah label untuk setiap data di array
// index dimulai dari 0
var x = ["Sunday", "Monday", "Cat", "Dog"];
// console.log(x[0]); // 'Sunday
// console.log(x[3]); // 'Dog

var y = [
  [12, 13], // index 0
  [22, 23], // index 1
  [32, 33], // index 2
];

var input = parseInt(prompt("Masukkan angka"));
y[1].push(input);
console.table(y);
// console.log(y[0]); // [ 12, 13 ]
// console.log(y[0][1]); // 13
