import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import curUser from './curUser.hbs';
import curUserContext from './cur-user-context';

class CurUser extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(curUser, this.props);
  }
}

export default new CurUser(curUserContext);
