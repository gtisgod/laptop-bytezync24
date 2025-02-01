function addToCart(productName, productPrice) {
  // Retrieve the current cart from localStorage, or create an empty array if none exists
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Create a new product object with name and price
  const product = { name: productName, price: productPrice };

  // Add the new product to the cart array
  cart.push(product);

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Optional: Notify the user that the item has been added
  alert(`${productName} has been added to your cart.`);
}
