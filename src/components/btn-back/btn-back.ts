import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import btnBack from './btnBack.hbs';

class BtnBack extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(btnBack);
  }
}

export default new BtnBack({});
