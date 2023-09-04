fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((response) => response.forEach((e) => console.log(e.name)));
