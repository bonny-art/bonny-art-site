import { IFormFieldProps } from './types';

export const Input = ({
  type,
  name,
  register,
  errors,
  placeholder,
  autoComplete,
}: IFormFieldProps) => {
  return (
    <div className="flex flex-col relative flex-1">
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="rounded-[30px] p-5 text-xl leading-none font-medium text-white placeholder:text-placeholderText placeholder:text-xl placeholder:leading-none placeholder:font-medium bg-bgAccent border border-transparent animation hover:border hover:border-orangePrimary focus:border focus:border-orangePrimary outline-orangePrimary focus:outline-none focus:bg-selectedBg"
      />

      {errors[name] && (
        <p className="absolute -bottom-6 right-8 text-sm font-medium text-redWrong">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
