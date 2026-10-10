import React, { useCallback, useEffect, useRef, useState } from 'react';
import { X, Send, MessageCircle, AlertCircle, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { CATEGORIES } from '../../data/products';
import { BUSINESS_DATA } from '../../data/businessData';
import { QuoteFormData } from '../../types';
import { enquiryUrl, isValidPhone } from '../../lib/whatsapp';
import { useModalBehavior } from '../../hooks/useModalBehavior';
import { useLanguage } from '../../i18n/LanguageContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledCategory?: string;
  prefilledProduct?: string;
}

const EMPTY: QuoteFormData = {
  customerName: '',
  phoneNumber: '',
  category: '',
  dimensions: '',
  preferredMaterial: '',
  budgetRange: '',
  designDescription: '',
  productName: '',
};

type Errors = { customerName?: string; phoneNumber?: string; category?: string };

const field =
  'w-full px-3.5 py-3 rounded-xl border bg-light-bg dark:bg-dark-bg text-base sm:text-sm text-light-text dark:text-dark-text focus:ring-2 focus:ring-light-wood dark:focus:ring-dark-accent outline-none transition-colors';
const ok = 'border-light-border dark:border-dark-border';
const bad = 'border-red-500';
const label = 'block text-xs uppercase tracking-wider font-semibold mb-1';

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefilledCategory = '', prefilledProduct = '' }) => {
  const [formData, setFormData] = useState<QuoteFormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const stableClose = useCallback(onClose, [onClose]);
  useModalBehavior(isOpen, stableClose, dialogRef);

  useEffect(() => {
    if (isOpen) {
      setFormData({ ...EMPTY, category: prefilledCategory, productName: prefilledProduct });
      setErrors({});
      setSent(false);
    }
  }, [isOpen, prefilledCategory, prefilledProduct]);

  if (!isOpen) return null;

  const set = <K extends keyof QuoteFormData>(k: K, v: QuoteFormData[K]) => setFormData((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e: Errors = {};
    if (!formData.customerName.trim()) e.customerName = 'Please enter your name.';
    if (!isValidPhone(formData.phoneNumber)) e.phoneNumber = 'Enter a valid 10-digit Indian mobile number.';
    if (!formData.category) e.category = 'Please choose a furniture type.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(enquiryUrl(formData), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const err = (id: string, msg?: string) =>
    msg ? (
      <p id={id} role="alert" className="text-xs text-red-500 mt-1 flex items-center gap-1">
        <AlertCircle className="w-3 h-3" /> {t(msg)}
      </p>
    ) : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-xl max-h-[92dvh] overflow-y-auto outline-none bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl shadow-2xl p-5 sm:p-8 text-light-text dark:text-dark-text"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 p-2.5 rounded-full text-light-subtext dark:text-dark-subtext hover:bg-light-secondaryBg dark:hover:bg-dark-secondaryBg transition-colors"
          aria-label={t('Close enquiry form')}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-light-wood dark:text-dark-accent">{t('Custom Furniture Enquiry')}</span>
          <h2 id="quote-modal-title" className="text-2xl sm:text-3xl font-serif font-bold mt-1">
            {t('Request a Price & Custom Design')}
          </h2>
          <p className="text-xs sm:text-sm text-light-subtext dark:text-dark-subtext mt-1">
            {t('Share your requirements with Sankar. WhatsApp will open with your message ready — you must tap Send there.')}
          </p>
          {formData.productName && (
            <p className="mt-3 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-light-wood/10 dark:bg-dark-accent/10 text-light-wood dark:text-dark-accent">
              {t('About:')} {t(formData.productName || '')}
            </p>
          )}
        </div>

        {sent && (
          <div role="status" className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">{t('WhatsApp has been opened with your message. It is not sent yet — please tap Send in WhatsApp.')}</p>
              <p className="text-xs mt-1 opacity-90">
                {t('Nothing opened?')}{' '}
                <a href={enquiryUrl(formData)} target="_blank" rel="noopener noreferrer" className="underline font-bold">
                  {t('Open WhatsApp manually')}
                </a>
                . {t('You can attach reference photos in the chat.')}
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="q-name" className={label}>
                {t('Your Name')} <span className="text-red-500">*</span>
              </label>
              <input
                id="q-name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={!!errors.customerName}
                aria-describedby={errors.customerName ? 'q-name-err' : undefined}
                value={formData.customerName}
                onChange={(e) => set('customerName', e.target.value)}
                placeholder={t('e.g. Ramesh Kumar')}
                className={`${field} ${errors.customerName ? bad : ok}`}
              />
              {err('q-name-err', errors.customerName)}
            </div>
            <div>
              <label htmlFor="q-phone" className={label}>
                {t('Phone Number')} <span className="text-red-500">*</span>
              </label>
              <input
                id="q-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                aria-invalid={!!errors.phoneNumber}
                aria-describedby={errors.phoneNumber ? 'q-phone-err' : undefined}
                value={formData.phoneNumber}
                onChange={(e) => set('phoneNumber', e.target.value)}
                placeholder={t('e.g. 9876543210')}
                className={`${field} ${errors.phoneNumber ? bad : ok}`}
              />
              {err('q-phone-err', errors.phoneNumber)}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="q-cat" className={label}>
                {t('Furniture Category')} <span className="text-red-500">*</span>
              </label>
              <select
                id="q-cat"
                required
                aria-invalid={!!errors.category}
                aria-describedby={errors.category ? 'q-cat-err' : undefined}
                value={formData.category}
                onChange={(e) => set('category', e.target.value)}
                className={`${field} ${errors.category ? bad : ok}`}
              >
                <option value="">{t('Select furniture type')}</option>
                {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                  <option key={c.id} value={c.name}>
                    {t(c.name)}
                  </option>
                ))}
              </select>
              {err('q-cat-err', errors.category)}
            </div>
            <div>
              <label htmlFor="q-mat" className={label}>
                {t('Preferred Material / Wood')}
              </label>
              <select id="q-mat" value={formData.preferredMaterial} onChange={(e) => set('preferredMaterial', e.target.value)} className={`${field} ${ok}`}>
                <option value="">{t('Not decided')}</option>
                <option value="Teak Wood">{t('Teak Wood')}</option>
                <option value="Rosewood">{t('Rosewood')}</option>
                <option value="Country Wood / Hardwood">{t('Country Wood / Hardwood')}</option>
                <option value="Neem / Jackwood">{t('Neem / Jackwood')}</option>
                <option value="Need guidance from Sankar">{t('Need guidance from Sankar')}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="q-dim" className={label}>
                {t('Approximate Dimensions (Optional)')}
              </label>
              <input id="q-dim" type="text" value={formData.dimensions} onChange={(e) => set('dimensions', e.target.value)} placeholder={t('e.g. 6ft x 4ft or 3-seater')} className={`${field} ${ok}`} />
            </div>
            <div>
              <label htmlFor="q-bud" className={label}>
                {t('Budget Range (Optional)')}
              </label>
              <input id="q-bud" type="text" value={formData.budgetRange} onChange={(e) => set('budgetRange', e.target.value)} placeholder={t('e.g. ₹25,000 – ₹35,000')} className={`${field} ${ok}`} />
            </div>
          </div>

          <div>
            <label htmlFor="q-desc" className={label}>
              {t('Design Description (Optional)')}
            </label>
            <textarea
              id="q-desc"
              rows={3}
              value={formData.designDescription}
              onChange={(e) => set('designDescription', e.target.value)}
              placeholder={t('Describe what you want made, carving, polish shade, drawers...')}
              className={`${field} ${ok} resize-none`}
            />
          </div>

          <div className="p-3.5 rounded-xl bg-light-secondaryBg/70 dark:bg-dark-secondaryBg/70 border border-light-border/70 dark:border-dark-border/70 text-xs text-light-subtext dark:text-dark-subtext flex items-start gap-2.5">
            <ImageIcon className="w-4 h-4 text-light-wood dark:text-dark-accent shrink-0 mt-0.5" />
            <p>
              <strong className="text-light-text dark:text-dark-text font-semibold">{t('Reference image or sketch?')}</strong> {t('This form cannot upload files. After WhatsApp opens, attach your photo in the chat with Sankar.')}
            </p>
          </div>

          <p className="text-[11px] text-light-subtext dark:text-dark-subtext italic">*{t(BUSINESS_DATA.pricingNote)}</p>

          <button
            type="submit"
            className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('Continue on WhatsApp')}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};