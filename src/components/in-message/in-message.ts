import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import inMessage from './inMessage.hbs';
import inMessageContext from './in-message-context';

class InMessage extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(inMessage, this.props);
  }
}

export default new InMessage(inMessageContext);
