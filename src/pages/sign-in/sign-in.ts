import { FormButton } from '../../components/buttons/form-button';
import { FormWrapper } from '../../components/forms/form-wrapper';
import { SignInForm } from './components/sign-in-form';
import { SignInput } from '../../components/forms/sign-input';
import { InputError } from '../../components/forms/input-error';
import { constraints } from '../../shared/validators/validators';
import { Validator } from '../../utils';
import './sign-in.css';

const singUpConstraints = {
  login: { 
    ...constraints.login,
    // Переопределение функции для работы в форме логина
    validate: function(value: string) {
      // Проверка просто на наличие символов, чтобы не делать
      // лишний раз подсказку для подборщиков
      const regex = /^.+$/;
      return regex.test(value);
    }, 
    errText: 'Не указан логин!',
    block: () => getLoginInputBlock()
  },
  password: {
    ...constraints.password,
    validate: function(value: string) {
      // Проверка просто на наличие символов, чтобы не делать
      // лишний раз подсказку для подборщиков
      const regex = /^.+$/;
      return regex.test(value);
    }, 
    errText: 'Не указан пароль!',
    block: () => getPasswordInputBlock()
  },
};
const validator: Validator = new Validator(singUpConstraints);
function validateInput(evt: Event) {
  validator.validateInput(evt);
}

const loginInputError = new InputError({
  errText: '',
});
const loginSignInput = new SignInput({
  label: 'Логин',
  name: 'login',
  placeholder: 'invanivanov',
  error: loginInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getLoginInputBlock() {
  return loginSignInput;
}

const passwordInputError = new InputError({
  errText: '',
});
const passwordSignInput = new SignInput({
  label: 'Пароль',
  type: 'password',
  name: 'password',
  error: passwordInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getPasswordInputBlock() {
  return passwordSignInput;
}

const formButton = new FormButton({
  className: 'form-button',
  label: 'Вход',
});

function handleSubmit(evt: Event): void {
  evt.preventDefault();
  if (validator.validateForm()) {
    const form = evt.target as HTMLFormElement;
    const inputs = Array.from(form.elements).filter((input) => input.tagName.toLowerCase() === 'input');
    const regObj = inputs.reduce((acc: Record<string, string>, input: HTMLInputElement) => {
      acc[input.name] = input.value;
      return acc;
    }, {});
    // eslint-disable-next-line
    console.log(regObj);
  }
}
const signInForm = new SignInForm({
  loginSignInput,
  passwordSignInput,
  button: formButton,
  events: {
    submit: handleSubmit,
  }
});

export const signInPage = new FormWrapper({
  className: 'form-wrapper',
  form: signInForm,
});
