class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

const products = [
  { id: 1652777173833, name: "Celana Jin", price: 120000, stock: 30 },
  { id: 1652777222715, name: "Hoodie Jin", price: 150000, stock: 20 },
  { id: 1652777231256, name: "Tas Jin", price: 170000, stock: 10 },
];

const fnRenderList = () => {
  const listProduct = products.map((product) => {
    return `
      <tr>
         <td>${product.id}</td>
         <td>${product.name}</td>
         <td>${product.price}</td>
         <td>${product.stock}</td>
      </tr>
      `;
  });

  document.getElementById("tableBody").innerHTML = listProduct.join("");
};

// Hanya akan dipanggil jika di tekan tombol input
const fnInputData = () => {
  // Ambil informasi mengenai product yang ingin ditambahkan
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;
  // Buat object dengan informasi yang di dapat
  const time = new Date();
  const id = time.getTime();
  // const product = new Product(id, name, price, stock);
  const product = { id, name, price, stock };
  // Masukkan object ke array products
  products.push(product);
  // reset form --> mengosongkan semua textbox
  document.getElementById("form").reset();
  // Mengupdate list data di table data
  fnRenderList();
};

fnRenderList();
