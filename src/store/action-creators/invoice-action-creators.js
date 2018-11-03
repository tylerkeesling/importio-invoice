import {
  ADD_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
  DELETE_INVOICE_ITEM,
} from '../action-types/invoice-action-types';

export function addInvoiceItem() {
  return {
    type: ADD_INVOICE_ITEM,
  };
}

export function updateInvoiceItem(payload) {
  return {
    type: UPDATE_INVOICE_ITEM,
    payload,
  };
}

export function deleteInvoiceItem(id) {
  return {
    type: DELETE_INVOICE_ITEM,
    id,
  };
}
