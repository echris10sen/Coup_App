import  player from "../Offline/playerClass.js";
import { deck } from "../Offline/deckClass.js";
import { card } from "../Offline/cardClass.js";


let initialDeck = new deck();
initialDeck.deck();

function clearHomeButtons() {
  // Clear Home Buttons
  document.getElementsByClassName('instructions')[0].style.display = 'none';
  document.getElementsByClassName('start')[0].style.display = 'none';
}

function addReturnButton() {
    // Add a Return Button
    var returnElement = document.getElementsByClassName('home')[0];
    var newButton = document.createElement('input');
    newButton.type = "button";
    newButton.id = 'return'
    newButton.value = 'Return';
    newButton.addEventListener('click', function(event){
      document.getElementsByClassName('instructions')[0].style.display = 'inline';
      document.getElementsByClassName('start')[0].style.display = 'inline';
      document.getElementsByClassName('coup')[0].innerHTML = "Would you like to start?";
      document.getElementsByClassName('cards')[0].innerHTML = "";
      document.getElementsByClassName('opponentsCards')[0].innerHTML = "";
      returnElement.removeChild(newButton);
    })
    returnElement.appendChild(newButton);
}

function addRevealButton(card2, card4) {
    // Add a Reveal Button
    let revealElement = document.getElementsByClassName('home')[0];
    let newButton = document.createElement('input');
    newButton.type= "button";
    newButton.id = 'reveal'
    newButton.value = 'Reveal';
    newButton.addEventListener('click', function(event){
      document.getElementsByClassName('opponentsCards')[0].innerHTML= `Your Opponents cards were ${card2.name} and ${card4.name}`;
      revealElement.removeChild(newButton);
   })
   revealElement.appendChild(newButton);
}

function runGame() {
  console.log("hello I work");
  clearHomeButtons();
  addReturnButton();

  let gameDeck = initialDeck.shuffle();
  
  // Player Cards
  let card1 = new card();
  card1.card(gameDeck[0]);
  
  let card2 = new card();
  card2.card(gameDeck[3]);
  document.getElementsByClassName('cards')[0].innerHTML= "Welcome to Coup" + "<br>" + "your cards are " + `${card1.name} and ${card2.name}`;

  // Opponent Cards
  let card3 = new card();
  card3.card(gameDeck[2]);
  
  let card4 = new card();
  card4.card(gameDeck[4]);
  addRevealButton(card2, card4);
}


function addListeners() {
//   document.getElementsByClassName('instructions')[0].addEventListener('click', setInstructions);
//   document.getElementsByClassName('start')[0].addEventListener('click', runGame);
}
addListeners();