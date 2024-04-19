import { Block } from '../../../../utils';
import template from './chat-widget.hbs';
import './chat-widget.css';

interface ChatWidgetProps {
  name: string;
  timestamp: string;
  text: string;
  unreads?: string;
}

export class ChatWidget extends Block<ChatWidgetProps> {
  constructor(props: ChatWidgetProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
