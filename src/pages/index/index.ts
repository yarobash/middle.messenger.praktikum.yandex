import Block from "../../utils/Block";
import index from './index.hbs';
import { Props } from "../../utils/Block";

class Index extends Block {
  constructor(props: Props) {
    super('div', props);
  }
  
  render() {
    return this.handleTemplate(index, this.props);
  }
}

export default new Index({});
