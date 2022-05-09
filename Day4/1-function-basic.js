// Random number 1 - 10
// function findRandom() {
//   var random = Math.random();
//   random = random * 100;
//   random = Math.floor(random);

//   return random;
// }

// var age = 11;

// if (age > 18) {
//   var random = findRandom();
//   age = age + random + 5;
// } else if (age > 10) {
//   var random = findRandom();
//   age = age + random + 3;
// } else {
//   var random = findRandom();
//   age = age + random + 1;
// }

///////////////
/* FUNCTION */
//////////////
/*
 Block kode :
    1. Memiliki nama
    2. Dapat digunakan secara berulang
    3. Dapat memiliki input dan output

    Note :
    1. Input adalah proses dimana kita dapat memberikan value kepada function untuk digunakan.
    2. Output adalah proses yang dilakukan oleh function dalam menghasilkan value sehingga dapat disimpan di variabel.

*/

// ES 5 -> 2014
/* Function Declaration */
function firstStep() {
  var anonim = "Ada Wong";
  console.log(
    `Segala sesuatu yang besar, selalu dimulai dari satu langkah kecil. - ${anonim}`
  );
}

// firstStep();

/* Function Expression */
var keepGoing = function () {
  console.log(`Apapun yang terjadi, teruslah melangkah.`);
};

// keepGoing();

/* Perbedaan keduanya */

/* Javascript hoisting */

/* Hoisted */

leaf();

// Declaration
function leaf() {
  console.log(`Hijau Daun`);
}

/* Not Hoisted */

green();
// Expression
var green = function () {
  console.log(`Hijau Daun`);
};

// Expression ARROW FUNCTION ( ES 6 ) 2015
var earth = () => {
  console.log(`Hijau Daun`);
};
