import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface ChipScrollerProps {
    children: React.ReactNode;
    className?: string;
}

export const ChipScroller: React.FC<ChipScrollerProps> = ({ children, className = '' }) => {
    const { t } = useLanguage();
    const ref = useRef<HTMLDivElement>(null);
    const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });
    const [dragging, setDragging] = useState(false);
    const [s, setS] = useState({ scrollable: false, left: false, right: false });

    const update = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        setS({
            scrollable: max > 2,
            left: el.scrollLeft > 2,
            right: el.scrollLeft < max - 2,
        });
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        Array.from(el.children).forEach((c) => ro.observe(c));
        return () => ro.disconnect();
    }, [update]);

    const scrollByDir = (dir: 1 | -1) => {
        const el = ref.current;
        if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' });
    };

    const onPointerDown = (e: React.PointerEvent) => {
        if (e.pointerType !== 'mouse' || e.button !== 0 || !ref.current) return;
        drag.current = { down: true, startX: e.clientX, startLeft: ref.current.scrollLeft, moved: false };
    };
    const onPointerMove = (e: React.PointerEvent) => {
        const d = drag.current;
        if (!d.down || !ref.current) return;
        const dx = e.clientX - d.startX;
        if (!d.moved && Math.abs(dx) > 5) {
            d.moved = true;
            setDragging(true);
        }
        if (d.moved) ref.current.scrollLeft = d.startLeft - dx;
    };
    const endDrag = () => {
        drag.current.down = false;
        setDragging(false);
    };
    const onClickCapture = (e: React.MouseEvent) => {
        if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
        }
    };

    const mask = `linear-gradient(to right, ${s.left ? 'transparent' : '#000'} 0, #000 56px, #000 calc(100% - 56px), ${s.right ? 'transparent' : '#000'
        } 100%)`;

    const arrow =
        'hidden md:flex absolute top-[26px] -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-light-card/95 dark:bg-dark-card/95 text-light-wood dark:text-dark-accent border border-light-border dark:border-dark-border shadow-lg backdrop-blur transition-all duration-300 hover:bg-light-wood hover:text-white dark:hover:bg-dark-accent dark:hover:text-dark-bg hover:scale-110';

    return (
        <div className={`relative ${className}`}>
            <div
                ref={ref}
                onScroll={update}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerLeave={endDrag}
                onClickCapture={onClickCapture}
                className={`flex items-center gap-2 overflow-x-auto px-1 py-3 scrollbar-none select-none ${s.scrollable ? (dragging ? 'cursor-grabbing' : 'cursor-grab') : ''
                    }`}
                style={{ maskImage: mask, WebkitMaskImage: mask, overscrollBehaviorX: 'contain' }}
            >
                {children}
            </div>

            <button
                type="button"
                aria-label={t('Scroll left')}
                onClick={() => scrollByDir(-1)}
                tabIndex={s.left ? 0 : -1}
                className={`${arrow} left-0 ${s.left ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                type="button"
                aria-label={t('Scroll right')}
                onClick={() => scrollByDir(1)}
                tabIndex={s.right ? 0 : -1}
                className={`${arrow} right-0 ${s.right ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};