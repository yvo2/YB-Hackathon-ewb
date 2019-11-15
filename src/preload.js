import cityTestMap from './assets/maps/House.json.map';
import rogueLikeCity from './assets/tilesets/roguelikeCity_magenta.png'
import char from './assets/sprites/metalslug_mummy37x45.png'


/* const loadMap = (game, name, map, tilesets) => {
  console.log(game.load)
  console.log("Loading map: " + name);
  // game.load.tilemapTiledJSON(name, map);
  game.maps[name] = {
    tileSets: tilesets
  };

  for (let i = 0; i < tilesets.length; i++) {
    const tsName = name + "-ts-" + i;
    console.log("Loading tileset: " + tsName)
    game.load.image(tsName, tilesets[i]);
  };
}; */


export default function() {
  this.maps = {};
  this.load.image("house1", rogueLikeCity)
  this.load.tilemapTiledJSON("level1", cityTestMap);

  // this.load.image("mario-tiles", mario_tiles);
  this.load.spritesheet('mummy', char, {
    frameWidth: 37,
    frameHeight: 45,
    startFrame: 0,
    endFrame: 18
  });
}