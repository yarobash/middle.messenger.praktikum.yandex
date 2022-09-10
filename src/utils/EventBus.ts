type evtHandler<A extends any[] = unknown[]> = (...args: A) => void;

export class EventBus {
  private readonly listeners: Record<string, evtHandler[]> = {};

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: evtHandler) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: evtHandler) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
  }

  emit(event: string, ...args: unknown[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    
    this.listeners[event].forEach((cb) => cb(...args));
  }
}
