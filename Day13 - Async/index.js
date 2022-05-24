// Synchronous --> ditunggu
// getProducts(); // 5 seconds
// console.log("dua");
// console.log("tiga");

// Asynchronous --> tidak ditunggu
// getProducts(); // 5 seconds
// console.log("dua"); // 1 second
// console.log("tiga"); // 1 second

// const error = new Error("Data tidak ditemukan");
// res.send(error);
// res.status(404).send(error);

// Jalankan kode yang ada di dalam try
// Jika ada error, masuk ke dalam catch
try {
  console.log("satu");
  console.log("dua");
  console.log("tiga");
  console.log("empat");
} catch (error) {
  console.log("error");
  console.log(error.message);
}
