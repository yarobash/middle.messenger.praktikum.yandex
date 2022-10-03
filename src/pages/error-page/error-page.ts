import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import errorPage from './errorPage.hbs';

import { ErorrBox404 } from '../../components/error-box/error-box';
import { ErorrBox500 } from '../../components/error-box/error-box';


class ErrorPage extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(errorPage, this.props);
  }
}

export const ErrorPage404 = new ErrorPage({errorBox: ErorrBox404});
export const ErrorPage500 = new ErrorPage({errorBox: ErorrBox500});
