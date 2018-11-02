import React, { Fragment } from 'react';
import NumberFormat from 'react-number-format';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './number-input.module.css';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string, // name of field to change (like evt.target.name)
  value: PropTypes.string.isRequired, // value of input
  isCurrency: PropTypes.bool.isRequired,
  displayType: PropTypes.string, // text or input
  handleChange: PropTypes.func,
};

const defaultProps = {
  displayType: 'input',
};

const BaseNumInput = ({
  id,
  name,
  value,
  isCurrency,
  displayType,
  handleChange,
}) => {
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
      <span className={styles.brackets}>[</span>
      <NumberFormat
        {...optional}
        value={value}
        isNumericString
        className={inputClass}
        displayType={displayType}
        decimalScale={decimalScale}
        onValueChange={values => handleChange(id, name, values.value)} // values is obj and want just the `value`
      />
      <span className={styles.brackets}>]</span>
    </>
  );
};

BaseNumInput.propTypes = propTypes;
BaseNumInput.defaultProps = defaultProps;

// exporting both Currency and Quantity buttons
export const Currency = props => <BaseNumInput {...props} isCurrency />;

export const Quantity = props => <BaseNumInput {...props} isCurrency={false} />;
