import { createReducer, updateObject } from './utils';

import {
  ADD_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
  DELETE_INVOICE_ITEM,
} from '../action-types/invoice-action-types';

const initialState = {
  data: [],
};

const actionHandlers = {
  [ADD_INVOICE_ITEM]: (state, action) =>
    updateObject(state, {
      data: [...state.data, action.payload],
    }),
};

export default createReducer(initialState, actionHandlers);
