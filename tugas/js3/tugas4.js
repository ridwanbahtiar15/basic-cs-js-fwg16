async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    result.forEach((e) => console.log(e.name));
  } catch (error) {
    console.log(error);
  }
}

fetchData();
