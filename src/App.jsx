import Home from './components/pages/Home';
import React from 'react';
import { ThemeChangeContextProvider } from './context/themeChangeContext';

function App() {
  return (
    <ThemeChangeContextProvider>
      <Home />
    </ThemeChangeContextProvider>
  );
}

export default App;
