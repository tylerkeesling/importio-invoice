import React from 'react';
import PropTypes from 'prop-types';
import TotalItem from './total-item';
import { calcTax, calcTotal, calcSubtotal } from './helpers';

import styles from './total.module.css';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
    })
  ),
};

const TotalComponent = ({ data }) => {
  const taxRate = 0.05;
  const subtotal = calcSubtotal(data);
  const tax = calcTax(subtotal, taxRate);
  const total = calcTotal(subtotal, tax);
  return (
    <div className={styles.container}>
      <table className={styles['total-table']}>
        <tbody>
          <TotalItem text="Subtotal" value={subtotal} />
          <TotalItem text="Tax (5%)" value={tax} />
          <TotalItem text="Total" value={total} />
        </tbody>
      </table>
    </div>
  );
};

TotalComponent.propTypes = propTypes;

export default TotalComponent;
