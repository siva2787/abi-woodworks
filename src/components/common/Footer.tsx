import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_DATA } from '../../data/businessData';
import { Phone, MessageCircle, MapPin, ChevronRight, Info } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const { t } = useLanguage();
  return (
    <footer className="bg-light-secondaryBg dark:bg-dark-secondaryBg text-light-text dark:text-dark-text pt-16 pb-24 lg:pb-12 border-t border-light-border dark:border-dark-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo showTagline />
            <p className="text-xs sm:text-sm text-light-subtext dark:text-dark-subtext max-w-sm leading-relaxed">
              {t('Custom carpentry, wooden sofas, wardrobes, beds, dining tables, doors, and furniture woodwork crafted for homes across Kumbakonam and Thanjavur.')}
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-light-subtext dark:text-dark-subtext">
              <p><strong>{t('Owner:')}</strong> {t(BUSINESS_DATA.owner)}</p>
              <p><strong>{t('Phone:')}</strong> {BUSINESS_DATA.phoneDisplay}</p>
              <p><strong>{t('Location:')}</strong> {t(BUSINESS_DATA.location.fullAddress)}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-light-wood dark:text-dark-accent">
              {t('Explore Pages')}
            </h4>
            <ul className="space-y-2 text-xs font-medium text-light-subtext dark:text-dark-subtext">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'collection', label: 'Furniture Collection' },
                { id: 'custom-work', label: 'Custom Work & Sizes' },
                { id: 'process', label: 'Our Craft Process' },
                { id: 'portfolio', label: 'Work & Inspiration' },
                { id: 'about', label: 'About ABI Wood Works' },
                { id: 'contact', label: 'Contact Sankar' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-light-wood dark:hover:text-dark-accent transition-colors flex items-center gap-1 text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-light-wood dark:text-dark-accent" />
                    <span>{t(link.label)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Pricing Note */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-light-wood dark:text-dark-accent">
              {t('Quick Connect')}
            </h4>

            <div className="space-y-2">
              <a
                href={BUSINESS_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t('Chat on WhatsApp')}</span>
              </a>

              <a
                href={BUSINESS_DATA.phoneTel}
                className="w-full py-2.5 px-4 rounded-xl bg-light-wood dark:bg-dark-accent text-white dark:text-dark-bg font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{t('Call')} {BUSINESS_DATA.phone}</span>
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-light-card/80 dark:bg-dark-card/80 border border-light-border dark:border-dark-border text-[11px] text-light-subtext dark:text-dark-subtext flex items-start gap-2">
              <Info className="w-4 h-4 text-light-wood dark:text-dark-accent shrink-0 mt-0.5" />
              <p>{t(BUSINESS_DATA.pricingNote)}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-light-border/60 dark:border-dark-border/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-light-subtext dark:text-dark-subtext gap-4">
          <p>© {new Date().getFullYear()} ABI WOOD WORKS. {t('Owned by Sankar. All rights reserved.')}</p>
          <p>
            Build By StormForge Technologies -{' '}
            <a
              href="https://easwar-dev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="https://easwar-dev.vercel.app/"
              className="group relative inline-block font-semibold text-light-wood dark:text-dark-accent hover:underline"
            >
              Easwar S
              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-md bg-light-text dark:bg-dark-text text-light-bg dark:text-dark-bg px-2.5 py-1 text-[10px] font-medium opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0"
              >
                https://easwar-dev.vercel.app/
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};