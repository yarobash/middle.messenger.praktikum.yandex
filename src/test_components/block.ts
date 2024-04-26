import EventBus from '../utils/event-bus';
import { nanoid } from 'nanoid';

type PropMember = number | string | Block | Block[];

export abstract class Block<P extends Record<string, PropMember> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  } as const;

  public id: string;
  protected props: P;
  public children: Record<string, Block>;
  private _element!: HTMLElement;
  private _eventBus: EventBus<typeof Block.EVENTS>;

  private eventListenersStoreOld: [elem: HTMLElement, listener: string, cb: () => void][] = [];
  private eventListenersStoreNew: [elem: HTMLElement, listener: string, cb: () => void][] = [];

  constructor(propsWithChildren: P) {
    const { props, children } = this.separatePropsAndChildren(propsWithChildren);
    this._eventBus = new EventBus<typeof Block.EVENTS>();
    this.registerEvents();
    this.props = this._makePropsProxy(props);
    this.children = children;
    this.id = nanoid(6);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  private get eventBus() {
    return this._eventBus;
  }

  private registerEvents() {
    this.eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private separatePropsAndChildren(propsWithChildren: P): { props: Record<string, string | number>, children: Record<string, Block | Block[]> } {
    const accumulator: { props: Record<string, string | number>, children: Record<string, Block | Block[]> } = { props: {}, children: {} };
    return Object.entries(propsWithChildren).reduce((acc, [key, value]) => {
      if (Array.isArray(value)) {
        acc.children[key] = value.filter((block) => block instanceof Block);
      }
      if (value instanceof Block) {
        acc.children[key] = value;
      } else {
        if (typeof value === 'string' || typeof value === 'number') {
          acc.props[key] = value;
        }
      }
      return acc;
    }, accumulator);
  }

  private _init() {
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _render() {
    const wrapper = this.render();
    const newElement = wrapper.content.firstElementChild as HTMLElement;
    if (this._element) {
      this.removeEvents();
      this._element.replaceWith(newElement);
    }
    if (newElement && newElement instanceof HTMLElement) {
      this._element = newElement;
    } else {
      throw new Error('Элемент не существует или не является HTML элементом');
    }
  }

  abstract render(): HTMLTemplateElement;

  protected compile(template: (props: P) => string, props: P): HTMLTemplateElement {
    const propsAndStubs = { ...props };
    Object.entries(this.children).forEach(([name, instance]) => {
      propsAndStubs[name] = Array.isArray(instance)
        ? instance.map((block) =>  `<div data-id="${block.id}"></div>`).join('')
        :`<div data-id="${instance.id}"></div>`;
    });

    const wrapper = document.createElement('template');
    wrapper.innerHTML = template(propsAndStubs);
    this.addEvents(wrapper.content);
    Object.values(this.children).flat().forEach((child) => {
      const stub = wrapper.content.querySelector(`[data-id="${child.id}"]`);
      if (!stub) return;
      stub.replaceWith(child.getContent());
    });

    return wrapper;
  }

  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).flat().forEach((child) => child.dispatchComponentDidMount());
  }

  protected componentDidMount() {};

  public dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  public componentDidUpdate(oldProps: P, newProps: P) {
    // написать глубокое сравнение объектов, а пока всегда кидать true
    if (oldProps !== newProps) {
      return true;
    }
    return false;
  }

  public setProps(newProps: P) {
    if (!newProps) {
      return;
    }
    Object.assign(this.props, newProps);
  }

  private addEvents(elem: DocumentFragment) {
    const findElemsByAttributePrefix = (elem: DocumentFragment, selector: string, prefix: string): HTMLElement[] => {
      const attrRegex = new RegExp(`^${prefix}.*$`, 'i');
      return Array.from(elem.querySelectorAll(selector))
        .filter((e) => {
          if (!e.hasAttributes) return false;
          for (const attr of e.attributes) {
            if (attrRegex.test(attr.name)) return true;
          }
          return false;
        }) as HTMLElement[];
    };

    if (('events' in this.props) && Object.keys(this.props.events as object).length) {
      const elemsWithEvents = findElemsByAttributePrefix(elem, '*', 'data-evt-');
      this.eventListenersStoreOld = [...this.eventListenersStoreNew];
      elemsWithEvents.forEach((elem) => {
        for (const attr of elem.attributes) {
          const listener = attr.name.replace('data-evt-', '');
          const cb = this.props.events[attr.value];
          elem.addEventListener(listener, cb);
          this.eventListenersStoreNew.push([elem, listener, cb]);
        }
      });
      // Убираем служебные атрибуты, чтобы не висели в DOMе
      elemsWithEvents.forEach((elem) => {
        Array.from(elem.attributes)
        .map((attr) => attr.name)
        .filter((name) => name.startsWith('data-evt-'))
        .forEach((name) => elem.removeAttribute(name));
      });
    }
  }

  private removeEvents() {
    this.eventListenersStoreOld.forEach((el) => {
      const [elem, listener, cb] = el;
      elem.removeEventListener(listener, cb);
    });
  }

  private get element() {
    return this._element;
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: P) {
    return new Proxy(props, {
      get: (target: P, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: P, prop: string, value: PropMember) => {
        const oldTarget = { ...target };
        target[prop] = value;
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty: () => {
        throw new Error('Нельзя удалять свойства');
      }
    });
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}