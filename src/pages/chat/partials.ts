import Handlebars from 'handlebars/runtime';
import attachBtnPart from './components/attach-btn/attach-btn.hbs';
import chatDatePart from './components/chat-date/chat-date.hbs';
import chatManagePart from './components/chat-manage/chat-manage.hbs';
import chatWidgetPart from './components/chat-widget/chat-widget.hbs';
import chatsPart from './components/chats/chats.hbs';
import curUserPart from './components/cur-user/cur-user.hbs';
import getProfilePart from './components/get-profile/get-profile.hbs';
import inMsgPart from './components/in-message/in-message.hbs';
import msgImgPart from './components/msg-img/msg-img.hbs';
import outMsgPart from './components/out-message/out-message.hbs';
import searchChatsPart from './components/search-chats/search-chats.hbs';
import textingForm from './components/texting-form/texting-form.hbs';
import chatSettingsPart from './components/chat-settings/chat-settings.hbs';

export default function() {
  Handlebars.registerPartial('getProfilePart', getProfilePart);
  Handlebars.registerPartial('attachBtnPart', attachBtnPart);
  Handlebars.registerPartial('outMsgPart', outMsgPart);
  Handlebars.registerPartial('inMsgPart', inMsgPart);
  Handlebars.registerPartial('msgImgPart', msgImgPart);
  Handlebars.registerPartial('textingForm', textingForm);
  Handlebars.registerPartial('curUserPart', curUserPart);
  Handlebars.registerPartial('chatManagePart', chatManagePart);
  Handlebars.registerPartial('chatDatePart', chatDatePart);
  Handlebars.registerPartial('searchChatsPart', searchChatsPart);
  Handlebars.registerPartial('chatsPart', chatsPart);
  Handlebars.registerPartial('chatWidgetPart', chatWidgetPart);
  Handlebars.registerPartial('chatSettingsPart', chatSettingsPart);
}
