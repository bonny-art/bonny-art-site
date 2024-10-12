import * as yup from 'yup';
import contacts from '../data/contacts.json';

const { username, email, comment, checked } = contacts.validation;

export const schema = yup.object().shape({
  username: yup
    .string()
    .required(username.required.message)
    .min(username.minLength.value, username.minLength.message)
    .max(username.maxLength.value, username.maxLength.message)
    .matches(new RegExp(username.regExp.value), username.regExp.message),
  email: yup
    .string()
    .required(email.required.message)
    .matches(new RegExp(email.regExp.value), email.regExp.message),
  comment: yup.string().max(comment.maxLength.value, comment.maxLength.message),
  checked: yup.boolean().required().oneOf([checked.value], checked.message),
});
