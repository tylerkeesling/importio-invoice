import React from 'react';
import * as Button from './common/button/Button';
import * as NumberInput from './common/number-input/NumberInput';
import InvoiceContainer from './invoice';

import './app.css';

const App = () => (
  <div className="container">
    <div>This is total component</div>

    <NumberInput.Quantity
      id="1"
      name="quantity"
      value="10000"
      handleChange={() => { }}
    />
    <NumberInput.Currency
      id="1"
      name="price"
      value="11129.01"
      handleChange={() => { }}
    />
    <NumberInput.Currency value={(10 * 20.05).toString()} />

    <InvoiceContainer />
  </div>
);

export default App;
