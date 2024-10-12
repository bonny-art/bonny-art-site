'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input/input';
import contacts from '@/data/contacts.json';
import { Name } from '@/components/ui/input/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData } from './types';
import { schema } from '@/utils/validation';
import { Textarea } from '@/components/ui/textarea/textarea';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const { inputs, textarea } = contacts;

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="on"
      className="flex flex-col"
    >
      <div className="flex flex-col gap-9">
        {inputs.map((input) => (
          <Input
            key={input.id}
            type={input.type}
            name={input.name as Name}
            errors={errors}
            register={register}
            placeholder={input.placeholder}
            autoComplete={input.autoComplete}
          />
        ))}
      </div>
      <Textarea
        type={textarea.type}
        name={textarea.name as Name}
        errors={errors}
        register={register}
        placeholder={textarea.placeholder}
      />
      <button
        type="submit"
        className="inline-flex justify-center items-center rounded-[30px] p-5 mt-[50px] bg-orangePrimary text-xl font-bold leading-none uppercase animation hover:bg-orangeBtnHover focus:bg-orangeBtnHover"
      >
        надіслати
      </button>
    </form>
  );
};
