import React from 'react';
import './ClientDetails.css';

export default function ClientDetails({ client, onChange }) {
  return (
    <div className="form-section">
      <div className="section-header">
        <h2 className="section-title">Client Details</h2>
        <p className="section-desc">Recipient information</p>
      </div>
      <div className="section-body">
        <div className="form-grid">
          <div className="form-group">
            <label>Client / Company Name *</label>
            <input type="text" value={client.companyName} onChange={e => onChange('companyName', e.target.value)} placeholder="Client Company Name" />
          </div>
          <div className="form-group">
            <label>Contact Person</label>
            <input type="text" value={client.contactName} onChange={e => onChange('contactName', e.target.value)} placeholder="Contact Person Name" />
          </div>
          <div className="form-group full-width">
            <label>Street Address</label>
            <input type="text" value={client.street} onChange={e => onChange('street', e.target.value)} placeholder="Street Address" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" value={client.city} onChange={e => onChange('city', e.target.value)} placeholder="City" />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" value={client.state} onChange={e => onChange('state', e.target.value)} placeholder="State" />
          </div>
          <div className="form-group">
            <label>ZIP Code</label>
            <input type="text" value={client.zip} onChange={e => onChange('zip', e.target.value)} placeholder="ZIP Code" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" value={client.country} onChange={e => onChange('country', e.target.value)} placeholder="Country" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" value={client.phone} onChange={e => onChange('phone', e.target.value)} placeholder="+1 555 000 0000" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={client.email} onChange={e => onChange('email', e.target.value)} placeholder="client@company.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
