import contacts from '@/data/contacts.json';

export const ContactBlock = () => {
  const { contactBlock } = contacts;

  return (
    <div className="max-w-[488px] py-[82px] px-[46px] bg-accentBgColorLt dark:bg-accentBgColorDt rounded-[60px]">
      <div className="flex flex-col gap-5 pb-[66px] border-b border-textColor60Lt dark:border-textColor60Dt">
        <h3 className="text-accentColorLt dark:text-accentColorDt font-comfortaa text-3xl font-bold leading-[1.4] -tracking-[0.6px]">
          {contactBlock.title}
        </h3>
        <p className="text-textColorLt dark:text-textColorDt font-comfortaa text-2xl font-medium leading-normal -tracking-[0.48px]">
          {contactBlock.subtitle}
        </p>
      </div>
    </div>
  );
};
