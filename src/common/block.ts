import { EventBus } from './event-bus';

export class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  protected _props: any;
  protected _element: HTMLElement;
  private _meta: { tagName: string; props?: any };
  eventBus: EventBus;

  constructor(tagName = 'div', props = {}) {
    this.eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };
    this._props = this._makePropsProxy(props);

    this._registerEvents();
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(): void {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init(): void {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount(): void {
    this.componentDidMount();
  }

  componentDidMount(): void {}

  dispatchComponentDidMount(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this._props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render(): void {
    const block = this.render();
    this.removeEvents();
    this._element.innerHTML = '';
    if (block) {
      this._element.appendChild(block);
      this.addEvents();
    }
  }

  render(): DocumentFragment | void {}

  getContent(): HTMLElement {
    return this._element;
  }

  _makePropsProxy(props: any) {
    return new Proxy(props, {
      get: (target: any, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: any, prop: string, value) => {
        const oldProp = { ...target };
        target[prop] = value;
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProp, target);
        return true;
      },
    });
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  show() {}

  hide() {}

  addEvents(): void {
    const { events = {} } = this._props;

    Object.keys(events).forEach(eventName => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  removeEvents(): void {
    const { events = {} } = this._props;

    Object.keys(events).forEach(eventName => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }
}
