import { Block } from '../../../../utils';
import template from './sign-in-form.hbs';
import './sign-in-form.css';

interface SignInFormProps {
  loginSignInput: Block;
  passwordSignInput: Block;
  button?: Block;
  events?: Record<string, (evt: Event) => void>;
}

export class SignInForm extends Block<SignInFormProps> {
  constructor(props:SignInFormProps) {
    super(props);
  }
  
  public render() {
    return this.compile(template, this.props);
  }
}
