export default function () {
  this.game.scene.remove("UIScene");

  const ewbImage = this.add.image(this.game.scale.width - 100, 50, "ewb-logo");
  ewbImage.setScale(0.25);

  const overviewTitle = this.add.text(this.game.scale.width / 2, 20, "Overview", {font: "30px Arial", fill: "#FFFFFF"});
  overviewTitle.setOrigin(0.5);

  const points = this.add.text(this.game.scale.width / 2, 90, this.game.score, {font: "80px Arial", fill: "#FFFFFF"});
  points.setOrigin(0.5);

  const pointsLabel = this.add.text(this.game.scale.width / 2, 140, "Points", {font: "30px Arial", fill: "#FFFFFF"});
  pointsLabel.setOrigin(0.5);

  let descriptionText = "There is still a lot of room for improvements, but if you hang tight you will definitely make the way to being an energy ninja!";
  if (this.game.score >= 100) {
    descriptionText = "You are currently doing a lot of things right, although there are some things where you should pay further notice to!";
  }
  if (this.game.score >= 200) {
    descriptionText = "You are almost perfectly mastering energy from an environmental point of view! You know what your actions cause.\n Although, there are some smaller things where you could still optimise.";
  }
  if (this.game.score >= 300) {
    descriptionText = "You are an energy ninja! You are perfectly mastering your environmental energy aspects. Keep it on!"
  }
  const descriptionLabel = this.add.text(this.game.scale.width / 2, 180, descriptionText, {font: "20px Arial", fill: "#FFFFFF", align: "center"});
  descriptionLabel.setOrigin(0.5);

  const goodThings = [];
  const badThings = [];

  if (this.game.summary.wentByFoot) {
    goodThings.push("You went by foot to work, which is ecologically one of the best ways. Sadly, you arrived too late to work since \nthe walk also takes longer! Maybe consider the bicycle?")
  }

  if (this.game.summary.hasTakenBike) {
    goodThings.push("You went by bicycle, which is a great experience in combining sports and commuting. In most cases, it's also fun!")
  }

  if (this.game.summary.hasFilledWater) {
    goodThings.push("You brought your own bottle and filled it with water! This is good since you don't produce any waste like plastic \nor alu for drink containers.")
  }

  if (!this.game.summary.hasTurnedOffLight) {
    badThings.push("You forgot to turn off the light at home before you left for work. This energy consumption was unnecessary!")
  }

  if (this.game.summary.menuChoice === 'Digit2') {
    badThings.push("You ate food that had to travel a very long way, which was not especially necessary. Maybe you should give more local \nfood a try?")
  }

  if (this.game.summary.menuChoice === 'Digit3') {
    goodThings.push("We hope that your meal was delicious! It left a very small footprint, since most of it was very local and seasonal.")
  }

  if (goodThings.length > 0) {
    const goodThings1 = this.add.text(this.game.scale.width / 2, 230, goodThings[0], {font: "16px Arial", fill: "green", align: "center"});
    goodThings1.setOrigin(0.5);
  }

  if (goodThings.length > 1) {
    const goodThings2 = this.add.text(this.game.scale.width / 2, 280, goodThings[1], {font: "16px Arial", fill: "green", align: "center"});
    goodThings2.setOrigin(0.5);
  }

  if (badThings.length > 0) {
    const badThings1 = this.add.text(this.game.scale.width / 2, 330, badThings[0], {font: "16px Arial", fill: "red", align: "center"});
    badThings1.setOrigin(0.5);
  }

  if (badThings.length > 1) {
    const badThings2 = this.add.text(this.game.scale.width / 2, 380, badThings[1], {font: "16px Arial", fill: "red", align: "center"});
    badThings2.setOrigin(0.5);
  }

  const otherInfoText = "Thank you for playing!\nWe hope that you can also take some things you learned here to the real life and act more ecological!\nYou may also be interested in the \"Ökostrom\" offering of the EWB!\nPlease check out the EWB Website: https://www.ewb.ch/privatkunden/angebot/strom-beziehen/ewb-oeko-strom/detail";
  const finishInfo = this.add.text(this.game.scale.width / 2, 500, otherInfoText, {font: "20px Arial", fill: "#FFFFFF", align: "center"});
  finishInfo.setOrigin(0.5);
}