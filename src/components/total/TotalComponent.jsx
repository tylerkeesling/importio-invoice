import React from 'react';
import PropTypes from 'prop-types';
import TotalItem from './total-item';

import styles from './total.module.css';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
    })
  ),
};

const TotalComponent = ({ data }) => (
  <div className={styles.container}>
    <table>
      <tbody>
        {data.map(item => (
          <TotalItem {...item} text="hi" key={item.id} />
        ))}
      </tbody>
    </table>
  </div>
);

TotalComponent.propTypes = propTypes;

export default TotalComponent;
