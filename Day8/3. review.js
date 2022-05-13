// CALLBACK FUNCTION

// white adalah function
const white = (cb) => {
  // cb adalah function
  cb();
};

const angka = 90;
const nama = "Titor";
const sum = () => {}; // sum adalah function
sum();
white(sum); //90

// - - - - - - - - - - - - - - - - - - - - - - - - - -

const calculate = (number1, number2, cb) => {
  // number1 : 7
  // number2 : 3
  // cb : (angka1, angka2) => {return 10}
  // angka1: 7, angka2 : 3
  const result = cb(number1, number2);
  return result;
};

const jumlah = (angka1, angka2) => {
  return angka1 + angka2;
};

var result = calculate(7, 3, jumlah);
console.log(result); // 10
