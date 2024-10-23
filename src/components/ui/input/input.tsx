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
        className="
          rounded-[30px] 
          py-3
          px-4
          text-sm
          leading-none
          font-medium
          tracking-[-0.42px]
          placeholder:text-sm 
          placeholder:leading-none 
          placeholder:font-medium
          h-10
          
          outline-none
          dark:outline-none
          focus:outline-none 
          dark:focus:outline-none 
          
          border 
          border-transparent 
          hover:border 
          focus:border 
          
          hover:border-accentLt 
          dark:hover:border-accentDt
          
          focus:border-accentLt 
          dark:focus:border-accentDt
          
          
          placeholder:text-text60Lt 
          dark:placeholder:text-text60Dt 
          
          bg-bgFormLt 
          dark:bg-bgFormDt 
          
          md:h-[62px]
          md:text-xl 
          md:p-5 
          md:placeholder:text-xl 
        "
      />

      {errors[name] && (
        <p
          className="absolute 
        text-[10px]
        font-medium
        text-error
        leading-none
        tracking-[-0.3px]
        right-5
        -bottom-4
        md:-bottom-6
        md:right-8
        md:text-sm"
        >
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
