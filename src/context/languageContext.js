import { createContext, useState } from 'react';

import { LANGUAGE } from '../constants/language';

export const LanguageContext = createContext(null);

export const LanguageContextProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGE.KO);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
