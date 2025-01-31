
export const ADD = (item) => {
  return {
    type: 'ADD_CART',
    payload: item
  }
}


//remove
export const REMOVE = (id) => {
  return {
    type: 'REMOVE_CART',
    payload: id
  }
}

