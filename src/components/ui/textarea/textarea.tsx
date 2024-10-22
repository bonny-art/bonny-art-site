import { IFormFieldProps } from '../input/types';

export const Textarea = ({
  name,
  register,
  placeholder,
  errors,
}: IFormFieldProps) => {
  return (
    <div className="flex flex-col relative mt-6 xl:mt-9">
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className="
          rounded-[30px] 
          scroll-container
          resize-none 
          py-3
          px-4
          text-sm
          h-[124px] 
          leading-none 
          font-medium
          placeholder:text-sm 
          placeholder:leading-none 
          placeholder:font-medium
          
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
                    
          xl:placeholder:text-xl 
          placeholder:text-text60Lt 
          dark:placeholder:text-text60Dt 

          bg-bgFormLt 
          dark:bg-bgFormDt 

          xl:h-32 
          xl:p-5 
          xl:text-xl
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
        xl:-bottom-6
        xl:right-8
        xl:text-sm"
        >
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
