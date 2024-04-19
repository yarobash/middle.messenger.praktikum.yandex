import { Block } from '../../utils';
import { ChatSettings } from './components/chat-settings';
import { GetProfile } from './components/get-profile';
import { SearchChats } from './components/search-chats';
import { Chats } from './components/chats/chats';
import { CurUser } from './components/cur-user';
import { ChatManage } from './components/chat-manage';
import { ChatDate } from './components/chat-date';
import { InMessage } from './components/in-message';
import { MsgImg } from './components/msg-img';
import { OutMessage } from './components/out-message';
import { AttachBtn } from './components/attach-btn';
import { TextingForm } from './components/texting-form';
import { ChatWidget } from './components/chat-widget';
import { TextingInput } from '../../components/forms/texting-input';
import { ButtonSend } from '../../components/buttons/btn-send/btn-send';
import template from './chat.hbs';
import fotik from '../../static/imgs/fotik.png';
import { constraints } from '../../shared/validators/validators';
import { Validator } from '../../utils';
import './chat.css';

const messageConstraints = {
  message: { ...constraints.message, block: () => getSendButtonBlock() },
};

const validator = new Validator(messageConstraints);
function validateInput(evt: Event) {
  validator.validateInput(evt);
}

interface ChatProps {
  chatSettings: Block;
  getProfile: Block;
  searchChats: Block;
  chats: Block;
  curUser: Block;
  chatManage: Block
  chatDate: Block;
  inMsg: Block;
  msgImg: Block;
  outMsg: Block;
  attachBtn: Block;
  texting: Block;
}

const chatSettings = new ChatSettings({});
const getProfile = new GetProfile({
  btnCaption: 'Профиль', 
});
const searchChats = new SearchChats({});
const chatWidget = new ChatWidget({
  name: 'Aндрей',
  timestamp: '10:49',
  text: 'Изображение',
  unreads: '4',
});
const chats = new Chats({ chatWidget });
const curUser = new CurUser({ name: 'Иван' });
const chatManage = new ChatManage({});
const chatDate = new ChatDate({date: '1 мая'});
const inMsg = new InMessage({
  inMsgText: ['Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.', 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.'],
  inTimeStamp: '12:34',
});
const msgImg = new MsgImg({
  imgSrc: fotik,
  imgAlt: 'Изображение фотоаппарата',
  imgTimeStamp: '12:34',
});
const outMsg = new OutMessage({
  msgText: 'Круто!',
  timeStamp: '12:35',
});
const attachBtn = new AttachBtn({});
const textingInput = new TextingInput({
  events: {
    input: validateInput,
  }
});
const sendButton = new ButtonSend({});
function getSendButtonBlock() {
  return sendButton;
}

function handleSubmit(evt: Event): void {
  evt.preventDefault();
  if (validator.validateForm()) {
    const form = evt.target as HTMLFormElement;
    const inputs = Array.from(form.elements).filter((input) => input.tagName.toLowerCase() === 'input');
    const regObj = inputs.reduce((acc: Record<string, string>, input: HTMLInputElement) => {
      acc[input.name] = input.value;
      return acc;
    }, {});
    // eslint-disable-next-line
    console.log(regObj);
  }
}
const texting = new TextingForm({
  events: {
    submit: handleSubmit,
  },
  textingInput,
  sendButton,
});

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
});
