'use client';

import { useState } from 'react';
import clsx from 'clsx';
import common from '@/data/common.json';

export const LangToggle = () => {
  const [language, setLanguage] = useState('uk');
  const { languages } = common;

  const toggleLanguage = () => {
    setLanguage(language === 'uk' ? 'en' : 'uk');
  };

  return (
    <button
      type="button"
      className="relative flex items-center justify-between w-[100px] h-[50px] bg-accentBgColorLt dark:bg-accentBgColorDt rounded-full"
      onClick={toggleLanguage}
    >
      <span
        className={clsx(
          'absolute top-0 w-[50px] h-[50px] bg-additionalColorLt dark:bg-additionalColorDt rounded-full transition-transform duration-300',
          language === 'uk' ? 'translate-x-0' : 'translate-x-full'
        )}
      />

      {languages.map(({ lang, label }) => (
        <span
          key={lang}
          className={clsx(
            'z-10 w-1/2 text-center text-base font-medium leading-5',
            language === lang
              ? 'dark:text-accentBgColorLt'
              : 'text-accentColorDt'
          )}
        >
          {label}
        </span>
      ))}
    </button>
  );
};
