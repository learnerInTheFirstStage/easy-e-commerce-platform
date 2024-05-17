export const cart = [];

export function addToCart(productId) {
  // 1. Check if the product is already in the cart
  let matchingItem;
     
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  
  // 2. If it is in the cart, increase the quantity
  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    // 3. Otherwise, add a new product in the cart
    cart.push({
    productId: productId,
    quantity: 1
    });
  }
}