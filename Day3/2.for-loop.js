// WHILE

// var number = 1; // initiator
// while (number < 5) {
// condition
//   console.log("While", number); // task
//   number++; // modificator
// }

// DO WHILE
// var number = 1; // initiator
// do {
//   console.log("Do While", number); // task
//   number++; // modificator
// } while (number < 5); // condition

// FOR LOOP

// for(initiator; condition; modificator){
//    task
// }

// number = 5
// for (var number = 1; number < 5; number++) {
//   console.log("Angka", number);
// }

// for (var i = 1; i < 6; i++) {
//   if (i % 2) {
//     console.log(`Angka ${i} adalah ganjil`);
//   }
// }

// Penjumlahan
// angka + angka = angka
// string + string = string
// angka + string = string

// number = 3
// for (var number = 1; number < 3; number++) {
//   var word = ""; // "1"
//   // i = 2
//   for (var i = 1; i < number; i++) {
//     // "" + 1 = "1"
//     word += i;
//   }
//   console.log(word);
// }

// var word = "Javascript";
// var words = word.split("");
// var wordsReversed = [];
// for (var i = word.length - 1; i >= 0; i--) {
//   wordsReversed.push(words[i]);
// }

// console.log(word);
// console.log(wordsReversed.join(""));

// var word2 = "Javascript";
// console.log(word2.split("").reverse().join(""));

//  \n --> new line --> enter
// console.log("baris 1\nbaris2");

// " * * * * * "
var starsHorizontal = ""; // " * * * * * "
var amountHorizontal = 10;

for (var i = 0; i < amountHorizontal; i++) {
  // Setiap loop, apa yang ingin kita lakukan ?
  starsHorizontal += " * ";
}

console.log(starsHorizontal);

// your code goes here

/*
 *
 *
 *
 *
 *
 */

var starsVertical = ""; // "*\n*\n*\n*\n*\n"
var amountVertical = 5;
// i = 5
for (var i = 0; i < amountVertical; i++) {
  // Setiap loop, apa yang ingin kita lakukan ?
  starsVertical += "*\n";
}

console.log(starsVertical);
// your code goes here
