export class EventBus {
  listeners: any;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: Function) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener: any) => listener !== callback);
  }

  emit(event: string, ...args: ({} | undefined)[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function (listener: any) {
      listener(...args);
    });
  }
}
