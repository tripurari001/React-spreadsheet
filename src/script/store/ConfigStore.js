import { createStore } from 'redux';
import RootReducer from '../reducers/RootReducer';
import initialStore from './InitialStore';

const store = createStore(RootReducer, initialStore,
  // for redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
