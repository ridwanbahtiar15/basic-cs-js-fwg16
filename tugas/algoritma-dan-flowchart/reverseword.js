// // membalikan kata
// function rev(value) {
//   let stringBaru = " " + value;
//   let kataBaru = "";

//   for (let i = stringBaru.length - 1; i >= 0; i--) {
//     if (stringBaru[i] == " ") {
//       for (let j = i + 1; j <= stringBaru.length - 1; j++) {
//         if (stringBaru[j] == " ") {
//           break;
//         }
//         kataBaru += stringBaru[j];
//       }
//       kataBaru += " ";
//     }
//   }
//   return kataBaru;
// }
// console.log(rev("saya belajar javascript"));

// membalikan kata
function rev(value) {
  let stringBaru = " " + value;
  let kataBaru = "";

  for (let i = stringBaru.length - 1; i >= 0; i--) {
    if (stringBaru[i] == " ") {
      for (let j = i + 1; j <= stringBaru.length - 1; j++) {
        if (stringBaru[j] == " ") {
          break;
        }
        kataBaru += stringBaru[j];
      }
      i != 0 ? (kataBaru += " ") : kataBaru;
    }
  }
  return kataBaru;
}
console.log(rev("saya belajar javascript"));
