import registerAllPartials from './shared/partials/partials';

import indexPage from './pages/index/index.hbs';
import chatPage from './pages/chat/chat.hbs';
import loginPage from './pages/login/login.hbs';
import userSettingsPage from './pages/user-settings/userSettings.hbs';

import loginPageContext from './shared/contexts/login';
import chatPageContext from './shared/contexts/chat';
import userSettingsPageContext from './shared/contexts/user';

registerAllPartials();

const content = document.querySelector('.content');

content.innerHTML = indexPage();

switch (window.location.pathname) {
  case '/log-in':
    content.innerHTML = loginPage(loginPageContext);
    break;
  case '/chat':
    content.innerHTML = chatPage(chatPageContext);
    break;
  case '/user-settings':
    content.innerHTML = userSettingsPage(userSettingsPageContext);
    break;
  default:
    content.innerHTML = indexPage();
} 
