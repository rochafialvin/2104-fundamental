var things = [
  ["red pen", "blue pen"],
  ["analog clock", "digital clock"],
  ["futsal shoes", "badminton shoes"],
];

things[0][2] = "green pen"; // Dani
things[0].splice(2, 0, "green pen");
things[0].push("green pen");

// ["red pen", "blue pen"]
console.log(things[0]);
// [ 'futsal shoes', 'badminton shoes' ]
console.log(things[2]);
// "blue pen"
console.log(things[0][1]);
// "badminton shoes"
console.log(things[2][1]);

things.push(["apple", "banana"]);

console.log(things);
