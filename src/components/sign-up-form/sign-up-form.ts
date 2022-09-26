import Block from "../../utils/Block";
import signUpForm from './signUpForm.hbs';
import { Props } from '../../utils/Block';
import signUpFormContext from './sign-up-form-context';

const signUpFormEvents = {
  events: {
    input: {
      className: 'sign-up-form__inpt',
      handler: (event?: Event) => {
        const target = event?.target as HTMLInputElement;
        console.log(target!.value!);
      },
    },
  },
}

class SignUpForm extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(signUpForm, this.props);
  }
}

export default new SignUpForm({...signUpFormContext, ...signUpFormEvents});
