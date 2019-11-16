export default function() {
  const music = this.sound.add('music');
  
  this.pointB = this.add.image(100, 500, "pointB")
  this.questB = this.add.image(130, 50, "questB")
  this.scoreView = this.add.text(10, 480, "0 Points", {font: "35px Arial", fill: "#FFFFFF"})
  this.objectiveView = this.add.text(30, 33, "None", {font: "30px Arial", fill: "#FFFFFF"})
  this.scene.bringToTop('UIScene');

  music.play({
    volume: 0.25,
    loop: true
  });
}