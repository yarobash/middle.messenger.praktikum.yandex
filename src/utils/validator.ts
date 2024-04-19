import { Block } from './block';

interface Constraints {
  [identifier: string]: {
    required: Boolean,
    state: string,
    validate: (value: string) => Boolean,
    errText: string,
    password?: string,
    block: () => Block,
  }
}

export class Validator {
  #constraints;

  constructor(constraints: Constraints) {
    this.#constraints = constraints;
  }

  public validateInput(evt: Event) {
    const target = evt.target as HTMLInputElement;
    const value: string = target.value; 
    const name: string = target.name; 
    // Проверка, что мы точно работаем с формой, где есть rep-password
    if (name === 'password' && this.#constraints['rep-password']) this.#constraints['rep-password'].password = value;
    const block = this.#constraints[name].block();
    const validResult = this.#constraints[name].validate(value);
    if (validResult) {
      this.#constraints[name].state = 'correct';
      block.setCorrect();
    } else {
      this.#constraints[name].state = 'error';
      block.setError(this.#constraints[name].errText);
    }
  }

  public validateForm() {
    const validResult = Object.values(this.#constraints).every(
      (input) => input.state === 'correct');
    if (validResult) return true;
    Object.values(this.#constraints).forEach((input) => {
      if (input.state === 'default') {
        input.block().setError(input.errText);
      }
    });
  }
}
