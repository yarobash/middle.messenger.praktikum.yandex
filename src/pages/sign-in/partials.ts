import Handlebars from 'handlebars/runtime';
import signInFormPart from './components/sign-in-form/sign-in-form.hbs';

export default function() {
  Handlebars.registerPartial("signInFormPart", signInFormPart);
}
