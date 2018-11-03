import React from 'react';
import PropTypes from 'prop-types';
import * as NumberInput from '../../common/number-input/NumberInput';

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
      <td className="total-name">{text}</td>
      <td className="total-money">
        <NumberInput.Currency displayType="text" value={value} />
      </td>
    </tr>
  );
};

TotalItem.propTypes = propTypes;
TotalItem.defaultProps = defaultProps;

export default TotalItem;
