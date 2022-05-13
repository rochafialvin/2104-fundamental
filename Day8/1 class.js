///////////
/* CLASS */
///////////

/* Blueprint / cetakan untuk membuat object, dengan class akan mempermudah dalam membuat object */
// serupa : memiliki property dan method yang sama

let persons = [];
function x() {
  const obj = {
    name: "Kuro Salehi",
    age: 28,
    nationality: "Germany",
    position: "Captain",
    team: "Nigma",
  };

  persons.push(obj);
}

let players = [];
function y() {
  const player = {
    name: "Sebastien Deb",
    age: 28,
    nationality: "France",
    position: "Coach",
    team: "OG",
  };

  players.push(player);
}

let captains = [];
function z() {
  const captain = {
    name: "Clement Ivanov",
    age: 30,
    nationality: "Estonia",
    position: "Captain",
    team: "Team Secret",
  };

  captains.push(captain);
}

/* Syntax */
class Player {
  constructor(_name, _age, _game) {
    this.name = _name;
    this.age = _age;
    this.game = _game;
  }

  introduction() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

var kuroky = new Player("Kuroky", 28, "Dota");
// console.log(kuroky);
kuroky.introduction();

var puppey = new Player("Puppey", 30, "epep");
// console.log(puppey);
puppey.introduction();
