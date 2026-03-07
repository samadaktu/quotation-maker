import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { generatePDF } from '../utils/pdfGenerator';

export default function PDFDownload() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      await generatePDF('quotation-preview');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="pdf-download-btn"
      onClick={handleDownload}
      disabled={loading}
    >
      <FiDownload />
      {loading ? 'Generating...' : 'Download PDF'}
    </button>
  );
}
