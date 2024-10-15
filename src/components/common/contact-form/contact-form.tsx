'use client';

import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/ui/input/input';
import { Textarea } from '@/components/ui/textarea/textarea';
import { Checkbox } from '@/components/ui/checkbox/checkbox';
import { Name } from '@/components/ui/input/types';
import { FormData } from './types';
import { schema } from '@/utils/validation';
import contacts from '@/data/contacts.json';

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

  const { inputs, textarea, checkbox } = contacts;

  useFormPersist('contactForm', {
    watch,
    setValue,
    exclude: ['checked'],
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="on"
      className="flex flex-col max-w-[696px] p-12 bg-orangeLight dark:bg-accentBg rounded-[60px]"
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
      <Checkbox
        label={checkbox.label}
        type={checkbox.type}
        id={checkbox.id}
        name={checkbox.name as Name}
        errors={errors}
        register={register}
      />
      <button type="submit" className="yellow-button uppercase animation">
        надіслати
      </button>
    </form>
  );
};
