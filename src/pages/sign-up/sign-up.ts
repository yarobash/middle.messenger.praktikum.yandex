import Block from '../../utils/Block';
import signUp from './signUp.hbs';
import { Props } from '../../utils/Block';
import signUpContext from './sign-up-context';

class SignUp extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(signUp, this.props);
  }
}

export default new SignUp(signUpContext);
