import {
  createReducer,
  updateObject,
  generateNewItem,
  updateItem,
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
  [UPDATE_INVOICE_ITEM]: (state, action) =>
    updateObject(state, {
      data: updateItem(state.data, action.payload),
    }),
  [DELETE_INVOICE_ITEM]: (state, { id }) => {
    console.log(id);
    console.log(state.data.filter(item => id !== item.id));

    return updateObject(state, {
      data: state.data.filter(item => id !== item.id),
    });
  },
};

export default createReducer(initialState, actionHandlers);
