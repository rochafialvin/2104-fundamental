var x = 4;
var y = 3;
var z = 2;

// a = 4 + 3 * 2
// a --> 10
var a = x + y * z;
// b = 4 * 3
// b --> 12
var b = x * y;
// c = 10 / 12
// c --> 0.83
var c = a / b;
// 0.83 pangkat 2
var result = Math.pow(c, z);
console.log(result);
