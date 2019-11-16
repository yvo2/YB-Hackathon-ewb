// Office - Level 2
import office_collision from '../assets/maps/office/office_collisions.csv';
import office_house2 from '../assets/maps/office/office_house2.csv';
import office_house2_layer2 from '../assets/maps/office/office_house2Layer2.csv';
import office_house3 from '../assets/maps/office/office_house3.csv';
import office_house3_above from '../assets/maps/office/office_house3Above.csv';
import office_house4 from '../assets/maps/office/office_house4.csv';
import office_office from '../assets/maps/office/office_office.csv';
import office_office2 from '../assets/maps/office/office_officeLayer2.csv';
import office_office3 from '../assets/maps/office/office_officeLayer3.csv';
import office_office4 from '../assets/maps/office/office_officeLayer4.csv';

import house2_tiles from '../assets/tilesets/house2.png';
import house3_tiles from '../assets/tilesets/house3.png';
import house4_tiles from '../assets/tilesets/house4.png';
import office_tiles from '../assets/tilesets/office.png';

import human from '../assets/sprites/Human/SMB_Base_M_Tone08_cut.png';
import food_giver from '../assets/sprites/Human/food_giver.png';
import angry_man from '../assets/sprites/Human/angry_man.png';
import chef from '../assets/sprites/Human/chef.png';

import dispenser from '../assets/sprites/water_dispenser.png';

export default function() {
  this.load.tilemapCSV("office-collision", office_collision);
  this.load.tilemapCSV("office-house2", office_house2);
  this.load.tilemapCSV("office-house2-layer2", office_house2_layer2);
  this.load.tilemapCSV("office-house3", office_house3);
  this.load.tilemapCSV("office-house3-above", office_house3_above);
  this.load.tilemapCSV("office-house4", office_house4);
  this.load.tilemapCSV("office-office", office_office);
  this.load.tilemapCSV("office-office2", office_office2);
  this.load.tilemapCSV("office-office3", office_office3);
  this.load.tilemapCSV("office-office4", office_office4);

  this.load.image("house2-tiles", house2_tiles);
  this.load.image("house3-tiles", house3_tiles);
  this.load.image("house4-tiles", house4_tiles);
  this.load.image("office-tiles", office_tiles);

  this.load.spritesheet('human', human, {
    frameWidth: 25,
    frameHeight: 55,
    startFrame: 0,
    endFrame: 12
  });

  this.load.spritesheet('angry-man', angry_man, {
    frameWidth: 25,
    frameHeight: 55,
    startFrame: 0,
    endFrame: 12
  });

  this.load.spritesheet('chef', chef, {
    frameWidth: 25,
    frameHeight: 55,
    startFrame: 0,
    endFrame: 12
  });
  
  this.load.spritesheet('dispenser', dispenser, {
    frameWidth: 19,
    frameHeight: 31,
    startFrame: 0,
    endFrame: 1
  });

  this.load.image("food-giver", food_giver);
}