import { BUSINESS_DATA } from '../data/businessData';
import { QuoteFormData } from '../types';

export function buildWhatsAppMessage(d: QuoteFormData): string {
  const lines = [
    'Hello Sankar,',
    '',
    'I would like to enquire about ABI WOOD WORKS.',
    '',
    `Name: ${d.customerName.trim()}`,
    `Phone: ${d.phoneNumber.trim()}`,
    `Furniture: ${d.category}`,
  ];
  if (d.productName) lines.push(`Product: ${d.productName}`);
  if (d.dimensions?.trim()) lines.push(`Dimensions: ${d.dimensions.trim()}`);
  if (d.preferredMaterial?.trim()) lines.push(`Preferred material: ${d.preferredMaterial.trim()}`);
  if (d.budgetRange?.trim()) lines.push(`Budget: ${d.budgetRange.trim()}`);
  if (d.designDescription?.trim()) lines.push(`Requirements: ${d.designDescription.trim()}`);
  lines.push('', 'Please discuss the price and customization options with me.');
  return lines.join('\n');
}

export const whatsappUrl = (text: string) => `https://wa.me/${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(text)}`;

export const enquiryUrl = (d: QuoteFormData) => whatsappUrl(buildWhatsAppMessage(d));

export function normalizePhone(raw: string): string {
  let n = raw.replace(/\D/g, '');
  if (n.length === 12 && n.startsWith('91')) n = n.slice(2);
  if (n.length === 11 && n.startsWith('0')) n = n.slice(1);
  return n;
}

export const isValidPhone = (raw: string) => /^[6-9]\d{9}$/.test(normalizePhone(raw));
