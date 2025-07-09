import { System } from "../ecs/System";
import { Entity } from "../ecs/Entity";
import { PositionComponent } from "../components/PositionComponent";
import { RenderComponent } from "../components/RenderComponent";

export class RenderSystem extends System {
  update(entities: Entity[], delta: number): void {
    for (const entity of entities) {
      const position = entity.getComponent<PositionComponent>("position");
      const render = entity.getComponent<RenderComponent>("render");

      if (position && render) {
        render.sprite.setPosition(position.x, position.y);
      }
    }
  }
}
