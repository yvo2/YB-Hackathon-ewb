import music_mp3 from "../assets/music/bg_music.mp3";
import music_ogg from "../assets/music/bg_music.ogg";

export default function() {
  this.load.audio('music', [music_mp3, music_ogg]);
}