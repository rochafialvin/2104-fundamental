var filterDuplicate = (arr, cb) => {
  // Kerjakan disini
};

var numbers = [1, 2, 3, 4, 5];

var greaterThanThree = (number) => {
  return number > 3;
};

// TEST
var result1 = numbers.filter(greaterThanThree);
var result2 = filterDuplicate(numbers, greaterThanThree);

console.log(result1);
console.log(result2);
