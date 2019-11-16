export default function() {
  const music = this.sound.add('music');
  music.play({
    volume: 0.25,
    loop: true
  });

  
  this.bell = this.physics.add.sprite(600, 600, "bell");
}