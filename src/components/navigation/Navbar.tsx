import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, MessageSquareQuote, Phone, ChevronRight, Languages } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { BUSINESS_DATA } from '../../data/businessData';

interface NavbarProps {
  onOpenQuote: (category?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, activeSection, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const langLabel = lang === 'en' ? 'தமிழ்' : 'English';
  const langAria = lang === 'en' ? 'தமிழுக்கு மாற்றவும்' : 'Switch to English';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'collection', label: 'Collection' },
    { id: 'custom-work', label: 'Custom Work' },
    { id: 'process', label: 'Our Process' },
    { id: 'portfolio', label: 'Our Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? 'bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md py-3 border-b border-light-border/40 dark:border-dark-border/40'
          : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent py-5 text-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button type="button" onClick={() => handleLinkClick('hero')} aria-label={t('ABI WOOD WORKS — home')} className="rounded-lg">
          <BrandLogo className={!isScrolled ? '[&_span]:text-white' : ''} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-2 py-1.5 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 relative ${isActive
                    ? 'text-light-wood dark:text-dark-accent font-semibold'
                    : isScrolled
                      ? 'text-light-text hover:text-light-wood dark:text-dark-text dark:hover:text-dark-accent'
                      : 'text-white/90 hover:text-white'
                  }`}
              >
                {t(link.label)}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-light-wood dark:bg-dark-accent rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Controls */}
        <div className="hidden xl:flex items-center gap-2">
          {/* Direct Phone Call Button */}
          <a
            href={BUSINESS_DATA.phoneTel}
            className={`p-2 rounded-full transition-colors flex items-center gap-1.5 text-xs font-semibold ${isScrolled
                ? 'text-light-text hover:bg-light-secondaryBg dark:text-dark-text dark:hover:bg-dark-secondaryBg'
                : 'text-white hover:bg-white/10'
              }`}
            title={t('Call Sankar directly')}
          >
            <Phone className="w-4 h-4 text-light-wood dark:text-dark-accent" />
            <span className="hidden 2xl:inline">{BUSINESS_DATA.phone}</span>
          </a>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLang}
            lang={lang === 'en' ? 'ta' : 'en'}
            aria-label={langAria}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-colors ${isScrolled
                ? 'bg-light-secondaryBg text-light-text dark:bg-dark-secondaryBg dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border'
                : 'bg-white/10 text-white hover:bg-white/20'
              }`}
          >
            <Languages className="w-4 h-4 text-light-wood dark:text-dark-accent" />
            <span>{langLabel}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${isScrolled
                ? 'bg-light-secondaryBg text-light-text dark:bg-dark-secondaryBg dark:text-dark-text hover:rotate-45'
                : 'bg-white/10 text-white hover:bg-white/20 hover:rotate-45'
              }`}
            aria-label={t('Toggle light and dark mode')}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-dark-accent" /> : <Moon className="w-4 h-4 text-light-wood" />}
          </button>

          {/* Get a Quote Button */}
          <button
            onClick={() => onOpenQuote()}
            className="px-4 py-2.5 whitespace-nowrap rounded-full text-xs uppercase tracking-widest font-semibold text-white bg-light-wood hover:bg-light-walnut dark:bg-dark-accent dark:text-dark-bg dark:hover:bg-amber-400 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
          >
            <MessageSquareQuote className="w-4 h-4" />
            <span>{t('Get a Quote')}</span>
          </button>
        </div>

        {/* Mobile controls (Theme toggle & Hamburger) */}
        <div className="flex xl:hidden items-center gap-1">
          <button
            type="button"
            onClick={toggleLang}
            lang={lang === 'en' ? 'ta' : 'en'}
            aria-label={langAria}
            className={`flex items-center gap-1 px-1.5 xs:px-2 py-2 rounded-full text-[11px] font-bold transition-colors ${isScrolled ? 'text-light-text dark:text-dark-text' : 'text-white'
              }`}
          >
            <Languages className={`hidden xs:block w-4 h-4 ${isScrolled ? 'text-light-wood dark:text-dark-accent' : 'text-[#E3B684]'}`} />
            <span className="hidden min-[340px]:inline">{lang === 'en' ? 'தமிழ்' : 'EN'}</span>
          </button>

          <button
            onClick={toggleTheme}
            className={`p-2 xs:p-2.5 rounded-full transition-colors ${isScrolled ? 'text-light-text dark:text-dark-text' : 'text-white'
              }`}
            aria-label={t('Toggle theme')}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-dark-accent" /> : <Moon className={`w-5 h-5 ${isScrolled ? 'text-light-wood' : 'text-[#E3B684]'}`} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 xs:p-2.5 rounded-lg transition-colors ${isScrolled ? 'text-light-text dark:text-dark-text' : 'text-white'
              }`}
            aria-label={t(mobileMenuOpen ? 'Close menu' : 'Open menu')}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="xl:hidden fixed inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-xl border-b border-light-border/60 dark:border-dark-border/60 shadow-2xl transition-all duration-300 animate-fadeIn">
          <div className="px-6 py-6 space-y-4">
            <div className="space-y-1 border-b border-light-border/40 dark:border-dark-border/40 pb-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-medium transition-colors ${activeSection === link.id
                      ? 'bg-light-wood/10 text-light-wood dark:bg-dark-accent/10 dark:text-dark-accent font-semibold'
                      : 'text-light-text dark:text-dark-text hover:bg-light-secondaryBg dark:hover:bg-dark-secondaryBg'
                    }`}
                >
                  <span>{t(link.label)}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm bg-light-wood text-white dark:bg-dark-accent dark:text-dark-bg flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
              >
                <MessageSquareQuote className="w-5 h-5" />
                <span>{t('Get a Quote')}</span>
              </button>

              <a
                href={BUSINESS_DATA.phoneTel}
                className="w-full py-3 rounded-xl font-medium text-sm text-center block text-light-wood dark:text-dark-accent border border-light-wood/30 dark:border-dark-accent/30 hover:bg-light-wood/10"
              >
                {t('Call Sankar')} ({BUSINESS_DATA.phone})
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};