import EventBus from './EventBus';
import { nanoid } from 'nanoid';

type Props = Record<string, any>;

export default abstract class Block {

  /* 
   * Утверждение к константе (as const) объектного типа
   * рекурсивно помечает все его поля как readonly.
   * Кроме того, все его поля, принадлежащие к примитивным
   * типам, расцениваются как литеральные типы.
   */
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(8);
  protected props: Props;
  private _eventBus: () => EventBus;
  private _element: HTMLElement | null = null;
  private _meta: { tagName: string; props: Props}
  

  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this.props = this.makePropsProxy(props);

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
    this._element!.innerHTML = fragment;
  }

  render(): string {
    return '<div></div>';
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {
  }

  public dispatchComponentDidMount() {
    this._eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props) {
    return oldProps === newProps ? false : true;
  }

  get element() {
    return this._element;
  }

  public getContent() {
    console.log(this._element?.firstChild);
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
};
