class Player {
  constructor(name, nickname, nationality) {
    this.name = name;
    this.nickname = nickname;
    this.nationality = nationality;
  }

  introduction() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class CasualPlayer extends Player {
  constructor(name, nickname, nationality, job) {
    // argument pada super akan dikirim ke constructer milik class Player
    super(name, nickname, nationality);
    this.job = job;
  }

  myJob() {
    console.log(`I'm not pro player so i have a job, that is ${this.job}`);
  }
}

class ProPlayer extends Player {
  constructor(name, nickname, nationality, team) {
    // argument pada super akan dikirim ke constructer milik class Player
    super(name, nickname, nationality);
    this.team = team;
  }

  myTeam() {
    console.log(`I'm a pro player so i have a team, that is ${this.team}`);
  }
}

var budi = new CasualPlayer("Budi", "Buds1991", "Indonesia", "Drag Racer");
// console.log(budi);
budi.introduction();
budi.myJob();

var windah = new ProPlayer(
  "Windah Basudara",
  "ChildOfDeath",
  "Indonesia",
  "Rex Regum Qeon"
);
windah.introduction();
windah.myTeam();
