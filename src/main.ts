import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1d1d1d',
  scene: {
    create() {
      this.add.text(200, 300, 'Altitude Quest', { font: '32px Arial', color: '#ffffff' });
    }
  }
};

new Phaser.Game(config);
