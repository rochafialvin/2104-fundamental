/////////////////
// MARKET V.1.4
/////////////////

/*

    1. Hanya boleh ada satu block while untuk input qty semua produk.
    2. Gunakan for loop untuk menghitung total harga setiap barang dan total harga keseluruhan
    3. Terdapat menu tambahan, total semua menu yang dimiliki antara lain :
        1. Menampilkan buah
        2. Menambah buah
        3. Menghapus buah
        4. Membeli buah
        5. Exit
    4. Tampilkan daftar buah setiap selesai proses menambah dan menghapus buah
    5. User kini bisa memilih buah apa yang ingin dibeli, tidak harus beli semua.
    6. Setiap user sudah menentukan qty dari suatu produk, masukkan produk tersebut ke keranjang
    7. Tampilkan isi keranjang setiap selesai memilih satu produk untuk dibeli, dibarengi pertanyaan apakah akan lanjut belanja atau tidak.
    8. Kosongkan array setelah selesai melakukan pembayaran

*/

// [ name, price, stock ]
var fruits = [
  ["Apple", 10000, 5], // 1. Appple || Rp.10.000 || stock : 5
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

while (true) {
  var menu = parseInt(
    prompt(`
    Apa yang ingin anda lakukan :
    1. Menampilkan daftar buah
    2. Menambah buah
    3. Menghapus buah
    4. Membeli buah
    5. Exit
  `)
  );
  // menu = "abc"
  if (menu == 1) {
    var list = "Daftar Buah\n\n";
    var create = (fruit, index) => {
      // fruit : ["Apple", 10000, 5]
      list += `${index + 1}. ${fruit[0]} || Rp. ${fruit[1].toLocaleString(
        "id"
      )} || stock ${fruit[2]}\n`;
    };

    fruits.forEach(create);

    alert(list);
  } else if (menu == 2) {
    // Input nama, harga, stock untuk buah yang baru
    var newName = prompt("Masukkan nama buah :");
    var newPrice = parseInt(prompt("Masukkan jumlah harga satuan :"));
    var newStock = parseInt(prompt("Masukkan jumlah stock :"));

    // Dibuat menjadi satu array dengan urutan layaknya data pada fruits
    var newFruit = [newName, newPrice, newStock];

    // Array yang sudah jadi di push ke array fruits
    fruits.push(newFruit);

    // Menampilkan list buah
    var list = "Daftar Buah\n\n";

    var create = (fruit, index) => {
      // fruit : ["Apple", 10000, 5]
      list += `${index + 1}. ${fruit[0]} || Rp. ${fruit[1].toLocaleString(
        "id"
      )} || stock ${fruit[2]}\n`;
    };

    fruits.forEach(create);

    alert(list);
  } else if (menu == 3) {
    // cari tahu index buah yang ingin di hapus
    var list = "Menghapus buah\n\n";
    var create = (fruit, index) => {
      // fruit : ["Apple", 10000, 5]
      list += `${index + 1}. ${fruit[0]} || Rp. ${fruit[1].toLocaleString(
        "id"
      )} || stock ${fruit[2]}\n`;
    };

    fruits.forEach(create);

    var selIndex = parseInt(prompt(list)) - 1;
    // Menghapus satu data pada array
    fruits.splice(selIndex, 1);
    // Tampilkan list buah
    var list = "Daftar Buah\n\n";
    var create = (fruit, index) => {
      // fruit : ["Apple", 10000, 5]
      list += `${index + 1}. ${fruit[0]} || Rp. ${fruit[1].toLocaleString(
        "id"
      )} || stock ${fruit[2]}\n`;
    };

    fruits.forEach(create);

    alert(list);
  } else if (menu == 4) {
    var cart = [
      // ["Apple", 10000, 3]
      // ["Orang", 15000, 2]
    ];
    while (true) {
      // 1. Menampilkan daftar buah & user memilih buah
      var list = "Daftar Buah\n\n";
      var create = (fruit, index) => {
        console.log(fruit);
        list += `${index + 1}. ${fruit[0]} || Rp. ${fruit[1].toLocaleString(
          "id"
        )} || stock ${fruit[2]}\n`;
      };

      fruits.forEach(create);

      // 1 --> Apple . Index buah yang dipilih (dibeli)
      var selectedIndex = parseInt(prompt(list)) - 1;
      // selectedIndex = 0
      // fruits[selectedIndex] = ["Apple", 10000, 5]
      var selName = fruits[selectedIndex][0]; // Apple
      var selPrice = fruits[selectedIndex][1]; // 10000
      var selStock = fruits[selectedIndex][2]; // 5
      // 2. Minta user input quantity dari buaawdawdawdawdh yang dipilih
      while (true) {
        var selQuantity = parseInt(
          prompt(`Masukkan quantity untuk ${selName}, stock : ${selStock}`)
        );

        if (selQuantity > selStock) {
          alert(
            `Quantity yang diminta ${selQuantity}, melibihi jumlah stock ${selStock}`
          );
        } else {
          // Masukan ke keranjang
          // [Apple, 10000, 3]
          cart.push([selName, selPrice, selQuantity]);
          // Kurangi stock buah yang dipilih
          // fruits[selectedIndex][2] = fruits[selectedIndex][2] - selQuantity;
          fruits[selectedIndex][2] -= selQuantity;

          break;
        }
      }

      // 3. Tampilkan isi keranjang dan tanyakan mau belanja buah lain atau tidak

      var list = "Isi keranjang\n\n";
      var create = (fruit, index) => {
        list += `${index + 1}. ${fruit[0]} || Rp. ${fruit[1].toLocaleString(
          "id"
        )} || quantity ${fruit[2]}\n`;
      };

      cart.forEach(create);

      var message = `${list}\n\nApakah belanja lagi ?`;
      var isConfimed = confirm(message);
      // 4. Jika iya, kembali ke step 1
      // 5. Jika tidak, hitung total belanja
      if (!isConfimed) break;
    }

    // 6. Tampilkan belanjaan dan minta user input sejumlah uang

    var totalPrice = 0; // 60000

    cart.forEach((data) => {
      // data : ["Orange", 15000, 2]
      var result = data[1] * data[2];
      totalPrice += result;
    });

    const cart = [
      ["Apple", 1000, 6],
      ["Grape", 1200, 3],
    ];

    /*
      Detail belanja

      Apple : 1000 * 6 = 6000
      Grape : 1200 * 3 = 3600
    */

    var finalReport = "";
    cart.forEach((data) => {
      finalReport += `${data[0]} : ${data[1]} * ${data[2]} = ${
        data[1] * data[2]
      } \n`;
    });

    var list = `Detail Belanja\n\n${finalReport}\n\nTotal: ${totalPrice}`;

    while (true) {
      var money = parseInt(prompt(list));

      var margin = Math.abs(money - totalPrice);
      if (money < totalPrice) {
        // 7. Check uangnya, jika kurang kembali ke step 6
        alert(`Uang anda kurang ${margin}`);
      } else {
        // 8. Jika tidak kurang tampilkan informasi akhir dari belanja
        alert(`Mantap, kembalian anda ${margin}`);
        break;
      }
    }
  } else if (menu == 5) {
    break;
  }
}
