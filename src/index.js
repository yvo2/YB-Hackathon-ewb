import 'phaser';

import overlay from './overlay';
import house from './house';
import office from './office';

// This is the entry point of your game.
const scale = 0.6;
const width = window.innerWidth * scale;
const height = window.innerHeight * scale;

const config = {
  width,
  height,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.Center
  },
  type: Phaser.AUTO,
  scene: [overlay],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 } // Top down game, so no gravity
    }
  }
};

const game = new Phaser.Game(config);

// Add scene
game.scene.add('house', house, true);
// game.scene.add('office', office, true);
game.scene.bringToTop('overlay');

Window.game = game;