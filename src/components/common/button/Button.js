import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './button.module.css';

const propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  btnType: PropTypes.string.isRequired,
};

const defaultProps = {
  disabled: false,
};

// create constant for button types
// usage would be <Button.Add {...props} />
const TYPES = {
  ADD: 'btn-add',
  DELETE: 'btn-delete',
};

const BaseButton = ({ text, onClick, disabled, btnType }) => {
  const btnClass = classnames(styles.btn, styles[`${btnType}`]); // concatenating different button styles

  return (
    <button
      type="button" // cant be a prop
      disabled={disabled}
      onClick={onClick}
      className={btnClass}
    >
      {text}
    </button>
  );
};

BaseButton.propTypes = propTypes;
BaseButton.defaultProps = defaultProps;

// exporting both ADD and DELETE buttons
export const Add = props => <BaseButton {...props} btnType={TYPES.ADD} />;

export const Delete = props => <BaseButton {...props} btnType={TYPES.DELETE} />;
