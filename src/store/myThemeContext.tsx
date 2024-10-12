'use client';
import { createContext, ReactElement, useEffect, useState } from 'react';

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    initialThemeHandler();
  }, []);

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem('isDarkTheme');
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('isDarkTheme', 'true');
      document.querySelector('body')!.classList.add('dark');
      setIsDarkTheme(true);
    } else {
      const storedTheme: boolean = JSON.parse(
        localStorage.getItem('isDarkTheme')!
      );
      if (storedTheme) {
        document.querySelector('body')!.classList.add('dark');
      } else {
        document.querySelector('body')!.classList.remove('dark');
      }
      setIsDarkTheme(storedTheme);
    }
  }

  function toggleThemeHandler(): void {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.querySelector('body')!.classList.toggle('dark', newTheme);
    localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
  }

  return (
    <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
