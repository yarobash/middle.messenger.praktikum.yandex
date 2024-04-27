import { Block } from '../../../utils';
import template from './user-input.hbs';
import './user-input.css';

interface UserInputProps {
  name: string;
  label: string;
  placeholder: string;
  constraints: Record<string, Record<string, any>>,
  events?: {
    validateInput: () => void,
  }
}

export class UserInput extends Block<UserInputProps> {
  constructor(props: UserInputProps) {
    super(props);
    props = {...props, events: { validateInput: this.validate.bind(this) }};
    this.setProps(props);
  }

  public render() {
    return this.compile(template, this.props);
  }

  public setError(errText: string) {
    const errBox = (this.element)!.querySelector('.user-input__state');
    errBox!.classList.remove('user-input__state_correct');
    errBox!.classList.add('user-input__state_error');
    const errorBox = (this.element)!.querySelector('.sign-input-error');
    if (errorBox) errorBox.textContent = errText;
  }

  public setCorrect() {
    const errBox = (this.element)!.querySelector('.user-input__state');
    errBox!.classList.remove('user-input__state_error');
    errBox!.classList.add('user-input__state_correct');
    const errorBox = (this.element)!.querySelector('.sign-input-error');
    if (errorBox) errorBox.textContent = '';
  }

  public validate() {
    const input = (this.element)!.querySelector('input');
    if (!input) throw new Error('Не найден запрошенный элемент');
    if (input.getAttribute('name') === 'password') this.props.constraints['rep_password'].password = input.value;
    const name = input.getAttribute('name');
    if (!name) throw new Error('Атрибут с таким именем не найден');
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
    const input = (this.element)!.querySelector('input');
    if (!input) throw new Error('Не найден запрошенный элемент');
    return {[input.getAttribute('name') as string]: input.value}; 
  }
}
