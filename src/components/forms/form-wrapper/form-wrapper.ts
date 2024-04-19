import { Block } from '../../../utils';
import template from './form-wrapper.hbs';
import './form-wrapper.css';

interface FormWrapperProps {
  className: string;
  form: Block;
}

export class FormWrapper extends Block<FormWrapperProps> {
  constructor(props: FormWrapperProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
