import { FormWrapper } from '../../components/forms/form-wrapper';
import { signInForm } from './components/sign-in-form';
import './sign-in.css';

export const signInPage = new FormWrapper({
  className: 'form-wrapper',
  form: signInForm,
});
