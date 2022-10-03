import Block from '../../utils/Block';
import signIn from './signIn.hbs';
import { Props } from '../../utils/Block';
import signInContext from './sign-in-context';
import FormValidator from '../../utils/FormValidator';
import signInFormSchema from '../../components/sign-in-form/sign-in-form-schema';

const signInFormValidator = new FormValidator('sign-in-form', signInFormSchema); 

const signInEvents = {
  events: {
    input: {
      className: 'sign-in-form__inpt',
      handler: signInFormValidator.validateForm,
    }
  },
}

class SignIn extends Block {
  constructor(props: Props) {
    super('div', props);
    this._disableSbmtBtn();
  }

  render() {
    return this.handleTemplate(signIn, this.props);
  }

  public _disableSbmtBtn() {
    const targetButton = this._element?.querySelector('.sign-in-form__btn') as HTMLButtonElement;
    targetButton.disabled = true;
  }
}

export default new SignIn({...signInContext, ...signInEvents});
