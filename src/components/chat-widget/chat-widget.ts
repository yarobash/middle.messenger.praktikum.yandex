import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import chatWidget from './chatWidget.hbs';

export default class ChatWidget extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(chatWidget, this.props);
  }
}
