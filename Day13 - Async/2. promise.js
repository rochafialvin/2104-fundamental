// ES 6 - Then & Catch
const products = [
  { id: 1, name: "Shoes", price: 150000 },
  { id: 2, name: "TV", price: 180000 },
  { id: 3, name: "Keyboard", price: 190000 },
];

// getProducts akan me-return promise
const getProducts = (keyword) => {
  const promise = new Promise((resolve, reject) => {
    // get data dari server
    //  Promise dan setTimeout tidak memiliki hubungan. Dalam arti membuat promise tidak harus ada setTimeout
    // Disini hanya untuk mensimulasikan pengambilan data yang membutuhkan waktu 2 detik
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
const getCategories = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["electronic", "fruits", "vehicles"]);
    }, 1000);
  });

  return promise;
};

const getVouchers = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(["PWDLEBARAN", "PWDNGAJAKTEMEN", "PWDTAPMANTAP"]);
    }, 1000);
  });

  return promise;
};

// berhasil --> then
// gagal --> catch
getProducts("e")
  .then((products) => {
    console.log({ status: "success", products });
  })
  .then((res) => {
    getCategories()
      .then((categories) => {
        console.log({ status: "success", categories });
      })
      .then((res) => {
        getVouchers()
          .then((vouchers) => {
            console.log({ status: "success", vouchers });
          })
          .catch((err) => {
            console.log({ status: "error voucher", message: err.message });
          });
      })
      .catch((err) => {
        console.log({ status: "error categories", message: err.message });
      });
  })
  .catch((err) => {
    console.log({ status: "error products", message: err.message });
  });
