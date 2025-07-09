import Phaser from "phaser";
import { World } from "./ecs/World";
import { Entity } from "./ecs/Entity";
import { PositionComponent } from "./components/PositionComponent";
import { MovementSystem } from "./systems/MovementSystem";
import { RenderComponent } from "./components/RenderComponent";
import { RenderSystem } from "./systems/RenderSystem";

class MyGame extends Phaser.Scene {
  world = new World();

  preload() {
    this.load.image("player", "assets/player2.png");
    this.load.image('background', 'https://labs.phaser.io/assets/skies/space3.png');
  }  

  create() {
    const player = new Entity();
  
    // Crea sprite visual
    this.add.image(400, 300, 'background');
    const sprite = this.add.sprite(400, 300, "player");
  
    // Añade componentes
    player
      .addComponent("position", new PositionComponent(100, 100))
      .addComponent("render", new RenderComponent(sprite));
  
    this.world.addEntity(player);
  
    // Sistemas
    this.world.addSystem(new MovementSystem());
    this.world.addSystem(new RenderSystem());
  }
  

  update(time: number, delta: number) {
    this.world.update(delta / 1000); // convertir ms a segundos
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#1d1d1d",
  scene: MyGame
};

new Phaser.Game(config);
