// i  = 3
// for (var i = 0; i < 5; i++) {
//   if (i == 3) {
//     break; // Memberhentikan loop
//   }
//   console.log(i);
// }

// 0
// 1
// 2

//////////////////////////////////////////////////////
// Mencari angka random (0 - 99) yang dapati dibagi 5
//////////////////////////////////////////////////////

// Cari nilai random, lalu tampilkan
// Jika nilai random yang di dapat itu bisa dibagi 5, maka stop loop
// Jika nilai random yang di dapat tidak bisa dibagi 5, lanjut ke loop berikutnya
// Jangan tampilkan untuk nilai random yang dapat dibagi 2 (genap)

while (true) {
  // random = 15
  // Mencari nilai random pada range 0 - 99
  var random = Math.floor(Math.random() * 100);
  // Jika nilai random habis dibagi dua, skip ke loop berikutnya
  if (random % 2 == 0) {
    continue;
  }
  //   Tampilkan nilai random yang didapat
  console.log(random);
  //   Jika angka random dapat dibagi 5, hentikan loop
  if (random % 5 == 0) {
    break; // stop. Jangan loop lagi, keluar dari sini
  }
}

// i = 6
// for (var i = 1; i <= 5; i++) {
//   if (i % 2 == 0) {
//     continue; // Skip, langsung proses ke loop berikutnya ; langsung ke i ++
//   }
//   console.log(i);
// }
