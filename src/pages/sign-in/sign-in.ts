import registerPartials from './partials';
import context from './context'; 
import signIn from './sign-in.hbs';
import './index.css';

export function signInPage(): string {
  registerPartials();
  return signIn(context);
}
