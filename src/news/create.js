import createSpeechBubble from '../createSpeechBubble';
import office from '../office';
import overlay from '../overlay';

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
    newsText = "Today there was the first snowfall in Switzerland since 10 years, on the Matterhorn."
    this.physics.add.image(367, 162, "good")
  } else {
    newsText = "Today amurleopards are officially extinct. They have disappeared from the earth in the extreme heat of up to 70 degrees."
    this.physics.add.image(367, 162, "bad")
  }

  createSpeechBubble(575, 300, newsText, this)

  this.input.keyboard.on('keydown', () => {
    //ACTION
    if(event.code === "Space") {
      this.scene.add('office', office, true)
      this.scene.remove('news')

      Window.game.scene.scenes[0].pointB.setVisible(true)
      Window.game.scene.scenes[0].questB.setVisible(true)
      Window.game.scene.scenes[0].objectiveView.setVisible(true)
      Window.game.scene.scenes[0].scoreView.setVisible(true)
    }
  });
}
