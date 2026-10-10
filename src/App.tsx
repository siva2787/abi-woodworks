import React, { Suspense, lazy, useCallback, useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/navigation/Navbar';
import { MobileActionBar } from './components/navigation/MobileActionBar';
import { HeroSection } from './sections/HeroSection';
import { MaterialSection } from './sections/MaterialSection';
import { CraftsmanshipSection } from './sections/CraftsmanshipSection';
import { CollectionSection } from './sections/CollectionSection';
import { CustomWorkSection } from './sections/CustomWorkSection';
import { ProcessSection } from './sections/ProcessSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/common/Footer';
import { Reveal } from './components/common/Reveal';
import { RisingPanel } from './components/common/RisingPanel';

const QuoteModal = lazy(() => import('./components/forms/QuoteModal').then((m) => ({ default: m.QuoteModal })));
const ProductModal = lazy(() => import('./components/furniture/ProductModal').then((m) => ({ default: m.ProductModal })));
import { Product } from './types';

export const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefilledCategory, setPrefilledCategory] = useState<string>('');
  const [prefilledProduct, setPrefilledProduct] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const ids = ['hero', 'material', 'craftsmanship', 'collection', 'custom-work', 'process', 'portfolio', 'about', 'contact'];
    const onScroll = () => {
      let current = 'hero';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActiveSection((p) => (p === current ? p : current));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (categoryName?: string, productName?: string) => {
    setPrefilledCategory(categoryName || '');
    setPrefilledProduct(productName || '');
    setIsQuoteModalOpen(true);
  };

  const closeQuote = useCallback(() => setIsQuoteModalOpen(false), []);
  const closeProduct = useCallback(() => setSelectedProduct(null), []);

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar
        onOpenQuote={(cat) => handleOpenQuote(cat)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenQuote={() => handleOpenQuote()}
          onExploreWork={() => handleNavigate('collection')}
        />
        <RisingPanel><MaterialSection /></RisingPanel>
        <Reveal><CraftsmanshipSection /></Reveal>
        <Reveal><CollectionSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenQuote={(cat, name) => handleOpenQuote(cat, name)}
        /></Reveal>
        <Reveal><CustomWorkSection onOpenQuote={() => handleOpenQuote()} /></Reveal>
        <Reveal><ProcessSection /></Reveal>
        <Reveal><PortfolioSection /></Reveal>
        <Reveal><AboutSection /></Reveal>
        <Reveal><ContactSection onOpenQuote={() => handleOpenQuote()} /></Reveal>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Fixed Mobile Bottom Action Bar */}
      <MobileActionBar
        onOpenQuote={() => handleOpenQuote()}
        hide={isQuoteModalOpen || !!selectedProduct}
      />

      <Suspense fallback={null}>
        {isQuoteModalOpen && (
          <QuoteModal
            isOpen={isQuoteModalOpen}
            onClose={closeQuote}
            prefilledCategory={prefilledCategory}
            prefilledProduct={prefilledProduct}
          />
        )}
        {selectedProduct && <ProductModal product={selectedProduct} onClose={closeProduct} onOpenQuote={handleOpenQuote} />}
      </Suspense>
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;