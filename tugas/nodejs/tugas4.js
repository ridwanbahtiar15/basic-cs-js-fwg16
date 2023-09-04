const divideAndSort = (number) => {
  const toString = number.toString();
  const numArr = toString.split("0");
  const result = [];
  for (let i = 0; i <= numArr.length - 1; i++) {
    let number = numArr[i].split("");
    for (let a = 0; a <= number.length - 1; a++) {
      for (let b = a; b <= number.length - 1; b++) {
        if (number[a] > number[b]) {
          tempNumber = number[a];
          number[a] = number[b];
          number[b] = tempNumber;
        }
      }
    }
    for (let c = 0; c <= number.length - 1; c++) {
      result.push(number[c]);
    }
  }
  return result.join("");
};

console.log(divideAndSort(5956560159466056));
