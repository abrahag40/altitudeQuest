import { Entity } from "./Entity";
import { System } from "./System";

export class World {
  entities: Entity[] = [];
  systems: System[] = [];

  addEntity(entity: Entity): void {
    this.entities.push(entity);
  }

  addSystem(system: System): void {
    this.systems.push(system);
  }

  update(delta: number): void {
    for (const system of this.systems) {
      system.update(this.entities, delta);
    }
  }
}
