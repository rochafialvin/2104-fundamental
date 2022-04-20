/*
jumlah hari = 39

0 tahun
1 bulan
1 minggu
2 hari

1 tahun --> 360 hari
jumlah hari 369 / 360 : 1, 369 % 360 = 9
1 tahun
0 bulan
1 minggu
2 hari
-pembagian - modulus;
*/

// Algoritma --> langkah untuk menyelesaikan sesuatu
// Setiap proses memakan waktu 2 menit
// 1. Buka bungkus mie
// 2. Menuang bumbu ke mangkuk
// 3. Rebus air sampai mendidih
// 4. Rebus mie
// 5. Tuang mie ke mangkuk

// 1. Rebus air 2. Buka bungkus mie
// 3. Menuang bumbu
// 4. Rebus mie
// 5. Tuang mie ke mangkuk

// 485 hari
var day = 39;

// 485 / 360 = 1 tahun
var years = Math.floor(day / 360);
// 485 % 360 = 125 hari
// dayLeft = 125
var dayLeft = day % 360;
// 125 / 30 = 4 bulan
var months = Math.floor(dayLeft / 30);
// 125 % 30 = 5 hari
// dayLeft = 5
dayLeft = dayLeft % 30;
// 5 / 7 = 0 minggu
var weeks = Math.floor(dayLeft / 7);
// 5 % 7 = 5 hari
dayLeft = dayLeft % 7;

console.log("Day : ", day);
console.log("Years : ", years);
console.log("Months : ", months);
console.log("Weeks : ", weeks);
console.log("Day : ", dayLeft);
