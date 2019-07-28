import { combineReducers } from 'redux'
import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM
} from './actions'

function itemsReducer(state, action) {
  if (typeof state === 'undefined') {
    return {
      items: []
    }
  }

  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case ADD_ITEM:
      let item = action.item;
      newState.items.push(item)
      return { ...newState }

    case UPDATE_ITEM:
        if (action.item) {
          newState.items.map((item, index) => {
            if (item.id === action.item.id) {
              item.value = action.item.value;
              newState.items[index] = item;
            }
            return item;
          });
        }

      return newState;

    case REMOVE_ITEM:
      newState.items.map((item, index) => {
        if (item.id === action.itemId) {
          newState.items.splice(index, 1);
        }
        return item;
      })
      return newState

    default:
      return state
  }
}

const combinedReducers = combineReducers({
  itemsReducer: itemsReducer
})

export default combinedReducers
