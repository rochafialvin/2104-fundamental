// Inputan dari user
var total = 500000;
var discount;

// Jika totalnya lebih dari 100rb, discount 15%
if (total > 100000) {
  discount = total * 0.15;
} else if (total > 70000) {
  discount = total * 0.1;
} else {
  discount = total * 0.05;
}

var totalFinal = total - discount;
console.log(`belanja : ${total}`);
console.log(`discount : ${discount}`);
console.log(`belanja : ${totalFinal}`);
// Jika totalnya lebih dari 70rb, discount 10%
// Dibawah 70rb discount 5%

// result
// Total belanja : 80000
// Total discount : 8000
// Total yg dibayar : 72000
