import Block from '../../utils/Block';
import chat from './chat.hbs';
import { Props } from '../../utils/Block';
import chatContext from './chat-context';

class Chat extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(chat, this.props);
  }
}

export default new Chat(chatContext);
