
import React, { useState } from 'react';
import { Language, translations } from '../translations';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const browserLang = typeof navigator !== 'undefined' ? navigator.language.split('-')[0] as Language : 'fr';
    return (['fr', 'en', 'sw'].includes(browserLang)) ? browserLang : 'en';
  });

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
