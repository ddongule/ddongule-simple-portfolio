import { Helmet } from 'react-helmet';
import Home from './components/pages/Home';
import { LanguageContextProvider } from './context/languageContext';
import React from 'react';
import { ThemeChangeContextProvider } from './context/themeChangeContext';
import myData from './db.json';

function App() {
  const {
    meta: { title },
  } = myData;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ThemeChangeContextProvider>
        <LanguageContextProvider>
          <Home />
        </LanguageContextProvider>
      </ThemeChangeContextProvider>
    </>
  );
}

export default App;
