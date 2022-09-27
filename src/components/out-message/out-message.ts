import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import outMessage from './outMessage.hbs';
import outMessageContext from './out-message-context';

class OutMessage extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(outMessage, this.props);
  }
}

export default new OutMessage(outMessageContext);
