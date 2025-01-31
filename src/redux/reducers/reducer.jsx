const INIT_STATE = {
    carts: []
}


const cartReducer = (state = INIT_STATE , action) => {

  switch(action.type){

    case 'ADD_CART' :
        return{
            ...state,
            carts:[...state.carts, action.payload]
        }

    case 'REMOVE_CART':
    const removeItem = state.carts.filter((e)=>(e.id !== action.payload))

      return{
        ...state,
        carts: removeItem
      }
      
        default :
            return state
  }
}

export default cartReducer
