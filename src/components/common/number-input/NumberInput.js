import React from 'react';
import NumberFormat from 'react-number-format';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './number-input.module.css';

const propTypes = {
  id: PropTypes.string, // unique id of the object
  field: PropTypes.string, // name of field to change (like evt.target.name)
  value: PropTypes.string.isRequired, // value of input
  isCurrency: PropTypes.bool.isRequired, // if true, apply currency mask
  hasBrackets: PropTypes.bool, // display brackets around text
  displayType: PropTypes.string, // text or input
  handleChange: PropTypes.func, // onChange callback
};

const defaultProps = {
  hasBrackets: true,
  displayType: 'input',
  handleChange: () => {},
};

const BaseNumInput = ({
  id,
  field,
  value,
  isCurrency,
  hasBrackets,
  displayType,
  handleChange,
}) => {
  const optional = {}; // initialize optional object for props
  let decimalScale = 0; // set initial allowance for decimals to 0

  if (isCurrency) {
    // optional library props
    decimalScale = 2; // max amount of decimals
    optional.prefix = '$ '; // prefix input with given string
    optional.fixedDecimalScale = true; // force the decimalScale, so in this case always have 2
    optional.thousandSeparator = true; // have a delimiter in the thousands place
  }

  // classNames based on type of input
  const classNames = classnames({
    [styles.numInput]: true,
    [styles.currency]: isCurrency, // apply css for currency
    [styles.quantity]: !isCurrency, // apply css for just numbers
    [styles.editable]: displayType !== 'text', // remove editable looking css for number text boxes
    [styles.adjustCurrency]: value.length > 8 && isCurrency, // hacky way to adjust font size for overflow
    [styles.adjustQuantity]: value.length > 4 && !isCurrency,
  });

  return (
    <>
      {hasBrackets ? <span className={styles.brackets}>[</span> : null}
      <NumberFormat
        {...optional}
        value={value}
        isNumericString
        className={classNames}
        displayType={displayType}
        decimalScale={decimalScale}
        onValueChange={
          values => handleChange({ id, field, value: values.value }) // values is obj and want just the `value`
        }
      />
      {hasBrackets ? <span className={styles.brackets}>]</span> : null}
    </>
  );
};

BaseNumInput.propTypes = propTypes;
BaseNumInput.defaultProps = defaultProps;

// exporting both Currency and Quantity fields
export const Currency = props => <BaseNumInput {...props} isCurrency />;

export const Quantity = props => <BaseNumInput {...props} isCurrency={false} />;
