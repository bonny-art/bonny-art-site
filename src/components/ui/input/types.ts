import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface IFormFieldProps {
  id?: string;
  label?: string;
  type: string;
  name: Name;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  placeholder?: string;
  autoComplete?: string;
}

export type Name = 'username' | 'email' | 'comment' | 'checked';

export type FormData = {
  username: string;
  email: string;
  comment: string;
  checked: boolean;
};
