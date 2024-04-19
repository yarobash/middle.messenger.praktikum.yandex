import { Block } from '../../../../utils';
import template from './in-message.hbs';
import './in-message.css';

interface InMessageProps {
  inMsgText: string[];
  inTimeStamp: string;
}

export class InMessage extends Block<InMessageProps> {
  constructor(props: InMessageProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
