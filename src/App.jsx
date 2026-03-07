import React, { useState } from 'react';
import Header from './components/Header';
import QuotationForm from './components/QuotationForm';
import QuotationPreview from './components/QuotationPreview';
import { useQuotation } from './hooks/useQuotation';
import './App.css';

export default function App() {
  const quotation = useQuotation();
  const [activeView, setActiveView] = useState('form');

  return (
    <div className="app">
      <Header activeView={activeView} onToggleView={setActiveView} />
      <main className="app-main">
        <div className={`form-panel ${activeView === 'form' ? 'visible' : 'hidden'}`}>
          <QuotationForm
            data={quotation.data}
            updateCompany={quotation.updateCompany}
            updateClient={quotation.updateClient}
            updateMeta={quotation.updateMeta}
            updateCurrency={quotation.updateCurrency}
            updateNotes={quotation.updateNotes}
            updateTerms={quotation.updateTerms}
            updateBank={quotation.updateBank}
            updateSignature={quotation.updateSignature}
            addItem={quotation.addItem}
            updateItem={quotation.updateItem}
            removeItem={quotation.removeItem}
            regenerateQuotationNumber={quotation.regenerateQuotationNumber}
          />
        </div>
        <div className={`preview-panel ${activeView === 'preview' ? 'visible' : 'hidden'}`}>
          <QuotationPreview data={quotation.data} />
        </div>
      </main>
    </div>
  );
}
