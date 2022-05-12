//////////////////
/* THIS KEYWORD */
//////////////////

var person = {
  firstName: "Topias",
  lastName: "Taavitsainen",
  nickName: "Topson",

  greet: function (time) {
    console.log(`Good ${time}`);
  },
  intro: function (x, y) {
    x();
    this.greet(y);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

person.intro(() => {
  console.log("Callback gan");
}, "Morning");
