import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import chatManage from './chatManage.hbs';

class ChatManage extends Block {
  constructor(props: Proxy) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(chatManage, this.props);
  }
}

export default new ChatManage({});
