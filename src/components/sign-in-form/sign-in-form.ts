import Block from '../../utils/Block';
import signInForm from './signInForm.hbs';
import signInFormContext from './sign-in-form-context';
import { Props } from '../../utils/Block';

class SignInForm extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(signInForm, this.props);
  }
}

export default new SignInForm(signInFormContext);
