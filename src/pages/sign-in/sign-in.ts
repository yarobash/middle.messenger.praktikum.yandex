import { Block } from '../../utils';
import { FormWrapper } from '../../components/forms/form-wrapper';
import { signInForm } from './components/sign-in-form';
import template from './template.hbs';
import './sign-in.css';

export default class SignInPage extends Block{
  constructor(props: {}) {
    super({
      ...props,
      FormWrapper: new FormWrapper({
        className: 'form-wrapper',
        form: signInForm,
      })
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
