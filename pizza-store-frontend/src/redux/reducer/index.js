const initialState = {
  add: false,
  items: []
}

const reducer = (state, action) => {

const {payload} = action;

  switch (action.type) {
    case 'ADD_TO_CART' : 
      const index = state.items.findIndex(c => c.name === action.payload.name);
      let items;
      console.log("index -----> ", index)
      
      if(index === -1) 
        {items = [state.items, payload];
        console.log("items -----> ", items)}
      else {items = state.items.map
          (item => 
            items.name === payload.name 
                ? {...item, quantity: payload.quantity} 
                : item);
          console.log("items.name---> ", items.name)   };
      return {
        add: true, 
        items,
      }
    // case 'CHECK_OUT': 
    //   return { 
    //     count: 0 
    //   }
    default: return state || initialState
  }
}
export default reducer;