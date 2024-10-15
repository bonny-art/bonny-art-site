import React from 'react';
import content from '@/data/about.json';
import Arrow from '@/../public/images/icons/arrow.svg';

export const AboutInfo = () => {
  return (
    <div className="py-14 px-11 bg-white dark:bg-bgAccentDark rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[60px] w-[592px]">
      <h3 className="text-2xl font-medium leading-[22px] tracking-[-0.48px] mb-6 w-[400px]">
        {content.subtitle}
      </h3>
      <p className="text-about mb-3">{content.text1}</p>
      <p className="text-about">{content.text2}</p>
      <ul className="flex flex-col gap-3 mt-10">
        {content.aboutList.map((el) => (
          <li key={el.id} className="flex gap-5">
            <div>
              <Arrow width={27} height={15} className="" />
            </div>
            <p className="text-about">{el.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
