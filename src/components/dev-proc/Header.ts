import Block from "../../utils/Block";
import signUpForm from '../../components/sign-up-form/signUpForm.hbs';

export default class Header extends Block {
  constructor(props: Record<string, any>) {
    super('div', props);
  }

  render() {
    return signUpForm(this.props);
  }
}
