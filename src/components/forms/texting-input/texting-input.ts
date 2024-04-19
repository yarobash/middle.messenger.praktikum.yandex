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
}
