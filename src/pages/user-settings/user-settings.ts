import { Block } from '../../utils';
import { ButtonBack } from '../../components/buttons/btn-back';
import { UserAvatar } from './components/user-avatar';
import { userSettingsForm } from './components/user-settings-form';
import template from './userSettings.hbs'; 
import './user-settings.css';
import './components/btn-back/btn-back.css';

const btnBack = new ButtonBack({});
const userAvatar = new UserAvatar({});

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
