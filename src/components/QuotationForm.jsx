import React from 'react';
import CompanyDetails from './CompanyDetails';
import ClientDetails from './ClientDetails';
import QuotationMeta from './QuotationMeta';
import LineItems from './LineItems';
import BankDetails from './BankDetails';
import CurrencySelector from './CurrencySelector';
import PDFDownload from './PDFDownload';
import './QuotationForm.css';

export default function QuotationForm({
  data,
  updateCompany, updateClient, updateMeta,
  updateCurrency, updateNotes, updateTerms,
  updateBank, updateSignature,
  addItem, updateItem, removeItem,
  regenerateQuotationNumber,
}) {
  return (
    <div className="quotation-form">
      <CompanyDetails company={data.company} onChange={updateCompany} />
      <ClientDetails client={data.client} onChange={updateClient} />
      <QuotationMeta meta={data.meta} onUpdate={updateMeta} onRegenerate={regenerateQuotationNumber} />
      <LineItems
        items={data.items}
        currency={data.currency}
        onAdd={addItem}
        onUpdate={updateItem}
        onRemove={removeItem}
      />

      <div className="form-section">
        <div className="section-header">
          <h2 className="section-title">Currency &amp; Summary</h2>
          <p className="section-desc">Set currency for this quotation</p>
        </div>
        <div className="section-body">
          <CurrencySelector value={data.currency} onChange={updateCurrency} />
        </div>
      </div>

      <div className="form-section">
        <div className="section-header">
          <h2 className="section-title">Notes</h2>
          <p className="section-desc">Additional remarks for the client</p>
        </div>
        <div className="section-body">
          <textarea
            value={data.notes}
            onChange={e => updateNotes(e.target.value)}
            rows={4}
            placeholder="Thank you for your business..."
          />
        </div>
      </div>

      <div className="form-section">
        <div className="section-header">
          <h2 className="section-title">Terms &amp; Conditions</h2>
          <p className="section-desc">Legal terms for this quotation</p>
        </div>
        <div className="section-body">
          <textarea
            value={data.terms}
            onChange={e => updateTerms(e.target.value)}
            rows={6}
          />
        </div>
      </div>

      <BankDetails bank={data.bank} onChange={updateBank} />

      <div className="form-actions">
        <PDFDownload />
      </div>
    </div>
  );
}
