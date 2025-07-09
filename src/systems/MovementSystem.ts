import { System } from "../ecs/System";
import { Entity } from "../ecs/Entity";
import { PositionComponent } from "../components/PositionComponent";

export class MovementSystem extends System {
  update(entities: Entity[], delta: number): void {
    for (const entity of entities) {
      const position = entity.getComponent<PositionComponent>("position");
      if (position) {
        position.x += 1 * delta;
        position.y += 1 * delta;

        console.log(`Entity ${entity.id} moved to (${position.x.toFixed(2)}, ${position.y.toFixed(2)})`);
      }
    }
  }
}

