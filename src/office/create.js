import createSpeechBubble from '../createSpeechBubble';
import news2 from '../news2';

let isChoosingMenu = false;

export default function() {
  const createTileMap = ({ mapKey, tileKey, tileWidth, tileHeight, tileMargin, tileSpacing, mapTileWidth, mapTileHeight, x, y }) => {
    const map = this.make.tilemap({
      key: mapKey,
      tileWidth: mapTileWidth || 16,
      tileHeight: mapTileHeight || 16
    });
    const tileset = map.addTilesetImage(tileKey,tileKey, tileWidth || 16, tileHeight || 16, tileMargin || 0, tileSpacing || 0);
    const layer = map.createStaticLayer(0, tileset, x || 0, y || 0);

    return { map, tileset, layer };
  };

  // State
  this.speaking = false;
  this.game.objective = "Order a Menu"

  // Food giver is behind everything
  this.foodgiver = this.physics.add.image(1250, 350, 'food-giver');

  // Level 2 (office)
  const office_house4 = createTileMap({
    mapKey: "office-house4",
    tileKey: "house4-tiles",
    tileWidth: 32,
    tileHeight: 32,
    mapTileWidth: 16,
    mapTileHeight: 16,
    y: -16
  });
  const office_house3 = createTileMap({
    mapKey: "office-house3",
    tileKey: "house3-tiles"
  });
  const office_house2 = createTileMap({
    mapKey: "office-house2",
    tileKey: "house2-tiles",
    tileWidth: 32,
    tileHeight: 32
  });
  const office_house2_layer2 = createTileMap({
    mapKey: "office-house2-layer2",
    tileKey: "house2-tiles",
    tileWidth: 32,
    tileHeight: 32,
    x: -16,
    y: -16
  });
  const office_office4 = createTileMap({
    mapKey: "office-office4",
    tileKey: "office-tiles"
  });
  this.chef = this.add.sprite(930, 310, "chef");
  const office_office = createTileMap({
    mapKey: "office-office",
    tileKey: "office-tiles"
  });
  const office_office2 = createTileMap({
    mapKey: "office-office2",
    tileKey: "office-tiles"
  });
  const office_office3 = createTileMap({
    mapKey: "office-office3",
    tileKey: "office-tiles"
  });

  this.dispenser = this.physics.add.sprite(1055, 480, "dispenser");

  // Player comes here to fit in
  this.player = this.physics.add.sprite(670, 385, "human");

  const office_house3_above = createTileMap({
    mapKey: "office-house3-above",
    tileKey: "house3-tiles"
  });

  this.player.setFrame(1);

  this.cursors = this.input.keyboard.createCursorKeys();

  // Collisions
  const map_office_collision = this.make.tilemap({
    key: 'office-collision',
    tileWidth: 16,
    tileHeight: 16
  });
  const map_office_collision_layer = map_office_collision.createStaticLayer(0, "", 0, 0);
  map_office_collision.setCollisionBetween(0, 100);
  this.physics.add.collider(this.player, map_office_collision_layer);

  /* const debugGraphics = this.add.graphics().setAlpha(0.75);
  map_office_collision.renderDebug(debugGraphics, {
    tileColor: null, // Color of non-colliding tiles
    collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  }); */

  this.cursors = this.input.keyboard.createCursorKeys();

  this.cameras.main.startFollow(this.player, false, 0.05, 0.05);

  const createAnim = (sprite, key, frames) => {
    this.anims.create({
      key,
      frames: this.anims.generateFrameNumbers(sprite, { frames }),
      frameRate: 8,
      repeat: 0
    });
  };

  createAnim("human", "left", [5,4,3,4]);
  createAnim("human", "right", [6,7,8,7]);
  createAnim("human", "up", [9,10,11,10]);
  createAnim("human", "down", [0,1,2,1]);

  createAnim("angry-man", "up-angry", [9,10,11,10]);
  createAnim("angry-man", "down-angry", [0,1,2,1]);

  createAnim("chef", "chef-left", [5,4,3,4]);
  createAnim("chef", "chef-right", [6,7,8,7]);
  createAnim("chef", "chef-front", [0,1,2,1]);

  
  this.scene.bringToTop('UIScene');

  this.input.keyboard.on('keydown', () => {
    //ACTION
    if(event.code === "Space") {
      if(this.speaking) {
        this.speaking.destroy();
        this.content.destroy();
        this.hint.destroy();
        this.speaking = false;
      } else {
        if(this.physics.collide(this.dispenser, this.player) && [9,10,11].includes(this.player.frame.name)) {
          if(this.game.summary.hasBottle) {
            if(this.refill) {
              createSpeechBubble(this.player.x, this.player.y, 'Your bottle is already filled', this);
            } else {
              createSpeechBubble(this.player.x, this.player.y, 'You refilled your bottle', this);
              this.game.score += 40;
              this.refill = true;
              this.game.summary.hasFilledWater = true;
            }
          } else {
            createSpeechBubble(this.player.x, this.player.y, 'You don\'t have a bottle to refill', this);
          }
        }

        if(this.physics.collide(this.foodgiver, this.player) && [9,10,11].includes(this.player.frame.name) && !this.game.summary.hasPickedMenu) {
          isChoosingMenu = true;
          createSpeechBubble(this.player.x, this.player.y, 'What would you like to eat? Press: \n[1] to get Zürigschnätzlets (CH)\n[2] Rumpsteak (ARG) with Pommes or \n[3] vegetable casserolle (Bio, BE)', this);
        }
      }
    }

    if ((event.code === "Digit1" || event.code === "Digit2" || event.code === "Digit3") && isChoosingMenu) {
      this.speaking.destroy();
      this.content.destroy();
      this.hint.destroy();
      this.speaking = false;
      createSpeechBubble(this.player.x, this.player.y, 'Delicious choice! Enjoy your meal!', this);

      this.game.summary.hasPickedMenu = true;
      this.game.summary.menuChoice = event.code;

      isChoosingMenu = false;

      if (event.code === "Digit1") {
        this.game.score += 60;
      }

      if (event.code === "Digit2") {
        this.game.score += 20;
      }

      if (event.code === "Digit3") {
        this.game.score += 100;
      }

      this.scene.add('news2', news2, true);
      this.scene.remove('office');
    }
  });

  // NPC
  this.angryman = this.add.sprite(1525, 385, "angry-man");
}
