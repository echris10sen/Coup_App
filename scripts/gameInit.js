import { gameRunner } from "../scripts/gameRunner.js";
function addListeners() {
    console.log("heyo");
    let game = new gameRunner();
    game.gameRunner();
    
    document.getElementsByClassName("startButton")[0].addEventListener('click', () => game.runGame());
};
addListeners();