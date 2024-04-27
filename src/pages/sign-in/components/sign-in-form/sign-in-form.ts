import { Block } from '../../../../utils';
import { SignInput } from '../../../../components/forms/sign-input';
import { FormButton } from '../../../../components/buttons/form-button';
import { signInConstraints as constraints } from '../../../../shared/validators/validators';
import template from './sign-in-form.hbs';
import './sign-in-form.css';

interface SignInFormProps {
  inputs: Block[],
  button: Block,
  events: {
    handleSubmit: (evt: SubmitEvent) => void,
  }
}

const loginSignInput = new SignInput({
  label: 'Логин',
  name: 'login',
  placeholder: 'invanivanov',
  constraints,
});

const passwordSignInput = new SignInput({
  label: 'Пароль',
  type: 'password',
  name: 'password',
  constraints,
});

const button = new FormButton({
  label: 'Войти',
  className: 'form-button',
});

const inputs = [loginSignInput, passwordSignInput];

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

export class SignInForm extends Block<SignInFormProps> {
  constructor(props:SignInFormProps) {
    super(props);
  }
  
  public render() {
    return this.compile(template, this.props);
  }
}

export const signInForm = new SignInForm({
  inputs,
  button,
  events: {
    handleSubmit,
  }
});
