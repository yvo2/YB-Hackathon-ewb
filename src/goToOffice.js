import news from './news';

export default function goToOffice(game, points, index) {
    if(!game.switchSceneDone) {
        game.game.score += points;
        if(!game.lightOn) {
            game.game.summary.hasTurnedOffLight = true;
            game.game.score += 20;
        } 

        game.switchSceneDone = true;
        game.scene.add('news', news, true)
        game.scene.remove('house')

        Window.game.scene.scenes[index].pointB.setVisible(false)
        Window.game.scene.scenes[index].questB.setVisible(false)
        Window.game.scene.scenes[index].objectiveView.setVisible(false)
        Window.game.scene.scenes[index].scoreView.setVisible(false)
    } 
}