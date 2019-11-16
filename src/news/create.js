import createSpeechBubble from '../createSpeechBubble';
import office from '../office';

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
  if(this.game.summary.score > 100) {
    newsText = "GUT:\nHeute Wurden im Däu-Hölzli 26 Löwen-Babys geboren\nHeute gab es seit 10 Jahren wieder den ersten Schneefall in der Schweiz, und zwar auf dem Matterhorn."
    this.physics.add.image(100, 100, "good")
  } else {
    newsText = "Heute sind Amurleoparde offiziell ausgestorben. Sie sind an der extremen Hitze von bis zu 70 Grad von der Erde verschwunden.\nIn der Wüste Dascht e Lut in Iran ist Heute eine neue Rekordtemparatur von 115 Grad gemessen worden."
    this.physics.add.image(100, 100, "bad")
  }

  createSpeechBubble(575, 300, newsText, this)

  this.input.keyboard.on('keydown', () => {
    //ACTION
    if(event.code === "Space") {
      game.scene.add('office', office, true)
      game.scene.remove('news')
    }
  });
}
