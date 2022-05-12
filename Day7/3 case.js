var persons = [
  { id: 1, firstName: "Alven", email: "alv@mail.com", phoneNumber: 812 },
  { id: 2, firstName: "Ben", email: "ben22@mail.com", phoneNumber: 813 },
  { id: 3, firstName: "Charlie", email: "lie98@mail.com", phoneNumber: 814 },
  { id: 4, firstName: "Dadang", email: "Dangs988@mail.com", phoneNumber: 815 },
];

var personList = persons.map((person) => {
  // person { id: 1, firstName: "Alven", email: "alv@mail.com", phoneNumber: 812 }
  return `${person.id}. Name: ${person.firstName} - Email: ${person.email}`;
});

// console.log(personList);

// - - - - - - - - - - - - - - - - - - - -

var colors = ["black", "white"];

var a = 20;
var b = a;
// b ? 20

// { id: 1, firstName: "Alven", email: "alv@mail.com", phoneNumber: 812 },
var x = persons[0];
console.log(x.firstName); // Alven
console.log(persons[0].firstName); // Alven

// - - - - - - - - - - - - - - - - - - - -
