function cekNIlai(nilaiAwal, nilaiAKhir, dataArray) {
  // validasi number
  const cekArr = dataArray.filter((e) => typeof e !== "number");
  if (
    typeof nilaiAwal !== "number" ||
    typeof nilaiAKhir !== "number" ||
    cekArr.length > 0
  ) {
    return "nilai yang anda input bukan number";
  }

  if (nilaiAwal > nilaiAKhir) {
    // validasi nilaiAkhir harus lebih besar dari nilai nilaiAwal
    return "Nilai akhir harus lebih besar dari nilai awal";
  }

  // validasi jumlah dataArray >5
  if (dataArray.length <= 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  }

  // validasi mengecek nilai diantara nilaiAwal dan nilaiAkhir
  const filter = dataArray.filter((e) => e > nilaiAwal && e < nilaiAKhir);
  if (filter.length == 0) {
    return "Nilai tidak ditemukan";
  }

  // urutkan nilai dari terkecil-terbesar
  return filter.sort((a, b) => a - b);
}

console.log(cekNIlai(5, 20, [2, 25, 4, 14, 17, 30, 10]));
// console.log(cekNIlai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
// console.log(cekNIlai(4, 17, [2, 25, 4]));
// console.log(cekNIlai(5, 17, [2, 25, 4, 1, 30, 18]));
