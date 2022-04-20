// IF Statement

// Jika condition bernilai true, maka task akan dikerjakan
// if(condition){
//    task
// }

// var rain = true;
// // Jika rain bernilai true, tampilkan "Sedang hujan, pakailah payung"
// if (rain) {
//   console.log("Sedang hujan, pakailah payung");
// }

// 0.0000000000000 - 0.999999999999
// var random = Math.random();
// // 00.000000000000 - 09.99999999999
// random = random * 10;
// // 0.000000000000 - 9.99999999999
// random = Math.floor(random);
// // 0 - 9
// // 1 - 10
// console.log({ random });

// var guilty = false;
// if (!guilty) {
//   console.log("Guilty ", guilty);
//   console.log("Anda dibebaskan");
// }

// var age = 17;
// if (age >= 18) {
//   console.log("Permohonan diterima, silahkan lanjut ke proses berikutnya");
// }

// var username = "rochafi"; // true
// var email = "rochafi@gmail.com"; // true

// if (username && email) {
//   // true
//   console.log("Register berhasil");
// }

// IF ELSE Statement

// Jika condition bernilai true, maka task 1 akan dikerjakan
// Jika condition bernilai false, maka task 2 akan dikerjakan
// if(condition){
//    task 1
// } else {
//    task 2
// }

// var age = 19;
// if (age >= 18) {
//   // Di kerjakan jika umur 18 tahun ke atas
//   console.log("Umur Anda ", age);
//   console.log("Permohonan diterima, silahkan lanjut ke proses berikutnya");
// } else {
//   // Di kerjakan jika umur dibawah 18 tahun
//   console.log("Umur Anda ", age);
//   console.log("Permohonan anda ditolak, umur tidak mencukupi");
// }

// var username = ""; // true
// var email = ""; // true

// if (username && email) {
//   // true
//   console.log("Register berhasil");
// } else {
//   console.log("Registrasi gagal, mohon lengkapi data Anda");
//   // jika field email tidak berisi string kosong
//   if (!email) {
//     console.log("Email masih kosong");
//   }
//   // jika field username tidak berisi string kosong
//   if (!username) {
//     console.log("Username masih kosong");
//   }
// }

// IF ELSE IF Statement
// Jika condition1 : true, jalankan task1. Jika false, periksa condition2
// Jika condition2 : true, jalankan task2. Jika false, jalankan task3
// if (condition1) {
//   task1;
// } else if (condition2) {
//   task2;
// } else {
//   task3;
// }

// Nilai Ujian

// Points : 85 - 100 : A
// Points : 75 - 84 : B
// Points : 60 - 74 : C
// Points : 0 - 59 : D
// Points : null : F

var points = 87; // B
var grade;

if (points >= 85 && points <= 100) {
  if (points >= 85 && points <= 90) {
    grade = "A-";
  } else {
    grade = "A+";
  }
} else if (points >= 75 && points <= 84) {
  grade = "B";
} else if (points >= 60 && points <= 74) {
  grade = "C";
} else if (points >= 0 && points <= 59) {
  grade = "D";
} else {
  grade = "F";
}
console.log({ points, grade });
// Periksa apakah point ada di range 85 - 100
// Jika iya, maka isi variable grade dengan huruf A
// Jika tidak, maka periksa range berikutnya

// Periksa apakah point ada di range 75 - 84
// Jika iya, maka isi variable grade dengan huruf B
// Jika tidak, maka periksa range berikutnya

// Periksa apakah point ada di range 60 - 74
// Jika iya, maka isi variable grade dengan huruf C
// Jika tidak, maka periksa range berikutnya

// Periksa apakah point ada di range 0 - 59
// Jika iya, maka isi variable grade dengan huruf D
// Jika tidak, maka grade berisi F
