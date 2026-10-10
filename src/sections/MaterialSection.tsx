import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SmartImage } from '../components/common/SmartImage';
import { Sparkles, Layers, Shield, Droplets } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.2 };
const headV = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
const cardV = {
  hidden: ({ x }: { x: number }) => ({ opacity: 0, y: 100, x, scale: 0.94 }),
  show: ({ i }: { i: number }) => ({
    opacity: 1, y: 0, x: 0, scale: 1,
    transition: { duration: 0.9, ease, delay: i * 0.18, staggerChildren: 0.15, delayChildren: i * 0.18 + 0.15 },
  }),
};
const clipV = { hidden: { clipPath: 'inset(0 0 100% 0)' }, show: { clipPath: 'inset(0 0 0% 0)', transition: { duration: 1.1, ease } } };
const imgV = { hidden: { scale: 1.4 }, show: { scale: 1, transition: { duration: 1.5, ease } } };
const tagV = { hidden: { opacity: 0, x: -28 }, show: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.6, ease } } };
const textV = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };
const badgesV = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const badgeV = {
  hidden: { opacity: 0, y: 36, scale: 0.85 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 200, damping: 16 } },
};

const badges = [
  { Icon: Layers, label: 'Solid Seasoned Timber' },
  { Icon: Droplets, label: 'Moisture Treatment' },
  { Icon: Shield, label: 'Precision Joinery' },
  { Icon: Sparkles, label: 'Custom Polish Finish' },
];

export const MaterialSection: React.FC = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const wide = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
  const mp = reduce ? {} : { initial: 'hidden', whileInView: 'show', viewport };
  const materials = [
    {
      name: 'First Quality Teak Wood',
      tag: 'Premium & Weather-Resistant',
      description: 'Renowned for rich natural oil content, golden grain aesthetics, and exceptional durability against humidity.',
      image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Rosewood & Hardwoods',
      tag: 'Dense & Timeless Strength',
      description: 'Heavy timber with deep dark chocolate tones and elegant natural ring patterns ideal for heritage dining tables and doors.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Selected Country Timber',
      tag: 'Versatile & Practical Choice',
      description: 'Carefully seasoned native timber suitable for sturdy wardrobes, cot frames, and utility household woodwork.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <section id="material" className="py-20 bg-light-secondaryBg/50 dark:bg-dark-secondaryBg/40 border-y border-light-border/60 dark:border-dark-border/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div variants={headV} {...mp} className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-light-wood dark:text-dark-accent">
            {t('THE ESSENCE OF CRAFT')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-light-text dark:text-dark-text">
            {t('Every Piece Begins With an Idea.')}
          </h2>
          <p className="text-base sm:text-lg text-light-subtext dark:text-dark-subtext font-sans leading-relaxed">
            {t('Different spaces, different needs, and different designs. We help turn your furniture requirements into practical wooden creations.')}
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((mat, idx) => (
            <motion.div
              key={idx}
              variants={cardV}
              custom={{ x: wide ? (idx - 1) * 90 : 0, i: idx }}
              {...mp}
              className="group relative rounded-2xl overflow-hidden bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Zoom hover */}
              <motion.div variants={clipV} className="relative aspect-[16/10] overflow-hidden bg-black/10">
                <motion.div variants={imgV} className="w-full h-full">
                  <SmartImage
                    src={mat.image}
                    alt={t(mat.name)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <motion.span variants={tagV} className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-light-wood/90 text-white dark:bg-dark-accent dark:text-dark-bg backdrop-blur-md">
                  {t(mat.tag)}
                </motion.span>
              </motion.div>

              {/* Text info */}
              <motion.div variants={textV} className="p-6 space-y-3">
                <h3 className="text-xl font-serif font-bold text-light-text dark:text-dark-text group-hover:text-light-wood dark:group-hover:text-dark-accent transition-colors">
                  {t(mat.name)}
                </h3>
                <p className="text-sm text-light-subtext dark:text-dark-subtext leading-relaxed">
                  {t(mat.description)}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quality Badges */}
        <motion.div variants={badgesV} {...mp} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {badges.map(({ Icon, label }) => (
            <motion.div key={label} variants={badgeV}>
              <div className="group/b relative h-full overflow-hidden p-5 rounded-xl bg-light-card/80 dark:bg-dark-card/80 border border-light-border/60 dark:border-dark-border/60 flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-light-wood/20 dark:hover:shadow-dark-accent/20 hover:border-light-wood dark:hover:border-dark-accent before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 dark:before:via-white/10 before:to-transparent before:transition-transform before:duration-700 before:pointer-events-none">
                <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-light-wood/10 dark:bg-dark-accent/10 ring-1 ring-light-wood/20 dark:ring-dark-accent/20 transition-all duration-500 group-hover/b:bg-light-wood dark:group-hover/b:bg-dark-accent group-hover/b:rotate-[360deg] group-hover/b:scale-110">
                  <Icon className="w-6 h-6 text-light-wood dark:text-dark-accent transition-colors duration-500 group-hover/b:text-white dark:group-hover/b:text-dark-bg" />
                </span>
                <span className="relative text-xs font-semibold text-light-text dark:text-dark-text">{t(label)}</span>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-light-wood dark:bg-dark-accent transition-all duration-500 group-hover/b:w-3/4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};