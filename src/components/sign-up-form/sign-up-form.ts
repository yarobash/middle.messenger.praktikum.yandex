import Block from "../../utils/Block";
import signUpForm from './signUpForm.hbs';
import { Props } from '../../utils/Block';
import signUpFormContext from './sign-up-form-context';

class SignUpForm extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(signUpForm, this.props);
  }
}

export default new SignUpForm(signUpFormContext);
