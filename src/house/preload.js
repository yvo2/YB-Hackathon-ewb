import cityTestMap from '../assets/maps/test-city1.csv';
import rogueLikeCity from '../assets/tilesets/roguelikeCity_magenta.png';

// House - Level 1
import house_city from '../assets/maps/house/House_city.csv';
import house_collision from '../assets/maps/house/House_collision.csv';
import house_house1 from '../assets/maps/house/House_house1.csv';
import house_house2 from '../assets/maps/house/House_house2.csv';
import house_house2_above from '../assets/maps/house/House_house2Above.csv';
import house_house3 from '../assets/maps/house/House_house3.csv';
import house_house3_above from '../assets/maps/house/House_house3Above.csv';
import house_trees from '../assets/maps/house/House_trees.csv';
import house_trees_layer2 from '../assets/maps/house/House_treesLayer2.csv';
import house_trees_layer3 from '../assets/maps/house/House_treesLayer3.csv';

import house1_tiles from '../assets/tilesets/house1.png';
import house2_tiles from '../assets/tilesets/house2.png';
import house3_tiles from '../assets/tilesets/house3.png';
import house_trees_tiles from '../assets/tilesets/trees.png';

import human from '../assets/sprites/Human/SMB_Base_M_Tone08_cut.png';
import bottle from '../assets/sprites/water.png';
import light from '../assets/sprites/light.png';
import car from '../assets/sprites/car.png';
import velo from '../assets/sprites/velo.png';

export default function() {
  this.load.image("city-tiles", rogueLikeCity);
  this.load.tilemapCSV("city-map", cityTestMap);

  this.load.tilemapCSV("house-city", house_city);
  this.load.tilemapCSV("house-collision", house_collision);
  this.load.tilemapCSV("house-house1", house_house1);
  this.load.tilemapCSV("house-house2", house_house2);
  this.load.tilemapCSV("house-house3", house_house3);
  this.load.tilemapCSV("house-house2-above", house_house2_above);
  this.load.tilemapCSV("house-house3-above", house_house3_above);
  this.load.tilemapCSV("house-trees", house_trees);
  this.load.tilemapCSV("house-trees2", house_trees_layer2);
  this.load.tilemapCSV("house-trees3", house_trees_layer3);

  this.load.image("house1-tiles", house1_tiles);
  this.load.image("house2-tiles", house2_tiles);
  this.load.image("house3-tiles", house3_tiles);
  this.load.image("house-trees-tiles", house_trees_tiles);

  this.load.spritesheet('bottle', bottle, {
    frameWidth: 16,
    frameHeight: 32,
    startFrame: 0,
    endFrame: 1
  });

  this.load.spritesheet('light', light, {
    frameWidth: 32,
    frameHeight: 31,
    startFrame: 0,
    endFrame: 2
  });

  this.load.spritesheet('human', human, {
    frameWidth: 25,
    frameHeight: 55,
    startFrame: 0,
    endFrame: 12
  });

  this.load.spritesheet('car', car, {
    frameWidth: 114,
    frameHeight: 247,
    startFrame: 0,
    endFrame: 1
  });

  this.load.spritesheet('velo', velo, {
    frameWidth: 55,
    frameHeight: 30,
    startFrame: 0,
    endFrame: 1
  });
}