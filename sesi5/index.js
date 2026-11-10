const getDiscount = require('./getDiscount');

const harga = 100000;
const diskon = 10;

const hargaAkhir = getDiscount(harga, diskon);

console.log("Harga awal: Rp" + harga);
console.log("Diskon: " + diskon + "%");
console.log("Harga setelah diskon: Rp" + hargaAkhir);