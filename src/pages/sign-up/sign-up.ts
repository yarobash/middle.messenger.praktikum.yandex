import Block from '../../utils/Block';
import signUp from './signUp.hbs';
import { Props } from '../../utils/Block';
import signUpContext from './sign-up-context';

//TODO: Вынести работу с signUpData в отдельный хук
let signUpData = {};

const handleInputChange = (event?: Event) => {
  const target = event?.target as HTMLInputElement;
  signUpData = Object.assign(signUpData, {[target.name]: target.value});
  console.log(signUpData);
}

const handleSubmit = (event?: Event) => {
  event?.preventDefault();
  console.log('Submit fired!!!');
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

  render() {
    return this.handleTemplate(signUp, this.props);
  }
}

export default new SignUp({...signUpContext, ...signUpEvents});
