// cart.js - modul pentru gestionarea unui cos de cumparaturi
// Produs: { id, name, price, quantity }

let cart = [];

function addProduct(product) {
  const { id, name, price, quantity } = product;
  const existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    cart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + quantity } : item
    );
  } else {
    cart = [...cart, { id, name, price, quantity }];
  }

  return cart;
}

function removeProduct(id) {
  const productExists = cart.some((item) => item.id === id);

  if (!productExists) {
    throw new Error(`Produsul cu id-ul ${id} nu exista in cos.`);
  }

  cart = cart.filter((item) => item.id !== id);
  return cart;
}

function updateQuantity(id, quantity) {
  const productExists = cart.some((item) => item.id === id);

  if (!productExists) {
    throw new Error(`Produsul cu id-ul ${id} nu exista in cos.`);
  }

  cart = cart.map((item) => (item.id === id ? { ...item, quantity } : item));
  return cart;
}

function calculateTotal() {
  return cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
}

function getCart() {
  return cart;
}

export { addProduct, removeProduct, updateQuantity, calculateTotal, getCart };
