import { Block } from '../../../utils';
import template from './btn-send.hbs';
import './btn-send.css';

interface ButtonSendProps {
  events?: Record<string, (evt: Event) => void>;
}

export class ButtonSend extends Block<ButtonSendProps> {
  constructor(props: ButtonSendProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }

  public setError() {
    const btn = this.element as HTMLButtonElement;
    btn.classList.add('send-btn_disabled');
    btn.disabled = true;
  }

  public setCorrect() {
    const btn = this.element as HTMLButtonElement;
    btn.classList.remove('send-btn_disabled');
    btn.disabled = false;
  }
}
