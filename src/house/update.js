import goToOffice from "../goToOffice";

export default function() {
  // Stop any previous movement from the last frame
  this.player.body.setVelocity(0);

  if(this.speaking == false) {
    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-100);
      if(!this.player.anims.isPlaying) {
        this.player.anims.play("left");
      }
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(100);
      if(!this.player.anims.isPlaying) {
        this.player.anims.play("right");
      }
    }

    // Vertical movement
    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-100);
      if(!this.player.anims.isPlaying) {
        this.player.anims.play("up");
      }
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(100);
      if(!this.player.anims.isPlaying) {
        this.player.anims.play("down");
      }
    }
  }

  // Normalize and scale the velocity so that player can't move faster along a diagonal
  this.player.body.velocity.normalize().scale(100);

  if(this.player.x > 1350) {
    this.game.summary.wentByFoot = true;
    goToOffice(this, 100, 1)
  }
}

