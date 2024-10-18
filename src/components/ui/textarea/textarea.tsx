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
        className="scroll-container resize-none h-[124px] rounded-[30px] p-5 text-xl leading-none font-medium dark:text-textColorDt text-textColorLt placeholder:text-textColor60Lt placeholder:dark:text-textColor60Dt placeholder:text-xl placeholder:leading-none placeholder:font-medium bg-textColorDt dark:bg-additionalColorDt border border-transparent animation hover:border hover:border-accentColorLt focus:border focus:border-accentColorLt outline-none hover:dark:border-accentColorDt focus:dark:border focus:dark:border-accentColorDt dark:outline-none focus:outline-none dark:focus:bg-accentBgColorDt focus:bg-accentBgColorLt"
      />

      {errors[name] && (
        <p className="absolute -bottom-6 right-8 text-sm font-medium text-errorColor">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
