//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Buat function yang akan memfilter seseorang yang memiliki umur lebih dari 30
// atau tinggal di Jakarta
// [                                                                                                    //
//   ["John", 43, "Jakarta"],                                                                           //
//   ["Baby", 21, "Jakarta"],                                                                           //
//   ["Tony", 34, "Surabaya"],                                                                          //
//   ["Justin", 29, "Banjarmasin"],                                                                     //
// ];                                                                                                   //
//                                                                                                      //
// [                                                                                                    //
//   ["John", 43, "Jakarta"],                                                                           //
//   ["Baby", 21, "Jakarta"],                                                                           //
//   ["Tony", 34, "Surabaya"],                                                                          //
// ];                                                                                                   //
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var persons = [
  ["John", 43, "Jakarta"],
  ["Baby", 21, "Jakarta"],
  ["Tony", 34, "Surabaya"],
  ["Justin", 29, "Banjarmasin"],
];

var ageAddress = (arr) => {
  // Kerjakan disini
};

var filteredPersons = ageAddress(persons);
console.table(filteredPersons);
