//////////////////////////////////////////////////////////////////
// Sebuah function yang dapat menentukan nilai genap dan ganjil //
// [1, 2, 3, 4]                                                 //
// [ [1, "Ganjil"], [2, "Genap"], [3, "Ganjil"], [4, "Genap"] ] //
//////////////////////////////////////////////////////////////////
//  angka --> array

// oddEven; // tidak running
// oddEven(); // running

// var day = "Tuesday";
// console.log(day); // menampilkan apapun yang disimpan di dalam day

// console.log(oddEven); // menampilkan apapun yang disimpan di dalam oddEven
// console.log(oddEven()); // menampilkan apapun yang dikeluarkan dari dalam oddEven

var numbers = [1, 2, 3, 4];

// create function
var oddEven = (arr) => {
  // arr : [1, 2, 3, 4]
  // output per data : [angka, status]
  // [[1, "Ganjil"], [2, "Genap"], [3, "Ganjil"], [4, "Genap"]]
  // running map
  var mappedArr = arr.map((number) => {
    if (number % 2 == 0) {
      return [number, "Genap"];
    } else {
      return [number, "Ganjil"];
    }
  });

  return mappedArr;
};
var oddEven2 = (arr) => {
  // arr : [1, 2, 3, 4]
  // output per data : [angka, status]
  // [[1, "Ganjil"], [2, "Genap"], [3, "Ganjil"], [4, "Genap"]]
  // running map
  return arr.map((number) => {
    if (number % 2 == 0) {
      return [number, "Genap"];
    } else {
      return [number, "Ganjil"];
    }
  });
};

var mappedOddEven = oddEven(numbers); // apapun yang ditaruh di dalam kurung, itu yg akan masuk ke arr
console.log(mappedOddEven);
/*
  map
    - [1, 2, 3, 4]
    - (number) => {}

*/
