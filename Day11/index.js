let products = [
  { id: 1652777173833, name: "Celana Jin", price: 30000, stock: 30 },
  { id: 1652777222715, name: "Hoodie Jin", price: 53000, stock: 20 },
  { id: 1652777231256, name: "Tas Jin", price: 90000, stock: 11 },
  { id: 1652777231255, name: "Hat", price: 125000, stock: 13 },
  { id: 1652777231267, name: "T-Shirt O neck", price: 32000, stock: 24 },
  { id: 1652777231278, name: "T-Shirt V neck", price: 45000, stock: 45 },
  { id: 1652777231289, name: "T-Shirt Oversize", price: 170000, stock: 19 },
];

const filterByPrice = () => {
  const priceMinimum = parseInt(
    document.getElementById("filterPriceMinimum").value
  );

  const priceMaximum = parseInt(
    document.getElementById("filterPriceMaximum").value
  );

  if (!priceMinimum && !priceMaximum) return fnRenderList(products);

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

  fnRenderList(result);
};

// filterByPrice(40000, 95000);
// filterByPrice(70000, "");
// filterByPrice("", 50000);
filterByPrice(0, 90000);

// falsy value : "", 0, undefined, BN
