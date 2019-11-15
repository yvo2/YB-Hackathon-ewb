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
  this.player = this.physics.add.sprite(600, 550, "human");
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
  this.bottle = this.physics.add.sprite(860, 560, "bottle");

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
  this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

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

}