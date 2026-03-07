import React from 'react';
import './BankDetails.css';

export default function BankDetails({ bank, onChange }) {
  return (
    <div className="form-section">
      <div className="section-header">
        <h2 className="section-title">Bank Details</h2>
        <p className="section-desc">Payment account information</p>
      </div>
      <div className="section-body">
        <div className="form-grid">
          <div className="form-group">
            <label>Account Holder</label>
            <input type="text" value={bank.accountHolder} onChange={e => onChange('accountHolder', e.target.value)} placeholder="Account Holder Name" />
          </div>
          <div className="form-group">
            <label>Bank Name</label>
            <input type="text" value={bank.bankName} onChange={e => onChange('bankName', e.target.value)} placeholder="Bank Name" />
          </div>
          <div className="form-group">
            <label>Account Number</label>
            <input type="text" value={bank.accountNumber} onChange={e => onChange('accountNumber', e.target.value)} placeholder="Account Number" />
          </div>
          <div className="form-group">
            <label>IFSC / SWIFT Code</label>
            <input type="text" value={bank.ifscSwift} onChange={e => onChange('ifscSwift', e.target.value)} placeholder="IFSC or SWIFT" />
          </div>
          <div className="form-group full-width">
            <label>Branch</label>
            <input type="text" value={bank.branch} onChange={e => onChange('branch', e.target.value)} placeholder="Branch Name" />
          </div>
        </div>
      </div>
    </div>
  );
}
