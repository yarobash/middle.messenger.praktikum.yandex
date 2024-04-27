import { Block } from '../../utils';
import { chatSettings } from './components/chat-settings';
import { getProfile } from './components/get-profile';
import { searchChats } from './components/search-chats';
import { chats } from './components/chats';
import { curUser } from './components/cur-user';
import { chatManage } from './components/chat-manage';
import { chatDate } from './components/chat-date';
import { inMsg } from './components/in-message';
import { msgImg } from './components/msg-img';
import { outMsg } from './components/out-message';
import { attachBtn } from './components/attach-btn';
import { texting } from './components/texting-form';
import template from './chat.hbs';
import './chat.css';

const msgs = [inMsg, msgImg, outMsg];

class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}

export const chatPage = new Chat({
  chatSettings,
  getProfile,
  searchChats,
  chats,
  curUser,
  chatManage,
  chatDate,
  inMsg,
  msgImg,
  outMsg,
  attachBtn,
  texting,
  msgs,
});
