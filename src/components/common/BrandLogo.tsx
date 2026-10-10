import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', showTagline = false }) => {
  const { t } = useLanguage();
  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      <img
        src="/images/logo.png"
        alt="ABI WOOD WORKS"
        width={64}
        height={64}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-md transition-transform duration-500 group-hover:scale-105"
      />
      {showTagline && (
        <span className="text-[10px] tracking-widest text-light-subtext dark:text-dark-subtext uppercase font-sans whitespace-nowrap">
          {t('Ammachathiram · Kumbakonam')}
        </span>
      )}
    </div>
  );
};