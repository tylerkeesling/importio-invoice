import {
  ADD_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
  DELETE_INVOICE_ITEM,
} from '../action-types/invoice-action-types';

export function addInvoiceItem(payload) {
  return {
    type: ADD_INVOICE_ITEM,
    payload,
  };
}

export function UpdateInvoiceItem(payload) {
  return {
    type: UPDATE_INVOICE_ITEM,
    payload,
  };
}

export function deleteInvoiceItem(payload) {
  return {
    type: DELETE_INVOICE_ITEM,
    payload,
  };
}
