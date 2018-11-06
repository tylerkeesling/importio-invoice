import React from 'react';
import InvoiceContainer from './invoice';
import TotalContainer from './total';

import styles from './app.module.css';

const App = () => (
  <div className={styles.container}>
    <div className={styles['invoice-table']}>
      <InvoiceContainer />
      <TotalContainer />
    </div>
  </div>
);

export default App;
