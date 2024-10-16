'use client';

import { useState } from 'react';
import clsx from 'clsx';
import common from '@/data/common.json';

export const LangToggle = () => {
  const [language, setLanguage] = useState('uk');
  const { languages } = common;

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="flex bg-white dark:bg-bgAccentDark rounded-full overflow-hidden w-[100px] h-[50px]">
      {languages.map(({ lang, label }) => (
        <button
          key={lang}
          type="button"
          className={clsx(
            'flex-1 text-base font-medium leading-5 animation',
            lang === language
              ? 'bg-orangeLight dark:bg-bgAccent rounded-full dark:text-white'
              : 'text-orangePrimary'
          )}
          onClick={() => toggleLanguage(lang)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
