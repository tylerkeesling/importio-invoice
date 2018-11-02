import { combineReducers } from 'redux';

import invoiceReducer from './invoice-reducer';

export default combineReducers({
  invoiceItems: invoiceReducer,
});
