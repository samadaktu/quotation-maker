import React from 'react';
import { FiFileText } from 'react-icons/fi';
import './Header.css';

export default function Header({ activeView, onToggleView }) {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="header-logo">
          <FiFileText />
        </div>
        <div>
          <h1 className="header-title">QuoteCraft</h1>
          <p className="header-subtitle">Professional Quotation Maker</p>
        </div>
      </div>
      <div className="header-toggle">
        <button
          className={`toggle-btn ${activeView === 'form' ? 'active' : ''}`}
          onClick={() => onToggleView('form')}
        >
          Edit
        </button>
        <button
          className={`toggle-btn ${activeView === 'preview' ? 'active' : ''}`}
          onClick={() => onToggleView('preview')}
        >
          Preview
        </button>
      </div>
    </header>
  );
}
