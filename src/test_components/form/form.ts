import { Block } from '../../test_components/block';
import template from './form.hbs';

interface FormProps {
  btnFirstCaption: string,
  btnSecCaption: string,
  inputText: string,
  events: {
    focusinHandler: () => void,
    focusoutHandler: () => void,
    btnFirstClickHandler: () => void,
    btnSecClickHandler: () => void,
    mouseoverHandler: () => void,
  },
}

const formContext = {
  btnFirstCaption: 'Добавить',
  btnSecCaption: 'Стереть',
  inputText: 'Пока не то',
  events: {
    focusinHandler: () => console.log('focusinHandler'),
    focusoutHandler: () => console.log('focusoutHandler'),
    btnFirstClickHandler: add,
    btnSecClickHandler: remove,
    mouseoverHandler: () => console.log('Mouseover handler'),
  },
};
const formContextOther = {
  btnFirstCaption: 'sdfsdfsdf',
  btnSecCaption: 'sdfoioiuoiu',
  inputText: 'yuuyuyuyuy',
  events: {
    focusinHandler: () => console.log('focusinHandler'),
    focusoutHandler: () => console.log('focusoutHandler'),
    btnFirstClickHandler: add,
    btnSecClickHandler: remove,
    mouseoverHandler: () => console.log('Mouseover handler'),
  },
};

class Form extends Block<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
const form = new Form(formContext);
const form1 = new Form(formContext);
const form2 = new Form(formContext);
function add(e: EventTarget) {
  const blockContent = form.getContent();
  const input = blockContent.querySelector('.form_input');
  const span = blockContent.querySelector('.form_span');
  span.textContent = input.value;
}

function remove() {
  const blockContent = form.getContent();
  const input = blockContent.querySelector('.form_input');
  const span = blockContent.querySelector('.form_span');
  input.value = '';
  span.textContent = '';
}
export { form, form1, form2 };
