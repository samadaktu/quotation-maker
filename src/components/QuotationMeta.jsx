import React from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import './QuotationMeta.css';

const PAYMENT_TERMS = ['Due on Receipt', 'Net 15', 'Net 30', 'Net 45', 'Net 60', 'Custom'];

export default function QuotationMeta({ meta, onUpdate, onRegenerate }) {
  return (
    <div className="form-section">
      <div className="section-header">
        <h2 className="section-title">Quotation Details</h2>
        <p className="section-desc">Metadata and terms</p>
      </div>
      <div className="section-body">
        <div className="form-grid">
          <div className="form-group">
            <label>Quotation Number</label>
            <div className="input-with-action">
              <input type="text" value={meta.quotationNumber} onChange={e => onUpdate('quotationNumber', e.target.value)} />
              <button className="icon-btn" onClick={onRegenerate} title="Regenerate">
                <FiRefreshCw />
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Reference Number</label>
            <input type="text" value={meta.reference} onChange={e => onUpdate('reference', e.target.value)} placeholder="Optional" />
          </div>
          <div className="form-group">
            <label>Quotation Date</label>
            <input type="date" value={meta.date} onChange={e => onUpdate('date', e.target.value)} />
          </div>
          <div className="form-group">
            <label>Valid Until</label>
            <input type="date" value={meta.validUntil} onChange={e => onUpdate('validUntil', e.target.value)} />
          </div>
          <div className="form-group full-width">
            <label>Payment Terms</label>
            <select value={meta.paymentTerms} onChange={e => onUpdate('paymentTerms', e.target.value)}>
              {PAYMENT_TERMS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
