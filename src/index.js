import handlebars from 'handlebars/dist/handlebars.runtime';

import indexPage from './pages/index/index.hbs';
import chatPage from './pages/chat/chat.hbs';
import loginPage from './pages/login/login.hbs';

import outMsgPart from './components/out-message/outMessage.hbs';
import inMsgPart from './components/in-message/inMessage.hbs';
import msgImgPart from './components/msg-img/msgImg.hbs';
import textingForm from './components/texting-form/textingForm.hbs';
import curUserPart from './components/cur-user/curUser.hbs';
import chatManagePart from './components/chat-manage/chatManage.hbs';
import chatDatePart from './components/chat-date/chatDate.hbs';

import loginPageContext from './shared/contexts/login';
import chatPageContext from './shared/contexts/chat';

handlebars.registerPartial('outMsgPart', outMsgPart);
handlebars.registerPartial('inMsgPart', inMsgPart);
handlebars.registerPartial('msgImgPart', msgImgPart);
handlebars.registerPartial('textingForm', textingForm);
handlebars.registerPartial('curUserPart', curUserPart);
handlebars.registerPartial('chatManagePart', chatManagePart);
handlebars.registerPartial('chatDatePart', chatDatePart);

const content = document.querySelector('.content');

content.innerHTML = indexPage();

switch (window.location.pathname) {
  case '/login':
    content.innerHTML = loginPage(loginPageContext);
    break;
  case '/chat':
    content.innerHTML = chatPage(chatPageContext);
    break;
  default:
    content.innerHTML = indexPage();
} 
