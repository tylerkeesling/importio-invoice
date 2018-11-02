import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './input.module.css';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, // name of field to change (like evt.target.name)
  value: PropTypes.string.isRequired, // value of input
  handleChange: PropTypes.func.isRequired,
};

const defaultProps = {
  displayType: 'input',
};

const Input = ({ id, name, value, isCurrency, displayType, handleChange }) => {
  let decimalScale = 0; // set initial allowance for decimals to 0
  const optional = {}; // initialize optional object for props

  if (isCurrency) {
    // optional library props
    decimalScale = 2; // max amount of decimals
    optional.fixedDecimalScale = true; // force the decimalScale, so in this case always have 2
    optional.thousandSeparator = true; // have a delimiter in the thousands place
    optional.prefix = '$ '; // prefix input with given string
  }

  // classNames based on type of input
  const inputClass = classnames({
    [styles.numInput]: true,
    [styles.currency]: isCurrency,
    [styles.quantity]: !isCurrency,
    [styles.adjustCurrency]: value.length > 8 && isCurrency, // hacky way to adjust font size for overflow
    [styles.adjustQuantity]: value.length > 4 && !isCurrency,
  });

  return (
    <>
      <input
        {...optional}
        value={value}
        className={inputClass}
        onChange={evt => handleChange(evt)}
      />
    </>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
