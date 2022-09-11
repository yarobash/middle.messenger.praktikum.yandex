import ButtonTemplate from './button.hbs';
import Block from '../../utils/Block';

export default class Button extends Block {
  constructor(props: Record<string, any>) {
    super('button', props);
  }

  render() {
    return ButtonTemplate(this.props);
  }
}
