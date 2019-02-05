import React from 'react';
import ReactDOM from 'react-dom';

// Required for Redux store setup
import { Provider } from 'react-redux'
//import {Router,Route, Switch} from 'react-router'
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
