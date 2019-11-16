import createSpeechBubble from "../createSpeechBubble";
import goToOffice from "../goToOffice";

export default function() {
  const createTileMap = ({ mapKey, tileKey, tileWidth, tileHeight, tileMargin, tileSpacing, mapTileWidth, mapTileHeight, x, y }) => {
    const map = this.make.tilemap({
      key: mapKey,
      tileWidth: mapTileWidth || 15,
      tileHeight: mapTileHeight || 15
    });
    const tileset = map.addTilesetImage(tileKey,tileKey, tileWidth || 16, tileHeight || 16, tileMargin || 0, tileSpacing || 0);
    const layer = map.createStaticLayer(0, tileset, x || 0, y || 0);

    return { map, tileset, layer };
  };

  this.speaking = false;
  this.lightOn = true;
  this.game.objective = "Go to work (→)"

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
    tileKey: "house3-tiles"
  });
  const house_city = createTileMap({
    mapKey: "house-city",
    tileKey: "city-tiles",
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
  this.car = this.physics.add.sprite(1170, 600, "car")
  this.velo = this.physics.add.sprite(600, 720, "velo")

  // Player comes here to fit in
  this.player = this.physics.add.sprite(600, 550, "human");
  this.player.setFrame(1);

  const house_house2_above = createTileMap({
    mapKey: "house-house2-above",
    tileKey: "house2-tiles",
    tileWidth: 32,
    tileHeight: 32,
    y: -16
  });
  const house_house3_above = createTileMap({
    mapKey: "house-house3-above",
    tileKey: "house3-tiles"
  });
  const house_trees3 = createTileMap({
    mapKey: "house-trees3",
    tileKey: "house-trees-tiles"
  });
  const house_trees2 = createTileMap({
    mapKey: "house-trees2",
    tileKey: "house-trees-tiles"
  });
  const house_trees = createTileMap({
    mapKey: "house-trees",
    tileKey: "house-trees-tiles"
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

  const createAnim = (key, frames) => {
    this.anims.create({
      key,
      frames: this.anims.generateFrameNumbers('human', { frames }),
      frameRate: 8,
      repeat: 0
    })
  };

  createAnim("left", [5,4,3,4]);
  createAnim("right", [6,7,8,7]);
  createAnim("up", [9,10,11,10]);
  createAnim("down", [0,1,2,1]);

  this.input.keyboard.on('keydown', () => {
    //ACTION
    if(event.code === "Space") {
      if(this.speaking) {
        this.speaking.destroy();
        this.content.destroy();
        this.hint.destroy();
        this.speaking = false;
      } else {
        if(this.physics.collide(this.bottle, this.player) && [9,10,11].includes(this.player.frame.name)) {
          this.bottle.destroy();
          this.game.summary.hasBottle = true;
          createSpeechBubble(this.player.x, this.player.y, 'You took the bottle', this);
          this.game.score += 20;
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

        if(this.physics.collide(this.car, this.player)) {
          goToOffice(this, 20);
          this.game.summary.hasTakenCar = true;
        }

        if(this.physics.collide(this.velo, this.player)) {
          goToOffice(this, 60);
          this.game.summary.hasTakenBike = true;
        }
      }
    }
  });
}
