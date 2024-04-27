import { Block } from '../../../../utils';
import { ChatWidget } from '../chat-widget';
import template from './chats.hbs';
import './chats.css';

interface ChatsProps {
  chatWidgets: Block[];
}

const chatWidget1 = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '4',
});

const chatWidget2 = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '',
});

const chatWidget3 = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '',
});

const chatWidget4 = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '10+',
});

const chatWidget5 = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '9',
});
const chatWidget6 = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '4',
});
const chatWidget7 = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '9',
});
const chatWidget8 = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '',
});
const chatWidget9 = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '1',
});
const chatWidget10 = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '2',
});

const chatWidgets = [chatWidget1, chatWidget2, chatWidget3, chatWidget4, chatWidget5, chatWidget6, chatWidget7, chatWidget8, chatWidget9, chatWidget10];

export class Chats extends Block<ChatsProps> {
  constructor(props: ChatsProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}

export const chats = new Chats({ chatWidgets });
