import Block from '../../utils/Block';
import getProfile from './getProfile.hbs';
import { Props } from '../../utils/Block';
import getProfileContext from './get-profile-context';

class GetProfile extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(getProfile, this.props);
  }
}

export default new GetProfile(getProfileContext);
