import Handlebars from 'handlebars/runtime'; 
import errorBoxPart from './components/error-box/error-box.hbs';

export function registerPartials() {
  Handlebars.registerPartial('errorBoxPart', errorBoxPart);
}
