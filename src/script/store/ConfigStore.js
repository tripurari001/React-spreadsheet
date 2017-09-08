import { createStore } from 'redux';
import RootReducer from '../reducers/RootReducer';
import initialStore from './InitialStore';
import { lsTest } from '../util/watch';

let savedStore = initialStore;

if (lsTest() && localStorage.getItem('state')) {
  savedStore = JSON.parse(localStorage.getItem('state')) || initialStore;
}

const store = createStore(RootReducer, savedStore,
  // for redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
