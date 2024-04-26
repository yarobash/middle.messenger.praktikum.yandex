export default class EventBus<E extends Record<string, string>> {
  private readonly listeners: { [key in E]?: Function[]} = {};

  on<F extends (...args: any) => void>(event: E, callback: F) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(callback);
  }

  off<F extends (...args: any) => void>(event: E, callback: F) {
    if (!this.listeners[event]) {
      throw new Error(`Событие ${event} не найдено`);
    }

    this.listeners[event] = this.listeners[event]!.filter(
      listener => listener !== callback,
    );
  }

  emit<F extends (...args: any) => void>(event: E, ...args: Parameters<F>) {
    if (!this.listeners[event]) {
      throw new Error(`Событие ${event} не найдено`);
    }
    this.listeners[event]!.forEach(function (listener) {
      listener(...args);
    });
  }
}
