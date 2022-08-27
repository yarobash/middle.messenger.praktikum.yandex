import handlebars from 'handlebars/dist/handlebars.runtime';

import indexPage from './pages/index/index.hbs';
import chatPage from './pages/chat/chat.hbs';
import loginPage from './pages/login/login.hbs';

import outMsgPart from './components/out-message/outMessage.hbs';
import inMsgPart from './components/in-message/inMessage.hbs';
import msgImgPart from './components/msg-img/msgImg.hbs';

import loginPageContext from './shared/contexts/login';
import chatPageContext from './shared/contexts/chat';

handlebars.registerPartial('outMsgPart', outMsgPart);
handlebars.registerPartial('inMsgPart', inMsgPart);
handlebars.registerPartial('msgImgPart', msgImgPart);

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
