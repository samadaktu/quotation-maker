import React, { useRef, useState } from 'react';
import { FiUploadCloud, FiX } from 'react-icons/fi';
import './LogoUpload.css';

export default function LogoUpload({ logo, onChange }) {
  const fileRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => onChange(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  return (
    <div className="logo-section">
      <label>Company Logo</label>
      {logo ? (
        <div className="logo-preview">
          <img src={logo} alt="Company Logo" />
          <button className="logo-remove" onClick={() => onChange(null)}>
            <FiX /> Remove
          </button>
        </div>
      ) : (
        <div
          className={`logo-dropzone ${dragging ? 'dragging' : ''}`}
          onClick={() => fileRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <FiUploadCloud className="upload-icon" />
          <p><strong>Click to upload</strong> or drag &amp; drop</p>
          <p className="upload-hint">PNG, JPG, SVG (max 5MB)</p>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={e => handleFile(e.target.files[0])}
          />
        </div>
      )}
    </div>
  );
}
