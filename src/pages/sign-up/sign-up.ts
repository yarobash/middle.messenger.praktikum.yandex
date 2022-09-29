import Block from '../../utils/Block';
import signUp from './signUp.hbs';
import { Props } from '../../utils/Block';
import signUpContext from './sign-up-context';

let signUpData = {};

const handleInputChange = (event?: Event) => {
  const {name, value} = event?.target as HTMLInputElement;
  Object.assign(signUpData, {[name]: value});
  console.log(signUpData);
  const targetButton = document.querySelector('.sign-up-form__btn') as HTMLButtonElement;
  targetButton.disabled = true;
}

const handleSubmit = (event?: Event) => {
  event?.preventDefault();
  console.log(signUpData);
}

const signUpEvents = {
  events: {
    input: {
      className: 'sign-up-form__inpt',
      handler: handleInputChange,
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
  }
  
  public render() {
    return this.handleTemplate(signUp, this.props);
  }
  
  public _enableSbmtBtn() {
    const targetButton = this._element?.querySelector('.sign-up-form__btn') as HTMLButtonElement;
    targetButton.disabled = false;
  }

  public _disableSbmtBtn() {
    const targetButton = this._element?.querySelector('.sign-up-form__btn') as HTMLButtonElement;
    targetButton.disabled = true;
  }
}

export default new SignUp({...signUpContext, ...signUpEvents});
