import { Block } from '../../../../utils';
import { UserInput } from '../../../../components/forms/user-input'; 
import { FormButton } from '../../../../components/buttons/form-button';
import { constraints } from '../../../../shared/validators/validators';
import template from './user-settings-form.hbs';
import './user-settings-form.css';

interface UserSettingsFormProps {
  inputs: Block[],
  button: Block,
  events: {
    handleSubmit: (evt: SubmitEvent) => void,
  },
}

const emailUserInput = new UserInput({
  name: 'email',
  label: 'Почта',
  placeholder: 'pochta@yandex.ru',
  constraints,
});

const loginUserInput = new UserInput({
  label: 'Логин',
  name: 'login',
  placeholder: 'invanivanov',
  constraints,
});


const fnameUserInput = new UserInput({
  label: 'Имя',
  name: 'first_name',
  placeholder: 'Иван',
  constraints,
});

const snameUserInput = new UserInput({
  name: 'second_name',
  label: 'Фамилия',
  placeholder: 'Иванов',
  constraints,
});

const dispnameUserInput = new UserInput({
  name: 'display_name',
  label: 'Имя в чате',
  placeholder: 'Иван',
  constraints,
});

const phoneUserInput = new UserInput({
  name: 'phone',
  label: 'Телефон',
  placeholder: '+79099673030',
  constraints,
});

const inputs = [emailUserInput, loginUserInput, fnameUserInput, snameUserInput, dispnameUserInput, phoneUserInput];

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
const button = new FormButton({
  className: 'form-button',
  label: 'Сохранить',
});

export class UserSettingsForm extends Block<UserSettingsFormProps> {
  constructor(props: UserSettingsFormProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}

export const userSettingsForm = new UserSettingsForm({
  inputs,
  button,
  events: {
    handleSubmit,
  }
});
