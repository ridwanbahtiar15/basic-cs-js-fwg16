// callback
function checkName(value, name) {
  let newName = [];
  for (i = 0; i <= name.length - 1; i++) {
    let lowerName = name[i].toLocaleLowerCase();
    if (lowerName.indexOf(value) > -1) {
      newName.push(name[i]);
    }
  }
  return newName;
}

// function searching nama
function searchName(value, limit, callback) {
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];
  const newName = callback(value, name);
  return newName.filter((e, i) => i <= limit - 1);
}
console.log(searchName("an", 3, checkName));
