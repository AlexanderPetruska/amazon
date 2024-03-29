export let Cart = JSON.parse(localStorage.getItem("cart"));

if (!Cart) {
  Cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionsId: "1",
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionsId: "2",
    },
  ];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(Cart));
}

export function addToCart(productId) {
  let matchingItem;

  Cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    Cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionsId: "1",
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];
  Cart.forEach((cardItem) => {
    if (cardItem.productId !== productId) {
      newCart.push(cardItem);
    }
  });

  Cart = newCart;
  saveToStorage();
}
