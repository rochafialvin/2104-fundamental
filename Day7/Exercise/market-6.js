//////////////////
// MARKET V.1.6 //
/////////////////

// Selesaikan code dibawah ini

let fruits = [
  { name: "Apple", price: 10000, stock: 5 },
  { name: "Grape", price: 15000, stock: 7 },
  { name: "Orange", price: 20000, stock: 8 },
];

/*
  Daftar Buah
  
  1. Apple || Rp. 10.000 || stock : 5
  2. Grape || Rp. 15.000 || stock : 7
  3. Orange || Rp. 20.000 || stock : 8
*/
const createFruitList = (arr) => {
  let list = `Daftar buah\n\n`;

  arr.forEach((fruit, index) => {
    // fruit : { name: "Apple", price: 10000, stock: 5 }
    // index : 0 + 1 = 1
    list += `${index + 1}. ${fruit.name} || Rp. ${fruit.price} || stock : ${
      fruit.stock
    }\n`;
  });

  return list;
};

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
    const list = createFruitList(fruits);
    alert(list);
  } else if (menu == 2) {
    // Input nama, harga, stock untuk buah yang baru
    var newName = prompt("Masukkan nama buah :");
    var newPrice = parseInt(prompt("Masukkan jumlah harga satuan :"));
    var newStock = parseInt(prompt("Masukkan jumlah stock :"));

    // Dibuat menjadi satu object dengan property name, price stock
    var newFruit = { name: newName, price: newPrice, stock: newStock };

    // Array yang sudah jadi di push ke array fruits
    fruits.push(newFruit);

    // Menampilkan list buah
    const list = createFruitList(fruits);
    alert(list);
  } else if (menu == 3) {
    // cari tahu index buah yang ingin di hapus
    var list = createFruitList(fruits);
    var selIndex = parseInt(prompt(list)) - 1;
    // Menghapus satu data pada array
    fruits.splice(selIndex, 1);
    // Tampilkan list buah
    var list = createFruitList(fruits);
    alert(list);
  } else if (menu == 4) {
    var cart = [
      // {name: "Apple", price: 10000, quantity: 3}
      // {name: "Orange", price: 15000, quantity: 2}
    ];
    while (true) {
      // 1. Menampilkan daftar buah & user memilih buah
      var list = createFruitList(fruits);
      // 1 --> Apple . Index buah yang dipilih (dibeli)
      var selectedIndex = parseInt(prompt(list)) - 1;
      // selectedIndex = 0
      // fruits[selectedIndex] = { name: "Apple", price: 10000, stock: 5 }
      var selName = fruits[selectedIndex].name; // Apple
      var selPrice = fruits[selectedIndex].price; // 10000
      var selStock = fruits[selectedIndex].stock; // 5
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
          // {name: "Apple", price: 10000, quantity: 3}
          cart.push({ name: selName, price: selPrice, quantity: selQuantity });
          // Kurangi stock buah yang dipilih
          // fruits[selectedIndex].stock = fruits[selectedIndex].stock - selQuantity;
          fruits[selectedIndex].stock -= selQuantity;

          break;
        }
      }

      // 3. Tampilkan isi keranjang dan tanyakan mau belanja buah lain atau tidak
      var list = "Isi keranjang\n\n";
      var create = (fruit, index) => {
        list += `${index + 1}. ${
          fruit.name
        } || Rp. ${fruit.price.toLocaleString("id")} || quantity ${
          fruit.quantity
        }\n`;
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
      // data : {name: "Apple", price: 10000, quantity: 3}
      var result = data.price * data.quantity;
      totalPrice += result;
    });

    var finalReport = "";
    cart.forEach(
      (data) =>
        (finalReport += `${data.name} : ${data.price} * ${data.quantity} = ${
          data.price * data.quantity
        }\n`)
    );

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
