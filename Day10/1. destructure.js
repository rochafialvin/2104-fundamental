const person = {
  firstName: "Jack",
  lastName: "Miller",
  team: "Ducati",
  number: 43,
};

// Dari object person, create variable baru berdasarkan property dari object person
const { firstName, lastName } = person;

console.log(`Hello my first name is ${firstName}`);
console.log(`Halo nama depan saya adalah ${firstName}`);
console.log(`Hello my full name is ${firstName} ${lastName}`);
console.log(`Halo nama lengkap saya adalah ${firstName} ${lastName}`);
