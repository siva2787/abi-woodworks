import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SmartImage } from '../components/common/SmartImage';
import { Ruler, Hammer, Paintbrush, Compass } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 'some' as const };
const frameV = { hidden: { opacity: 0, x: -90, scale: 0.95 }, show: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease, staggerChildren: 0.2, delayChildren: 0.3 } } };
const photoV = { hidden: { scale: 1.35 }, show: { scale: 1, transition: { duration: 1.6, ease } } };
const quoteV = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: 0.6 } } };
const headV = { hidden: { opacity: 0, x: 70 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, ease } } };
const gridV = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } } };
const cardV = {
  hidden: (i: number) => ({ opacity: 0, y: 60, x: i % 2 === 0 ? -40 : 40, rotate: i % 2 === 0 ? -3 : 3 }),
  show: { opacity: 1, y: 0, x: 0, rotate: 0, transition: { type: 'spring' as const, stiffness: 110, damping: 15 } },
};

export const CraftsmanshipSection: React.FC = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const mp = reduce ? {} : { initial: 'hidden', whileInView: 'show', viewport };
  const steps = [
    {
      icon: Ruler,
      title: '1. Precision Measurements',
      description: 'Every room is unique. We take into account exact floor plan dimensions, door clearance, and room height so your furniture fits seamlessly.'
    },
    {
      icon: Compass,
      title: '2. Design Discussion',
      description: 'Discuss your preferred headboard shapes, sofa cushion depth, drawer counts, and decorative carvings directly with Sankar.'
    },
    {
      icon: Hammer,
      title: '3. Solid Wood Construction',
      description: 'Built using traditional mortise-and-tenon joinery and durable wood adhesives that guarantee long-lasting structural integrity.'
    },
    {
      icon: Paintbrush,
      title: '4. Multi-Layer Polish',
      description: 'Finished with meticulous hand-rubbed wood stains, sealer coats, and protective gloss or matte polyurethane coats.'
    }
  ];

  return (
    <section id="craftsmanship" className="py-24 bg-light-bg dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Image Editorial Collage */}
          <motion.div variants={frameV} {...mp} className="lg:col-span-6 relative">
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-light-border dark:border-dark-border">
              <motion.div variants={photoV} className="absolute inset-0">
                <SmartImage
                  src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80"
                  alt={t('Woodworking Craftsmanship')}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Quote Overlay */}
              <motion.div variants={quoteV} className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-light-card/90 dark:bg-dark-card/90 backdrop-blur-md border border-light-border dark:border-dark-border shadow-lg">
                <p className="font-serif italic text-sm sm:text-base text-light-text dark:text-dark-text">
                  "{t("Furniture shouldn't just fill a space. It should feel like it was born there.")}"
                </p>
                <span className="text-[11px] font-sans uppercase font-bold tracking-wider text-light-wood dark:text-dark-accent mt-2 block">
                  {t('— Sankar, Master Craftsman')}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Steps */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div variants={headV} {...mp} className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-light-wood dark:text-dark-accent">
                {t('PHILOSOPHY & TECHNIQUE')}
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-light-text dark:text-dark-text leading-tight">
                {t('Made by Hand.')} <br />
                {t('Made for Your Space.')}
              </h2>
            </motion.div>

            <motion.div variants={gridV} {...mp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div key={idx} variants={cardV} custom={idx}>
                    <div className="group h-full p-5 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border/70 dark:border-dark-border/70 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-light-wood dark:hover:border-dark-accent">
                      <div className="w-10 h-10 rounded-xl bg-light-wood/10 dark:bg-dark-accent/10 flex items-center justify-center text-light-wood dark:text-dark-accent mb-3 transition-all duration-500 group-hover:bg-light-wood group-hover:text-white dark:group-hover:bg-dark-accent dark:group-hover:text-dark-bg group-hover:rotate-12 group-hover:scale-110">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-serif font-bold text-light-text dark:text-dark-text mb-1.5">
                        {t(step.title)}
                      </h3>
                      <p className="text-xs text-light-subtext dark:text-dark-subtext leading-relaxed">
                        {t(step.description)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};