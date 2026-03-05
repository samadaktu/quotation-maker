import React from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { calculateLineTotal } from '../utils/calculations';
import { formatCurrency } from '../utils/formatters';
import { currencies } from '../data/currencies';
import './LineItems.css';

export default function LineItems({ items, currency, onAdd, onUpdate, onRemove }) {
  const currencySymbol = currencies.find(c => c.code === currency)?.symbol || '$';

  return (
    <div className="form-section">
      <div className="section-header">
        <h2 className="section-title">Line Items</h2>
        <p className="section-desc">Products or services in this quotation</p>
      </div>
      <div className="section-body line-items-body">
        <div className="line-items-table">
          <div className="table-header">
            <span>Description</span>
            <span>Qty</span>
            <span>Unit Price</span>
            <span>Tax %</span>
            <span>Discount</span>
            <span>Total</span>
            <span></span>
          </div>
            {items.map((item, idx) => (
            <div key={item.id} className={`table-row ${idx % 2 === 1 ? 'alt-row' : ''}`}>
              <div className="cell-desc" data-label="Description">
                <input
                  type="text"
                  value={item.description}
                  onChange={e => onUpdate(item.id, 'description', e.target.value)}
                  placeholder="Item description..."
                />
              </div>
              <div className="cell-qty" data-label="Qty">
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={e => onUpdate(item.id, 'quantity', e.target.value)}
                />
              </div>
              <div className="cell-price" data-label="Unit Price">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.unitPrice}
                  onChange={e => onUpdate(item.id, 'unitPrice', e.target.value)}
                />
              </div>
              <div className="cell-tax" data-label="Tax %">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={item.taxRate}
                  onChange={e => onUpdate(item.id, 'taxRate', e.target.value)}
                />
              </div>
              <div className="cell-discount" data-label="Discount">
                <div className="discount-input">
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.discount}
                    onChange={e => onUpdate(item.id, 'discount', e.target.value)}
                  />
                  <select
                    value={item.discountType}
                    onChange={e => onUpdate(item.id, 'discountType', e.target.value)}
                    className="discount-type"
                  >
                    <option value="percent">%</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </div>
              </div>
              <div className="cell-total" data-label="Total">
                {formatCurrency(calculateLineTotal(item), currencySymbol)}
              </div>
              <div className="cell-action">
                <button className="delete-row-btn" onClick={() => onRemove(item.id)} title="Remove row">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="add-item-btn" onClick={onAdd}>
          <FiPlus /> Add Item
        </button>
      </div>
    </div>
  );
}
