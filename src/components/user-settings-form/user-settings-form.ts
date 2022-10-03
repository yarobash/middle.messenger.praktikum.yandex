import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import userSettingsForm from './userSettingsForm.hbs';
import userSettingsFormContext from './user-settings-form-context';

class UserSettingsForm extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(userSettingsForm, this.props);
  }
}

export default new UserSettingsForm(userSettingsFormContext);
