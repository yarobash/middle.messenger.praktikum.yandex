type EvtHandler = () => void;
type Listeners = Record<string, Array<EvtHandler>>;

interface IEventBus {
  on(evt: string, cb: EvtHandler): void
  off(evt: string, cb: EvtHandler): void
  emit(evt: string, ...args: Parameters<EvtHandler>): void
}

export class EventBus {
  private readonly listeners: Listeners = {};

  constructor() {
    this.listeners = {};
  }

  on: IEventBus['on'] = (evt, cb) => {
    if (!this.listeners[evt]) {
      this.listeners[evt] = [];
    }
    this.listeners[evt].push(cb);
  };

  off: IEventBus['off'] = (evt, cb) => {
    if (!this.listeners[evt]) {
      throw new Error(`Нет события: ${evt}`);
    }
    this.listeners[evt] = this.listeners[evt].filter(
      (listener) => listener !== cb
    );
  };

  emit: IEventBus['emit'] = (evt, ...args) => {
    if (!this.listeners[evt]) {
      throw new Error(`Нет события: ${evt}`);
    }
    this.listeners[evt].forEach(listener => listener(...args));
  };
}
