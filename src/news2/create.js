import createSpeechBubble from '../createSpeechBubble';
import summary from '../summary';

export default function() {
  this.news = this.physics.add.sprite(575, 300, "news");
  this.news.setScale(3)  
  this.game.objective = ""

  const createAnim = (sprite, key, frames) => {
    this.anims.create({
      key,
      frames: this.anims.generateFrameNumbers(sprite, { frames }),
      frameRate: 4,
      repeat: -1
    });
  };

  createAnim("news", "anime", [1,1,0,1,0,0]);

  this.news.anims.play('anime');
  let newsText;
  if(this.game.score > 100) {
    newsText = "Today 26 lion babies were born in Däu-Hölzli"
    this.physics.add.image(367, 162, "good")
  } else {
    newsText = "Today a new record temperature of 115 degrees was measured in the Dascht e Lut desert in Iran."
    this.physics.add.image(367, 162, "bad")
  }

  createSpeechBubble(575, 300, newsText, this)

  this.input.keyboard.on('keydown', () => {
    //ACTION
    if(event.code === "Space") {
      this.scene.add('summary', summary, true)
      this.scene.remove('news')
    }
  });
}
