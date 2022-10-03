import Block from '../../utils/Block';
import attachBtn from './attachBtn.hbs';
import { Props } from '../../utils/Block';

class AttachBtn extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(attachBtn);
  }
}

export default new AttachBtn({});
