import { render } from "./utils/renderDOM";
import Index from './pages/index/index';
import SignUp from './pages/sign-up/sign-up';
import SignIn from './pages/sign-in/sign-in';
import Chat from './pages/chat/chat';

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
}
