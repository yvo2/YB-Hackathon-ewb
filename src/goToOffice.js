import office from './office';

export default function goToOffice(game, points) {
    if(!game.switchSceneDone) {
        console.log(game.score)
        game.score += points;
        if(!game.lightOn) {
            game.game.score += 20;
        } 

        game.switchSceneDone = true;
        game.scene.add('office', office, true);
        game.scene.remove('house')
    } 
}