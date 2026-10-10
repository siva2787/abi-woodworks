import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export const RisingPanel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 45%'] });
    const y = useTransform(scrollYProgress, [0, 1], [140, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0.4, 1]);

    const base =
        'relative z-10 -mt-14 sm:-mt-20 rounded-t-[2rem] sm:rounded-t-[3rem] overflow-hidden bg-light-bg dark:bg-dark-bg shadow-[0_-24px_60px_rgba(0,0,0,0.35)]';

    if (reduce) return <div className={base}>{children}</div>;

    return (
        <motion.div ref={ref} style={{ y, scale, opacity, transformOrigin: 'top center' }} className={base}>
            {children}
        </motion.div>
    );
};