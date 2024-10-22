import contacts from '@/data/contacts.json';
import { Social } from '../social/social';

export const ContactBlock = () => {
  const { contactBlock } = contacts;

  return (
    <div
      className="flex 
    flex-col
    gap-6
    bg-accentBgLt
    dark:bg-accentBgDt
    rounded-[30px]
    py-5
    px-4
    md:gap-[66px]
    md:py-[82px]
    md:px-[46px]
    md:rounded-[60px]
    xl:max-w-[520px]"
    >
      <div className="flex flex-col gap-3 md:gap-7">
        <h3
          className="text-accentLt 
        dark:text-accentDt
        font-comfortaa
        text-2xl
        font-bold
        leading-normal
        -tracking-[0.48px]
        md:text-3xl
        md:leading-[1.1]
        md:-tracking-[0.6px]"
        >
          {contactBlock.title}
        </h3>
        <p
          className="text-textLt 
        dark:text-textDt
        font-comfortaa
        text-base
        font-medium
        leading-normal
        -tracking-[0.32px]
        md:text-2xl
        md:-tracking-[0.48px]
        xl:leading-none"
        >
          {contactBlock.subtitle}
        </p>
      </div>
      <div className="w-full h-[1px] bg-text60Lt dark:bg-text60Dt"></div>
      <Social section="contact" />
    </div>
  );
};
