import office from './office';

export default function goToOffice(game, points) {
    if(!game.switchSceneDone) {
        game.game.score += points;
        if(!game.lightOn) {
            game.game.score += 20;
        } 

        game.switchSceneDone = true;
        game.scene.add('office', office, true);
        game.scene.remove('house')
    } 
}