const initialState = {
  items: [],
  token: {},
  logged: false,
}

const reducer = (state, action) => {

const {payload} = action;

  switch (action.type) {
    case 'ADD_TO_CART' : 
      const index = state.items.findIndex(c => c.name === action.payload.name);
      let items = state.items;
      
      if(index === -1) {
        items = [...state.items, payload];
      } else {
        items = state.items.map(item => 
            items.name === payload.name 
            ? {...item, quantity: payload.quantity} 
            : item
        );
      };
      return {
        ...state,
        items:items,
    }

    case 'CHICKEN_TO_CART' :
      const indexChicken = state.items.findIndex(c => c.name === action.payload.name);
      let itemChicken = state.items;

      if(indexChicken === -1) {
        payload.status = true
        itemChicken = [...state.items, payload]
      } 
      return {
        ...state,
        items: itemChicken,
    }

    case 'REMOVE_PRODUCT' :
      let item = state.items
      item.splice(action.payload.index, 1)
    return {
      ...state,
      items: [...item],
    }

    case 'MODAL_TO_CART' :
      let indexModal = state.items.findIndex(c => c.name === action.payload.name);
      let itemModal = state.items

      if(indexModal === -1) {
        payload.status = true
        itemModal = [...state.items, payload]
      } 
    return {
      ...state,
      items: [...itemModal],
    }

    case 'Combo_TO_CART':
      let indexCombo = state.items.findIndex(c => c.name === action.payload.name);
      let itemCombo = state.items
      if(indexCombo === -1) {
        payload.status = true
        itemCombo = [...state.items, payload]
      } 
    return {
      ...state,
      items: [...itemCombo]
    }

    case 'Token_To_Generate':
      let temp = action.payload
    return {
      ...state,
      token: temp,
      logged: true
    }

    case 'REMOVE_TOKEN':
      let tempToken = {}
    return {
      ...state,
      token:tempToken,
      logged: false
    }
     
    default: return state || initialState
  }
}
export default reducer;