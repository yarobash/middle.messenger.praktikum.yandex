import { Block } from '../../../../utils';
import template from './chat-date.hbs';
import './chat-date.css';

interface ChatDateProps {
  date: string;
}

export class ChatDate extends Block<ChatDateProps> {
  constructor(props: ChatDateProps){
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}

export const chatDate = new ChatDate({date: '1 мая'});
