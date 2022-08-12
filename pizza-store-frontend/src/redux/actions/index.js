export function addToCart(addPizza) {
  return {
    type: 'ADD_TO_CART',
    payload: addPizza,
  }
}
