import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InvoiceComponent from './InvoiceComponent';
import { invoiceActionCreators as creators } from '../../store/action-creators';

const propTypes = {
  addInvoiceItem: PropTypes.func.isRequired,
  updateInvoiceItem: PropTypes.func.isRequired,
  deleteInvoiceItem: PropTypes.func.isRequired,
};
const defaultProps = {};

const InvoiceContainer = props => <InvoiceComponent {...props} />;

InvoiceContainer.propTypes = propTypes;
InvoiceContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
  return state.invoiceItems;
}

function mapDispatchToProps(dispatch) {
  return {
    addInvoiceItem() {
      dispatch(creators.addInvoiceItem());
    },
    updateInvoiceItem(item) {
      dispatch(creators.updateInvoiceItem(item));
    },
    deleteInvoiceItem(id) {
      dispatch(creators.deleteInvoiceItem(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceContainer);
