import { Block } from '../../../../utils';
import template from './chat-settings.hbs';
import './chat-settings.css';

export class ChatSettings extends Block {
  public render() {
    return this.compile(template, this.props);
  }
}

export const chatSettings = new ChatSettings({});
