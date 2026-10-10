import React, { useCallback, useEffect, useRef, useState } from 'react';
import { X, MessageSquareQuote, CheckCircle, Info, Sparkles, ChevronRight } from 'lucide-react';
import { Product } from '../../types';
import { BUSINESS_DATA } from '../../data/businessData';
import { SmartImage } from '../common/SmartImage';
import { useModalBehavior } from '../../hooks/useModalBehavior';
import { useLanguage } from '../../i18n/LanguageContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenQuote: (categoryName: string, productName?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOpenQuote }) => {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState('');
  const stableClose = useCallback(onClose, [onClose]);
  useModalBehavior(!!product, stableClose, dialogRef);
  useEffect(() => {
    if (product) setActiveImage(product.image);
  }, [product]);

  if (!product) return null;

  const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={dialogRef}
        tabIndex={-1}
        aria-labelledby="product-modal-title"
        className="relative w-full max-w-4xl max-h-[90dvh] overflow-y-auto outline-none bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl shadow-2xl p-6 sm:p-8 text-light-text dark:text-dark-text"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-light-bg/80 dark:bg-dark-bg/80 text-light-text dark:text-dark-text hover:bg-light-secondaryBg dark:hover:bg-dark-secondaryBg transition-colors"
          aria-label={t('Close product details')}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Image & Thumbs */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-light-secondaryBg dark:bg-dark-secondaryBg border border-light-border dark:border-dark-border shadow-inner">
              <SmartImage
                src={activeImage}
                alt={t(product.name)}
                className="w-full h-full object-cover transition-all duration-500 "
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-light-wood/90 text-white dark:bg-dark-accent dark:text-dark-bg backdrop-blur-md">
                {t(product.categoryLabel)}
              </span>
            </div>

            {/* Thumbnail Gallery */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    aria-label={`${t('Show image')} ${idx + 1}`}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${activeImage === img
                        ? 'border-light-wood dark:border-dark-accent scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                  >
                    <SmartImage src={img} alt={`${t('Gallery view')} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Customization */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-light-wood dark:text-dark-accent">
                  {t('Custom Handcrafted Piece')}
                </span>
                <h2 id="product-modal-title" className="text-2xl sm:text-3xl font-serif font-bold mt-1 pr-10">{t(product.name)}</h2>
              </div>

              {/* Indicative Price Badge */}
              <div className="p-4 rounded-xl bg-light-secondaryBg/80 dark:bg-dark-secondaryBg/80 border border-light-border dark:border-dark-border">
                <span className="text-xs uppercase tracking-wider text-light-subtext dark:text-dark-subtext block">
                  {t('Indicative Price Range')}
                </span>
                <div className="text-2xl font-serif font-bold text-light-wood dark:text-dark-accent mt-0.5">
                  {t(product.indicativePrice)}
                </div>
                <p className="text-[11px] text-light-subtext dark:text-dark-subtext mt-1 italic flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 shrink-0" />
                  {t(BUSINESS_DATA.pricingNote)}
                </p>
              </div>

              <p className="text-sm text-light-subtext dark:text-dark-subtext leading-relaxed">
                {t(product.description)}
              </p>

              {/* Customization Info */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 text-light-text dark:text-dark-text">
                  <Sparkles className="w-4 h-4 text-light-wood dark:text-dark-accent" />
                  {t('Customization Flexibility')}
                </h4>
                <p className="text-xs text-light-subtext dark:text-dark-subtext">
                  {t(product.customizationInfo)}
                </p>
              </div>

              {/* Suggested Materials & Finishes */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-semibold text-light-subtext dark:text-dark-subtext mb-1.5">
                    {t('Wood Options')}
                  </h4>
                  <ul className="space-y-1">
                    {product.materialsSuggested.map((mat, i) => (
                      <li key={i} className="text-xs font-medium flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-light-wood dark:text-dark-accent" />
                        <span>{t(mat)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-semibold text-light-subtext dark:text-dark-subtext mb-1.5">
                    {t('Polish / Finishes')}
                  </h4>
                  <ul className="space-y-1">
                    {product.finishOptions.map((finish, i) => (
                      <li key={i} className="text-xs font-medium flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-light-wood dark:text-dark-accent" />
                        <span>{t(finish)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-light-border dark:border-dark-border flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(product.categoryLabel, product.name);
                }}
                className="flex-1 py-3 px-5 rounded-xl bg-light-wood hover:bg-light-walnut dark:bg-dark-accent dark:text-dark-bg font-semibold text-xs uppercase tracking-wider text-white shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquareQuote className="w-4 h-4" />
                <span>{t('Enquire For This Item')}</span>
              </button>

              <a
                href={BUSINESS_DATA.phoneTel}
                className="py-3 px-5 rounded-xl border border-light-wood/40 dark:border-dark-accent/40 hover:bg-light-secondaryBg dark:hover:bg-dark-secondaryBg font-semibold text-xs uppercase tracking-wider text-center text-light-wood dark:text-dark-accent flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>{t('Call Sankar')}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};