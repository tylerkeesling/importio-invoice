import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/text-input';
import * as NumberInput from '../../common/number-input/NumberInput';
import * as Button from '../../common/button/Button';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleUpdateItem: PropTypes.func.isRequired,
};

const LineItem = props => {
  const {
    id,
    name,
    price,
    quantity,
    handleDeleteItem,
    handleUpdateItem,
  } = props;
  return (
    <tr>
      <td className="item-name">
        <Input
          id={id}
          field="name"
          value={name}
          handleChange={item => handleUpdateItem(item)}
        />
      </td>
      <td className="item-quantity">
        <NumberInput.Quantity
          id={id}
          field="quantity"
          value={quantity}
          handleChange={item => handleUpdateItem(item)}
        />
      </td>
      <td className="item-price">
        <NumberInput.Currency
          id={id}
          field="price"
          value={price}
          handleChange={item => handleUpdateItem(item)}
        />
      </td>
      <td className="item-total">
        <NumberInput.Currency
          id={id}
          // field="total"
          value={(price * quantity).toFixed(2).toString()}
        />
      </td>
      <td className="item-button">
        <Button.Delete onClick={() => handleDeleteItem(id)} />
      </td>
    </tr>
  );
};

LineItem.propTypes = propTypes;

export default LineItem;
