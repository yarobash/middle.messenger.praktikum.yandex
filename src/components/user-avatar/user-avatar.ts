import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import userAvatar from './userAvatar.hbs';

class UserAvatar extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(userAvatar);
  }
}

export default new UserAvatar({});
