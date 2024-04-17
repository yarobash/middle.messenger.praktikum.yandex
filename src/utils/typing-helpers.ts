function checkedQuerySelector(
  selector: string,
  parent: Element | Document = document
): Element {
  const element = parent.querySelector(selector);
  if (!element) {
    throw new Error('Отсутствует необходимый элемент');
  }
  return element;
}

export function queryElement<T extends typeof Element>(
  selector: string,
  type: T,
  container: Element | Document = document
): InstanceType<T> {
  const element = checkedQuerySelector(selector, container);
  if (!(element instanceof type)) {
    throw new Error(`Селектор ${selector} совпавший с ${element} не соответствует типу ${type}`);
  }
  return element as InstanceType<T>;
}
