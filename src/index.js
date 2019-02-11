import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import itemApp from './reducers'
import { createStore } from 'redux'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState()
const store = createStore(itemApp, persistedState)

store.subscribe(throttle(() => {
  saveState({
    itemsReducer: {
      items: store.getState().itemsReducer.items
    }
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

//serviceWorker.unregister();
