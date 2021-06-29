import './index.scss';

import React, { useContext, useEffect } from 'react';

import { ThemeChangeContext } from '../../context/themeChangeContext';
import i18n from '../../lang/i18n';

const ThemeMode = () => {
  const { setDarkTheme } = useContext(ThemeChangeContext);

  const toggleDarkTheme = () => {
    if (document.body.dataset.theme === 'dark-mode') {
      localStorage.removeItem('theme');
      document.body.removeAttribute('data-theme');
      setDarkTheme(false);
      return;
    }

    localStorage.setItem('theme', 'dark-mode');
    document.body.setAttribute('data-theme', 'dark-mode');
    setDarkTheme(true);
  };

  useEffect(() => {
    const getDarkModeFromLocalStorage = () => {
      if (localStorage.getItem('theme') === 'dark-mode') {
        document.body.setAttribute('data-theme', 'dark-mode');
        setDarkTheme(true);
      }
    };

    getDarkModeFromLocalStorage();
  }, [setDarkTheme]);

  const changeLanguage = () => {
    if (i18n.language === 'en-US') {
      i18n.changeLanguage('ko-KR');
      return;
    }

    if (i18n.language === 'ko-KR') {
      i18n.changeLanguage('en-US');
      return;
    }
  };
  return (
    <div className='container'>
      <div className='language'>
        <select defaultValue='Korean' onChange={changeLanguage}>
          <option value='Korean'>Korean 🇰🇷</option>
          <option value='English'>English 🇺🇸</option>
        </select>
      </div>
      <div className='theme-container'>
        <button onClick={toggleDarkTheme}></button>
      </div>
    </div>
  );
};

export default ThemeMode;
