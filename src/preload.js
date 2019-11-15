import cityTestMap from './assets/maps/test-city1.csv';
import rogueLikeCity from './assets/tilesets/roguelikeCity_magenta.png';

// House - Level 1
import house_city from './assets/maps/house/House_city.csv';
import house_collision from './assets/maps/house/House_collision.csv';
import house_house1 from './assets/maps/house/House_house1.csv';
import house_house2 from './assets/maps/house/House_house2.csv';
import house_house3 from './assets/maps/house/House_house3.csv';

import house1_tiles from './assets/tilesets/house1.png';
import house2_tiles from './assets/tilesets/house2.png';
import house3_tiles from './assets/tilesets/house3.png';

import human from './assets/sprites/human/SMB_Base_M_Tone08.png';
import bottle from './assets/sprites/water.png';


export default function() {
  this.load.image("city-tiles", rogueLikeCity);
  this.load.tilemapCSV("city-map", cityTestMap);

  this.load.tilemapCSV("house-city", house_city);
  this.load.tilemapCSV("house-collision", house_collision);
  this.load.tilemapCSV("house-house1", house_house1);
  this.load.tilemapCSV("house-house2", house_house2);
  this.load.tilemapCSV("house-house3", house_house3);

  this.load.image("house1-tiles", house1_tiles);
  this.load.image("house2-tiles", house2_tiles);
  this.load.image("house3-tiles", house3_tiles);

  this.load.spritesheet('bottle', bottle, {
    frameWidth: 16,
    frameHeight: 32,
    startFrame: 0,
    endFrame: 1
  });

  this.load.spritesheet('human', human, {
    frameWidth: 55,
    frameHeight: 55,
    startFrame: 0,
    endFrame: 12
  });
}