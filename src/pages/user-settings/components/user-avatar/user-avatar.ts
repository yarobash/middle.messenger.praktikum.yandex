import { Block } from '../../../../utils';
import template from './user-avatar.hbs';
import './user-avatar.css';

export class UserAvatar extends Block {
  public render() {
    return this.compile(template, this.props);
  }
}
