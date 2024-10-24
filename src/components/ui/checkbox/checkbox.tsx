import { IFormFieldProps } from '../input/types';

export const Checkbox = ({
  id,
  label,
  type,
  name,
  register,
  errors,
}: IFormFieldProps) => {
  return (
    <label
      htmlFor={id}
      className="checkbox gap-3 text-textLt font-comfortaa text-sm leading-none tracking-[0.42px] font-normal dark:text-textDt my-[30px] md:leading-6 md:text-xl md:my-[50px] relative"
    >
      <div className="inline-flex">
        <input
          type={type}
          id={id}
          {...register(name)}
          className="checkbox__input"
        />
        <svg className="checkbox__check" width="28" height="28">
          <polyline points="6 14 12 20 20 6"></polyline>
        </svg>
      </div>
      {label}
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
    </label>
  );
};
