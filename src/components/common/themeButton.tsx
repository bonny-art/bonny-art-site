'use client';
import { useContext } from 'react';
import MyThemeContext from '../../store/myThemeContext';
import Sun from '@/../public/images/icons/sun.svg';
import Moon from '@/../public/images/icons/moon.svg';
import context from '@/data/common.json';

export default function ThemeButton() {
  const { isDarkTheme, toggleThemeHandler } = useContext(MyThemeContext);
 


  if ( isDarkTheme === null) {
    return null; 
  }

  return (
    <button
      type="button"
      className="w-[50px] h-[50px] bg-orangeLight dark:bg-darkAccentColor rounded-full inline-flex justify-center items-center transition-transform duration-200 hover:scale-110 focus:scale-110"
      onClick={toggleThemeHandler}
      aria-label={
        isDarkTheme
          ? context.themebutton.sunAriaLabel
          : context.themebutton.moonAriaLabel
      }
    >
      {isDarkTheme ? (
        <Sun width={44} height={44} />
      ) : (
        <Moon width={44} height={44} />
      )}
    </button>
  );
}
