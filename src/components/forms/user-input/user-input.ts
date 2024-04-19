import { Block } from '../../../utils';
import template from './user-input.hbs';
import './user-input.css';

interface UserInputProps {
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  error: Block;
  events?: Record<string, (evt: Event) => void>
}

export class UserInput extends Block<UserInputProps> {
  constructor(props: UserInputProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }

  public setError(errText: string) {
    const errBox = this.element.querySelector('.user-input__state');
    errBox!.classList.remove('user-input__state_correct');
    errBox!.classList.add('user-input__state_error');
    this.children.error.showError(errText);
  }

  public setCorrect() {
    const errBox = this.element.querySelector('.user-input__state');
    errBox!.classList.remove('user-input__state_error');
    errBox!.classList.add('user-input__state_correct');
    this.children.error.hideError();
  }
}
