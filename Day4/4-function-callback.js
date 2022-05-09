////////////////////////
/* CALLBACK FUNCTION */
///////////////////////

var sum = (num1, num2) => {
  var result = num1 + num2;
  return result;
};

var calculator = (val1, val2, cb) => {
  // val1 = 3
  // val2 = 9
  /* 
      cb = (num1, num2) => {
         num 1 = 3
         num 2 = 9
         var result = num1 + num2;
         return result; // 12
         }
   */
  var result = cb(val1, val2);
  return result; // 12
};

var hasil = calculator(3, 9, sum);
console.log(`Hasil : ${hasil}`);
