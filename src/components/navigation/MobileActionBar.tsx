import React from 'react';
import { Phone, MessageCircle, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_DATA } from '../../data/businessData';
import { useLanguage } from '../../i18n/LanguageContext';

interface MobileActionBarProps {
  onOpenQuote: () => void;
  hide?: boolean;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenQuote, hide = false }) => {
  const { t } = useLanguage();
  if (hide) return null;

  return (
    <aside aria-label={t('Quick mobile contacts')} className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-light-card/95 dark:bg-dark-card/95 backdrop-blur-lg border-t border-light-border dark:border-dark-border px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL button */}
        <a
          href={BUSINESS_DATA.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-light-secondaryBg/80 dark:bg-dark-secondaryBg/80 text-light-walnut dark:text-dark-text hover:bg-light-secondaryBg active:scale-95 transition-all text-center"
        >
          <Phone className="w-5 h-5 text-light-wood dark:text-dark-accent mb-0.5" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">{t('CALL')}</span>
        </a>

        {/* WHATSAPP button */}
        <a
          href={BUSINESS_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600/20 active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-5 h-5 mb-0.5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">{t('WHATSAPP')}</span>
        </a>

        {/* GET QUOTE button */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-light-wood dark:bg-dark-accent text-white dark:text-dark-bg font-semibold active:scale-95 transition-all text-center shadow-md"
        >
          <MessageSquareQuote className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-wider">{t('GET QUOTE')}</span>
        </button>
      </div>
    </aside>
  );
};