// ES 7 - Async & Await
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
      resolve(["PWDLEBARAN", "PWDNGAJAKTEMEN", "PWDTAPMANTAP"]);
    }, 1000);
  });

  return promise;
};

const callme = async () => {
  try {
    const products = await getProducts("e");
    console.log({ status: "success", products });
    const categories = await getCategories();
    console.log({ status: "success", categories });
    const vouchers = await getVouchers();
    console.log({ status: "success", vouchers });
  } catch (err) {
    console.log({ status: "error", message: err.message });
  }
};

callme();
