function FazzFood(harga, voucher, jarak, pajak) {
  // diskon voucher
  let potongan = 0;
  let hargaSekarang = 0;
  if (voucher == "FAZZFOOD50" && harga >= 50000) {
    potongan = (50 / 100) * harga;

    // jika potongan diatas 50k
    if (potongan >= 50000) {
      hargaSekarang = harga - 50000;
    } else {
      hargaSekarang = harga - potongan;
    }
  } else if (voucher == "DITRAKTIR60" && harga >= 25000) {
    potongan = (60 / 100) * harga;

    // jika potongan diatas 30k
    if (potongan >= 30000) {
      hargaSekarang = harga - 30000;
    } else {
      hargaSekarang = harga - potongan;
    }
  }

  // hitung jarak
  let tarif = 0;
  if (jarak == 2) {
    tarif = 5000;
  } else {
    jarak -= 2;
    tarif = 5000 + jarak * 3000;
  }

  // cek pajak
  let potonganPajak = 0;
  if (pajak) {
    potonganPajak = (5 / 100) * harga;
  }

  const subtotal = harga - potongan + tarif + potonganPajak;

  return `Harga : ${harga}, Potongan : ${potongan}, Biaya Antar : ${tarif}, Pajak : ${potonganPajak}, Subtotal : ${subtotal}`;
}

console.log(FazzFood(75000, "FAZZFOOD50", 5, true));
console.log(FazzFood(50000, "DITRAKTIR60", 6, true));
