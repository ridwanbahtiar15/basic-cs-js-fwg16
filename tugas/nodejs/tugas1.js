// palindrom
function cekPalindrom(value) {
  for (let i = 0; i < value.length / 2; i++) {
    let indexAkhir = value.length - i - 1;
    if (value[i] !== value[indexAkhir]) {
      return "bukan palindrom";
    }
  }
  return "palindrom";
}

console.log(cekPalindrom("malam"));
