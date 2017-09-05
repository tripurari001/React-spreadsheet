import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './script/App';
import store from './script/store/ConfigStore';
import './style.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//hot module reloading settings 
if(module.hot) {
  module.hot.accept();
}