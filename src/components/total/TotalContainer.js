import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TotalComponent from './TotalComponent';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
    })
  ),
};

const TotalContainer = props => <TotalComponent {...props} />;

TotalContainer.propTypes = propTypes;

function mapStateToProps(state) {
  return state.invoiceItems;
}

export default connect(
  mapStateToProps,
  null
)(TotalContainer);
