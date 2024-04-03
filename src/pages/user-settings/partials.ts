import Handlebars from 'handlebars/runtime';
import btnBackPart from './components/btn-back/btn-back.hbs';
import userAvatarPart from './components/user-avatar/user-avatar.hbs';
import userSettingsFormPart from './components/user-settings-form/user-settings-form.hbs';

export function registerPartials() {
  Handlebars.registerPartial('btnBackPart', btnBackPart);
  Handlebars.registerPartial('userAvatarPart', userAvatarPart);
  Handlebars.registerPartial('userSettingsFormPart', userSettingsFormPart);
}
