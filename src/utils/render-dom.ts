import { queryElement } from './typing-helpers';
import { Block } from './';

function renderDOM(query: string, block: Block): HTMLElement {
  const root = queryElement(query, HTMLElement);
  root.replaceChildren(block.getContent() as Node);
  block.dispatchComponentDidMount();
  return root;
}

export default renderDOM;
