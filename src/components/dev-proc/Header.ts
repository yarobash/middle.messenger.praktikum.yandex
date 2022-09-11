import Block from "../../utils/Block";
import signInForm from "../sign-in-form/signInForm.hbs";

export default class Header extends Block {
  constructor(props: Record<string, any>) {
    super('h1', props);
  }

  render() {
    return signInForm(this.props);
  }
}
