export function calculateLineTotal(item) {
  const qty = parseFloat(item.quantity) || 0;
  const price = parseFloat(item.unitPrice) || 0;
  const taxRate = parseFloat(item.taxRate) || 0;
  const discountValue = parseFloat(item.discount) || 0;
  const isPercentDiscount = item.discountType === 'percent';

  const baseAmount = qty * price;
  const discountAmount = isPercentDiscount
    ? baseAmount * (discountValue / 100)
    : discountValue;
  const afterDiscount = baseAmount - discountAmount;
  const taxAmount = afterDiscount * (taxRate / 100);
  return afterDiscount + taxAmount;
}

export function calculateTotals(items) {
  let subtotal = 0;
  let totalDiscount = 0;
  let totalTax = 0;

  items.forEach(item => {
    const qty = parseFloat(item.quantity) || 0;
    const price = parseFloat(item.unitPrice) || 0;
    const taxRate = parseFloat(item.taxRate) || 0;
    const discountValue = parseFloat(item.discount) || 0;
    const isPercentDiscount = item.discountType === 'percent';

    const baseAmount = qty * price;
    const discountAmount = isPercentDiscount
      ? baseAmount * (discountValue / 100)
      : discountValue;
    const afterDiscount = baseAmount - discountAmount;
    const taxAmount = afterDiscount * (taxRate / 100);

    subtotal += baseAmount;
    totalDiscount += discountAmount;
    totalTax += taxAmount;
  });

  const grandTotal = subtotal - totalDiscount + totalTax;
  return { subtotal, totalDiscount, totalTax, grandTotal };
}
