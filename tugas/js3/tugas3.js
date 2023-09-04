const cuaca = (kota) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          kota: "jakarta",
          kondisi: "cerah berawan",
        },
        {
          kota: "bekasi",
          kondisi: "hujan",
        },
        {
          kota: "bandung",
          kondisi: "gerimis",
        },
      ];
      const cek = data.find((e) => e.kota == kota);
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("kota tidak ada"));
      }
    }, 2000);
  });
};

cuaca("bandung")
  .then((result) => console.log(result))
  .catch((result) => console.log(result));

const film = (nama) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          nama: "thor",
          tahun: 2011,
        },
        {
          nama: "spiderman",
          tahun: 2017,
        },
        {
          nama: "avengers",
          tahun: 2012,
        },
      ];
      const cek = data.find((e) => e.nama == nama);
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("film tidak ditemukan"));
      }
    }, 500);
  });
};

// film("spiderman")
//   .then((result) => console.log(result))
//   .catch((result) => console.log(result));
async function cobaAsync() {
  try {
    const result = await film("spiderman");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
cobaAsync();
