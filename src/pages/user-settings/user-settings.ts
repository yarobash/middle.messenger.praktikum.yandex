import userSettingsTempl from './userSettings.hbs';
import { registerPartials } from './partials';
import userSettingsContext from './context';
import './index.css';

export function userSettingsPage(): string {
  registerPartials();
  return userSettingsTempl(userSettingsContext);
}
