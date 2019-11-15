import rogueLikeCity from './assets/tilesets/roguelikeCity_magenta.png';
import cityTestMap from './assets/maps/test-city1.csv';
import rogueLikeCity from './assets/tilesets/roguelikeCity_magenta.png'
import mario_tiles from './assets/tilesets/mario_tiles.png'
import char from './assets/sprites/metalslug_mummy37x45.png'


export default function() {
  this.load.image("city-tiles", rogueLikeCity);
  this.load.tilemapCSV("city-map", cityTestMap);
  this.load.image("mario-tiles", mario_tiles);
  this.load.spritesheet('mummy', char, 37, 45, 18);
}