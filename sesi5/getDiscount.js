function getDiscount(harga, diskon) {
    return harga - (harga * diskon / 100);
}

module.exports = getDiscount;