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
    xl:max-w-[520px]
    xl:py-[82px]
    xl:px-[46px]
    xl:rounded-[60px]"
    >
      <div className="flex flex-col gap-3 xl:gap-5">
        <h3
          className="text-accentLt 
        dark:text-accentDt
        font-comfortaa
        text-2xl
        font-bold
        leading-normal
        -tracking-[0.48px]
        xl:text-3xl
        xl:leading-[1.4]
        xl:-tracking-[0.6px]"
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
        xl:text-2xl
        xl:-tracking-[0.48px]"
        >
          {contactBlock.subtitle}
        </p>
      </div>
      <div className="w-full h-[1px] bg-text60Lt dark:bg-text60Dt"></div>
      <Social section="contact" />
    </div>
  );
};
