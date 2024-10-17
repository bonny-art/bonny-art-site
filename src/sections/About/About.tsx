import { AboutInfo } from '@/components/common/about-info/aboutInfo';
import Image from 'next/image';
import React from 'react';
import content from '@/data/about.json';
import Link from 'next/link';

export const About = () => {
  return (
    <section id="about" className="pt-20 pb-10">
      <div className="container">
        <h2 className="text-[64px] font-normal leading-[87px] tracking-[-1.92px] pl-[60px] font-marmelad mb-9">
          {content.title}
        </h2>
        <div className="flex">
          <AboutInfo />

          <div className="text-center  about-gradient w-[624px]">
            <div className="pl-8 pb-8 bg-bgColorLt dark:bg-bgColorDt rounded-bl-[60px]">
              <Image
                src={content.src}
                alt={content.alt}
                width={592}
                height={487}
                loading="lazy"
                className=""
              />
            </div>
            <div className="bg-accentBgColorLt  dark:bg-accentBgColorDt rounded-br-[60px] rounded-tr-[60px] py-9">
              <p className="text-about">{content.text3}</p>
              <Link href={content.href} className="yellow-button mt-[21px]">
                {content.button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
