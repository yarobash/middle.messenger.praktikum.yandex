import { Block } from '../../../utils';
import template from './sign-input.hbs';
import './sign-input.css';

interface SignInputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  events?: Record<string, (evt: Event) => void>;
  constraints: Record<string, Record<string, any>>,
}

export class SignInput extends Block<SignInputProps> {
  constructor(props: SignInputProps) {
    super(props);
    props = {...props, events: { validateInput: this.validate.bind(this) }};
    this.setProps(props);
  }

  public render() {
    return this.compile(template, this.props);
  }

  private setError(errText: string) {
    const input = this.element.querySelector('input');
    const errorBox = this.element.querySelector('.sign-input-error');
    input!.classList.remove('sign-input__input_default', 'sign-input__input_correct');
    input!.classList.add('sign-input__input_err');
    if (errorBox) errorBox.textContent = errText;
  }

  private setCorrect() {
    const input = this.element.querySelector('input');
    const errorBox = this.element.querySelector('.sign-input-error');
    input!.classList.remove('sign-input__input_default', 'sign-input__input_err');
    input!.classList.add('sign-input__input_correct');
    if (errorBox) errorBox.textContent = '';
  }

  public validate() {
    const input = this.element.querySelector('input');
    if (!input) throw new Error('Не найден запрошенный элемент');
    if (input.getAttribute('name') === 'password') this.props.constraints['rep_password'].password = input.value;
    const name = input?.getAttribute('name');
    if (this.props.constraints[name].validate(input.value)) {
      this.setCorrect();
      return true;
    } else {
      this.setError(this.props.constraints[name].errText);
      return false;
    }
  }

  public get isValid() {
    return this.validate();
  }

  public getValue() {
    const input = this.element.querySelector('input');
    if (!input) throw new Error('Не найден запрошенный элемент');
    return {[input.getAttribute('name') as string]: input.value}; 
  }
}
