let nextId = 0;

export class Entity {
  id: number;
  components = new Map<string, any>();

  constructor() {
    this.id = nextId++;
  }

  addComponent<T>(name: string, component: T): this {
    this.components.set(name, component);
    return this;
  }

  getComponent<T>(name: string): T | undefined {
    return this.components.get(name);
  }
}
