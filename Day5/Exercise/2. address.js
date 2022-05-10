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

var data = [
  ["John", 43, "Jakarta"],
  ["Baby", 21, "Jakarta"],
  ["Tony", 34, "Surabaya"],
  ["Dustin Timberlake", 29, "Banjarmasin"],
];

/*
   [
      ["John", 43, "Jakarta"],
      ["Baby", 21, "Jakarta"],
      ["Tony", 34, "Surabaya"]
   ]
*/
var ageAddress = (persons) => {
  var result = persons.filter((person) => {
    // person : ["Dustin Timberlake", 29, "Banjarmasin"]
    // false || false
    // false
    return person[1] > 30 || person[2] == "Jakarta";
  });

  return result;
};

var filteredPersons = ageAddress(data);
console.log(filteredPersons);
