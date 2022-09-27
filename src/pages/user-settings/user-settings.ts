import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import userSettings from './userSettings.hbs';
import userSettingsContext from './user-settings-context';

class UserSettings extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(userSettings);
  }
}

export default new UserSettings(userSettingsContext);
