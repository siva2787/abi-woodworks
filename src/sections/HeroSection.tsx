import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MessageSquareQuote, ArrowRight, MapPin } from 'lucide-react';
import { SmartImage } from '../components/common/SmartImage';
import { BUSINESS_DATA } from '../data/businessData';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreWork: () => void;
}

const HERO_IMAGE = 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1800&q=80';

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote, onExploreWork }) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  const item = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const } };

  return (
    <section ref={ref} id="hero" className="relative min-h-[92svh] lg:min-h-screen flex items-center overflow-hidden bg-light-walnut text-white">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { scale, y }}>
        <SmartImage src={HERO_IMAGE} alt={t('Wooden furniture in a warm interior')} loading="eager" fetchPriority="high" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[repeating-linear-gradient(92deg,#fff_0,#fff_1px,transparent_1px,transparent_9px)]" />

      <motion.div style={reduce ? undefined : { y: textY }} className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative z-10 pt-28 pb-24">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          <motion.div {...item(0.1)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#E3B684] shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#F2D7B6]">{t('Custom Woodwork · Ammachathiram · Kumbakonam')}</span>
          </motion.div>

          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight">
            <motion.span {...item(0.25)} className="block">{t('From Wood')}</motion.span>
            <motion.span {...item(0.4)} className="block italic font-normal text-[#E3B684]">{t('to Something')}</motion.span>
            <motion.span {...item(0.55)} className="block">{t('Worth Keeping.')}</motion.span>
          </h1>

          <motion.p {...item(0.75)} className="text-base sm:text-xl text-white/85 max-w-xl leading-relaxed">
            {t(BUSINESS_DATA.subtagline)}
          </motion.p>

          <motion.div {...item(0.9)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="min-h-[52px] px-8 py-4 rounded-full bg-[#C69A6A] hover:bg-[#E3B684] text-[#211E1A] font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-3 group active:scale-[0.98]"
            >
              <MessageSquareQuote className="w-5 h-5" />
              <span>{t('Create Your Furniture')}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onExploreWork}
              className="min-h-[52px] px-8 py-4 rounded-full border border-white/50 hover:bg-white/10 backdrop-blur-md text-white font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all flex items-center justify-center"
            >
              {t('Explore Our Work')}
            </button>
          </motion.div>
        </div>
      </motion.div>

      <button
        onClick={onExploreWork}
        aria-label={t('Scroll to collection')}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">{t('Scroll to discover')}</span>
        <ChevronDown className="w-4 h-4 motion-safe:animate-bounce" />
      </button>
    </section>
  );
};