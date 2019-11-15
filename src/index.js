import 'phaser';

import preload from './preload';
import create from './create';
import update from './update';

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
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 } // Top down game, so no gravity
    }
  }
};

const game = new Phaser.Game(config);

// game.state.add('Boot', boot);

/* function create() {
  const centerX = width / 2;
  const centerY = height / 2;
  const welcomeMessage = `Welcome to Phaser ${pkg.version}`;

  this.add.image(centerX, centerY * 1.2, 'study');

  this.add
    .text(centerX, centerY * 0.8, welcomeMessage, { font: "bold 19px Arial", fill: "#fff" })
    .setOrigin(0.5, 0.5);
} */

Window.game = game;