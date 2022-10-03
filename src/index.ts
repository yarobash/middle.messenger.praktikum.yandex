import { render } from "./utils/renderDOM";
import Index from './pages/index/index';
import SignUp from './pages/sign-up/sign-up';
import SignIn from './pages/sign-in/sign-in';
import Chat from './pages/chat/chat';
import UserSettings from './pages/user-settings/user-settings';
import { ErrorPage404 } from './pages/error-page/error-page';
import { ErrorPage500 } from './pages/error-page/error-page';

switch (window.location.pathname) {
  case '/':
    render('.content', Index);
    break;
  case '/sign-in':
    render('.content', SignIn);
    break;
  case '/sign-up':
    render('.content', SignUp);
    break;
  case '/chat':
    render('.content', Chat);
    break;
  case '/user-settings':
    render('.content', UserSettings);
    break;
  case '/404':
    render('.content', ErrorPage404);
    break;
  case '/500':
    render('.content', ErrorPage500);
    break;
  default:
    render('.content', ErrorPage404);
}
