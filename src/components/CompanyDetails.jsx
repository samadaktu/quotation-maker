import React from 'react';
import './CompanyDetails.css';
import LogoUpload from './LogoUpload';

export default function CompanyDetails({ company, onChange }) {
  return (
    <div className="form-section">
      <div className="section-header">
        <h2 className="section-title">Your Company Details</h2>
        <p className="section-desc">Information about your business</p>
      </div>
      <div className="section-body">
        <LogoUpload logo={company.logo} onChange={(val) => onChange('logo', val)} />
        <div className="form-grid">
          <div className="form-group full-width">
            <label>Company Name *</label>
            <input type="text" value={company.name} onChange={e => onChange('name', e.target.value)} placeholder="Your Company Name" />
          </div>
          <div className="form-group full-width">
            <label>Street Address</label>
            <input type="text" value={company.street} onChange={e => onChange('street', e.target.value)} placeholder="123 Main Street" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" value={company.city} onChange={e => onChange('city', e.target.value)} placeholder="City" />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" value={company.state} onChange={e => onChange('state', e.target.value)} placeholder="State" />
          </div>
          <div className="form-group">
            <label>ZIP / Postal Code</label>
            <input type="text" value={company.zip} onChange={e => onChange('zip', e.target.value)} placeholder="ZIP Code" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" value={company.country} onChange={e => onChange('country', e.target.value)} placeholder="Country" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" value={company.phone} onChange={e => onChange('phone', e.target.value)} placeholder="+1 555 000 0000" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={company.email} onChange={e => onChange('email', e.target.value)} placeholder="hello@company.com" />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input type="text" value={company.website} onChange={e => onChange('website', e.target.value)} placeholder="www.company.com" />
          </div>
          <div className="form-group">
            <label>Tax ID / GST</label>
            <input type="text" value={company.taxId} onChange={e => onChange('taxId', e.target.value)} placeholder="Tax ID or GST Number" />
          </div>
        </div>
      </div>
    </div>
  );
}
