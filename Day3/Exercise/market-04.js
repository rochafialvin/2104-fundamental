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
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

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

var fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

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
}
