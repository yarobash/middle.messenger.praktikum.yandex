class EventBus {
  private readonly listeners: Record<string, Array<(...targs: any[]) => void>> = {};

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      throw new Error(`Несуществующее событие: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      throw new Error(`Несуществующее событие: ${event}`);
    }
    
    this.listeners[event].forEach((cb) => cb(...args));
  }
}
