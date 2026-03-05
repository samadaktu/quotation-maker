import React from 'react';
import { currencies } from '../data/currencies';

export default function CurrencySelector({ value, onChange }) {
  return (
    <div className="form-group">
      <label>Currency</label>
      <select value={value} onChange={e => onChange(e.target.value)}>
        {currencies.map(c => (
          <option key={c.code} value={c.code}>
            {c.symbol} {c.code} — {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
