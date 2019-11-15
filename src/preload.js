import rogueLikeCity from './assets/tilesets/roguelikeCity_magenta.png';
import cityTestMap from './assets/maps/test-city1.csv';

export default function() {
  this.load.image("city-tiles", rogueLikeCity);
  this.load.tilemapCSV("city-map", cityTestMap);
}