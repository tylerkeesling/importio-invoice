import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import App from './components/App';

const initialState = {
  invoiceItems: [
    {
      id: '1',
      name: 'Widget',
      quantity: '2',
      price: '10.00',
    },
    {
      id: '2',
      name: 'Cog',
      quantity: '2',
      price: '15.99',
    },
    {
      id: '3',
      name: 'Wheel',
      quantity: '0',
      price: '23.499',
    },
  ],
};

const store = createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
