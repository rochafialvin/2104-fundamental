var mapDuplicate = (arr, cb) => {
  // Kerjakan disini
};

var numbers = [1, 2, 3];

var transform = (number) => {
  return `Number : ${number}`;
};

// TEST
var result1 = numbers.map(transform);
var result2 = mapDuplicate(numbers, transform);

console.log(result1);
console.log(result2);
