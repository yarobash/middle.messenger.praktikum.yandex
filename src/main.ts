import { indexPage } from './pages/index';
import { chatPage } from './pages/chat';
import { signInPage } from './pages/sign-in';
import { signUpPage } from './pages/sign-up';
import { userSettingsPage } from './pages/user-settings';
import { errorPage } from './pages/error-page';
import './index.css';
import './shared/styles/fonts.css';
import './shared/styles/global.css';

const content = document.querySelector('.content');
const [_404ErrPage, _500ErrPage] = errorPage();

content!.innerHTML = indexPage();

switch (window.location.pathname) {
  case '/':
    content!.innerHTML = indexPage();
    break;
  case '/sign-in':
    content!.innerHTML = signInPage();
    break;
  case '/sign-up':
    content!.innerHTML = signUpPage();
    break;
  case '/chat':
    content!.innerHTML = chatPage();
    break;
  case '/user-settings':
    content!.innerHTML = userSettingsPage();
    break;
  case '/404':
    content!.innerHTML = _404ErrPage();
    break;
  case '/500':
    content!.innerHTML = _500ErrPage();
    break;
} 
