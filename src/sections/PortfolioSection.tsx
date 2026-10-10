import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SmartImage } from '../components/common/SmartImage';
import { PORTFOLIO_ITEMS } from '../data/portfolio';
import { CategoryId } from '../types';
import { Info, Sparkles, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.12 };
const headV = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };
const riseV = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
const noteV = { hidden: { opacity: 0, x: 70 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, ease, delay: 0.2 } } };
const pillsV = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } };
const pillV = { hidden: { opacity: 0, y: 20, scale: 0.85 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 220, damping: 16 } } };
const cardV = {
  hidden: ({ col, wide }: { col: number; wide: boolean }) => ({ opacity: 0, y: 80, x: wide ? (col - 1) * 80 : 0, scale: 0.9 }),
  show: ({ col }: { col: number; wide: boolean }) => ({
    opacity: 1, y: 0, x: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 90, damping: 16, delay: col * 0.12 },
  }),
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.25 } },
};

export const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const wide = typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;
  const mp = reduce ? {} : { initial: 'hidden', whileInView: 'show', viewport };
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'sofas', name: 'Sofas' },
    { id: 'wardrobes', name: 'Wardrobes' },
    { id: 'beds', name: 'Beds' },
    { id: 'tables', name: 'Tables' },
    { id: 'doors', name: 'Doors' },
    { id: 'custom', name: 'Custom Woodwork' },
  ];

  const filteredItems = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-light-bg dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div variants={headV} {...mp} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <motion.span variants={riseV} className="block text-xs uppercase tracking-[0.25em] font-semibold text-light-wood dark:text-dark-accent">
              {t('WORK & INSPIRATION GALLERY')}
            </motion.span>
            <motion.h2 variants={riseV} className="text-3xl sm:text-5xl font-serif font-bold text-light-text dark:text-dark-text">
              {t('Craft & Design Portfolio')}
            </motion.h2>
            <motion.p variants={riseV} className="text-sm sm:text-base text-light-subtext dark:text-dark-subtext max-w-xl">
              {t('Explore furniture styles and design possibilities for your home.')}
            </motion.p>
          </div>

          {/* CRITICAL AUTHENTICITY NOTICE BANNER */}
          <motion.div variants={noteV} className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300 max-w-md flex items-start gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">{t('Authenticity Notice')}</span>
              <p className="opacity-90">
                {t('Images shown below represent illustrative furniture design inspiration. Sankar will showcase actual completed workshop photos directly on WhatsApp upon request.')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div variants={pillsV} {...mp} className="flex items-center gap-2 overflow-x-auto px-1 py-3 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={pillV} className="shrink-0">
              <button
                onClick={() => setFilter(cat.id)}
                aria-pressed={filter === cat.id}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 active:scale-95 ${filter === cat.id
                    ? 'bg-light-wood text-white dark:bg-dark-accent dark:text-dark-bg shadow-md'
                    : 'bg-light-card text-light-text dark:bg-dark-card dark:text-dark-text border border-light-border dark:border-dark-border hover:bg-light-secondaryBg dark:hover:bg-dark-secondaryBg'
                  }`}
              >
                {t(cat.name)}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                variants={cardV}
                custom={{ col: i % 3, wide }}
                {...(reduce ? {} : { initial: 'hidden', whileInView: 'show', exit: 'exit', viewport, layout: 'position' as const })}
              >
                <div
                  className="group relative h-full rounded-2xl overflow-hidden bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-light-wood dark:hover:border-dark-accent transition-all duration-500 before:absolute before:inset-0 before:z-10 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 dark:before:via-white/10 before:to-transparent before:transition-transform before:duration-1000 before:pointer-events-none"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                    <SmartImage
                      src={item.image}
                      alt={t(item.title)}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Category badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md">
                      {t(item.categoryLabel)}
                    </span>

                    {/* Authenticity tag */}
                    <span className="absolute top-3 right-3 px-2.5 py-1 transition-transform duration-300 group-hover:scale-110 rounded-full text-[9px] font-semibold bg-amber-500/90 text-black backdrop-blur-md">
                      {t(item.verifiedProject ? 'Verified Project' : 'Sample Inspiration')}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-serif font-bold text-light-text dark:text-dark-text group-hover:text-light-wood dark:group-hover:text-dark-accent transition-colors">
                      {t(item.title)}
                    </h3>
                    <p className="text-xs text-light-subtext dark:text-dark-subtext">
                      {t(item.description)}
                    </p>
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