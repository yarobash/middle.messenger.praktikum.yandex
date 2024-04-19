import template from './index.hbs';
import { Block } from '../../utils';
import './index.css';

class IndexPage extends Block {
  public render() {
    return this.compile(template, this.props);
  }
}

export const indexPage = new IndexPage({});
