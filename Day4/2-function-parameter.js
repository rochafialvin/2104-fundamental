////////////////////////
/* PARAMETER (INPUT) */
//////////////////////

/*

  Input = Parameter

  Output = Return

*/

var introduction = (firstName) => {
  // firstName = "Nagisa"
  console.log(`Halo, nama saya adalah ${firstName}`);
};

// introduction("Nagisa"); // Nagisa akan masuk ke firstName

var introductionFullName = (firstName, lastName) => {
  // firstName : Isaac
  // lastName : Newton
  var fullName = firstName + " " + lastName;
  console.log(`Nama lengkap : ${fullName}`);
};

// introductionFullName("Newton");

// default value 2 akan digunakan jika tidak ada value yang dikirim ke num2
var sum = (num1, num2 = 2) => {
  var result = num1 + num2; // 12 + 7
  console.log(`${num1} + ${num2} = ${result}`);
};

// 3 + 4 = 7
sum(3, 4);
// 12 + 2 = 14
sum(12); // Tidak mengirim value ke num2, sehingga akan menggunakan 2

// Parameter & Argument
// Parameter adalah variable yang akan menyimpan value inputan
// Argument value yang akan masuk ke dalam parameter
