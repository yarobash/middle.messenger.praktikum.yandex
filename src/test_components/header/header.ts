import template from './header.hbs';
import { Block } from '../block';

interface Header {
  msg: string;
}

const headerProps = {
  msg: 'Привет',
};

class Header extends Block<Header> {
  constructor(props: Header) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const header = new Header(headerProps);
setTimeout(() => header.setProps({msg: 'Приветище!'}), 3000);
export default header;
