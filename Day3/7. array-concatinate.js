/////////////////////////////////////////////////////////
// CONCAT : Menggabungkan data dari dua array atau lebih
///////////////////////////////////////////////////////

var days = ["sunday", "monday", "tuesday", "wednesday"];
var animals = ["anoa", "dragon", "cameleon", "bird", "cat"];
var fruits = ["apple", "banana", "cherry", "lemon"];
var colors = [
  ["red", "maroon"],
  ["black", "grey"],
];

var dayAnim = days.concat(animals);
// console.table(dayAnim);

var dayAnimFruits = days.concat(animals, fruits);
// console.table(dayAnimFruits);

var fruitColors = fruits.concat(colors);
console.table(fruitColors); // bukan array 2 dimensin
