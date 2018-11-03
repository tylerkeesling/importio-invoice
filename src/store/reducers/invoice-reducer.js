import {
  updateItem,
  deleteItem,
  updateObject,
  createReducer,
  generateNewItem,
} from './utils';

import {
  ADD_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
  DELETE_INVOICE_ITEM,
} from '../action-types/invoice-action-types';

const initialState = {
  data: [],
};

const actionHandlers = {
  [ADD_INVOICE_ITEM]: state =>
    updateObject(state, {
      data: [...state.data, generateNewItem()],
    }),
  [UPDATE_INVOICE_ITEM]: (state, { payload }) =>
    updateObject(state, {
      data: updateItem(state, payload),
    }),
  [DELETE_INVOICE_ITEM]: (state, { id }) =>
    updateObject(state, {
      data: deleteItem(state, id),
    }),
};

export default createReducer(initialState, actionHandlers);
