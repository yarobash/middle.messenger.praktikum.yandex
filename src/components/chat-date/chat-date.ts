import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import chatDate from './chatDate.hbs';
import chatDataContext from './chat-date-context';

class ChatDate extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(chatDate, this.props);
  }
}

export default new ChatDate(chatDataContext);
