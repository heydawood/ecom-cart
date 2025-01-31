const INIT_STATE = {
  carts: []
}


const cartReducer = (state = INIT_STATE, action) => {

  switch (action.type) {

    case 'ADD_CART':

      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const newItem = {...action.payload, qnty: 1 }
        return {
          ...state,
          carts: [...state.carts, newItem]
        }
      }


    case 'REMOVE_CART':
      const removeItem = state.carts.filter((e) => (e.id !== action.payload))

      return {
        ...state,
        carts: removeItem
      }


    case 'REMOVE_ITEM':
    const itemIdx = state.carts.findIndex((item) => item.id === action.payload.id);
    if (state.carts[itemIdx].qnty >= 1){
      const deleteItem = state.carts[itemIdx].qnty -= 1
      console.log([...state.carts, deleteItem]);

      return{
        ...state,
        carts: [...state.carts]
      }

    }else if(state.carts[itemIdx].qnty === 1){
      const removeItem = state.carts.filter((e) => (e.id !== action.payload))

      return {
        ...state,
        carts: removeItem
      }
    }



    default:
      return state
  }
}

export default cartReducer
