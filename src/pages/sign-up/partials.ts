import Handlebars from 'handlebars/runtime';
import signUpFormPart from './components/sign-up-form/sign-up-form.hbs';

export default function() {
  Handlebars.registerPartial('signUpFormPart', signUpFormPart);
}
