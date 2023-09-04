// palindrom
function cekPalindrom(number) {
  for (let i = 0; i < number.length / 2; i++) {
    let indexAkhir = number.length - i - 1;
    if (number[i] !== number[indexAkhir]) {
      return "bukan palindrom";
    }
  }
  return "palindrom";
}

console.log(cekPalindrom("malam"));
