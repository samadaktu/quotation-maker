import { useState, useCallback } from 'react';
import { generateQuotationNumber } from '../utils/formatters';
import { defaultTerms, defaultNotes } from '../data/defaultTerms';

const VALIDITY_DAYS = 30;
const today = new Date().toISOString().split('T')[0];
const validUntil = new Date(Date.now() + VALIDITY_DAYS * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

const defaultState = {
  company: {
    name: 'TechVision Solutions Pvt. Ltd.',
    logo: null,
    street: '123 Innovation Drive, Tech Park',
    city: 'Bengaluru',
    state: 'Karnataka',
    zip: '560001',
    country: 'India',
    phone: '+91 98765 43210',
    email: 'hello@techvision.in',
    website: 'www.techvision.in',
    taxId: 'GST: 29ABCDE1234F1Z5',
  },
  client: {
    companyName: 'Apex Innovations Ltd.',
    contactName: 'Mr. Rahul Mehta',
    street: '456 Business Bay',
    city: 'Mumbai',
    state: 'Maharashtra',
    zip: '400001',
    country: 'India',
    phone: '+91 98765 12345',
    email: 'rahul@apexinnovations.in',
  },
  meta: {
    quotationNumber: generateQuotationNumber(),
    date: today,
    validUntil: validUntil,
    reference: 'REF-2024-001',
    paymentTerms: 'Net 30',
  },
  items: [
    {
      id: '1',
      description: 'UI/UX Design & Prototyping',
      quantity: '1',
      unitPrice: '45000',
      taxRate: '18',
      discount: '5',
      discountType: 'percent',
    },
    {
      id: '2',
      description: 'Full-Stack Web Application Development',
      quantity: '1',
      unitPrice: '120000',
      taxRate: '18',
      discount: '0',
      discountType: 'percent',
    },
    {
      id: '3',
      description: 'Cloud Deployment & DevOps Setup (AWS)',
      quantity: '1',
      unitPrice: '25000',
      taxRate: '18',
      discount: '10',
      discountType: 'percent',
    },
  ],
  currency: 'INR',
  notes: defaultNotes,
  terms: defaultTerms,
  bank: {
    bankName: 'HDFC Bank',
    accountNumber: '1234 5678 9012',
    ifscSwift: 'HDFC0001234',
    branch: 'Koramangala Branch, Bengaluru',
    accountHolder: 'TechVision Solutions Pvt. Ltd.',
  },
  signature: null,
};

export function useQuotation() {
  const [data, setData] = useState(defaultState);

  const updateCompany = useCallback((field, value) => {
    setData(prev => ({ ...prev, company: { ...prev.company, [field]: value } }));
  }, []);

  const updateClient = useCallback((field, value) => {
    setData(prev => ({ ...prev, client: { ...prev.client, [field]: value } }));
  }, []);

  const updateMeta = useCallback((field, value) => {
    setData(prev => ({ ...prev, meta: { ...prev.meta, [field]: value } }));
  }, []);

  const updateCurrency = useCallback((currency) => {
    setData(prev => ({ ...prev, currency }));
  }, []);

  const updateNotes = useCallback((notes) => {
    setData(prev => ({ ...prev, notes }));
  }, []);

  const updateTerms = useCallback((terms) => {
    setData(prev => ({ ...prev, terms }));
  }, []);

  const updateBank = useCallback((field, value) => {
    setData(prev => ({ ...prev, bank: { ...prev.bank, [field]: value } }));
  }, []);

  const updateSignature = useCallback((signature) => {
    setData(prev => ({ ...prev, signature }));
  }, []);

  const addItem = useCallback(() => {
    const newItem = {
      id: Date.now().toString(),
      description: '',
      quantity: '1',
      unitPrice: '0',
      taxRate: '0',
      discount: '0',
      discountType: 'percent',
    };
    setData(prev => ({ ...prev, items: [...prev.items, newItem] }));
  }, []);

  const updateItem = useCallback((id, field, value) => {
    setData(prev => ({
      ...prev,
      items: prev.items.map(item => item.id === id ? { ...item, [field]: value } : item),
    }));
  }, []);

  const removeItem = useCallback((id) => {
    setData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id),
    }));
  }, []);

  const regenerateQuotationNumber = useCallback(() => {
    setData(prev => ({
      ...prev,
      meta: { ...prev.meta, quotationNumber: generateQuotationNumber() },
    }));
  }, []);

  return {
    data,
    updateCompany,
    updateClient,
    updateMeta,
    updateCurrency,
    updateNotes,
    updateTerms,
    updateBank,
    updateSignature,
    addItem,
    updateItem,
    removeItem,
    regenerateQuotationNumber,
  };
}
