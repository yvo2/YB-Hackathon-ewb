//from https://phaser.io/examples/v3/view/game-objects/text/static/speech-bubble
export default function createSpeechBubble (x, y, quote, game)
{
  let bubbleWidth = 300;
  let bubbleHeight = 100;
  let bubblePadding = 0;
  let arrowHeight = bubbleHeight / 4;

  let bubble = game.add.graphics({ x: x -150, y: y + 100});

  //  Bubble shadow
  bubble.fillStyle(0x222222, 0.5);
  bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 7);

  //  Bubble color
  bubble.fillStyle(0x555555, 1);

  //  Bubble outline line style
  bubble.lineStyle(4, 0x222222, 1);

  //  Bubble shape and outline
  bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 7);
  bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 7);

  game.content = game.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 15, color: '#FFFFFF', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });
  game.hint = game.add.text(0, 20, "[space]", { fontFamily: 'Arial', fontSize: 10, color: '#FFFFFF', align: 'right', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

  let b = game.content.getBounds();

  game.content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
  game.hint.setPosition(bubble.x + bubbleWidth - 40, bubble.y + (bubbleHeight) - 20);
 
  game.speaking = bubble;
}