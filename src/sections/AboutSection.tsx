import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SmartImage } from '../components/common/SmartImage';
import { User, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { useLanguage } from '../i18n/LanguageContext';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const rm = useReducedMotion();
  const [verified, setVerified] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const onEnter = () => {
    setVerified(true);
    setTapCount((c) => c + 1);
  };
  const onLeave = () => setVerified(false);


  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: rm ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };
  const line: Variants = {
    hidden: { y: rm ? '0%' : '110%' },
    show: { y: '0%', transition: { duration: 0.8, ease } },
  };
  const bar: Variants = {
    hidden: { scaleX: rm ? 1 : 0 },
    show: { scaleX: 1, transition: { duration: 0.8, ease } },
  };

  const cardBase =
    'group relative overflow-hidden p-4 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border/80 dark:border-dark-border/80 shadow-sm flex items-start gap-3 transition-[box-shadow,border-color] duration-300 hover:shadow-xl hover:border-light-wood/40 dark:hover:border-dark-accent/40';
  const iconBox =
    'relative w-10 h-10 rounded-xl bg-light-wood/10 dark:bg-dark-accent/10 flex items-center justify-center text-light-wood dark:text-dark-accent shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6';

  const sheen = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-light-wood/10 dark:via-dark-accent/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[320%]"
    />
  );

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-light-secondaryBg/40 dark:bg-dark-secondaryBg/40 border-t border-light-border/60 dark:border-dark-border/60 transition-colors"
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Sankar portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[min(100%,calc(min(78vh,680px)*0.584))]">

              <motion.div
                className="group relative z-10 select-none aspect-[935/1600] rounded-3xl overflow-hidden shadow-2xl border border-light-border dark:border-dark-border"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                initial={{ opacity: 0, x: rm ? 0 : -140 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, ease }}
              >
                <div className="absolute inset-0">
                  <SmartImage
                    src="/images/sankar.png"
                    alt={t(BUSINESS_DATA.owner)}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <motion.div
                  className="absolute top-3 right-3 z-20"
                  initial={{ opacity: 0, scale: rm ? 1 : 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, ease }}
                >
                  <div className="relative">
                    {verified && (
                      <motion.span
                        key={tapCount}
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-emerald-500"
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 2.6, opacity: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                      />
                    )}
                    <motion.div
                      key={tapCount}
                      className={`relative w-8 h-8 rounded-full backdrop-blur-md border shadow-lg flex items-center justify-center transition-colors duration-300 ${verified
                          ? 'bg-emerald-500 border-emerald-400 text-white'
                          : 'bg-light-card/90 dark:bg-dark-card/90 border-light-border dark:border-dark-border text-light-wood dark:text-dark-accent'
                        }`}
                      initial={tapCount ? { scale: 0.5 } : false}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                    >
                      <ShieldCheck className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>

          {/* Right Column: Editorial Details */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.span
              variants={item}
              className="block text-xs uppercase tracking-[0.25em] font-semibold text-light-wood dark:text-dark-accent"
            >
              {t('ABOUT ABI WOOD WORKS')}
            </motion.span>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-light-text dark:text-dark-text leading-tight">
              <span className="block overflow-hidden py-1">
                <motion.span className="block" variants={line}>
                  {t('Local Craftsmanship.')}
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span className="block" variants={line}>
                  {t('Personal Attention.')}
                </motion.span>
              </span>
            </h2>

            <motion.div
              variants={bar}
              className="h-[3px] w-20 rounded-full bg-light-wood dark:bg-dark-accent origin-left"
            />

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-light-subtext dark:text-dark-subtext font-sans leading-relaxed"
            >
              {t('ABI WOOD WORKS is a custom woodwork and furniture business based in Ammachathiram, near Kumbakonam, Thanjavur District, Tamil Nadu. Owned by Sankar, the business creates wooden furniture and customized woodwork according to customer requirements.')}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <motion.div
                variants={item}
                whileHover={rm ? undefined : { y: -4 }}
                className={cardBase}
              >
                {sheen}
                <div className={iconBox}>
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-light-subtext dark:text-dark-subtext block">
                    {t('Owner & Master Carpenter')}
                  </span>
                  <span className="text-base font-serif font-bold text-light-text dark:text-dark-text">
                    {t(BUSINESS_DATA.owner)}
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={rm ? undefined : { y: -4 }}
                className={cardBase}
              >
                {sheen}
                <div className={iconBox}>
                  <span aria-hidden className="absolute inset-0 rounded-xl bg-light-wood/30 dark:bg-dark-accent/30 opacity-0 group-hover:animate-ping" />
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-light-subtext dark:text-dark-subtext block">
                    {t('Direct Phone / WhatsApp')}
                  </span>
                  <a
                    href={BUSINESS_DATA.phoneTel}
                    className="text-base font-serif font-bold text-light-wood dark:text-dark-accent hover:underline"
                  >
                    {BUSINESS_DATA.phoneDisplay}
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={item}
              whileHover={rm ? undefined : { y: -4 }}
              className={cardBase}
            >
              {sheen}
              <div className={iconBox}>
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-light-subtext dark:text-dark-subtext block">
                  {t('Workshop Location')}
                </span>
                <span className="text-sm font-semibold text-light-text dark:text-dark-text block">
                  {t(BUSINESS_DATA.location.fullAddress)}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};