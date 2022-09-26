import Block from '../../utils/Block';
import signIn from './signIn.hbs';
import { Props } from '../../utils/Block';
import signInContext from './sign-in-context';

class SignIn extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(signIn, this.props);
  }
}

export default new SignIn(signInContext);
