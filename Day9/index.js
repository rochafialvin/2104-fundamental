/////////////
// REDUCE //
///////////
// Memproses setiap data pada array untuk menghasilkan satu buah value
// Apapun yang di return dari callback akan masuk ke parameter previous
// Jika semua data sudah diproses, maka nilai pada parameter prev akan di return ooleh reduce
const numbers = [1, 2, 3, 4, 5];

// prev : 15
// curr : 5
// return 10 + 5 --> 15
const result = numbers.reduce((prev, curr) => {
  return prev + curr;
});

console.log({ result });
