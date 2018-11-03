import React from 'react';
import InvoiceContainer from './invoice';
import TotalContainer from './total';

import './app.css';

const App = () => (
  <div className="container">
    <div>This is total component</div>
    <InvoiceContainer />
  </div>
);

export default App;
