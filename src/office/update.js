let foodGiverPosition = 1250;
let foodGiverState = true; // true: -> false: <-

let angryManPosition = 385;
let angryManState = true; // true: top->down, false: down->top

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

  if (foodGiverState) {
    foodGiverPosition += 0.1;
  } else {
    foodGiverPosition -= 0.1;
  }
  this.foodgiver.x = foodGiverPosition;

  if (foodGiverPosition > 1300) {
    foodGiverState = false;
  }
  if (foodGiverPosition < 1250) {
    foodGiverState = true;
  }

  if (angryManState) {
    angryManPosition += 2;
    if (!this.angryman.anims.isPlaying) {
      this.angryman.anims.play('down');
    }
  } else {
    angryManPosition -= 2;
    if (!this.angryman.anims.isPlaying) {
      this.angryman.anims.play('up');
    }
  }
  this.angryman.y = angryManPosition;

  if (angryManPosition > 500) {
    angryManState = false;
    this.angryman.anims.play('up');
  }
  if (angryManPosition < 385) {
    angryManState = true;
    this.angryman.anims.play('down');
  }
}

