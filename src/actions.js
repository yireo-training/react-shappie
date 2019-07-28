import Product from './Product'

export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

/**
 * Add a new item
 * 
 * @param string value 
 */
export const addItem = value => {
  return { type: ADD_ITEM, item: new Product(value) }
}

/**
 * Update all existing items
 * 
 * @param string[] values 
 */
export const updateItem = item => {
  if (item === undefined) {
    return false
  }

  return { type: UPDATE_ITEM, item: item }
}

/**
 * Remove an existing item by its ID
 * 
 * @param string itemId 
 */
export const removeItem = itemId => (
  { type: REMOVE_ITEM, itemId: itemId }
)
