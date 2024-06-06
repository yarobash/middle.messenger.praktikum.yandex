import template from './index.hbs';
import { Block } from '../../utils';
import laika from '../../static/imgs/laika.jpeg';
import './index.css';

export default class IndexPage extends Block {
  constructor(props: {}) {
    super({
      ...props,
      imgSrc: laika,
      imgAlt: 'Очень милая минилайка с игрушкой',
    });
  }

  public render() {
    return this.compile(template, this.props);
  }
}
