import { Block } from '../../../utils';
import template from './sign-input.hbs';
import './sign-input.css';

interface SignInputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  error?: Block;
  events?: Record<string, (evt: Event) => void>;
}

export class SignInput extends Block<SignInputProps> {
  constructor(props: SignInputProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }

  public setError(errText: string) {
    const input = this.element.querySelector('input');
    input!.classList.remove('sign-input__input_default', 'sign-input__input_correct');
    input!.classList.add('sign-input__input_err');
    this.children.error.showError(errText);
  }

  public setCorrect() {
    const input = this.element.querySelector('input');
    input!.classList.remove('sign-input__input_default', 'sign-input__input_err');
    input!.classList.add('sign-input__input_correct');
    this.children.error.hideError();
  }
}
