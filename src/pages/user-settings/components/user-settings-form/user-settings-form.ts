import { Block } from '../../../../utils';
import template from './user-settings-form.hbs';
import './user-settings-form.css';

interface UserSettingsFormProps {
  emailUserInput: Block,
  loginUserInput: Block,
  fnameUserInput: Block,
  snameUserInput: Block,
  dispnameUserInput: Block,
  phoneUserInput: Block,
  button: Block,
  events: Record<string, (evt: Event) => void> 
}

export class UserSettingsForm extends Block<UserSettingsFormProps> {
  constructor(props: UserSettingsFormProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
