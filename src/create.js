import house from './assets/maps/House.json';

export default function() {
  // When loading from an array, make sure to specify the tileWidth and tileHeight
  // const map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16, tileSpacing: 1 });
  /* const layers = [];
  house.layers.forEach(layerData => {
    console.log(layerData);
    const map = this.make.tilemap({
      data: layerData.data,
      tileWidth: 16,
      tileHeight: 16,
      width: 16,
      height: 16
    });
    const tiles = map.addTilesetImage("House-ts-0", "House-ts-0", 16, 16, 0, 1);
    const layer = map.createStaticLayer("House-ts-0", tiles, layerData.x, layerData.y);
    layer.setCollisionByProperty({ collides: true });
  }); */

  const map = this.make.tilemap('level1');
  console.log(map);
  const tileset = map.addTilesetImage('house1','house1', 16, 16, 0 , 1);
  const layer = map.createStaticLayer('background', tileset);



  //show hitboxes
  const debugGraphics = this.add.graphics().setAlpha(0.75);
  layer.renderDebug(debugGraphics, {
    tileColor: null, // Color of non-colliding tiles
    collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  });


  this.player = this.physics.add.sprite(20, 20, "mummy");
  this.cursors = this.input.keyboard.createCursorKeys();
  this.physics.add.collider(this.player, layer);

}