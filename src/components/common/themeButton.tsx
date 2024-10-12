'use client';
import { useContext } from 'react';
import MyThemeContext from '../../store/myThemeContext';
import Sun from '@/../public/images/icons/sun.svg';
import Moon from '@/../public/images/icons/moon.svg';
import context from '@/data/common.json';

export default function ThemeButton() {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <button
      type="button"
      className="w-[50px] h-[50px] bg-orangeLight dark:bg-darkAccentColor rounded-full inline-flex justify-center items-center animation hover:scale-110 focus:scale-110"
      onClick={toggleThemeHandler}
    >
      {themeCtx.isDarkTheme ? (
        <Sun
          width={44}
          height={44}
          aria-label={context.themebutton.sunAriaLabel}
        />
      ) : (
        <Moon
          width={44}
          height={44}
          aria-label={context.themebutton.moonAriaLabel}
        />
      )}
    </button>
  );
}
