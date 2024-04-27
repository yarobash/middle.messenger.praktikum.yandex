import { renderDOM } from './utils/render-dom';
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

type Pages = '/' | '/sign-up' | '/sign-in' | '/404' | '/505' | '/user-settings' | '/chat';

function renderPage(p: Pages): void {
  const renderers: Record<Pages, () => void> = {
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

renderPage(window.location.pathname as Pages);
