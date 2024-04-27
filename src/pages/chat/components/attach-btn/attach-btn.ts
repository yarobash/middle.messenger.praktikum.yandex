import { Block } from '../../../../utils';
import template from './attach-btn.hbs';

export class AttachBtn extends Block{
  public render() {
    return this.compile(template, this.props);
  }
}

export const attachBtn = new AttachBtn({});
