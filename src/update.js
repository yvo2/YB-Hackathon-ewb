export default function() {
  // Stop any previous movement from the last frame
  this.player.body.setVelocity(0);

  // Horizontal movement
  if (Window.cursors.left.isDown) {
    this.player.body.setVelocityX(-100);
  } else if (Window.cursors.right.isDown) {
    this.player.body.setVelocityX(100);
  }

  // Vertical movement
  if (Window.cursors.up.isDown) {
    this.player.body.setVelocityY(-100);
  } else if (Window.cursors.down.isDown) {
    this.player.body.setVelocityY(100);
  }

  // Normalize and scale the velocity so that player can't move faster along a diagonal
  this.player.body.velocity.normalize().scale(1);
}