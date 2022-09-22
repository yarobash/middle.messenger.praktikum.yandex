import Header from "./components/dev-proc/Header";
import { render } from "./utils/renderDOM";
import signUpContext from './shared/contexts/sign-up';


const signUpForm = new Header(signUpContext);

render('.content', signUpForm);

signUpContext.login.errBoxState = 'show';
signUpContext.login.inputState = 'invalid';

setTimeout(() => {
  signUpForm.setProps(signUpContext);
}, 1000);

