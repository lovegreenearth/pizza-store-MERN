import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/redux/reducer/index'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENDION__&&
  window.__REDUX_DEVTOOLS_EXTENDION__()
)

render (
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)

reportWebVitals();
