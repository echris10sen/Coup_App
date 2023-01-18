import { deck } from "../scripts/deckClass.js";
import { card } from "../scripts/cardClass.js";
import { player } from "../scripts/playerClass.js";

export class gameRunner {
  // variables
  initialDeck;
  numPlayers;

  // constructor
  gameRunner(params){
    this.initialDeck = new deck();
    this.initialDeck.deck();
    this.numPlayers = [];
  }
  
  //methods
  showCards(players) {
     // document.getElementsByClassName('cards')[0].innerHTML= "Welcome to Coup" + "<br>" + "your cards are " + `${card1.name} and ${card2.name}`;
    document.getElementsByClassName('cards')[0].innerHTML = "Welcome to Coup" + "<br>" + "your cards are " + `${players[0].getcard1().name} and ${players[0].getcard2().name}`;
    
    document.getElementsByClassName('opponentsCards')[0].innerHTML= `Your Opponents cards were ${players[1].getcard1().name} and ${players[1].getcard2().name}`;
  }

  reset() {
    
  }

  runGame() {
    // Setup
    let gameDeck = new deck();
    gameDeck.deck();
    gameDeck.shuffle();
    console.log(gameDeck);
    let players = this.numPlayers;

    // Player Cards
    let card1 = new card();
    card1.card(gameDeck[0]);

    let card2 = new card();
    card2.card(gameDeck[3]);

    let player1 = new player();
    player1.player(card1, card2);
    
   

    // Opponent Cards
    let card3 = new card();
    card3.card(gameDeck[2]);
    
    let card4 = new card();
    card4.card(gameDeck[4]);

    let player2 = new player();
    player2.player(card2, card4);

    players.push(player1);
    players.push(player2);
    
    this.showCards(players);

    for (let index = players.length; index > 0; index--) {
        players.pop();      
    }
  }

  //get test
  getinitialDeck() {
    return this.initialDeck;
  }
}