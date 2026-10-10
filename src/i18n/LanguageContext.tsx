import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { TA } from './ta';

export type Lang = 'en' | 'ta';

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
    t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'abi_lang';
const TITLE_EN = 'ABI Wood Works | Custom Furniture in Kumbakonam';

const readInitial = (): Lang => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'ta' || saved === 'en') return saved;
    } catch {
        /* storage blocked */
    }
    return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLangState] = useState<Lang>(readInitial);

    const t = useCallback((text: string) => (lang === 'ta' ? TA[text] ?? text : text), [lang]);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.title = lang === 'ta' ? TA[TITLE_EN] ?? TITLE_EN : TITLE_EN;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            /* storage blocked */
        }
    }, [lang]);

    const value = useMemo<LanguageContextType>(
        () => ({
            lang,
            t,
            setLang: setLangState,
            toggleLang: () => setLangState((p) => (p === 'en' ? 'ta' : 'en')),
        }),
        [lang, t]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
    return ctx;
};