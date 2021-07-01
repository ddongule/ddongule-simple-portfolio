import { createContext, useState } from 'react';

import myData from '../db.json';

export const LanguageContext = createContext(null);

export const LanguageContextProvider = ({ children }) => {
  const {
    meta: { defaultLanguage },
  } = myData;
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
