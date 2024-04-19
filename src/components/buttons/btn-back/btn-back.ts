import { Block } from '../../../utils';
import template from './btn-back.hbs';
import './btn-back.css';

export class ButtonBack extends Block {
  public render() {
    return this.compile(template, this.props);
  }
}
