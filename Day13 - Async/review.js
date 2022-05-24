// ARRAY METHOD

// Sort
// Sort digunakan untuk mengurutkan data
// Sort akan merubah nilai aslinya
// Secara default data akan dibaca sebagai string dan diurutkan secara ascending
// Kita dapat memberikan callback function untuk meng-custom sort

// const colors = ["Grey", "Blue", "Red", "Green"];
// colors.sort();
// console.log(colors); // [ 'Blue', 'Green', 'Grey', 'Red' ]

// const numbers = [20, 122, 3, 11];
// numbers.sort();
// console.log(numbers); // [ 11, 122, 20, 3 ]

// positif : sort color2 before color1
// negatif : sort color1 before color2
// zero : keep original order of color1 and color2

// const colors = ["grey", "Blue", "red", "Green", "Silver"];
// colors.sort((color1, color2) => {
//   // color1 : Red --> lowercase --> red
//   // color2 : silver --> lowercase --> silver
//   const lowerColor1 = color1.toLowerCase();
//   const lowerColor2 = color2.toLowerCase();

//   if (lowerColor1 > lowerColor2) {
//     return 1;
//   } else if (lowerColor1 < lowerColor2) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(colors);

// positif : sort number2 before number1
// negatif : sort number1 before number2
// zero : keep original order of number1 and number2
// const numbers = [123, 11, 1111];
// const numbersDesc = (number1, number2) => {
//   // number1 : 11
//   // number2 : 123
//   if (number1 > number2) {
//     return -1;
//   } else if (number1 < number2) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// const numbersAsc = (number1, number2) => {
//   // number1 : 11
//   // number2 : 123
//   if (number1 > number2) {
//     return 1;
//   } else if (number1 < number2) {
//     return -1;
//   } else {
//     return 0;
//   }
// };
// numbers.sort(numbersDesc);
// // console.log(numbers);

// const isFieldEmpties = (email, password) => {
//   if (!email && !password) {
//     return `Email dan Password tidak boleh kosong`;
//   } else if (!email) {
//     return `Email tidak boleh kosong`;
//   } else if (!password) {
//     return `Password tidak boleh kosong`;
//   }
// };

// const isDuplicate = (email) => {
//   // Checking
//   return true;
// };

// const register = (email, password) => {
//   // Memastikan email dan password tidak kosong
//   const isFieldEmpty = isFieldEmpties(email, password);
//   if (isFieldEmpty) {
//     return console.log(isFieldEmpty);
//   }
//   // Memeriksa apakah email sudah digunakan atau belum
//   const isEmailDuplicate = isDuplicate(email);
//   if (isEmailDuplicate) {
//     return console.log("Email sudah digunakan");
//   }
// };

// const email = "";
// const password = "";
// register(email, password);

// Spread Operator
// const sum = (...arguments) => arguments.reduce((a, b) => a + b);

// const result1 = sum(1, 2);
// const result2 = sum(1, 2, 3);
// console.log({ result1, result2 });

const cart = [
  { price: 1000, qty: 2 },
  { price: 2000, qty: 3 },
  { price: 3000, qty: 1 },
];

const total = cart.reduce((prev, curr) => {
  // prev : 11000
  // curr : { price: 3000, qty: 1 }
  const result = curr.price * curr.qty; // 3000
  return prev + result; // 11000
}, 0);

console.log({ total });
