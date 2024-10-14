'use client';

import Sun from '@/../public/images/icons/sun.svg';
import Moon from '@/../public/images/icons/moon.svg';
import context from '@/data/common.json';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className="w-[50px] h-[50px] bg-orangeLight dark:bg-darkAccentColor rounded-full inline-flex justify-center items-center transition-transform duration-200 hover:scale-110 focus:scale-110"
      onClick={toggleTheme}
      aria-label={
        resolvedTheme === 'dark'
          ? context.themebutton.sunAriaLabel
          : context.themebutton.moonAriaLabel
      }
    >
      {resolvedTheme === 'dark' && <Sun width={44} height={44} />}
      {resolvedTheme === 'light' && <Moon width={44} height={44} />}
    </button>
  );
}
