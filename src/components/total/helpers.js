function calcTax(subtotal, taxRate) {
  return (subtotal * taxRate).toFixed(2).toString();
}

function calcTotal(subtotal, tax) {
  return (1 * subtotal + 1 * tax).toFixed(2).toString();
}

function calcSubtotal(data) {
  const subtotal = data.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return subtotal.toFixed(2).toString();
}

export { calcTax, calcTotal, calcSubtotal };
