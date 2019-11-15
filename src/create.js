export default function() {
  const createTileMap = ({ mapKey, tileKey, tileWidth, tileHeight, tileMargin, tileSpacing, mapTileWidth, mapTileHeight, x, y }) => {
    const map = this.make.tilemap({
      key: mapKey,
      tileWidth: mapTileWidth || 15,
      tileHeight: mapTileHeight || 15
    });
    const tileset = map.addTilesetImage(tileKey,tileKey, tileWidth, tileHeight, tileMargin || 0, tileSpacing || 0);
    const layer = map.createStaticLayer(0, tileset, x || 0, y || 0);

    return { map, tileset, layer };
  };

  this.speaking = false;
  this.lightOn = true;

  // Level 1 (house)
  const house_house1 = createTileMap({
    mapKey: "house-house1",
    tileKey: "house1-tiles",
    tileWidth: 32,
    tileHeight: 32,
    y: -16
  });
  const house_house3 = createTileMap({
    mapKey: "house-house3",
    tileKey: "house3-tiles",
    tileWidth: 16,
    tileHeight: 16
  });
  const house_city = createTileMap({
    mapKey: "house-city",
    tileKey: "city-tiles",
    tileWidth: 16,
    tileHeight: 16,
    tileSpacing: 1
  });
  const house_house2 = createTileMap({
    mapKey: "house-house2",
    tileKey: "house2-tiles",
    tileWidth: 32,
    tileHeight: 32,
    x: -16,
    y: -16
  });

  this.bottle = this.physics.add.sprite(860, 560, "bottle");
  this.light = this.physics.add.sprite(640, 460, "light");
  this.player = this.physics.add.sprite(600, 550, "human");
  this.player.setFrame(1)

  const house_house2_above = createTileMap({
    mapKey: "house-house2-above",
    tileKey: "house2-tiles",
    tileWidth: 32,
    tileHeight: 32,
    y: -16
  });
  const house_house3_above = createTileMap({
    mapKey: "house-house3-above",
    tileKey: "house3-tiles",
    tileWidth: 16,
    tileHeight: 16
  });


  this.cursors = this.input.keyboard.createCursorKeys();

  // Collisions
  const map_house_collision = this.make.tilemap({
    key: 'house-collision',
    tileWidth: 16,
    tileHeight: 16
  });
  const map_house_collision_layer = map_house_collision.createStaticLayer(0, "", -48);
  map_house_collision.setCollisionBetween(0, 100);
  this.physics.add.collider(this.player, map_house_collision_layer);

  /* const debugGraphics = this.add.graphics().setAlpha(0.75);
  map_house_collision.renderDebug(debugGraphics, {
    tileColor: null, // Color of non-colliding tiles
    collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  }); */

  this.cursors = this.input.keyboard.createCursorKeys();

  this.cameras.main.startFollow(this.player, false, 0.05, 0.05);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('human', { frames: [5,4,3,4] }),
    frameRate: 8,
    repeat: 0
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('human', { frames: [6,7,8,7] }),
      frameRate: 8,
      repeat: 0
  });

  this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNumbers('human', { frames: [9,10,11,10] }),
    frameRate: 8,
    repeat: 0
  });

  this.anims.create({
    key: 'down',
    frames: this.anims.generateFrameNumbers('human', { frames: [0,1,2,1] }),
    frameRate: 8,
    repeat: 0
  });

  this.input.keyboard.on('keydown', () => {
    //ACTION
    if(event.code === "Space") {
      if(this.speaking) {
        this.speaking.destroy();
        this.content.destroy();
        this.speaking = false;
      } else {
        if(this.physics.collide(this.bottle, this.player) && [9,10,11].includes(this.player.frame.name)) {
          this.bottle.destroy();
          createSpeechBubble(this.player.x, this.player.y, 'You took The bottle', this);
        }
  
        if(this.physics.collide(this.light, this.player) && [9,10,11].includes(this.player.frame.name)) {
          if(this.light.frame.name == 1) {
            this.light.setFrame(0);
            this.lightOn = true;
            createSpeechBubble(this.player.x, this.player.y, 'You turned the light on.', this);
          } else {
            this.light.setFrame(1);
            this.lightOn = false;
            createSpeechBubble(this.player.x, this.player.y, 'You turned the light off.', this);
          }
        }
      }
    }
  });

}

//from https://phaser.io/examples/v3/view/game-objects/text/static/speech-bubble
function createSpeechBubble (x, y, quote, game)
{
    let bubbleWidth = 300;
    let bubbleHeight = 100;
    let bubblePadding = 0;
    let arrowHeight = bubbleHeight / 4;

    let bubble = game.add.graphics({ x: x, y: y + 100});

    //  Bubble shadow
    bubble.fillStyle(0x222222, 0.5);
    bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 7);

    //  Bubble color
    bubble.fillStyle(0x555555, 1);

    //  Bubble outline line style
    bubble.lineStyle(4, 0x222222, 1);

    //  Bubble shape and outline
    bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 7);
    bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 7);

    game.content = game.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 15, color: '#FFFFFF', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

    let b = game.content.getBounds();

    game.content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
    game.speaking = bubble;
}

