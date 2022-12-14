import registerAllPartials from './shared/partials/partials';

import indexPage from './pages/index/index.hbs';
import chatPage from './pages/chat/chat.hbs';
import userSettingsPage from './pages/user-settings/userSettings.hbs';
import signUpPage from './pages/sign-up/signUp.hbs';
import signInPage from './pages/sign-in/signIn.hbs';
import errorPage from './pages/error-page/errorPage.hbs';

import chatPageContext from './shared/contexts/chat';
import userSettingsPageContext from './shared/contexts/user';
import signUpPageContext from './shared/contexts/sign-up';
import signInPageContext from './shared/contexts/sign-in';
import _500PageContext from './shared/contexts/500';
import _404PageContext from './shared/contexts/404';


registerAllPartials();

const content = document.querySelector('.content');

content.innerHTML = indexPage();

switch (window.location.pathname) {
  case '/':
    content.innerHTML = indexPage();
    break;
  case '/sign-in':
    content.innerHTML = signInPage(signInPageContext);
    break;
  case '/sign-up':
    content.innerHTML = signUpPage(signUpPageContext);
    break;
  case '/chat':
    content.innerHTML = chatPage(chatPageContext);
    break;
  case '/user-settings':
    content.innerHTML = userSettingsPage(userSettingsPageContext);
    break;
  case '/500':
    content.innerHTML = errorPage(_500PageContext);
    break;
  case '/404':
    content.innerHTML = errorPage(_404PageContext);
    break;
  default:
    content.innerHTML = errorPage(_404PageContext);
} 
