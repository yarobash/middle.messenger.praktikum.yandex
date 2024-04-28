import { Block } from '../../../../utils';
import template from './search-chats.hbs';
import './search-chats.css';

export class SearchChats extends Block {
  public render() {
    return this.compile(template, this.props);
  }
}

export const searchChats = new SearchChats({}); 
