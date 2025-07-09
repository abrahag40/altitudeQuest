import { System } from "../ecs/System";
import { Entity } from "../ecs/Entity";
import { InputComponent } from "../components/InputComponent";
import { PositionComponent } from "../components/PositionComponent";

export class InputSystem extends System {
  constructor(private cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    super();
  }

  update(entities: Entity[], delta: number): void {
    for (const entity of entities) {
      const input = entity.getComponent<InputComponent>("input");
      const position = entity.getComponent<PositionComponent>("position");

      if (input && position) {
        if (this.cursors.left?.isDown) position.x -= 100 * delta;
        if (this.cursors.right?.isDown) position.x += 100 * delta;
        if (this.cursors.up?.isDown) position.y -= 100 * delta;
        if (this.cursors.down?.isDown) position.y += 100 * delta;
      }
    }
  }
}
