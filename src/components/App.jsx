import React from 'react';
import InvoiceContainer from './invoice';
import TotalContainer from './total';

import styles from './app.module.css';

const App = () => (
  <div className={styles.container}>
    <div className={styles['invoice-table']}>
      <h1>Hi mom and dad!</h1>
      <InvoiceContainer />
      <TotalContainer />
    </div>
  </div>
);

export default App;
