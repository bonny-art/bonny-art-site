import { TitleProps } from './types';

export const TitleSection = ({ text }: TitleProps) => {
  return (
    <h2 className="text-[64px] font-normal leading-[87px] tracking-[-1.92px] pl-[60px] font-marmelad mb-9">
      {text}
    </h2>
  );
};
