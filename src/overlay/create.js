export default function() {
  const music = this.sound.add('music');
  music.play({
    volume: 0.25,
    loop: true
  });
}