import Block from '../../utils/Block';
import signUp from './signUp.hbs';
import { Props } from '../../utils/Block';
import signUpContext from './sign-up-context';
import FormValidator from '../../utils/FormValidator';
import signUpFormSchema from '../../components/sign-up-form/sign-up-form-schema';

const signUpFormValidator = new FormValidator('sign-up-form', signUpFormSchema);

const handleSubmit = (event?: Event) => {
  event?.preventDefault();
}

const signUpEvents = {
  events: {
    input: {
      className: 'sign-up-form__inpt',
      handler: signUpFormValidator.validateForm,
    },
    submit: {
      className: 'sign-up-form',
      handler: handleSubmit,
    },
  }, 
}

class SignUp extends Block {
  constructor(props: Props) {
    super('div', props);
    this._disableSbmtBtn();
  }
  
  public render() {
    return this.handleTemplate(signUp, this.props);
  }
  
  public _disableSbmtBtn() {
    const targetButton = this._element?.querySelector('.sign-up-form__btn') as HTMLButtonElement;
    targetButton.disabled = true;
  }
}

export default new SignUp({...signUpContext, ...signUpEvents});
