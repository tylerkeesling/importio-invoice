/* Wrapper component for standard HTML input
 *
*/

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './input.module.css';

const propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const defaultProps = {
  type: 'text',
};

const Input = ({ id, value, field, type, handleChange }) => {
  const classNames = classnames({
    [styles.input]: true,
    [styles.adjustFontSize]: value.length > 14, // hacky way to adjust font size for overflow
  });

  return (
    <input
      id={id}
      type={type}
      name={field}
      value={value}
      className={classNames}
      onChange={evt =>
        handleChange({
          id: evt.target.id,
          field: evt.target.name,
          value: evt.target.value,
        })
      }
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
