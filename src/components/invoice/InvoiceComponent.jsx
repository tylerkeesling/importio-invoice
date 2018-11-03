import React from 'react';
import PropTypes from 'prop-types';
import * as Button from '../common/button/Button';
import * as NumberInput from '../common/number-input/NumberInput';
import Input from '../common/text-input';

const propTypes = {
  invoiceItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
    })
  ),
  addInvoiceItem: PropTypes.func.isRequired,
  updateInvoiceItem: PropTypes.func.isRequired,
  deleteInvoiceItem: PropTypes.func.isRequired,
};

const InvoiceComponent = ({
  invoiceItems,
  addInvoiceItem,
  updateInvoiceItem,
  deleteInvoiceItem,
}) => {
  // some text
  const someVar = 'This is Invoice';
  return (
    <div>
      <h1>{someVar}</h1>
      <Button.Add text="New Item" onClick={() => addInvoiceItem()} />
      <Button.Delete onClick={id => deleteInvoiceItem(id)} />
      <Input
        id="1"
        field="name"
        value="Widget"
        handleChange={item => updateInvoiceItem(item)}
      />
      <NumberInput.Quantity
        id="1"
        field="quantity"
        value="10000"
        handleChange={item => updateInvoiceItem(item)}
      />
      <NumberInput.Currency
        id="1"
        field="price"
        value="11129.01"
        handleChange={item => updateInvoiceItem(item)}
      />
    </div>
  );
};

InvoiceComponent.propTypes = propTypes;

export default InvoiceComponent;
