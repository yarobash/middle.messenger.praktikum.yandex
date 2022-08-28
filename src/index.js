import registerAllPartials from './shared/partials/partials';

import indexPage from './pages/index/index.hbs';
import chatPage from './pages/chat/chat.hbs';
import userSettingsPage from './pages/user-settings/userSettings.hbs';
import signUpPage from './pages/sign-up/signUp.hbs';
import signInPage from './pages/sign-in/signIn.hbs';
import _500Page from './pages/500/500.hbs';

import chatPageContext from './shared/contexts/chat';
import userSettingsPageContext from './shared/contexts/user';
import signUpPageContext from './shared/contexts/sign-up';
import signInPageContext from './shared/contexts/sign-in';
import _500PageContext from './shared/contexts/500';


registerAllPartials();

const content = document.querySelector('.content');

content.innerHTML = indexPage();

switch (window.location.pathname) {
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
    content.innerHTML = _500Page(_500PageContext);
    break;
  default:
    content.innerHTML = indexPage();
} 
