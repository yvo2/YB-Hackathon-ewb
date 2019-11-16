import news from '../assets/sprites/news.png';
import good from '../assets/good.png';
import bad from '../assets/bad.png';


export default function() {
  this.load.image("good", good);
  this.load.image("bad", bad);
  
  this.load.spritesheet('news', news, {
    frameWidth: 300,
    frameHeight: 200,
    startFrame: 0,
    endFrame: 2
  });
}