const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item == day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// a. then catch
cekHariKerja("senin")
  .then((result) => console.log(result))
  .catch((result) => console.log(result));

// then catch adalah method error handling pada promise
// then adalah aksi yang digunakan untuk menangkap resolve atau ketika kondisi terpenuhi(fulfilled)
// catch adalah aksi yand digunakan untuk menangkap rejected atau ketika kondisi tidak terpenuhi(reject)

// b. try catch
async function cekAsync() {
  try {
    const result = await cekHariKerja("sabtu");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
cekAsync();

// try catch adalah error handling pada async await dan berfungsi yang mengembalikan promise
// try digunakan untuk menangkap resolve atau ketika kondisi terpenuhi(fullfilled) pada async await
// catch digunakan untuk menangkap rejected atau ketika kondisi tidak terpenuhi(reject) pada async await
