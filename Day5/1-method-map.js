/////////
/* MAP */
////////

// map berguna untuk merubah bentuk data

// map merupakan method dari array
// map akan menerima satu argument berupa function (callback function)
// callback function harus memiliki satu buah parameter
// map akan menjalankan callback function sebanyak data pada array
// setiap menjalankan callback, data pada array akan masuk secara bergantian
// callback function HARUS mereturn sebuah value
// map akan mereturn sebuah array

var numbers = [7, 5, 3];

// ['Angka 7', 'Angka 5', 'Angka 3']
var words = numbers.map((number) => {
  var word = `Angka ${number}`;
  return word; // 'Angka 3'
});

// console.log(words); // [ 'Angka 7', 'Angka 5', 'Angka 3' ]

/* Mrs. Janette */
/* Mr. Kim Shin */

var persons = [
  ["Janette", "Woman"], // Mrs. Janette
  ["Kim Shin", "Man"], // Mr. Kimshin
  ["Tony", "Man"], // Mr. Tony
];

// ['Mrs. Janette', 'Mr. Kim Shin', 'Mr. Tony' ]
var listPersons = persons.map((person) => {
  // person : ["Kim Shin", "Man"]
  if (person[1] == "Woman") {
    return `Mrs. ${person[0]}`; // 'Mrs. Janette'
  } else {
    return `Mr. ${person[0]}`; // 'Mr. Kim Shin'
  }
});

console.log(listPersons);

// Jika menggunakan forEach, akan memiliki extra code 1 baris untuk membuat array
// var result = [];
// numbers.forEach((number) => {
//   var word = `Angka ${number}`;
//   result.push(word);
// });

// console.log(result);

// array of object --> kumpulan object di dalam sebuah array
// array of string --> kumpulan string di dalam sebuah array
