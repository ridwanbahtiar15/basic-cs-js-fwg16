function printSegitiga(value) {
  // validasi isnumber
  if (typeof value !== "number") {
    return "yang anda input bukan angka!";
  }

  let s = "";
  for (i = value; i >= 1; i--) {
    for (a = 1; a <= i; a++) {
      s += a;
    }
    s += "\n";
  }

  return s;
}

console.log(printSegitiga("enam"));
