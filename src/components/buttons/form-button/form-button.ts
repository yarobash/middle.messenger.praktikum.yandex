import { Block } from '../../../utils';
import template from './form-button.hbs';
import './form-button.css';

interface FormButtonProps {
  className: string;
  label: string;
}

export class FormButton extends Block<FormButtonProps> {
  constructor(props: FormButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
