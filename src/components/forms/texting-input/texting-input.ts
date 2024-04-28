import { Block } from '../../../utils';
import template from './texting-input.hbs';
import './texting-input.css';

interface TextingInputProps {
  events: Record<string, (evt:Event) => void>;
}

export class TextingInput extends Block<TextingInputProps> {
  constructor(props: TextingInputProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }

  public validate() {
    return (this.element as HTMLInputElement).value ? true : false;

  }

  public get isValid() {
    return this.validate();
  }

  public getData() {
    return (this.element as HTMLInputElement).value;
  }
}
