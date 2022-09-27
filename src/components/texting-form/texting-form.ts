import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import textingForm from './textingForm.hbs';

class TextingForm extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(textingForm);
  }
}

export default new TextingForm({});
