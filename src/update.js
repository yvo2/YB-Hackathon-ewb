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


  //ACTION
  if(this.space.isDown) {
    if(this.speaking) {
      this.speaking = false;
    }


    if(this.physics.collide(this.bottle, this.player) && [9,10,11].includes(this.player.frame.name)) {
      this.bottle.destroy();
      createSpeechBubble(this.player.x, this.player.y, 70, 40, 'I took The bottle', this);
    }
  }

  // Normalize and scale the velocity so that player can't move faster along a diagonal
  this.player.body.velocity.normalize().scale(100);
}

//from https://phaser.io/examples/v3/view/game-objects/text/static/speech-bubble
function createSpeechBubble (x, y, width, height, quote, game)
{
    var bubbleWidth = width;
    var bubbleHeight = height;
    var bubblePadding = 10;
    var arrowHeight = bubbleHeight / 4;

    var bubble = game.add.graphics({ x: x, y: y - 70});

    //  Bubble shadow
    bubble.fillStyle(0x222222, 0.5);
    bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16);

    //  Bubble color
    bubble.fillStyle(0xffffff, 1);

    //  Bubble outline line style
    bubble.lineStyle(4, 0x565656, 1);

    //  Bubble shape and outline
    bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);
    bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

    //  Calculate arrow coordinates
    var point1X = Math.floor(bubbleWidth / 7);
    var point1Y = bubbleHeight;
    var point2X = Math.floor((bubbleWidth / 7) * 2);
    var point2Y = bubbleHeight;
    var point3X = Math.floor(bubbleWidth / 7);
    var point3Y = Math.floor(bubbleHeight + arrowHeight);

    //  Bubble arrow shadow
    bubble.lineStyle(4, 0x222222, 0.5);
    bubble.lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y);

    //  Bubble arrow fill
    bubble.fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y);
    bubble.lineStyle(2, 0x565656, 1);
    bubble.lineBetween(point2X, point2Y, point3X, point3Y);
    bubble.lineBetween(point1X, point1Y, point3X, point3Y);

    var content = game.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 10, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

    var b = content.getBounds();

    content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
    game.speaking = bubble;
}

