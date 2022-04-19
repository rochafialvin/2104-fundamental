// Variable
// Tempat menyimpan data

// Membuat variabel bernama fullName yang berisi sebuah string
var fullName = "Purwadhika";
// Menampilkan apa yang disimpan di dalam variable fullName
console.log(fullName);

var sky = "Blue";
console.log(sky);

// Rules : Aturan dalam membuat variable

// 1. Tidak dapat mengandung spasi
var firstname = "John";

// 2. Hanya dapat diawali oleh huruf, underscore, atau dollar sign

// Membuat variable tanpa di isi suatu data, maka akan menyimpan undefined, undefined menandakan suatu variable itu kosong.
// Dapat membuat variable banyak sekaligus dengan menggunakan koma.
var phonenumber, _age, $quality;

// 3. hanya dapat terdiri dari huruf, underscore, atau dollar sign.
var totalbill = 1000,
  my_birthday = 2001,
  $cloud9 = "Awan sembilan";

console.log("isi total bill", totalbill);

var a = (b = c = 10);

console.log("isi A", a);
console.log("isi B", b);
console.log("isi C", c);

// 4. Case sensitive (membedakan huruf besar dan huruf kecil)
var nextday = "Sunday";
var users; // menyimpan banyak user
var user; // menyimpan satu user
console.log(user);

// Style

// camel case :Javascript
var firstname;
var todayIsMyFirstDay;

// snake case : Python
var first_name;
var today_is_my_first_day;
