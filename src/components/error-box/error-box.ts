import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import errorBox from './errorBox.hbs';
import errorBoxContext from './error-box-context';

class ErrorBox extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(errorBox, this.props);
  }
}

export const ErorrBox404 = new ErrorBox(errorBoxContext.err404);
export const ErorrBox500 = new ErrorBox(errorBoxContext.err500);

