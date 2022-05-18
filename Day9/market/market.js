class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

let products = [
  { id: 1652777173833, name: "Celana Jin", price: 120000, stock: 30 },
  { id: 1652777222715, name: "Hoodie Jin", price: 150000, stock: 20 },
  { id: 1652777231256, name: "Tas Jin", price: 170000, stock: 10 },
];

/*
  <tr> 
     <td>1652777173833</td>
     <td>Celana Jin</td>
     <td>120.000</td>
     <td><input onclick=fnEdit(1652777173833) ><td>
  <tr>
  <tr>
    <td>1652777222715<td>
    <td><input value="Hoodie Jin" /></td>
    <td><input value="100.000" /></td>
    <td><input onclick=fnSave() ><td>
  <tr>
  <tr>
    <td>1652777231256<td>
    <td>Tas Jin</td>
    <td>50.000</td>
    <td><input onclick=fnEdit(1652777231256) ><td>
  <tr>
*/
const fnSave = (productId) => {
  // productId : 1652777222715
  // Ambil value dari setiap text box
  const name = document.getElementById("editName").value;
  const price = document.getElementById("editPrice").value;
  const stock = document.getElementById("editStock").value;
  const product = { id: productId, name, price, stock };
  // Tentukan product mana yang akan diubah / update
  const froundIndex = products.findIndex((product) => {
    return product.id == productId;
  });
  // Update data yang sudah ditentukan
  products[froundIndex] = product;

  fnRenderList(products);
};

const fnEdit = (productId) => {
  // productId : 1652777222715
  fnRenderList(products, productId);
};

const fnRenderList = (arr, productId) => {
  // productId : 1652777222715
  const listProduct = arr.map((product) => {
    //product : { id: 1652777231256, name: "Tas Jin", price: 170000, stock: 10 }
    // 1652777231256 == 1652777222715 -- > false
    if (product.id == productId) {
      // Text box
      return `
      <tr>
         <td>${product.id}</td>
         <td><input type="text" id="editName" value="${product.name}"/></td>
         <td><input type="text" id="editPrice" value="${product.price}"/></td>
         <td><input type="text" id="editStock" value="${product.stock}"/></td>
         <td><input type="button" value="Save" onclick="fnSave(${product.id})"></td>
         <td><input type="button" value="Cancel" onclick="fnCancel()"></td>
      </tr>
      `;
    }
    // Normal
    return `
      <tr>
         <td>${product.id}</td>
         <td>${product.name}</td>
         <td>${product.price}</td>
         <td>${product.stock}</td>
         <td><input type="button" value="Delete" onclick="fnDeleteById(${product.id})"></td>
         <td><input type="button" value="Edit" onclick="fnEdit(${product.id})"></td>
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
  fnRenderList(products);
};

const fnFilterByName = () => {
  // Ambil keyword yang diketik oleh user
  // keyword : HOODIE
  const keyword = document.getElementById("filterName").value;
  // Cari product yang mengandung keyword dari user

  const resultFilter = products.filter((product) => {
    // { id: 1652777173833, name: "Hoodie Jin", price: 120000, stock: 30 }
    // name  : hoodie jin
    const name = product.name.toLowerCase();
    // lowerKeyword : hoodie
    const lowerKeyword = keyword.toLowerCase();
    // celana jin mengandung c false
    return name.includes(lowerKeyword);
  });
  // Tampilkan di table
  fnRenderList(resultFilter);
};

const fnDeleteById = (productId) => {
  // 2715
  // Dapatkan id dari product yang hendak dihapus
  // hapus product berdasarkan id
  products = products.filter((product) => product.id != productId);
  fnRenderList(products);
};

const fnCancel = () => {
  fnRenderList(products);
};

fnRenderList(products);
