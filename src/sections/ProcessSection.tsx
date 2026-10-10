import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageSquare, Ruler, Palette, Hammer, Sparkles, Truck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.15 };
const headV = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
// Entry direction for each of the 6 cards: left, top, right, bottom-left, bottom, bottom-right
const FROM = [
  { x: -120, y: 0, rotate: -4 },
  { x: 0, y: -90, rotate: 0 },
  { x: 120, y: 0, rotate: 4 },
  { x: -100, y: 90, rotate: -3 },
  { x: 0, y: 110, rotate: 0 },
  { x: 100, y: 90, rotate: 3 },
];
const cardV = {
  hidden: ({ i, wide }: { i: number; wide: boolean }) => ({
    opacity: 0,
    scale: 0.88,
    x: wide ? FROM[i].x : 0,
    y: FROM[i].y || 70,
    rotate: FROM[i].rotate,
  }),
  show: ({ i }: { i: number }) => ({
    opacity: 1, scale: 1, x: 0, y: 0, rotate: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 15, mass: 0.9, delay: (i % 3) * 0.14 },
  }),
};

export const ProcessSection: React.FC = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const wide = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
  const mp = reduce ? {} : { initial: 'hidden', whileInView: 'show', viewport };
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Requirement Discussion',
      description: 'We listen to your furniture needs, room space, design preferences, and intended usage.'
    },
    {
      num: '02',
      icon: Ruler,
      title: 'Measurements',
      description: 'We review your room dimensions and doorway clearance to ensure the piece fits perfectly.'
    },
    {
      num: '03',
      icon: Palette,
      title: 'Material & Design',
      description: 'You select the timber species (Teak, Rosewood, Hardwood) and desired polish shade.'
    },
    {
      num: '04',
      icon: Hammer,
      title: 'Crafting',
      description: 'Sankar executes the woodworking using precise traditional joinery and solid timber.'
    },
    {
      num: '05',
      icon: Sparkles,
      title: 'Finishing',
      description: 'Sanding, sealer coats, stain matching, and protective topcoats are applied by hand.'
    },
    {
      num: '06',
      icon: Truck,
      title: 'Handover',
      description: 'Your completed furniture is handed over or delivered according to your agreement.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-light-secondaryBg/40 dark:bg-dark-secondaryBg/40 border-y border-light-border/60 dark:border-dark-border/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div variants={headV} {...mp} className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-light-wood dark:text-dark-accent">
            {t('OUR WORKFLOW')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-light-text dark:text-dark-text">
            {t('From Initial Idea to Handover')}
          </h2>
          <p className="text-sm sm:text-base text-light-subtext dark:text-dark-subtext font-sans">
            {t('A clear 6-step collaborative woodworking journey designed around clarity and craftsmanship.')}
          </p>
        </motion.div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.num} variants={cardV} custom={{ i, wide }} {...mp}>
                <div
                  className="group relative h-full overflow-hidden p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-md transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:border-light-wood dark:hover:border-dark-accent before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 dark:before:via-white/10 before:to-transparent before:transition-transform before:duration-700 before:pointer-events-none"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-serif font-bold text-light-wood/40 dark:text-dark-accent/40 transition-all duration-500 group-hover:text-light-wood dark:group-hover:text-dark-accent group-hover:scale-125 group-hover:origin-left">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-light-wood/10 dark:bg-dark-accent/10 flex items-center justify-center text-light-wood dark:text-dark-accent transition-all duration-500 group-hover:bg-light-wood group-hover:text-white dark:group-hover:bg-dark-accent dark:group-hover:text-dark-bg group-hover:rotate-[360deg] group-hover:scale-110">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-light-text dark:text-dark-text">
                      {t(step.title)}
                    </h3>

                    <p className="text-xs text-light-subtext dark:text-dark-subtext leading-relaxed">
                      {t(step.description)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};