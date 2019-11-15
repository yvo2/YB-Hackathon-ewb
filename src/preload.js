import cityTestMap from './assets/maps/test-city1.csv';
import rogueLikeCity from './assets/tilesets/roguelikeCity_magenta.png'
import human from './assets/sprites/human/SMB_Base_M_Tone08.png'


export default function() {
  this.load.image("city-tiles", rogueLikeCity);
  this.load.tilemapCSV("city-map", cityTestMap);
  this.load.spritesheet('human', human, {
    frameWidth: 55,
    frameHeight: 55,
    startFrame: 0,
    endFrame: 12
  });
}