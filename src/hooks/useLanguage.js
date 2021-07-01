import { LanguageContext } from '../context/languageContext';
import i18n from '../lang/i18n';
import { useContext } from 'react';

const useLanguage = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

  const changeLanguage = () => {
    if (i18n.language === 'en-US') {
      i18n.changeLanguage('ko-KR');
      setCurrentLanguage('ko-KR');

      return;
    }

    if (i18n.language === 'ko-KR') {
      i18n.changeLanguage('en-US');
      setCurrentLanguage('en-US');

      return;
    }
  };

  return { currentLanguage, changeLanguage };
};

export default useLanguage;
