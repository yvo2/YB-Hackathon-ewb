export default () => {
  // Stop any previous movement from the last frame
  Window.game.player.body.setVelocity(0);

  // Horizontal movement
  if (Window.cursors.left.isDown) {
    Window.game.player.body.setVelocityX(-100);
  } else if (Window.cursors.right.isDown) {
    Window.game.player.body.setVelocityX(100);
  }

  // Vertical movement
  if (Window.cursors.up.isDown) {
    Window.game.player.body.setVelocityY(-100);
  } else if (Window.cursors.down.isDown) {
    Window.game.player.body.setVelocityY(100);
  }

  // Normalize and scale the velocity so that player can't move faster along a diagonal
  Window.game.player.body.velocity.normalize().scale(1);
}