import { Block } from "../block";
import { form, form1, form2 } from "../form/form";
import header from "../header/header";
import template from './wrapper.hbs';

interface BlockProps {
 header: Block,
 form: Block,
}

const blockProps = {
  form: form,
  forms: [form1, form2, 'form'],
  header: header,
};

class Wrapper extends Block<BlockProps> {
  constructor(props: BlockProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default new Wrapper(blockProps);
