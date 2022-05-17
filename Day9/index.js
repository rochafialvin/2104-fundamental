/////////////
// REDUCE //
///////////
// Memproses setiap data pada array untuk menghasilkan satu buah value
// Apapun yang di return dari callback akan masuk ke parameter previous
// Jika semua data sudah diproses, maka nilai pada parameter prev akan di return ooleh reduce
// const numbers = [1, 2, 3, 4, 5];

// prev : 15
// curr : 5
// return 10 + 5 --> 15
// const result = numbers.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log({ result });

// Menampilkan angka yang muncul di semua array
const arr = [
  [1, 4, 6, 5, 3],
  [4, 3, 6, 9],
  [9, 7, 4, 6, 2],
];

// prev : [4, 6]
// curr : [9, 7, 4, 6, 2]
// return prev.filter()
const result = arr.reduce((prev, curr) => {
  // [1, 4, 6, 5, 3]
  // [4, 6 ,3]
  const filterResult = prev.filter((number) => {
    // [4, 3, 6, 9]
    //  apakah number ada di dalam array curr ? true
    return curr.includes(number);
  });

  return filterResult;
});
