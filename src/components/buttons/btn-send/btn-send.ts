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
    const elem = this.element as HTMLButtonElement;
    elem.classList.add('send-btn_disabled');
    elem.disabled = true;
  }

  public setCorrect() {
    const elem = this.element as HTMLButtonElement;
    elem.classList.remove('send-btn_disabled');
    elem.disabled = false;
  }
}
