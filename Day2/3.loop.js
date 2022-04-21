// Loop. Mengulangi suatu proses selama kondisi tertentu masih terpenuhi (true)
// Selama suatu kondisi masih bernilai true, maka akan terus mengulangi suatu proses yang sama

// WHILE LOOP
// Selama condition berinilai true, task akan dikerjakan
// Setiap selesai mengerjakan task, akan memeriksa kembali condition untuk nenentukan apakah akan mengerjakan task kembali atau tidak.
// while (condition) {
//   task;
// }

var number = 0; // 3
var keep; // 2
while (number < 3) {
  // false
  if (number == 2) {
    // false
    keep = number;
  }
  console.log(`Number : ${number}`);
  number++;
}
console.log(`Selesai, nilai number : ${number}, nilai keep : ${keep} `);

// Tampilkan angka genap dari 1 - 10
// 2, 4, 6, 8, 10

// Tampilkan angka ganjil dari 1 - 10
// 1, 3, 5, 7, 9
