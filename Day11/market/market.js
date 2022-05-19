class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

let products = [
  { id: 1652777173833, name: "Celana Jin", price: 30000, stock: 30 },
  { id: 1652777222715, name: "Hoodie Jin", price: 53000, stock: 20 },
  { id: 1652777231256, name: "Tas Jin", price: 90000, stock: 11 },
  { id: 1652777231255, name: "Hat", price: 125000, stock: 13 },
  { id: 1652777231267, name: "T-Shirt O neck", price: 32000, stock: 24 },
  { id: 1652777231278, name: "T-Shirt V neck", price: 45000, stock: 45 },
  { id: 1652777231289, name: "T-Shirt Oversize", price: 170000, stock: 19 },
];

let cart = [];

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
         <td><input type="button" value="Add" onclick="fnAddToCart(${product.id})"></td>
         <td><input type="button" value="Delete" onclick="fnDeleteById(${product.id})"></td>
         <td><input type="button" value="Edit" onclick="fnEdit(${product.id})"></td>
      </tr>
      `;
  });

  document.getElementById("tableBody").innerHTML = listProduct.join("");
};

const fnCalculateCart = () => {
  // Cari subtotal
  const subtotal = cart.reduce((prev, curr) => {
    const a = prev; // 460000
    const b = curr.price * curr.quantity;
    return a + b; // 310000 + 150000
  }, 0);

  // Cari ppn
  const ppn = subtotal * 0.11;
  // Cari total = subtotal + ppn
  const total = subtotal + ppn;

  // Render summary
  const listPayment = cart
    .map((cartObj) => {
      const { id, name, price, quantity } = cartObj;
      return `<p>${id} || ${name} || ${price} || ${quantity}</p>`;
    })
    .join("");

  const listTotal = `
    <h3>Sub Total : Rp. ${subtotal.toLocaleString("id")}</h3>
    <h3>PPN: Rp. ${ppn.toLocaleString("id")}</h3>
    <h3>Total : Rp. ${total.toLocaleString("id")}</h3>`;

  document.getElementById("summary").innerHTML = listPayment + listTotal;
};

const fnFilterByPrice = () => {
  const priceMinimum = parseInt(
    document.getElementById("filterPriceMinimum").value
  );
  const priceMaximum = parseInt(
    document.getElementById("filterPriceMaximum").value
  );
  if (!priceMinimum && !priceMaximum) {
    return fnRenderList(products);
  }

  const result = products.filter((product) => {
    // { id: 1652777231255, name: "Hat", price: 125000, stock: 13 }
    // true && false --> false
    if (!priceMaximum) {
      //  filter by minimum
      return product.price >= priceMinimum;
    } else if (!priceMinimum) {
      //  filter by maximum
      return product.price <= priceMaximum;
    } else {
      //  filter by minimum and maximum
      return product.price >= priceMinimum && product.price <= priceMaximum;
    }
  });

  // Render hasil filter
  fnRenderList(result);
};

const fnRenderCart = () => {
  const listProduct = cart.map((cart) => {
    return `
      <tr>
         <td>${cart.id}</td>
         <td>${cart.name}</td>
         <td>${cart.price}</td>
         <td>${cart.quantity}</td>
         <td><input type="button" value="Delete" onclick="fnDeleteCart(${cart.id})"/></td>
      </tr>
      `;
  });

  document.getElementById("tableCart").innerHTML = listProduct.join("");
};

const fnDeleteCart = (cartId) => {
  // Temukan index di cart
  const cartIndex = cart.findIndex((cart) => cart.id == cartId);
  // Pulangin stock
  const productIndex = products.findIndex((cart) => cart.id == cartId);
  products[productIndex].stock += cart[cartIndex].quantity;
  // Hapus dari cart
  cart.splice(cartIndex, 1);

  fnRenderList(products);
  fnRenderCart();
};

const fnAddToCart = (productId) => {
  // Temukan product berdasarkan id
  const product = products.find((product) => product.id == productId);
  // Minta input quantity
  const quantity = parseInt(prompt("Masukkan jumlah quantity"));
  // Apakah quantity yang diminta melebihi stock ?
  if (quantity > product.stock) {
    return alert("Permintaan melebihi stock, gagal menambahkan ke cart");
  }

  // Apakah product ini sudah ada di cart ?
  const foundCartIndex = cart.findIndex((cart) => {
    return cart.id == productId;
  });

  // Jika sudah cart ditemukan
  if (foundCartIndex >= 0) {
    // Update qty
    cart[foundCartIndex].quantity += quantity;
    // Kurangi stock
    product.stock -= quantity;
  } else {
    // Kurangi stock
    product.stock -= quantity;
    // Buat object untuk dimasukkan ke cart
    const { id, name, price } = product;
    const cartObj = { id, name, price, quantity };
    // Tambahin ke cart
    cart.push(cartObj);
  }

  fnRenderList(products);
  fnRenderCart();
};

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
  const foundIndex = products.findIndex((product) => {
    return product.id == productId;
  });
  // Update data yang sudah ditentukan
  products[foundIndex] = product;

  fnRenderList(products);
};

const fnEdit = (productId) => {
  // productId : 1652777222715
  fnRenderList(products, productId);
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
fnRenderCart();
