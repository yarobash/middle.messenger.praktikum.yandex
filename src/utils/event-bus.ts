export type Listener<T extends unknown[] = any[]> = (...args: T) => void;

export default class EventBus<E extends string = string, M extends { [K in E]: unknown[] } = Record<E, any[]>> {
  private readonly listeners: { [key in E]?: Listener<M[E]>[] } = {};

  on(event: E, callback: Listener<M[E]>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(callback);
  }

  off(event: E, callback: Listener<M[E]>) {
    if (!this.listeners[event]) {
      throw new Error(`Событие ${event} не найдено`);
    }

    this.listeners[event] = this.listeners[event]!.filter(
      listener => listener !== callback,
    );
  }

  emit(event: E, ...args: M[E]) {
    if (!this.listeners[event]) {
      throw new Error(`Событие ${event} не найдено`);
    }
    this.listeners[event]!.forEach(function (listener) {
      listener(...args);
    });
  }
}
