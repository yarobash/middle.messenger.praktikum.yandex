import { render } from "./utils/renderDOM";
import SignUpForm from './components/sign-up-form/sign-up-form';

switch (window.location.pathname) {
  case '/':
    render('.content', SignUpForm);
    break;
  case '/sign-up':
    render('.content', SignUpForm);
    break;
}
