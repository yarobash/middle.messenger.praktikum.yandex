import { signUpForm } from "./components/sign-up-form";
import { FormWrapper } from "../../components/forms/form-wrapper";
import { Block } from '../../utils';
import template from './template.hbs';

export class SignUpPage extends Block {
  constructor(props: FormWrapperProps) {
    super({
      ...props,
      FormWrapper: new FormWrapper({
        className: 'form-wrapper',
        form: signUpForm,
      })
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
