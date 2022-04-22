//////////////
// FIZZ BUZZ
/////////////

/*
    Jika suatu angka dapat dibagi 3. Gantikan dengan kata Fizz

    Jika suatu angka dapat dibagi 5. Gantikan dengan kata Buzz

    Jika suatu angka dapat dibagi 3 dan 5. Gantikan dengan kata FizzBuzz

    Jika kita ingin mencari nilai yang dapat dibagi oleh dua angka tertentu, maka bagilah dengan angka hasil perkalian dari dua nilai tersebut.

    FizzBuzz akan muncul saat suatu angka dapat dibagi 15 .
*/

var number = 1;
// you code start here
while (number <= 15) {
  // number : 15
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }

  number++;
}

// show : 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
