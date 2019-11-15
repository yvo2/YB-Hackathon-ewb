export default function() {
  // Load a map from a 2D array of tile indices
  /* const level = [
    [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
    [  0,   1,   2,   3,   0,   0,   0,   1,   2,   3,   0 ],
    [  0,   5,   6,   7,   0,   0,   0,   5,   6,   7,   0 ],
    [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
    [  0,   0,   0,  14,  13,  14,   0,   0,   0,   0,   0 ],
    [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
    [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
    [  0,   0,  14,  14,  14,  14,  14,   0,   0,   0,  15 ],
    [  0,   0,   0,   0,   0,   0,   0,   0,   0,  15,  15 ],
    [ 35,  36,  37,   0,   0,   0,   0,   0,  15,  15,  15 ],
    [ 39,  39,  39,  39,  39,  39,  39,  39,  39,  39,  39 ]
  ]; */

  // When loading from an array, make sure to specify the tileWidth and tileHeight
  // const map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16, tileSpacing: 1 });
  const map = this.make.tilemap({
    key: "city-map",
    tileWidth: 16,
    tileHeight: 16
  });
  const tiles = map.addTilesetImage("city-tiles", null, 16, 16, 0, 1);
  const layer = map.createStaticLayer(0, tiles, 0, 0);
  layer.setCollisionBetween(12, 44);
  layer.setCollisionByProperty({ collides: true });


  //show hitboxes
  const debugGraphics = this.add.graphics().setAlpha(0.75);
  layer.renderDebug(debugGraphics, {
    tileColor: null, // Color of non-colliding tiles
    collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  });


  this.player = this.physics.add.sprite(20, 20, "human");
  this.cursors = this.input.keyboard.createCursorKeys();
  this.physics.add.collider(this.player, layer);

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