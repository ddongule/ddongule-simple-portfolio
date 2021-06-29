import Home from './components/pages/Home';
import React from 'react';
import { ThemeChangeContextProvider } from './context/themeChangeContext';
import { Helmet } from 'react-helmet';
import myData from './db.json';

function App() {
  const {
    meta: { title },
  } = myData;

  return (
    <ThemeChangeContextProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Home />
    </ThemeChangeContextProvider>
  );
}

export default App;
