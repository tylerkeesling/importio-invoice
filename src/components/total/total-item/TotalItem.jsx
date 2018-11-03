import React from 'react';
import PropTypes from 'prop-types';
import * as NumberInput from '../../common/number-input/NumberInput';

import styles from './total-item.module.css';

const propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
};

const defaultProps = {
  value: '0.00',
};

const TotalItem = props => {
  const { text, value } = props;
  return (
    <tr>
      <td className={styles['total-text']}>{text}</td>
      <td className={styles['total-currency']}>
        <NumberInput.Currency
          hasBrackets={false}
          displayType="text"
          value={value}
        />
      </td>
    </tr>
  );
};

TotalItem.propTypes = propTypes;
TotalItem.defaultProps = defaultProps;

export default TotalItem;
