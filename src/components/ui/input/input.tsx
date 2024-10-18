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
        className="rounded-[30px] h-[60px] p-5 text-xl leading-none font-medium dark:text-textColorDt text-textColorLt placeholder:text-textColor60Lt placeholder:dark:text-textColor60Dt placeholder:text-xl placeholder:leading-none placeholder:font-medium bg-textColorDt dark:bg-additionalColorDt border border-transparent animation hover:border hover:border-accentColorLt focus:border focus:border-accentColorLt outline-none hover:dark:border-accentColorDt focus:dark:border-accentColorDt dark:outline-none focus:outline-none focus:dark:outline-none dark:focus:bg-accentBgColorDt focus:bg-accentBgColorLt"
      />

      {errors[name] && (
        <p className="absolute -bottom-6 right-8 text-sm font-medium text-errorColor">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
