import { LANGUAGE } from '../constants/language';
import { LanguageContext } from '../context/languageContext';
import i18n from '../lang/i18n';
import { useContext } from 'react';

const useLanguage = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

  const changeLanguage = () => {
    if (i18n.language === LANGUAGE.EN) {
      i18n.changeLanguage(LANGUAGE.KO);
      setCurrentLanguage(LANGUAGE.KO);

      return;
    }

    if (i18n.language === LANGUAGE.KO) {
      i18n.changeLanguage(LANGUAGE.EN);
      setCurrentLanguage(LANGUAGE.EN);

      return;
    }
  };

  return { currentLanguage, changeLanguage };
};

export default useLanguage;
