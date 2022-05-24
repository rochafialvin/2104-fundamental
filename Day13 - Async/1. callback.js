// Akan menjalankan function setelah sekian waktu
// const x = () => {
//   console.log("running");
// };
// Function x akan dijalankan setelah dua detik
// setTimeout adalah function yang berjalan secara asynchronous
// setTimeout(x, 2000);
// console.log("Selesai");

const products = [
  { id: 1, name: "Shoes", price: 150000 },
  { id: 2, name: "TV", price: 180000 },
  { id: 3, name: "Keyboard", price: 190000 },
];

const getProducts = (keyword, callSuccess, callError) => {
  // get data dari server
  setTimeout(() => {
    const word = keyword.toLowerCase();
    const filteredProducts = products.filter((product) => {
      const name = product.name.toLowerCase();
      return name.includes(word);
    });

    if (filteredProducts.length) {
      callSuccess(filteredProducts);
    } else {
      const error = new Error(`Product tidak ditemukan`);
      callError(error);
    }
  }, 2000);
};

const showProducts = (data) => {
  console.log({ status: "success", data });
  console.log("Running setelah getproducts selesai");
};

const showError = (error) => {
  console.log(error.message);
};

getProducts("a", showProducts, showError);
