// Minta user untuk input massa dalam kg (weight)
var weight = prompt("Masukkan berat badan Anda (Kg)");
// Input massa dari user ubah ke bentuk integer
weight = parseInt(weight);

// Minta user untuk input tinggi dalam m (height)
// Input tinggi dari user ubah ke bentuk integer
// parseFLoat , mengubah string ke float
var height = parseFloat(prompt("Masukkan tinggu Anda (M)"));

// Hitung IMT dengan rumus : massa / tinggi^2, hasilnya simpan di variable (imt)
var imt = weight / Math.pow(height, 2);

// Mengkategorikan status berdasarkan IMT
var type;

// IMT < 18.5 --> type : kurang
if (imt < 18.5) {
  type = "KURANG";
} else if (imt >= 18.5 && imt <= 24.9) {
  type = "IDEAL";
} else if (imt >= 25.0 && imt <= 29.9) {
  type = "BERLEBIH";
} else if (imt >= 30.0 && imt <= 39.9) {
  type = "SANGAT BERLEBIH";
} else {
  type = "OBESITAS";
}

// Tampilkan informasi mass dan tinggi
console.log(`Massa ${weight} kg & tinggi ${height} m`);
// Tampilkan informasi IMT dan juga status.
console.log(`IMT = ${imt}, BERAT BADAN ANDA ${type}`);
