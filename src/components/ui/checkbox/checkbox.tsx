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
      className="checkbox gap-3 text-xl text-textDt dark:text-accentBgLt leading-6 font-normal my-[50px] relative"
    >
      <div className="inline-flex">
        <input
          type={type}
          id={id}
          {...register(name)}
          className="checkbox__input"
        />
        <svg
          className="checkbox__check dark:stroke-accentBgLt dark:border-accentBgLt"
          width="28"
          height="28"
        >
          <polyline points="6 14 12 20 20 6"></polyline>
        </svg>
      </div>
      {label}
      {errors[name] && (
        <p className="absolute -bottom-6 right-8 text-sm font-medium text-error">
          {errors[name]?.message}
        </p>
      )}
    </label>
  );
};
