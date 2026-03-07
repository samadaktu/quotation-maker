import React from 'react';
import { calculateTotals, calculateLineTotal } from '../utils/calculations';
import { formatCurrency, formatDate } from '../utils/formatters';
import { currencies } from '../data/currencies';
import './QuotationPreview.css';

export default function QuotationPreview({ data }) {
  const { company, client, meta, items, currency, notes, terms, bank } = data;
  const currencyObj = currencies.find(c => c.code === currency) || currencies[0];
  const sym = currencyObj.symbol;
  const totals = calculateTotals(items);

  return (
    <div className="preview-wrapper">
      <div className="preview-document" id="quotation-preview">
        <div className="preview-header">
          <div className="preview-header-left">
            {company.logo ? (
              <img src={company.logo} alt="Logo" className="preview-logo" />
            ) : (
              <div className="preview-company-initial">
                {company.name ? company.name[0].toUpperCase() : 'C'}
              </div>
            )}
            <div className="preview-company-info">
              <h1 className="preview-company-name">{company.name || 'Your Company'}</h1>
              {company.street && <p>{company.street}</p>}
              {(company.city || company.state) && (
                <p>{[company.city, company.state, company.zip].filter(Boolean).join(', ')}</p>
              )}
              {company.country && <p>{company.country}</p>}
              {company.phone && <p>{company.phone}</p>}
              {company.email && <p>{company.email}</p>}
              {company.website && <p>{company.website}</p>}
              {company.taxId && <p className="tax-id">{company.taxId}</p>}
            </div>
          </div>
          <div className="preview-header-right">
            <div className="quotation-badge">QUOTATION</div>
            <div className="quotation-number">#{meta.quotationNumber}</div>
          </div>
        </div>

        <div className="preview-meta-bar">
          <div className="meta-item">
            <span className="meta-label">Date</span>
            <span className="meta-value">{formatDate(meta.date)}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Valid Until</span>
            <span className="meta-value">{formatDate(meta.validUntil)}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Payment Terms</span>
            <span className="meta-value">{meta.paymentTerms}</span>
          </div>
          {meta.reference && (
            <div className="meta-item">
              <span className="meta-label">Reference</span>
              <span className="meta-value">{meta.reference}</span>
            </div>
          )}
        </div>

        <div className="preview-bill-section">
          <div className="bill-to">
            <h3 className="bill-label">BILL TO</h3>
            <p className="bill-company">{client.companyName || 'Client Company'}</p>
            {client.contactName && <p>{client.contactName}</p>}
            {client.street && <p>{client.street}</p>}
            {(client.city || client.state) && (
              <p>{[client.city, client.state, client.zip].filter(Boolean).join(', ')}</p>
            )}
            {client.country && <p>{client.country}</p>}
            {client.phone && <p>{client.phone}</p>}
            {client.email && <p>{client.email}</p>}
          </div>
        </div>

        <table className="preview-table">
          <thead>
            <tr>
              <th className="th-desc">Description</th>
              <th className="th-num">Qty</th>
              <th className="th-num">Unit Price</th>
              <th className="th-num">Tax</th>
              <th className="th-num">Discount</th>
              <th className="th-num">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={item.id} className={idx % 2 === 1 ? 'alt-row' : ''}>
                <td className="td-desc">{item.description || '—'}</td>
                <td className="td-num">{item.quantity}</td>
                <td className="td-num">{formatCurrency(item.unitPrice, sym)}</td>
                <td className="td-num">{item.taxRate}%</td>
                <td className="td-num">
                  {item.discount}{item.discountType === 'percent' ? '%' : ` ${sym}`}
                </td>
                <td className="td-num td-total">{formatCurrency(calculateLineTotal(item), sym)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="preview-totals">
          <div className="totals-table">
            <div className="totals-row">
              <span>Subtotal</span>
              <span>{formatCurrency(totals.subtotal, sym)}</span>
            </div>
            {totals.totalDiscount > 0 && (
              <div className="totals-row discount-row">
                <span>Discount</span>
                <span>- {formatCurrency(totals.totalDiscount, sym)}</span>
              </div>
            )}
            {totals.totalTax > 0 && (
              <div className="totals-row">
                <span>Tax</span>
                <span>+ {formatCurrency(totals.totalTax, sym)}</span>
              </div>
            )}
            <div className="totals-row grand-total-row">
              <span>Grand Total</span>
              <span className="grand-total-amount">
                {formatCurrency(totals.grandTotal, sym)}
              </span>
            </div>
          </div>
        </div>

        {notes && (
          <div className="preview-section">
            <h4 className="preview-section-title">Notes</h4>
            <p className="preview-notes">{notes}</p>
          </div>
        )}

        {bank.bankName && (
          <div className="preview-section preview-bank">
            <h4 className="preview-section-title">Bank Details</h4>
            <div className="bank-grid">
              {bank.accountHolder && <div><span className="bank-label">Account Holder</span><span>{bank.accountHolder}</span></div>}
              {bank.bankName && <div><span className="bank-label">Bank</span><span>{bank.bankName}</span></div>}
              {bank.accountNumber && <div><span className="bank-label">Account Number</span><span>{bank.accountNumber}</span></div>}
              {bank.ifscSwift && <div><span className="bank-label">IFSC/SWIFT</span><span>{bank.ifscSwift}</span></div>}
              {bank.branch && <div><span className="bank-label">Branch</span><span>{bank.branch}</span></div>}
            </div>
          </div>
        )}

        {terms && (
          <div className="preview-section preview-terms">
            <h4 className="preview-section-title">Terms &amp; Conditions</h4>
            <p className="preview-terms-text">{terms}</p>
          </div>
        )}

        <div className="preview-footer">
          <div className="preview-footer-divider"></div>
          <p>
            {company.name} | {company.email} | {company.phone} | {company.website}
          </p>
          <p className="footer-generated">Generated with QuoteCraft</p>
        </div>
      </div>
    </div>
  );
}
