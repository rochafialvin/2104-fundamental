const createInfo = () => {
  // akses element yang memiliki id = "name"
  const input = document.getElementById("name");
  // yang diketik di dalam textbox akan tersimpan di property value
  const name = input.value;

  const price = document.getElementById("price").value;

  // Radio button
  // Ambil satu Tag input yang memiliki name condition dan di ceklis
  // querySelector return 1 element object
  const condition = document.querySelector(
    `input[name=condition]:checked`
  ).value;

  //  Tag yang memiliki id warehouse
  const warehouse = document.getElementById("warehouse").value;
  // Ambil semua Tag input yang memiliki name courier dan di ceklis
  // querySelectorAll return 1 array berisi element object
  // All --> array
  const couriers = document.querySelectorAll(`input[name=courier]:checked`);

  console.log({ name, price, condition, warehouse, couriers });
};
