// ES 6
const products = [
  { id: 1, name: "Shoes", price: 150000 },
  { id: 2, name: "TV", price: 180000 },
  { id: 3, name: "Keyboard", price: 190000 },
];

const getProducts = (keyword) => {
  const promise = new Promise((resolve, reject) => {
    // get data dari server
    setTimeout(() => {
      const word = keyword.toLowerCase();
      const filteredProducts = products.filter((product) => {
        const name = product.name.toLowerCase();
        return name.includes(word);
      });

      if (filteredProducts.length) {
        // lanjut ke "then"
        // filteredProducts akan masuk ke "res"
        resolve(filteredProducts);
      } else {
        const error = new Error(`Product tidak ditemukan`);
        // lanjut ke "catch"
        // error akan masuk ke "err"
        reject(error);
      }
    }, 2000);
  });

  return promise;
};

// berhasil --> then
// gagal --> catch
getProducts("y")
  .then((res) => {
    console.log({ status: "success", result: res });
  })
  .catch((err) => {
    console.log({ status: "error", message: err.message });
  });
