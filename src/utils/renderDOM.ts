export function render(query: string, block: any) {
  const root = document.querySelector(query) as HTMLElement;
  root!.appendChild(block.getContent());
  block.dispatchComponentDidMount();
}
