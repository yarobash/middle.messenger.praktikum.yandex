import { Block } from '../../../../utils';
import template from './chats.hbs';
import './chats.css';

interface ChatsProps {
  chatWidget: Block;
}

export class Chats extends Block<ChatsProps> {
  constructor(props: ChatsProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
