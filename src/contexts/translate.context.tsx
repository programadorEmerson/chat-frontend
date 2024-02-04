'use client';

import { createContext, FC, memo, ReactNode, useMemo, useState } from 'react';

import { parseCookies, setCookie } from 'nookies';

import { supportedLanguages } from '@/constants/languages.constants';
import { keyCookieLanguage, COOKIE_CONFIG } from '@/constants/ref.constants';

export type LanguageProps = typeof supportedLanguages[number];

type TranslationData = Record<LanguageProps, Record<string, string>>;

export type TranslateContextProps = {
  language: LanguageProps;
  changeLanguage: (language: LanguageProps) => void;
  translate: <T extends TranslationData>(data: T) => T[LanguageProps];
};

const { [keyCookieLanguage] : setupLanguage } = parseCookies();

const TranslateContext = createContext({} as TranslateContextProps);

const TranslateProvider: FC<{ children: ReactNode }> = memo(({ children }) => {
  const [language, setLanguage] = useState<LanguageProps>(() => {
    if (setupLanguage) return setupLanguage as LanguageProps;
    return supportedLanguages[0];
  });

  const changeLanguage = (language: LanguageProps) => setLanguage(() => {
    setCookie(undefined, keyCookieLanguage, language, { ...COOKIE_CONFIG });
    return language;
  });

  const translate = <T extends TranslationData>(data: T): T[LanguageProps] => {
    if (typeof window === 'undefined') return data[setupLanguage as LanguageProps];
    return data[language] || data[setupLanguage as LanguageProps];
  };

  const valuesContext = useMemo(() => ({ changeLanguage, translate, language }), [language]);

  return(
    <TranslateContext.Provider value={valuesContext}>
      {children}
    </TranslateContext.Provider>
  );
});

TranslateProvider.displayName = 'TranslateProvider';

export { TranslateContext, TranslateProvider };
