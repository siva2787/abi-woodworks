import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SmartImage } from '../components/common/SmartImage';
import { ChipScroller } from '../components/common/ChipScroller';
import { Eye, MessageSquareQuote, Info, Filter } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Product, CategoryId } from '../types';
import { BUSINESS_DATA } from '../data/businessData';
import { useLanguage } from '../i18n/LanguageContext';

interface CollectionSectionProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuote: (categoryName?: string, productName?: string) => void;
}

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.12 };
const headV = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };
const riseV = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
const noteV = { hidden: { opacity: 0, x: 70 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, ease, delay: 0.2 } } };
const cardV = {
  hidden: ({ col, wide }: { col: number; wide: boolean }) => ({ opacity: 0, y: 80, x: wide ? (col - 1) * 80 : 0, scale: 0.9 }),
  show: ({ col }: { col: number; wide: boolean }) => ({
    opacity: 1, y: 0, x: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 90, damping: 16, delay: col * 0.12 },
  }),
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.25 } },
};

export const CollectionSection: React.FC<CollectionSectionProps> = ({ onSelectProduct, onOpenQuote }) => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const wide = typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;
  const mp = reduce ? {} : { initial: 'hidden', whileInView: 'show', viewport };
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="collection" className="py-24 bg-light-secondaryBg/30 dark:bg-dark-secondaryBg/30 border-t border-light-border/60 dark:border-dark-border/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div variants={headV} {...mp} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <motion.span variants={riseV} className="block text-xs uppercase tracking-[0.25em] font-semibold text-light-wood dark:text-dark-accent">
              {t('FEATURED FURNITURE CATALOGUE')}
            </motion.span>
            <motion.h2 variants={riseV} className="text-3xl sm:text-5xl font-serif font-bold text-light-text dark:text-dark-text">
              {t('Crafted Collections')}
            </motion.h2>
            <motion.p variants={riseV} className="text-sm sm:text-base text-light-subtext dark:text-dark-subtext max-w-xl">
              {t('Explore indicative starting prices and custom furniture designs for your home.')}
            </motion.p>
          </div>

          {/* Pricing Disclaimer Alert */}
          <motion.div variants={noteV} className="p-3.5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border max-w-sm text-xs text-light-subtext dark:text-dark-subtext flex items-start gap-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Info className="w-4 h-4 text-light-wood dark:text-dark-accent shrink-0 mt-0.5" />
            <p>{t(BUSINESS_DATA.pricingNote)}</p>
          </motion.div>
        </motion.div>

        {/* Filter Categories Bar */}
        <motion.div variants={riseV} {...mp} className="flex items-start gap-3 mb-8">
          <div className="flex items-center gap-1.5 pr-3 mt-[22px] border-r border-light-border dark:border-dark-border shrink-0 text-xs font-semibold text-light-subtext dark:text-dark-subtext">
            <Filter className="w-3.5 h-3.5" />
            <span>{t('Filter:')}</span>
          </div>

          <ChipScroller className="flex-1 min-w-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={(e) => {
                    setActiveCategory(cat.id);
                    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                  }}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap shrink-0 hover:-translate-y-0.5 active:scale-95 ${isActive
                    ? 'bg-light-wood text-white dark:bg-dark-accent dark:text-dark-bg shadow-md'
                    : 'bg-light-card text-light-text dark:bg-dark-card dark:text-dark-text hover:bg-light-secondaryBg dark:hover:bg-dark-secondaryBg border border-light-border/60 dark:border-dark-border/60'
                    }`}
                >
                  {t(cat.name)}
                </button>
              );
            })}
          </ChipScroller>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                variants={cardV}
                custom={{ col: i % 3, wide }}
                {...(reduce ? {} : { initial: 'hidden', whileInView: 'show', exit: 'exit', viewport, layout: 'position' as const })}
              >
                <div
                  className="group relative h-full rounded-2xl overflow-hidden bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-light-wood dark:hover:border-dark-accent transition-all duration-500 flex flex-col justify-between before:absolute before:inset-0 before:z-10 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 dark:before:via-white/10 before:to-transparent before:transition-transform before:duration-1000 before:pointer-events-none"
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-light-secondaryBg dark:bg-dark-secondaryBg">
                    <SmartImage
                      src={product.image}
                      alt={t(product.name)}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-light-card/90 dark:bg-dark-card/90 text-light-wood dark:text-dark-accent backdrop-blur-md border border-light-border dark:border-dark-border shadow-sm">
                      {t(product.categoryLabel)}
                    </span>

                    {/* Quick view button overlay */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute bottom-3 right-3 p-2.5 rounded-full bg-light-card/90 dark:bg-dark-card/90 text-light-text dark:text-dark-text md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-300 shadow-md hover:scale-110 hover:bg-light-wood hover:text-white dark:hover:bg-dark-accent dark:hover:text-dark-bg"
                      title={t('View Details')} aria-label={`${t('View details')}: ${t(product.name)}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Details Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-light-text dark:text-dark-text group-hover:text-light-wood dark:group-hover:text-dark-accent transition-colors">
                        {t(product.name)}
                      </h3>
                      <p className="text-xs text-light-subtext dark:text-dark-subtext mt-1.5 line-clamp-2">
                        {t(product.shortDescription)}
                      </p>
                    </div>

                    {/* Indicative Price Block */}
                    <div className="pt-3 border-t border-light-border/60 dark:border-dark-border/60 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-light-subtext dark:text-dark-subtext block">
                          {t('Indicative Starting Range')}
                        </span>
                        <span className="text-base font-serif font-bold text-light-wood dark:text-dark-accent transition-transform duration-300 origin-left group-hover:scale-110 inline-block">
                          {t(product.indicativePrice)}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="px-3 py-1.5 rounded-lg border border-light-border dark:border-dark-border text-xs font-semibold text-light-text dark:text-dark-text hover:bg-light-secondaryBg dark:hover:bg-dark-secondaryBg hover:-translate-y-0.5 active:scale-95 transition-all"
                        >
                          {t('Details')}
                        </button>
                        <button
                          onClick={() => onOpenQuote(product.categoryLabel, product.name)}
                          className="px-3 py-1.5 rounded-lg bg-light-wood dark:bg-dark-accent text-white dark:text-dark-bg text-xs font-semibold hover:bg-light-walnut dark:hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-md active:scale-95 transition-all flex items-center gap-1 shadow-sm"
                        >
                          <MessageSquareQuote className="w-3.5 h-3.5" />
                          <span>{t('Quote')}</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};