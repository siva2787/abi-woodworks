import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Navigation, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { useLanguage } from '../i18n/LanguageContext';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const LAT = 10.985987214774537;
const LNG = 79.42311211308093;
const MAP_EMBED = `https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  const { t } = useLanguage();
  const rm = useReducedMotion();

  const card: Variants = {
    hidden: { opacity: 0, y: rm ? 0 : 50, scale: rm ? 1 : 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease, staggerChildren: 0.12, delayChildren: 0.25 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: rm ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };
  const words: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
  };
  const word: Variants = {
    hidden: { y: rm ? '0%' : '115%' },
    show: { y: '0%', transition: { duration: 0.7, ease } },
  };
  const bar: Variants = {
    hidden: { scaleX: rm ? 1 : 0 },
    show: { scaleX: 1, transition: { duration: 0.8, ease } },
  };
  const grid: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const btn: Variants = {
    hidden: { opacity: 0, y: rm ? 0 : 36, scale: rm ? 1 : 0.94 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease } },
  };

  const sheen = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[320%]"
    />
  );
  const iconCls = 'relative w-7 h-7 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12';
  const hover = rm ? undefined : { y: -6, scale: 1.03 };

  return (
    <section
      id="contact"
      className="py-24 bg-light-bg dark:bg-dark-bg transition-colors relative overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-light-wood/5 dark:bg-dark-accent/5 rounded-full blur-3xl pointer-events-none"
        animate={rm ? undefined : { scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-3xl bg-gradient-to-br from-light-card to-light-secondaryBg/80 dark:from-dark-card dark:to-dark-secondaryBg/80 border border-light-border dark:border-dark-border p-8 sm:p-14 shadow-2xl text-center space-y-8"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <motion.span
              variants={item}
              className="block text-xs uppercase tracking-[0.25em] font-semibold text-light-wood dark:text-dark-accent"
            >
              {t('GET IN TOUCH WITH SANKAR')}
            </motion.span>

            <motion.h2
              variants={words}
              className="text-3xl sm:text-5xl font-serif font-bold text-light-text dark:text-dark-text leading-tight"
            >
              {t("Let's Make Something That Feels Like Home.")
                .split(' ')
                .map((w, i) => (
                  <span key={i} className="inline-block overflow-hidden align-bottom py-1 mr-[0.25em]">
                    <motion.span className="inline-block" variants={word}>
                      {w}
                    </motion.span>
                  </span>
                ))}
            </motion.h2>

            <motion.div
              variants={bar}
              className="h-[3px] w-20 mx-auto rounded-full bg-light-wood dark:bg-dark-accent origin-center"
            />

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-light-subtext dark:text-dark-subtext font-sans leading-relaxed"
            >
              {t('Tell us about the furniture you need, your design idea, or your space. Start a conversation and discuss your requirements.')}
            </motion.p>
          </div>

          <motion.div
            variants={grid}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4"
          >
            <motion.a
              variants={btn}
              whileHover={hover}
              whileTap={{ scale: 0.96 }}
              href={BUSINESS_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-[background-color,box-shadow] flex flex-col items-center justify-center gap-2"
            >
              {sheen}
              <MessageCircle className={`${iconCls} fill-current`} />
              <span className="relative text-xs uppercase tracking-wider font-bold">{t('CHAT ON WHATSAPP')}</span>
              <span className="relative text-[11px] opacity-90">{BUSINESS_DATA.phoneDisplay}</span>
            </motion.a>

            <motion.a
              variants={btn}
              whileHover={hover}
              whileTap={{ scale: 0.96 }}
              href={BUSINESS_DATA.phoneTel}
              className="group relative overflow-hidden p-5 rounded-2xl bg-light-wood hover:bg-light-walnut dark:bg-dark-accent dark:text-dark-bg text-white shadow-lg hover:shadow-xl transition-[background-color,box-shadow] flex flex-col items-center justify-center gap-2"
            >
              {sheen}
              <Phone className={iconCls} />
              <span className="relative text-xs uppercase tracking-wider font-bold">{t('CALL SANKAR')}</span>
              <span className="relative text-[11px] opacity-90">{BUSINESS_DATA.phoneDisplay}</span>
            </motion.a>

            <motion.button
              variants={btn}
              whileHover={hover}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenQuote}
              className="group relative overflow-hidden p-5 rounded-2xl bg-light-card dark:bg-dark-card border border-light-wood/40 dark:border-dark-accent/40 text-light-text dark:text-dark-text hover:bg-light-secondaryBg dark:hover:bg-dark-secondaryBg shadow-md hover:shadow-xl transition-[background-color,box-shadow] flex flex-col items-center justify-center gap-2"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-light-wood/10 dark:via-dark-accent/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[320%]"
              />
              <MessageSquareQuote className={`${iconCls} text-light-wood dark:text-dark-accent`} />
              <span className="relative text-xs uppercase tracking-wider font-bold">{t('SUBMIT ENQUIRY')}</span>
              <span className="relative text-[11px] text-light-subtext dark:text-dark-subtext">{t('Fill Quick Form')}</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={item}
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-light-border dark:border-dark-border shadow-xl bg-light-card dark:bg-dark-card"
          >
            <iframe
              title={t('Workshop Location')}
              src={MAP_EMBED}
              className="block w-full h-72 sm:h-80 border-0 dark:invert-[.9] dark:hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 border-t border-light-border dark:border-dark-border text-xs text-light-subtext dark:text-dark-subtext">
              <div className="flex items-center gap-3 text-left">
                <span className="relative flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-light-wood/10 dark:bg-dark-accent/10 text-light-wood dark:text-dark-accent">
                  <MapPin className="relative w-4 h-4" />
                </span>
                <span className="font-semibold text-light-text dark:text-dark-text">
                  {t(BUSINESS_DATA.location.fullAddress)}
                </span>
              </div>

              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-xl bg-light-wood hover:bg-light-walnut dark:bg-dark-accent dark:text-dark-bg text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-[background-color,box-shadow,transform] duration-300 shrink-0"
              >
                {sheen}
                <Navigation className="relative w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span className="relative">{t('Get Directions')}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};