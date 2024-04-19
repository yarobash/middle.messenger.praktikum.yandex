import { Block } from '../../../../utils';
import template from './texting-form.hbs';
import './texting-form.css';

interface TextingFormProps {
  sendButton: Block;
  textingInput: Block;
  events?: Record<string, (evt: Event) => void>;
}

export class TextingForm extends Block<TextingFormProps> {
  constructor(props: TextingFormProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
