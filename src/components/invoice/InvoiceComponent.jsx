import React from 'react';
import PropTypes from 'prop-types';
import LineItem from './line-item';
import * as Button from '../common/button/Button';
import TotalContainer from '../total/TotalContainer';

import styles from './invoice.module.css';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
    })
  ),
  addInvoiceItem: PropTypes.func.isRequired,
  updateInvoiceItem: PropTypes.func.isRequired,
  deleteInvoiceItem: PropTypes.func.isRequired,
};

const InvoiceComponent = ({
  data,
  addInvoiceItem,
  updateInvoiceItem,
  deleteInvoiceItem,
}) => {
  const headers = ['Item', 'Qty', 'Price', 'Total'];
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <LineItem
              {...item}
              key={item.id}
              handleUpdateItem={updateInvoiceItem}
              handleDeleteItem={deleteInvoiceItem}
            />
          ))}
        </tbody>
      </table>
      <Button.Add text="Add New Item" onClick={() => addInvoiceItem()} />
      <TotalContainer />
    </div>
  );
};

InvoiceComponent.propTypes = propTypes;

export default InvoiceComponent;
