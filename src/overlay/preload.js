import music_mp3 from "../assets/music/bg_music.mp3";
import music_ogg from "../assets/music/bg_music.ogg";

import bell from '../assets/sprites/car.png';
import pointB from '../assets/pointBackground.png';
import questB from '../assets/questBackground.png';

export default function() {
  this.load.image("questB", questB);
  this.load.image("pointB", pointB);
  this.load.audio('music', [music_mp3, music_ogg]);
  this.load.spritesheet('bell', bell, {
    frameWidth: 30,
    frameHeight: 34,
    startFrame: 0,
    endFrame: 2
  });
  
}



