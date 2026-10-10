import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SmartImage } from '../components/common/SmartImage';
import { MessageSquareQuote, Check, FileText, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface CustomWorkSectionProps {
  onOpenQuote: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 'some' as const };
const colV = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };
const riseV = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
const listV = { hidden: {}, show: { transition: { staggerChildren: 0.18 } } };
const stepV = { hidden: { opacity: 0, x: -70 }, show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 110, damping: 16 } } };
const panelV = {
  hidden: { opacity: 0, x: 100, scale: 0.92 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease, staggerChildren: 0.2, delayChildren: 0.4 } },
};
const photoV = { hidden: { scale: 1.4 }, show: { scale: 1, transition: { duration: 1.6, ease } } };

export const CustomWorkSection: React.FC<CustomWorkSectionProps> = ({ onOpenQuote }) => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const mp = reduce ? {} : { initial: 'hidden', whileInView: 'show', viewport };
  const steps = [
    {
      num: '01',
      title: 'Share Your Idea',
      description: 'Send us a photo from Pinterest, a simple hand sketch, or describe the furniture piece you envision.'
    },
    {
      num: '02',
      title: 'Discuss Design & Measurements',
      description: 'We check your room dimensions, recommend the ideal solid timber type (Teak, Rosewood, or Hardwood), and provide an estimate.'
    },
    {
      num: '03',
      title: 'Confirm & Crafting',
      description: 'Once design details and materials are agreed upon, we craft your furniture by hand to your exact specifications.'
    }
  ];

  return (
    <section id="custom-work" className="py-24 bg-light-bg dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Narrative Content */}
          <motion.div variants={colV} {...mp} className="lg:col-span-6 space-y-6">
            <motion.span variants={riseV} className="block text-xs uppercase tracking-[0.25em] font-semibold text-light-wood dark:text-dark-accent">
              {t('TAILORED CARPENTRY')}
            </motion.span>
            <motion.h2 variants={riseV} className="text-3xl sm:text-5xl font-serif font-bold text-light-text dark:text-dark-text leading-tight">
              {t('Your Idea.')} <br />
              {t('Your Measurements.')} <br />
              <span className="italic font-normal text-light-wood dark:text-dark-accent">{t('Your Furniture.')}</span>
            </motion.h2>
            <motion.p variants={riseV} className="text-base sm:text-lg text-light-subtext dark:text-dark-subtext font-sans leading-relaxed">
              {t('Share your design idea, reference image, sketch, or approximate measurements. Discuss a custom wooden solution for your home or business directly with Sankar.')}
            </motion.p>

            {/* 3 Steps List */}
            <motion.div variants={listV} className="space-y-4 pt-4">
              {steps.map((step) => (
                <motion.div key={step.num} variants={stepV}>
                  <div className="group flex gap-4 p-4 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border/70 dark:border-dark-border/70 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:translate-x-1 hover:shadow-xl hover:border-light-wood dark:hover:border-dark-accent">
                    <span className="text-2xl font-serif font-bold text-light-wood dark:text-dark-accent shrink-0 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-base font-serif font-bold text-light-text dark:text-dark-text">
                        {t(step.title)}
                      </h3>
                      <p className="text-xs text-light-subtext dark:text-dark-subtext mt-1">
                        {t(step.description)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Trigger */}
            <motion.div variants={riseV} className="pt-4">
              <button
                onClick={onOpenQuote}
                className="group relative overflow-hidden px-8 py-4 rounded-full bg-light-wood hover:bg-light-walnut dark:bg-dark-accent dark:text-dark-bg text-white font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />
                <MessageSquareQuote className="relative w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span className="relative">{t('START CUSTOM FURNITURE DISCUSSION')}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Measurement Annotated Blueprint Illustration */}
          <motion.div variants={panelV} {...mp} className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-light-secondaryBg/80 dark:bg-dark-secondaryBg/80 border border-light-border dark:border-dark-border p-6 sm:p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              {/* Image Graphic */}
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/10 border border-light-border dark:border-dark-border">
                <motion.div variants={photoV} className="absolute inset-0">
                  <SmartImage
                    src="/images/custom-work.jpg"
                    alt={t('Carpenter cutting timber in the workshop')}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};