// Lista de productos (puedes añadir más productos aquí)
const products = [
  { id: 1, name: "Hamburguesa isleña", description: "Pan de hamburguesa mas adicion de carne de 105 gramos y una rodaja de piña caramelizada", price: 12 },
  { id: 2, name: "Hamburguesa costeña", description: "Pan de hamburguesa mas adicion de carne de 105 gramos, mas adicion patacon y queso costeño ", price: 12 },
  { id: 3, name: "Hamburguesa doble", description: "pan de hamburguesa con adicion de dos porciones de carne de 105 gramos", price: 15 },
  { id: 4, name: "Choripan", description: "pan de perro con adicion de dos porciones de chorizo", price: 10 }
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
