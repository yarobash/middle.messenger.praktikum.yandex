import { Block } from '../../../../utils';
import template from './chat-manage.hbs';
import './chat-manage.css';

export class ChatManage extends Block {
  public render() {
    return this.compile(template, this.props);
  }
}
