import { createContext, useState } from 'react';

export const ThemeChangeContext = createContext(null);

export const ThemeChangeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeChangeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeChangeContext.Provider>
  );
};
