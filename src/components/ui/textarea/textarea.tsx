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
        className="scroll-container resize-none h-32 rounded-[30px] p-5 text-xl leading-none font-medium dark:text-textDt text-textLt placeholder:text-text60Lt placeholder:dark:text-text60Dt placeholder:text-xl placeholder:leading-none placeholder:font-medium bg-textDt dark:bg-additionalDt border border-transparent animation hover:border hover:border-accentLt focus:border focus:border-accentLt outline-none hover:dark:border-accentDt focus:dark:border focus:dark:border-accentDt dark:outline-none focus:outline-none dark:focus:bg-accentBgDt focus:bg-accentBgLt"
      />

      {errors[name] && (
        <p className="absolute -bottom-6 right-8 text-sm font-medium text-error">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
