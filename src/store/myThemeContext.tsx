'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface MyThemeContextType {
  isDarkTheme: boolean | null;
  toggleThemeHandler: () => void;
}

const MyThemeContext = createContext<MyThemeContextType>({
  isDarkTheme: null,
  toggleThemeHandler: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export function MyThemeContextProvider({ children }: ThemeProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme !== null) {
      const isDark = JSON.parse(savedTheme);
      setIsDarkTheme(isDark);
      document.body.classList.toggle('dark', isDark);
    } else {
      setIsDarkTheme(true);
      localStorage.setItem('isDarkTheme', 'false');
    }
  }, []);

  const toggleThemeHandler = () => {
    if (isDarkTheme !== null) {
      const newTheme = !isDarkTheme;
      setIsDarkTheme(newTheme);
      localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
      document.body.classList.toggle('dark', newTheme);
    }
  };

  return (
    <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
