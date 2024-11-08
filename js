// Lista de productos (puedes añadir más productos aquí)
const products = [
  { id: 1, name: "Pizza Margarita", description: "Pizza con tomate, queso y albahaca", price: 12 },
  { id: 2, name: "Ensalada César", description: "Ensalada con lechuga, pollo y crutones", price: 8 },
  { id: 3, name: "Pasta Carbonara", description: "Pasta con salsa de queso y bacon", price: 10 },
  { id: 4, name: "Sopa de Tomate", description: "Sopa cremosa de tomate", price: 6 }
];

// Función para mostrar los productos
function displayProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Precio: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Agregar al carrito</button>
    `;
    productList.appendChild(productElement);
  });
}

// Función para agregar un producto al carrito
function addToCart(productId) {
  const product = products.find(prod => prod.id === productId);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} agregado al carrito.`);
}

displayProducts();
