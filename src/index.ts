import Header from "./components/dev-proc/Header";
import { render } from "./utils/renderDOM";
import signUpContext from './shared/contexts/sign-up';

const signUpFormEvents = {
  events: {
    input: {
      className: 'sign-up-form__inpt',
      handler: (event?: Event) => {
        const target = event?.target as HTMLInputElement;
        console.log(target!.value!);
      },
    },
  },
}

const signUpForm = new Header({...signUpContext, ...signUpFormEvents});

render('.content', signUpForm);

signUpContext.login.errBoxState = 'show';
signUpContext.login.inputState = 'invalid';

setTimeout(() => {
  signUpForm.setProps(signUpContext);
}, 1000);

