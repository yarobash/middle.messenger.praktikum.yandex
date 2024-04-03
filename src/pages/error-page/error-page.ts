import errorPageTempl from './error-page.hbs';
import { registerPartials } from './partials';
import _404 from './context404';
import _500 from './context500';
import './index.css';

export function errorPage() {
  registerPartials();
  
  function _404ErrPage() {
    return errorPageTempl(_404);
  }

  function _500ErrPage() {
    return errorPageTempl(_500);
  }

  return [_404ErrPage, _500ErrPage];
}
