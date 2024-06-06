import './index.css';
import './shared/styles/fonts.css';
import './shared/styles/global.css';
import { Router } from './utils';

import { 
  IndexPage,
  SignUpPage,
  SignInPage,
  ChatPage,
  UserSettingsPage,
  _404Page,
  _500Page,
} from './pages';

const router = new Router('.main');
router
.use('/', IndexPage)
.use('/sign-up', SignUpPage)
.use('/sign-in', SignInPage)
.use('/chat', ChatPage)
.use('/user-settings', UserSettingsPage)
.use('/404', _404Page)
.use('/500', _500Page)
.start();
