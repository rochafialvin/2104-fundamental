/////////
/* FILTER */
////////

// filter berguna untuk memfilter data
// Secara jumlah bisa berubah ; proses 5 keluar 3
// Secara bentuk tidak berubah; proses string keluar string

// filter merupakan method dari array
// filter akan menerima satu argument berupa function (callback function)
// callback function harus memiliki satu buah parameter
// filter akan menjalankan callback function sebanyak data pada array
// setiap menjalankan callback, data pada array akan masuk secara bergantian
// callback function HARUS mereturn sebuah boolean
// saat callback function mereturn true, data yang diproses akan dimasukkan ke array
// filter akan mereturn sebuah array

var salaries = [10000000, 7500000, 6000000, 3000000, 4100000];

// Filter gaji di atas 4.000.000
// [5000000, 7500000, 4100000];
var filteredSalaries = salaries.filter((salary) => {
  if (salary >= 3000000 && salary <= 5000000) {
    return true;
  } else if (salary >= 9000000 && salary <= 12000000) {
    return true;
  }
});

var filteredSalaries2 = salaries.filter((salary) => {
  // (true && false)  || (false && true)
  // false || false
  // false
  return (
    (salary >= 3000000 && salary <= 5000000) ||
    (salary >= 9000000 && salary <= 12000000)
  );
});

// console.log(filteredSalaries);
console.log(filteredSalaries2);

var words = ["Koro Sensei", "Jin Mori", "Eren", "Tanjirou", "Zorro", "Mikasa"];

// ["Koro Sensei", "Jin Mori", "Tanjirou"]
var filteredWords = words.filter((word) => {
  // "Jin Mori" : 8
  return word.length > 5; // true
});

// console.log(filteredWords);
