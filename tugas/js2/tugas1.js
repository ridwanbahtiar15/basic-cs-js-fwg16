// buat dan jelaskan 10 method bawaan javascript beserta contoh penggunaannya

// 1. forEach
// memecah array menjadi tiap element
// non mutasi ->  array asli tidak berubah
// const angka = [1, 2, 3, 4];
// angka.forEach((e, i, a) => console.log(e));
// console.log(angka);

// 2. find
// mencari element yang pertama kali ditemukan
// non mutasi -> array asli tidak berubah
// const angka = [1, 2, 3, 4];
// const result = angka.find((e, i) => e > 2);
// console.log(result);
// console.log(angka);

// 3. filter
// mencari element yang pertam kali ditemukan
// non mutasi -> array asli tidak berubah
// const angka = [1, 2, 3, 4];
// const result = angka.filter((e, i) => e > 2);
// console.log(result);
// console.log(angka);

// 4. shift
// menghapus element pertama pada Array
// mutasi -> array asli berubah
// const angka = [1, 2, 3, 4];
// const result = angka.shift();
// console.log(result);
// console.log(angka);

// 5. pop
// menghapus element terakhir pada array
// mutasi -> array asli berubah
// const angka = [1, 2, 3, 4];
// const result = angka.pop();
// console.log(result);
// console.log(angka);

// 6. unshift
// menambah element diawal pada Array
// mutasi -> array asli berubah
// const angka = [1, 2, 3, 4];
// const result = angka.unshift(0);
// console.log(result);
// console.log(angka);

// 7. toLowerCase
// mengubah string ke huruf kecil
// non mutasi -> array asli tidak berubah
// const name = "RIDWAN BAHTIAR";
// const result = name.toLowerCase();
// console.log(result);
// console.log(name);

// 8. toUpperCase
// mengubah string ke huruf besar
// non mutasi -> array asli tidak berubah
// const name = "ridwan bahtiar";
// const result = name.toUpperCase();
// console.log(result);
// console.log(name);

// 9. toString
// merubah tipe data number ke String
// non mutasi -> array asli tidak berubah
// const angka = 56;
// const result = angka.toString();
// console.log(typeof result);
// console.log(typeof angka);

//10. reduce
// melakukan sesuatu terhadap seluruh element pada array
// non mutasi -> array asli tidak berubah
// const angka = [1, 2, 3, 4];
// const result = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(result);
// console.log(angka);
