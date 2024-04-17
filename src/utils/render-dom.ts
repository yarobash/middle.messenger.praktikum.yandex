import { queryElement } from './typing-helpers';
import { Block } from './';

export function renderDOM(query: string, block: Block): HTMLElement {
  const root = queryElement(query, HTMLElement);
  root.replaceChildren(block.getContent());
  block.dispatchComponentDidMount();
  return root;
}
