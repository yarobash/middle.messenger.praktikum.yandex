export function render(query: string, block: any) {
  const root = document.querySelector(query) as HTMLElement;
  root!.replaceChildren();
  root!.appendChild(block.getContent());
  block.dispatchComponentDidMount();
}
