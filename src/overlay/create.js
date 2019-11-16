export default function() {
  const music = this.sound.add('music');
  
  this.bell = this.add.image(600, 600, "bell");
  this.scoreView = this.add.text(10, 500, "0 Points", {font: "48px Arial", fill: "#FFFFFF"})
  this.scene.bringToTop('UIScene');

  music.play({
    volume: 0.25,
    loop: true
  });
}