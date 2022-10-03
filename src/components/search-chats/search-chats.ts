import Block from "../../utils/Block";
import { Props } from "../../utils/Block";
import searchChats from './searchChats.hbs';

class SearchChats extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(searchChats, this.props);
  }
}

export default new SearchChats({});
