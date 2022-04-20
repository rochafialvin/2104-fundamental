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

var username = "rochafi"; // true
var email = ""; // true

if (username && email) {
  // true
  console.log("Register berhasil");
} else {
  console.log("Registrasi gagal, mohon lengkapi data Anda");
  if (!email) {
    console.log("Email masih kosong");
  }
  if (!username) {
    console.log("Username masih kosong");
  }
}
