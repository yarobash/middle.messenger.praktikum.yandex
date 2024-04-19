import { renderDOM } from './utils/render-dom';
import { 
  chatPage,
  indexPage,
  _404Page,
  _500Page,
  userSettingsPage,
  signUpPage,
  signInPage,
} from './pages';

import './index.css';
import './shared/styles/fonts.css';
import './shared/styles/global.css';

renderDOM('.main', indexPage);

switch (window.location.pathname) {
  case '/':
    renderDOM('.main', indexPage);
    break;
  case '/chat':
    renderDOM('.main', chatPage);
    break;
  case '/user-settings':
    renderDOM('.main', userSettingsPage);
    break;
  case '/sign-up':
    renderDOM('.main', signUpPage);
    break;
  case '/sign-in':
    renderDOM('.main', signInPage);
    break;
  case '/404':
    renderDOM('.main', _404Page);
    break;
  case '/500':
    renderDOM('.main', _500Page);
    break;
  default:
    renderDOM('.main', _404Page);
    break;
}
