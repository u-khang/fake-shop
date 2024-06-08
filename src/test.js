import productsData from "./products.json" assert { type: "json" }

console.log(productsData);
const products = JSON.parse(JSON.stringify(productsData));

// console.log(products);