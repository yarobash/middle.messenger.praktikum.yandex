import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import chats from './chats.hbs';
import chatsWidgets from './chats-context';

class Chats extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    console.log(chatsWidgets);
    return this.handleTemplate(chats, this.props);
  }
}

export default new Chats(chatsWidgets);
