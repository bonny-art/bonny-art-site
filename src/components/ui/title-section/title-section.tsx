import { TitleProps } from './types';

export const TitleSection = ({ text }: TitleProps) => {
  return (
    <h2
      className="font-marmelad 
    text-[40px]
    font-normal
    pl-5
    mb-9
    leading-normal
    tracking-[-1.2px]
    md:text-[64px]
    md:tracking-[-1.92px]
    md:pl-[60px]"
    >
      {text}
    </h2>
  );
};
