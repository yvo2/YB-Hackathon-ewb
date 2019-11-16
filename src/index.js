import 'phaser';

import overlay from './overlay';
import house from './house';

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
  scene:[overlay, house],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 } // Top down game, so no gravity
    }
  }
};

const game = new Phaser.Game(config);
game.score = 0;
// Add scene
Window.game = game;