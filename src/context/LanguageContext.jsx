import React, { createContext, useContext, useState, useEffect } from 'react';
import { CONTENT } from '../data/content';
import { COMPANY_INFO } from '../data/company';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('marwan_movers_lang');
      return saved === 'ar' ? 'ar' : 'en';
    } catch {
      return 'en';
    }
  });

  const isRtl = language === 'ar';
  const t = CONTENT[language] || CONTENT.en;

  useEffect(() => {
    try {
      localStorage.setItem('marwan_movers_lang', language);
    } catch (e) {
      console.warn('Could not save language to localStorage', e);
    }

    const html = document.documentElement;
    html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    html.setAttribute('lang', language);

    if (language === 'ar') {
      document.title = `${COMPANY_INFO.nameAr} | نقل وتغليف احترافي في الإمارات`;
    } else {
      document.title = `${COMPANY_INFO.name} | Professional Movers in UAE`;
    }
  }, [language, isRtl]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
