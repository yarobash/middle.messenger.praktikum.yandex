import { signUpForm } from "./components/sign-up-form";
import { FormWrapper } from "../../components/forms/form-wrapper";

export const signUpPage = new FormWrapper({
  className: 'form-wrapper',
  form: signUpForm,
});
