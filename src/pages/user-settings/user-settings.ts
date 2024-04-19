import { Block } from '../../utils';
import { FormButton } from '../../components/buttons/form-button';
import { ButtonBack } from '../../components/buttons/btn-back';
import { UserAvatar } from './components/user-avatar';
import { UserSettingsForm } from './components/user-settings-form';
import { UserInput } from '../../components/forms/user-input';
import { InputError } from '../../components/forms/input-error';
import { constraints } from '../../shared/validators/validators';
import { Validator } from '../../utils';
import template from './userSettings.hbs'; 
import './user-settings.css';
import './components/btn-back/btn-back.css';

const userSettingsConstraints = {
  email: { ...constraints.email, block: () => getEmailUserBlock() },
  login: { ...constraints.login, block: () => getLoginUserBlock() },
  'first_name': { ...constraints['first_name'], block: () => getFnameUserBlock() },
  'second_name': { ...constraints['second_name'], block: () => getSnameUserBlock() },
  'display_name': {...constraints['display_name'], block: () => getDispnameUserBlock()},
  phone: { ...constraints.phone, block: () => getPhoneUserBlock() },
};

const validator = new Validator(userSettingsConstraints);
function validateInput(evt: Event) {
  validator.validateInput(evt);
}

const formButton = new FormButton({
  className: 'form-button',
  label: 'Сохранить',
});
const btnBack = new ButtonBack({});
const userAvatar = new UserAvatar({});

const emailInputError = new InputError({ errText: '' });
const emailUserInput = new UserInput({
  name: 'email',
  label: 'Почта',
  placeholder: 'pochta@yandex.ru',
  error: emailInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getEmailUserBlock() {
  return emailUserInput;
}

const loginInputError = new InputError({ errText: '' });
const loginUserInput = new UserInput({
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
function getLoginUserBlock() {
  return loginUserInput;
}

const fnameInputError = new InputError({ errText: '' });
const fnameUserInput = new UserInput({
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
function getFnameUserBlock() {
  return fnameUserInput;
}

const snameInputError = new InputError({ errText: '' });
const snameUserInput = new UserInput({
  name: 'second_name',
  label: 'Фамилия',
  placeholder: 'Иванов',
  error: snameInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getSnameUserBlock() {
  return snameUserInput;
}

const dispnameInputError = new InputError({ errText: '' });
const dispnameUserInput = new UserInput({
  name: 'display_name',
  label: 'Имя в чате',
  placeholder: 'Иван',
  error: dispnameInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getDispnameUserBlock() {
  return dispnameUserInput;
}

const phoneInputError = new InputError({ errText: '' });
const phoneUserInput = new UserInput({
  name: 'phone',
  label: 'Телефон',
  placeholder: '+79099673030',
  error: phoneInputError,
  events: {
    input: validateInput,
    focusin: validateInput,
    focusout: validateInput,
  }
});
function getPhoneUserBlock() {
  return phoneUserInput;
}

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

const userSettingsForm = new UserSettingsForm({
  emailUserInput,
  loginUserInput,
  fnameUserInput,
  snameUserInput,
  dispnameUserInput,
  phoneUserInput,
  button: formButton,
  events: {
    submit: handleSubmit,
  }
});

interface UserSettingsProps {
  btnBack: Block;
  userAvatar: Block;
  userSettingsForm: Block;
}

class UserSettings extends Block<UserSettingsProps> {
  constructor(props: UserSettingsProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}

export const userSettingsPage = new UserSettings({
  btnBack,
  userAvatar,
  userSettingsForm,
});
