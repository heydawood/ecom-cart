
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

//remove single item

export const REMOVE_ITEM = (item) => {
  return {
    type: 'REMOVE_ITEM',
    payload: item
  }
}