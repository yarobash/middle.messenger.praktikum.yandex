import { Block } from '../../../../utils';
import { TextingInput } from '../../../../components/forms/texting-input';
import { ButtonSend } from '../../../../components/buttons/btn-send';
import template from './texting-form.hbs';
import './texting-form.css';

interface TextingFormProps {
  sendButton: Block;
  textingInput: Block;
  events: {
    handleSubmit: (evt: SubmitEvent) => void,
  },
}

export class TextingForm extends Block<TextingFormProps> {
  constructor(props: TextingFormProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}

const textingInput = new TextingInput({ events: { handleInput }});
const sendButton = new ButtonSend({});

function handleInput() {
  if (textingInput.isValid) {
    sendButton.setCorrect();
  } else {
    sendButton.setError();
  }
}

function handleSubmit(evt: SubmitEvent) {
  evt.preventDefault();
  // eslint-disable-next-line
  console.log({mesage: textingInput.getData()});
}

export const texting = new TextingForm({
  textingInput,
  sendButton,
  events: {
    handleSubmit,
  },
});
