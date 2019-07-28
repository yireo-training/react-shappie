import reducers from './reducers'
import { createStore } from 'redux'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState()
const middleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  reducers, 
  persistedState,
  middleware
)

store.subscribe(throttle(() => {
  saveState({
    itemsReducer: {
      items: store.getState().itemsReducer.items
    }
  });
}, 1000));

export default store;