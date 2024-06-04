import renderDOM from './utils/render-dom';
import { Paths } from './typings/paths';
import './index.css';
import './shared/styles/fonts.css';
import './shared/styles/global.css';

import { 
  indexPage,
  _404Page,
  _500Page,
  signUpPage,
  signInPage,
  userSettingsPage,
  chatPage,
} from './pages';


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

renderPage(window.location.pathname as Paths);
