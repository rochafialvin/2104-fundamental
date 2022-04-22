// DO WHILE

// while (false) {
//   console.log("While loop");
// }

// var number = 1; // 4
// do {
//   console.log(`Number : ${number}`);
//   number++;
// } while (number <= 3);

// var number = 2;
// do {
//   if (!(number % 2)) {
//     console.log(`Angka ${number} adalah genap`);
//   }
//   number++;
// } while (number <= 5);

var number = 1;
do {
  // tidak perlu ditulis number < 4 == true
  if (number < 4) {
    console.log(`Angka ${number}`);
  }
  number++;
} while (number <= 5);
