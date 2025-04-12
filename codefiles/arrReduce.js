let listOfBooks = [
  { name: "JS", price: 2001 },
  { name: "PY", price: 3001 },
  { name: "Java", price: 4001 },
  { name: "CPP", price: 5001 },
  { name: ".net", price: 6001 },
];

let total = listOfBooks.reduce((acc, currObj) => acc + currObj.price, 0);
console.log(total); //20,005
