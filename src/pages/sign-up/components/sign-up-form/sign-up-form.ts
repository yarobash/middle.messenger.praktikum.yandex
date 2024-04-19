import { Block } from '../../../../utils';
import template from './sign-up-form.hbs';
import './sign-up-form.css';

export interface SignUpFormProps {
  emailSignInput: Block,
  loginSignInput: Block,
  fnameSignInput: Block,
  snameSignInput: Block,
  dispnameSignInput: Block,
  phoneSignInput: Block,
  passwordSignInput: Block,
  reppasswordSignInput: Block,
  button?: Block;
  events?: Record<string, (evt: Event) => void>;
}

export class SignUpForm extends Block<SignUpFormProps> {
  constructor(props: SignUpFormProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
