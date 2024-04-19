import { Block } from '../../../utils';
import template from './input-error.hbs';
import './input-error.css';

interface InputErrorProps {
  errText: string;
}

export class InputError extends Block<InputErrorProps> {
  constructor(props: InputErrorProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }

  public showError(errText: string) {
    this.setProps({ errText: errText });
    this.show();
  }

  public hideError() {
    this.setProps({ errText: '' });
    this.hide();
  }
}
