import office from './office';

export default function goToOffice(game) {
    if(!game.switchSceneDone) {
        game.switchSceneDone = true;
        game.scene.add('office', office, true);
        game.scene.remove('house')
    } 
}