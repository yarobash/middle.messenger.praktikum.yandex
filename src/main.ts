import { indexPage } from './pages/index';
import { chatPage } from './pages/chat';
import { signInPage } from './pages/sign-in';
import { signUpPage } from './pages/sign-up';
import { userSettingsPage } from './pages/user-settings';
import { errorPage } from './pages/error-page';
import './index.css';
import './shared/styles/fonts.css';
import './shared/styles/global.css';

const pages = {
  indexPage,
  chat: chatPage,
  'sign-in': signInPage,
  'sign-up': signUpPage,
  'user-settings': userSettingsPage,
  '404': errorPage()[0],
  '500': errorPage()[1],
};

function navigate(page: string) {
  const root = document.querySelector('.content');
  //@ts-ignore
  root!.innerHTML = pages[page]();
}

document.addEventListener('DOMContentLoaded', () => navigate('indexPage'));
document.addEventListener('click', (evt) => {
  //@ts-ignore
  const page = evt.target.getAttribute('href');
  if (page) navigate(page.slice(1));
  evt.preventDefault();
  evt.stopImmediatePropagation();
});
