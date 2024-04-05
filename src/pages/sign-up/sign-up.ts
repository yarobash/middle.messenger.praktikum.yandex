import registerPartials from './partials';
import context from './context';
import signUp from './sign-up.hbs';
import './index.css';

export function signUpPage(): string {
  registerPartials();
  return signUp(context);
}
