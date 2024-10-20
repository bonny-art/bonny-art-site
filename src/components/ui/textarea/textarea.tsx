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
        className="
          rounded-[30px] 
          scroll-container
          resize-none 
          h-32 
          p-5 
          text-xl 
          leading-none 
          font-medium
          
          outline-none
          dark:outline-none 
          focus:outline-none 
          focus:dark:outline-none

          border 
          border-transparent 
          hover:border 
          focus:border 
          hover:border-accentLt 
          dark:hover:border-accentDt
          focus:border-accentLt 
          dark:focus:border-accentDt
                    
          placeholder:text-xl 
          placeholder:leading-none 
          placeholder:font-medium 
          placeholder:text-text60Lt 
          dark:placeholder:text-text60Dt 

          bg-bgFormLt 
          dark:bg-bgFormDt 
        "
      />

      {errors[name] && (
        <p className="absolute -bottom-6 right-8 text-sm font-medium text-error">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
