// Función para mostrar los productos en el carrito
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  cartItemsContainer.innerHTML = '';
  cart.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>Precio: $${item.price}</p>
    `;
    cartItemsContainer.appendChild(cartItemElement);
  });

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalElement = document.createElement('p');
  totalElement.innerHTML = `<strong>Total: $${totalPrice}</strong>`;
  cartItemsContainer.appendChild(totalElement);
}

// Función para vaciar el carrito
function clearCart() {
  localStorage.removeItem('cart');
  displayCartItems();
}

displayCartItems();
