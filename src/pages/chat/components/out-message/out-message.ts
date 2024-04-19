import { Block } from '../../../../utils';
import template from './out-message.hbs';
import './out-message.css';

interface OutMessageProps {
  msgText: string;
  timeStamp: string;
}

export class OutMessage extends Block<OutMessageProps> {
  constructor(props: OutMessageProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
