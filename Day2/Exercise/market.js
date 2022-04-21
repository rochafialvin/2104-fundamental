var priceApple = 10000;
var priceGrape = 15000;
var priceOrange = 20000;

var stockApple = 5;
var stockGrape = 7;
var stockOrange = 8;

// Loop apple
var qtyApple; // undefined
// Akan diulang ketika qtyApple undefined atau qtyApple lebih besar dari stock
while (!qtyApple || qtyApple > stockApple) {
  qtyApple = parseInt(prompt(`Masukan qty Apple, stock : ${stockApple}`));
  if (qtyApple > stockApple) {
    alert(`Quantity melebihi stock (${stockApple}), Mohon isi kembali`);
  }
}

// Loop grape
var qtyGrape; // undefined
while (!qtyGrape || qtyGrape > stockGrape) {
  qtyGrape = parseInt(prompt(`Masukan qty Grape, stock : ${stockGrape}`));
  if (qtyGrape > stockGrape) {
    alert(`Quantity melebihi stock (${stockGrape}), Mohon isi kembali`);
  }
}

// Loop orange
var qtyOrange; // undefined
while (!qtyOrange || qtyOrange > stockOrange) {
  qtyOrange = parseInt(prompt(`Masukan qty Orange, stock : ${stockOrange}`));
  if (qtyOrange > stockOrange) {
    alert(`Quantity melebihi stock (${stockOrange}), Mohon isi kembali`);
  }
}

// Mendapatkan harga total per buah
var totalPriceApple = qtyApple * priceApple;
var totalPriceGrape = qtyGrape * priceGrape;
var totalPriceOrange = qtyOrange * priceOrange;

// Total harga keseluruhan
var finalPrice = totalPriceApple + totalPriceGrape + totalPriceOrange;

var money; // undefined
// Akan diulang selama money berisi undefined atau lebih kecil dari finalPrice
while (!money || money < finalPrice) {
  money = parseInt(
    prompt(
      `Detail Belanja
    
          Apple : ${qtyApple} x ${priceApple} = ${totalPriceApple}
          Grape : ${qtyGrape} x ${priceGrape} = ${totalPriceGrape}
          Orange : ${qtyOrange} x ${priceOrange} = ${totalPriceOrange}
          Total : Rp.${finalPrice.toLocaleString("id")}
    
          Masukkan uang Anda`
    )
  );

  var change = Math.abs(finalPrice - money);
  if (money < finalPrice) {
    alert(`Uang yang anda masukkan kurang ${change}`);
  } else if (money > finalPrice) {
    alert(`Terimakasih, uang kembalian Anda ${change}`);
  } else {
    alert(`Terimakasih. uangnya pas, jangan ditungguin`);
  }
}
