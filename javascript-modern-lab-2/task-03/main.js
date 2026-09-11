import {
  addProduct,
  removeProduct,
  updateQuantity,
  calculateTotal,
  getCart,
} from "./cart.js";

addProduct({ id: 1, name: "Laptop", price: 3500, quantity: 1 });
addProduct({ id: 2, name: "Mouse", price: 80, quantity: 2 });
addProduct({ id: 3, name: "Tastatura", price: 150, quantity: 1 });

console.log("--- Cos initial ---");
getCart().forEach(({ id, name, price, quantity }) => {
  console.log(`#${id} ${name} - ${price} lei x ${quantity} buc.`);
});

updateQuantity(2, 3);
console.log("\n--- Cos dupa modificarea cantitatii pentru Mouse ---");
getCart().forEach(({ name, quantity }) => {
  console.log(`${name}: ${quantity} buc.`);
});

console.log(`\nTotal comanda: ${calculateTotal()} lei`);

try {
  removeProduct(1);
  console.log("\n--- Cos dupa stergerea Laptopului ---");
  getCart().forEach(({ name }) => console.log(name));
} catch (error) {
  console.error(`Eroare: ${error.message}`);
}

// Incercare de a sterge un produs inexistent
try {
  removeProduct(99);
} catch (error) {
  console.error(`\nEroare: ${error.message}`);
}

console.log(`\nTotal final: ${calculateTotal()} lei`);
