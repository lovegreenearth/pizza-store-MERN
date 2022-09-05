const initialState = {
  items: []
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
        items:items,
      }

    case 'CHICKEN_TO_CART' :
      const indexChicken = state.items.findIndex(c => c.name === action.payload.name);
      let itemChicken = state.items;

      if(indexChicken === -1) {
        itemChicken = [...state.items, payload]
      } 
      return {
        items: itemChicken,
      }
     
    default: return state || initialState
  }
}
export default reducer;