import React from 'react';
import * as Button from './common/button/Button';
import * as NumberInput from './common/number-input/NumberInput';

import './app.css';

const App = () => (
  <div className="container">
    <div>This is invoice component</div>
    <div>This is total component</div>
    <Button.Add text="New Item" onClick={() => {}} />
    <Button.Delete onClick={() => {}} />
    <NumberInput.Quantity
      id="1"
      name="name"
      value="10000"
      handleChange={() => {}}
    />
    <NumberInput.Currency
      id="1"
      name="name"
      value="11129.01"
      handleChange={() => {}}
    />
    <NumberInput.Currency value={(10 * 20.05).toString()} />
  </div>
);

export default App;
