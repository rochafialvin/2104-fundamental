var data = [
  ["John", 43, "Jakarta"],
  ["Derieri", 21, "Jakarta"],
  ["Tony", 34, "Surabaya"],
  ["Dustin Timberlake", 29, "Banjarmasin"],
];

// nama function : mapper
// Buatlah sebuah function yang menerima satu array
var mapper = (users) => {
  // [{ firstName: "John", age: 43, city: "Jakarta"}]
  return users.map((user, index) => {
    // user : ["Derieri", 21, "Jakarta"]
    // index: 1
    return {
      id: index + 1,
      firstName: user[0],
      age: user[1],
      city: user[2],
    };
  });
};

// console.log(mapper(data));

var sum = (a, b) => {
  var result = a + b;
  return result;
};

var sum = (a, b) => {
  return a + b;
};

var result = sum(3, 4)

// Jika hanya memiliki satu parameter, boleh dihilangkan kurungnya
var a = value => {
  console.log(value)
};

// Jika yang dilakukan function hanya me return, boleh dihilangkan keyword return dan kurawalnya
var sum = (a, b) => a + b

// Hanya memiliki satu parameter dan hanya melakukan return.
var multipleTwo = a => a * 2
var result = multipleTwo(10)