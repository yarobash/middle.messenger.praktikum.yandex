import EventBus from './EventBus';
import { nanoid } from 'nanoid';

export type Props = Record<string, any>;
type Children = Record<string, Block>;

export default abstract class Block {

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  private _id = nanoid(8);
  protected props: Props;
  protected children: Children; 
  private _eventBus: () => EventBus;
  private _element: HTMLElement | null = null;
  private _meta: { tagName: string; props: Props}
  

  constructor(tagName = 'div', propsAndChildren = {}) {
    const eventBus = new EventBus();

    const { children, props } = this._getChildren(propsAndChildren);

    this._meta = {
      tagName,
      props,
    };

    this.props = this.makePropsProxy(props);
    this.children = children;

    this._eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _getChildren(propsAndChildren: Props) {
    const children: Children = {};
    const props: Props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  private _init() {
    this._createResources();
    this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _createResources() {
    this._element = this._createDocumentElement(this._meta.tagName);
  }

  private _createDocumentElement(tag: string) {
    return document.createElement(tag);
  }

  private _render() {
    const fragment = this.render();
    const el = fragment.firstElementChild as HTMLElement;
    this._element?.replaceWith(el);
    this._element = el;
    this._addEvents();
  }

  public abstract render(): DocumentFragment

  private _componentDidMount() {
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  public dispatchComponentDidMount() {
    this._eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    this._removeEvents();
    if (this.componentDidUpdate(oldProps, newProps)) {
      this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props) {
    return oldProps === newProps ? false : true;
  }

  get element(): HTMLElement {
    return this._element!;
  }

  public getContent() {
    return this.element;
  }

  public setProps(newProps: any) {
    if (!newProps) {
      return;
    }

    Object.assign(this.props, newProps);
  }

  private makePropsProxy(props: Record<string, any>) {
    return new Proxy(props, {
      get: (target: Record<string, any>, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      set: (target: Record<string, any>, prop: string, value: any) => {
        const oldTarget = { ...target };

        target[prop] = value;
        this._eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },

      deleteProperty() {
        throw new Error('Access denied');
      }
    });
  }

  private _addEvents() {
    const {events = {}} = this.props;
    Object.keys(events).forEach(event => {
      const targetElements = Array.from(this._element!.getElementsByClassName(events[event].className));
      targetElements.forEach(target => target.addEventListener(event, events[event].handler));
    });
  }

  private _removeEvents() {
    const {events = {}} = this.props;
    Object.keys(events).forEach(event => {
      const targetElements = Array.from(this._element!.getElementsByClassName(events[event].className));
      targetElements.forEach(target => target.removeEventListener(event, events[event].handler));
    });
  }

  protected handleTemplate(template: (props: Props) => string, props: Props) {
    const propsAndStabs = {...props};

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStabs[key] = `<div data-id="${child._id}"></div>`
    });

    const fragment = document.createElement('template') as HTMLTemplateElement;
    fragment.innerHTML = template(propsAndStabs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      stub?.replaceWith(child.getContent());
    });

    return fragment.content;
  }
};
