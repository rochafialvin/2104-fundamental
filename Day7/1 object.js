////////////
/* OBJECT */
////////////

/* key : value */
/* value : function, key : method */
/* value : selain function , key : property */
// keyword :
var captain = {
  // 6 key
  // 5 property
  // 1 method

  // property
  firstName: "Kuroky",
  pets: ["cat", "fox", "bird"],
  active: true,
  height: 170,
  address: {
    country: "Germany",
    postalCode: 1709,
  },

  // method
  play: function (game) {
    console.log(`Playing ${game}`);
  },
};

///////////////////////
/* Access with dot . */
///////////////////////

// object : {name, pets, active, ...}
console.log(captain);
// Kuroky
console.log(captain.firstName);
// 170
console.log(captain.height);
// ["cat", "fox", "bird"]
console.log(captain.pets);
// "fox"
console.log(captain.pets[1]);
// Playing dota
captain.play("dota");

////////////////////////////
/* Access with bracket [] */
////////////////////////////

// Kuroky
captain["firstName"];
// ["cat", "fox", "bird"]
captain["pets"];
// Playing dota
// captain["play"]("dota");

////////////////////
/* Changing value */
////////////////////

captain.pets = "dog";
captain.height = 169;
captain.play = function (game) {
  console.log(`Let's play some ${game}`);
};

/////////////////
/* Add new key */
/////////////////

captain.pets = "Fox"; // Change value
captain.nationality = "German"; // create new property
captain.greet = function (time) {
  console.log(`Good ${time}`);
};

delete captain.nationality; // hapus property nationality

captain.greet("Morning"); // Good Morning
// console.log(captain);

var person = {};
person.fullName = "Daniel Ishutin";

console.log(person); // { fullName: 'Daniel Ishutin' }
