import { IFormFieldProps } from '../input/types';

export const Textarea = ({
  name,
  register,
  placeholder,
  errors,
}: IFormFieldProps) => {
  return (
    <div className="flex flex-col relative mt-9">
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className="scroll-container resize-none h-32 rounded-[30px] p-5 text-xl leading-none font-medium dark:text-white text-buttonTextColor placeholder:text-placeholderText placeholder:text-xl placeholder:leading-none placeholder:font-medium bg-white dark:bg-bgAccent border border-transparent animation hover:border hover:border-orangePrimary focus:border focus:border-orangePrimary outline-orangePrimary focus:outline-none dark:focus:bg-selectedBgDark focus:bg-selectedBg"
      />

      {errors[name] && (
        <p className="absolute -bottom-6 right-8 text-sm font-medium text-redWrong">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
