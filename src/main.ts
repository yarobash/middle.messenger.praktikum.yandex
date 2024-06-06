import './index.css';
import './shared/styles/fonts.css';
import './shared/styles/global.css';
import { Router } from './utils';

import { 
  SignUpPage,
} from './pages';


/*
function renderPage(p: Paths): void {
  const renderers: Record<Paths, () => void> = {
    '/': () => renderDOM('.main', indexPage),
    '/sign-up': () => renderDOM('.main', signUpPage),
    '/sign-in': () => renderDOM('.main', signInPage),
    '/user-settings': () => renderDOM('.main', userSettingsPage),
    '/404': () => renderDOM('.main', _404Page),
    '/505': () => renderDOM('.main', _500Page),
    '/chat': () => renderDOM('.main', chatPage),
  };
  renderers[p]();
}
*/
const router = new Router('.main');
router.use('/', SignUpPage)
.start();
