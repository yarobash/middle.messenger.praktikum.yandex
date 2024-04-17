import { EventBus } from './event-bus';
import { nanoid } from 'nanoid';

export class Block<P extends Record<string, any> = any> {

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  };

  public id: string;
  protected props: P;
  public children: Record<string, Block>;
  private eventBus: () => EventBus;
  private _element: HTMLElement;

  constructor(propsWithChildren: P) {
    const eventBus = new EventBus();
    this._registerEvents(eventBus);
    this.eventBus = () => eventBus;
    
    const { props, children } = this._separatePropsAndChildren(propsWithChildren);
    this.props = this._makePropsProxy(props);
    this.children = children;

    this.id = nanoid();

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _separatePropsAndChildren(propsWithChildren: P): { props: P, children: Record<string, Block>} {
    const accumulator: { props: any, children: Record<string, Block> } = { props: {}, children: {} };
    return Object.entries(propsWithChildren).reduce((acc, [key, value]) => {
      if (value instanceof Block) {
        acc.children[key] = value;
      } else {
        acc.props[key] = value;
      }
      return acc;
    }, accumulator);
  }

  private _init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _render() {
    const fragment = this.render();
    const newElement = fragment.firstElementChild as HTMLElement;
    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }
    this._element = newElement;
    this._addEvents();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  protected compile(template: (props: P) => string, props: P) {
    const propsAndStubs = {...props};
    Object.entries(this.children).forEach(([name, instance]) => {
      propsAndStubs[name] = `<div data-id="${instance.id}"></div>`;
    });

    const wrapper = document.createElement('template');
    wrapper.innerHTML = template(propsAndStubs);
    Object.values(this.children).forEach((child) => {
      const stub = wrapper.content.querySelector(`[data-id="${child.id}"]`);
      if (!stub) return;
      stub.replaceWith(child.getContent());
    });

    return wrapper.content;
  }

  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => child.dispatchComponentDidMount());
  }

  protected componentDidMount() {};

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
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

  get element() {
    return this._element;
  }


  private _addEvents() {
    if (this.props.events) {
      Object.entries(this.props.events).forEach(
        ([name, handler]) => this._element.addEventListener(name, handler));
    }
  }

  private _removeEvents() {
    if (this.props.events) {
      Object.entries(this.props.events).forEach(
        ([name, handler]) => this._element.removeEventListener(name, handler));
    }
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
      set: (target: P, prop: string, value: any) => {
        const oldTarget = {...target};
        target[prop] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
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
