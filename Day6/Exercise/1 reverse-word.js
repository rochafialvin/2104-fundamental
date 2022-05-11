var text = "My name is Alex";

var reverseWord = (word) => {
  // word : "My name is Alex"
  // Merubah word menjadi array : ["My", "name", "is", "Alex"]
  var splittedWord = word.split(" ");
  // Proses data pada array satu per satu, setiap data akan di reverse
  // ["yM", "eman", "si", "xelA"]
  var reversedSplittedWord = splittedWord.map((letter) => {
    // letter : "My" --> ["M", "y"] --> ["y", "M"] --> "yM"
    var splittedLetter = letter.split(""); // ["M", "y"]
    splittedLetter.reverse(); // ["y", "M"]
    var joinedLetter = splittedLetter.join(""); // "yM"
    return joinedLetter; // "yM"
  });
  // Array yang sudah di reverse akan dijadikan string kembali
  // Keluarkan string dari function ini
  return reversedSplittedWord.join(" ");
};

var result = reverseWord(text);
console.log(result); // "yM eman si xelA"
