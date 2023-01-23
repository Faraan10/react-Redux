import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App1';

import {createStore} from 'redux'
import allReducers from './reducers'
import {Provider} from 'react-redux'

const store=createStore(allReducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App1/>
  </Provider>
);
