// Synchronous --> ditunggu
getProducts(); // 5 seconds
console.log("dua");
console.log("tiga");

// Asynchronous --> tidak ditunggu
getProducts(); // 5 seconds
console.log("dua"); // 1 second
console.log("tiga"); // 1 second
