export default function() {
  this.news = this.physics.add.sprite(450, 300, "news");
  this.news.setScale(6)  

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

  this.input.keyboard.on('keydown', () => {
    //ACTION
    if(event.code === "Space") {

    }
  });
}
