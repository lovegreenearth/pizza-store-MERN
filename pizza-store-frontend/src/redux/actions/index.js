export function addToCart(addPizza) {
  return {
    type: 'ADD_TO_CART',
    payload: addPizza,
  }
}

export function addToChicken(newChicken) {
  return {
    type: 'CHICKEN_TO_CART',
    payload: newChicken,
  }
}

export function removeToProduct(removeProduct) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: removeProduct,
  }
}

export function modalToCart(newModal) {
  return {
    type: 'MODAL_TO_CART',
    payload: newModal,
  }
}

export function addToCombo(addCombo) {
  return {
    type: 'Combo_TO_CART',
    payload: addCombo,
  }
}

export function tokenGenerate(token) {
  return {
    type: 'Token_To_Generate',
    payload: token,
  }
}

export function logOut(items) {
  return {
    type: 'REMOVE_TOKEN',
    payload: items,
  }
}

