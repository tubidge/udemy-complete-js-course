/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Score keeping
var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;


// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';



document.querySelector('.btn-roll').addEventListener('click', function () {
    console.log('Button was pressed!');

    // 1. Generate random number.
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log('Dice roll: ' + dice);

    // 2. Display result.
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3. Update round score if roll != 1.
    if (dice === 1) {
        roundScore = 0;
    } else {
        roundScore += dice;
    }
});