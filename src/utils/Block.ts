import { EventBus } from './EventBus';
import { nanoid } from 'nanoid';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(8);
  protected props: any;
  public children: Record<string, Block>;
  private eventBus: () => EventBus;
  private #element: HTMLElement | null;
  private #meta: { tagName: string; props: any;}
  

  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus();

    this.#meta = {
      tagName,
      props,
    };

    this.props = this.#makePropsProxy(props);

    this.eventBus = () => eventBus;
  }

  #makePropsProxy(props: any) {
    const self = this;
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      set(target, prop, value) {
        const oldTarget = { ...target };

        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDM, oldTarget, target);
        return true;
      },

      deleteProperty() {
        throw new Error('Access denied');
      }
    });
  }
};
