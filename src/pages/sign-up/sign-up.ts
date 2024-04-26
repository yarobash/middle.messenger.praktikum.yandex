import { FormButton } from '../../components/buttons/form-button';
import { FormWrapper } from '../../components/forms/form-wrapper';
import { InputError } from '../../components/forms/input-error';
import { SignInput } from '../../components/forms/sign-input';
import { SignUpForm } from './components/sign-up-form';
import { Validator } from '../../utils';
import { constraints } from '../../shared/validators/validators';
import './sign-up.css';

const singUpConstraints = {
  email: { ...constraints.email, block: () => getEmailInputBlock() },
  login: { ...constraints.login, block: () => getLoginInputBlock() },
  'first_name': { ...constraints['first_name'], block: () => getFnameInputBlock() },
  'second_name': { ...constraints['second_name'], block: () => getSnameInputBlock() },
  'display_name': {...constraints['display_name'], block: () => getDispnameInputBlock()},
  phone: { ...constraints.phone, block: () => getPhoneInputBlock() },
  password: {...constraints.password, block: () => getPasswordInputBlock() },
  'rep_password': {...constraints['rep_password'], block: () => getReppasswordInputBlock() },
};

const validator: Validator = new Validator(singUpConstraints);
function validateInput(evt: Event) {
  validator.validateInput(evt);
}

const emailInputError = new InputError({
  errText: '',
});

const emailSignInput = new SignInput({
  label: 'Почта',
  name: 'email',
  placeholder: 'pochta@yandex.ru',
  error: emailInputError,
  events: {
    input: validateInput,
    // Событие вешается на 'firstElementChild' блока,
    // поэтому необходимо подключить всплывающие события,
    // иначе они не стриггерятся при фокусе на инпут.
    focusin: validateInput,
    focusout: validateInput,
  }
});

function getEmailInputBlock() {
  return emailSignInput;
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

const fnameInputError = new InputError({
  errText: '',
});
const fnameSignInput = new SignInput({
  label: 'Имя',
  name: 'first_name',
  placeholder: 'Иван',
  error: fnameInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getFnameInputBlock() {
  return fnameSignInput;
}

const snameInputError = new InputError({
  errText: '',
});
const snameSignInput = new SignInput({
  label: 'Фамилия',
  name: 'second_name',
  placeholder: 'Иванов',
  error: snameInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getSnameInputBlock() {
  return snameSignInput;
}

const dispnameInputError = new InputError({
  errText: '',
});
const dispnameSignInput = new SignInput({
  label: 'Имя в чате',
  name: 'display_name',
  placeholder: 'Иван',
  error: dispnameInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getDispnameInputBlock() {
  return dispnameSignInput;
}

const phoneInputError = new InputError({
  errText: '',
});
const phoneSignInput = new SignInput({
  label: 'Телефон',
  name: 'phone',
  placeholder: '+79099673030',
  error: phoneInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getPhoneInputBlock() {
  return phoneSignInput;
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

const reppasswordInputError = new InputError({
  errText: '',
});
const reppasswordSignInput = new SignInput({
  label: 'Пароль (ещё раз)',
  type: 'password',
  name: 'rep_password',
  error: reppasswordInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getReppasswordInputBlock() {
  return reppasswordSignInput;
}

const formButton = new FormButton({
  className: 'form-button',
  label: 'Регистрация',
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

const signUpForm = new SignUpForm({
  emailSignInput,
  loginSignInput,
  fnameSignInput,
  snameSignInput,
  dispnameSignInput,
  phoneSignInput,
  passwordSignInput,
  reppasswordSignInput,
  button: formButton,
  events: {
    submit: handleSubmit,
  },
});

export const signUpPage = new FormWrapper({
  className: 'form-wrapper',
  form: signUpForm,
});
