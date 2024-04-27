import { Block } from '../../../../utils';
import { SignInput } from '../../../../components/forms/sign-input';
import { FormButton } from '../../../../components/buttons/form-button';
import { constraints } from '../../../../shared/validators/validators';
import template from './sign-up-form.hbs';
import './sign-up-form.css';

const emailSignInput = new SignInput({
  label: 'Почта',
  name: 'email',
  placeholder: 'pochta@yandex.ru',
  constraints,
});

const loginSignInput = new SignInput({
  label: 'Логин',
  name: 'login',
  placeholder: 'invanivanov',
  constraints,
});

const fnameSignInput = new SignInput({
  label: 'Имя',
  name: 'first_name',
  placeholder: 'Иван',
  constraints,
});

const snameSignInput = new SignInput({
  label: 'Фамилия',
  name: 'second_name',
  placeholder: 'Иванов',
  constraints,
});

const dispnameSignInput = new SignInput({
  label: 'Имя в чате',
  name: 'display_name',
  placeholder: 'Иван',
  constraints,
});

const phoneSignInput = new SignInput({
  label: 'Телефон',
  name: 'phone',
  placeholder: '+79099673030',
  constraints,
});

const passwordSignInput = new SignInput({
  label: 'Пароль',
  name: 'password',
  constraints,
});

const reppasswordSignInput = new SignInput({
  label: 'Пароль (ещё раз)',
  name: 'rep_password',
  constraints,
});

const button = new FormButton({
  label: 'Зарегистрироваться',
  className: 'form-button',
});

interface SignUpFormProps {
  inputs: Block[],
  button: Block,
  events: {
    handleSubmit: (evt: SubmitEvent) => void,
  },
}

export class SignUpForm extends Block<SignUpFormProps> {
  constructor(props: SignUpFormProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}

const inputs = [emailSignInput, loginSignInput, fnameSignInput, snameSignInput, dispnameSignInput, phoneSignInput, passwordSignInput, reppasswordSignInput];

function handleSubmit(evt: SubmitEvent) {
  evt.preventDefault();
  for (const input of inputs) input.validate();
  if (inputs.every((input) => input.isValid)) {
    const ret = inputs.reduce((acc: Record<string, string>, input) => {
      const [name, value] = Object.entries(input.getValue())[0];
      acc[name] = value;
      return acc;
    }, {});
    // eslint-disable-next-line
    console.log(ret);
  }
}

export const signUpForm = new SignUpForm({
  inputs,
  button,
  events: {
    handleSubmit,
  }
});
