import context from './context';
import registerPartials from './partials';
import chat from './chat.hbs';
import './index.css';

export function chatPage(): string {
  registerPartials();
  return chat(context); 
}
