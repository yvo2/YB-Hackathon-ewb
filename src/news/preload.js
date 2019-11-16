import news from '../assets/sprites/news.png';

export default function() {
  this.load.spritesheet('news', news, {
    frameWidth: 150,
    frameHeight: 100,
    startFrame: 0,
    endFrame: 2
  });
}