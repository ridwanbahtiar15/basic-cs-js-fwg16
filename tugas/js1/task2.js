function cekNilai(indonesia, inggris, mtk, ipa) {
  // validasi
  if (!indonesia || !inggris || !mtk || !ipa) {
    return "nilai harus diisi!";
  }

  if (
    typeof indonesia !== "number" ||
    typeof inggris !== "number" ||
    typeof mtk !== "number" ||
    typeof ipa !== "number"
  ) {
    return "yang anda input bukan angka!";
  }

  const result = (indonesia + inggris + mtk + ipa) / 4;
  if (result <= 59) {
    return `Rata-rata = ${result}, grade = E`;
  } else if (result <= 69) {
    return `Rata-rata = ${result}, grade = D`;
  } else if (result <= 79) {
    return `Rata-rata = ${result}, grade = C`;
  } else if (result <= 89) {
    return `Rata-rata = ${result}, grade = B`;
  } else if (result <= 100) {
    return `Rata-rata = ${result}, grade = A`;
  }
}

console.log(cekNilai(80, 85, 75, 82));
